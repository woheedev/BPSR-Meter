import { fork, ChildProcess } from "child_process";
import net from "net";
import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import { CONSTANTS } from "../constants";
import { Logger } from "../logger";

const execAsync = promisify(exec);

export class ServerManager {
    #serverProcess: ChildProcess | null = null;
    #logger: Logger;
    serverPort: number = CONSTANTS.PORTS.START;

    constructor(logger: Logger) {
        this.#logger = logger;
    }

    #checkPort(port: number): Promise<boolean> {
        return new Promise((resolve) => {
            const server = net.createServer();
            server.once("error", () => resolve(false));
            server.once("listening", () => {
                server.close(() => resolve(true));
            });
            server.listen(port);
        });
    }

    async findAvailablePort(
        startPort: number = CONSTANTS.PORTS.START,
        maxPort: number = CONSTANTS.PORTS.END,
    ): Promise<number> {
        for (let port = startPort; port <= maxPort; port++) {
            if (await this.#checkPort(port)) {
                this.#logger.log(`Port ${port} is available`);
                return port;
            }
            this.#logger.log(`Port ${port} is in use, trying next...`);
        }
        throw new Error("No available ports found");
    }

    async killProcessUsingPort(port: number): Promise<void> {
        try {
            const { stdout } = await execAsync(
                `netstat -ano | findstr :${port}`,
            );
            if (!stdout) return;

            const lines = stdout
                .split("\n")
                .filter((line) => line.includes("LISTENING"));
            const pid = lines[0]?.trim().split(/\s+/).pop();

            if (pid) {
                await execAsync(`taskkill /PID ${pid} /F`);
                this.#logger.log(`Process ${pid} killed successfully`);
            }
        } catch (error) {
            // Process might not exist, which is fine
        }
    }

    async startServer(port: number, userDataPath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const serverPath = path.join(__dirname, "../../out/main/server.js");
            this.#logger.log(
                `Launching server on port ${port} from: ${serverPath}`,
            );

            const env = {
                ...process.env,
                resourcesPath: process.resourcesPath,
                USER_DATA_PATH: userDataPath,
            };

            this.#serverProcess = fork(serverPath, [port.toString()], {
                stdio: ["pipe", "pipe", "pipe", "ipc"],
                env: env,
            });

            const timeout = setTimeout(() => {
                reject(
                    new Error(
                        `Server did not respond in time (${CONSTANTS.TIMEOUTS.SERVER_START}ms timeout)`,
                    ),
                );
            }, CONSTANTS.TIMEOUTS.SERVER_START);

            this.#serverProcess.stdout?.setEncoding("utf8");
            this.#serverProcess.stderr?.setEncoding("utf8");

            this.#serverProcess.stdout?.on("data", (data: any) => {
                const output =
                    typeof data === "string"
                        ? data.trim()
                        : data.toString().trim();
                this.#logger.log(`${output}`);

                const match = output.match(
                    /Web server started at (http:\/\/localhost:\d+)/,
                );
                if (match) {
                    clearTimeout(timeout);
                    resolve();
                }
            });

            this.#serverProcess.stderr?.on("data", (data: any) => {
                const output =
                    typeof data === "string"
                        ? data.trim()
                        : data.toString().trim();
                this.#logger.log(`SERVER ERROR: ${output}`);
            });

            this.#serverProcess.on("error", reject);
        });
    }

    stopServer(): void {
        if (this.#serverProcess) {
            this.#serverProcess.kill("SIGTERM");
            setTimeout(() => this.#serverProcess?.kill("SIGKILL"), 5000);
            this.#serverProcess = null;
        }
    }
}
