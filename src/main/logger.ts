import fs from "fs";
import { CONSTANTS } from "./constants";

export class Logger {
    #logPath: string;
    #userDataPath: string;

    constructor(logPath: string, userDataPath: string) {
        this.#logPath = logPath;
        this.#userDataPath = userDataPath;
    }

    private rotateLogFile(): void {
        try {
            for (let i = CONSTANTS.LOGGING.MAX_FILES - 1; i > 0; i--) {
                const oldFile = `${this.#logPath}.${i}`;
                const newFile = `${this.#logPath}.${i + 1}`;
                if (fs.existsSync(oldFile)) {
                    if (i === CONSTANTS.LOGGING.MAX_FILES - 1) {
                        fs.unlinkSync(oldFile);
                    } else {
                        fs.renameSync(oldFile, newFile);
                    }
                }
            }

            if (fs.existsSync(this.#logPath)) {
                fs.renameSync(this.#logPath, `${this.#logPath}.1`);
            }
        } catch (e) {
            console.error("Log rotation failed:", e);
        }
    }

    log(msg: string): void {
        try {
            fs.mkdirSync(this.#userDataPath, { recursive: true });

            if (fs.existsSync(this.#logPath)) {
                const stats = fs.statSync(this.#logPath);
                if (stats.size > CONSTANTS.LOGGING.MAX_SIZE) {
                    this.rotateLogFile();
                }
            }

            // eslint-disable-next-line no-control-regex
            const cleanMsg = msg.replace(/\x1b\[[0-9;]*m/g, "");
            fs.appendFileSync(this.#logPath, `${cleanMsg}\n`, {
                encoding: "utf8",
            });
        } catch (e) {
            console.error("Log failed:", e);
        }
        console.log(msg);
    }

    error(msg: string, error?: any): void {
        this.log(`ERROR: ${msg}${error ? ` - ${error}` : ""}`);
    }
}
