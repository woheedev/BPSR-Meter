import React, { useEffect, useState } from "react";
import BossDamageBreakdown from "./BossDamageBreakdown";

interface DamageLog {
    filename: string;
    monsterId: string;
    monsterName: string;
    timestamp: number;
}

interface DamageLogViewerProps {
    onClose: () => void;
    t: (key: string, fallback?: string) => string;
    translateSkill: (skillId: number) => string;
}

export default function DamageLogViewer({
    onClose,
    t,
    translateSkill,
}: DamageLogViewerProps): React.JSX.Element {
    const [logs, setLogs] = useState<DamageLog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedLog, setSelectedLog] = useState<any | null>(null);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("/api/damage-logs/list");
            const data = await response.json();
            if (data.code === 0) {
                setLogs(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch logs:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const viewLog = async (filename: string) => {
        try {
            const response = await fetch(`/api/damage-logs/${filename}`);
            const data = await response.json();
            if (data.code === 0) {
                setSelectedLog(data.data);
            }
        } catch (error) {
            console.error("Failed to load log:", error);
        }
    };

    const deleteLog = async (filename: string) => {
        if (!confirm("Are you sure you want to delete this log?")) return;

        try {
            const response = await fetch(`/api/damage-logs/${filename}`, {
                method: "DELETE",
            });
            if (response.ok) {
                fetchLogs(); // Refresh the list
            }
        } catch (error) {
            console.error("Failed to delete log:", error);
        }
    };

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                }}
                onClick={onClose}
            >
                <div
                    style={{
                        background: "rgba(20, 20, 30, 0.95)",
                        borderRadius: "8px",
                        padding: "24px",
                        maxWidth: "900px",
                        width: "90%",
                        maxHeight: "80vh",
                        overflow: "auto",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <h2
                            style={{
                                margin: 0,
                                fontSize: "24px",
                                color: "#fff",
                            }}
                        >
                            <i
                                className="fa-solid fa-clock-rotate-left"
                                style={{
                                    marginRight: "10px",
                                    color: "#3498db",
                                }}
                            ></i>
                            Damage Breakdown Logs
                        </h2>
                        <button
                            onClick={onClose}
                            style={{
                                background: "rgba(231, 76, 60, 0.2)",
                                border: "1px solid rgba(231, 76, 60, 0.5)",
                                color: "#e74c3c",
                                padding: "8px 16px",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontSize: "14px",
                                fontWeight: 600,
                            }}
                        >
                            <i
                                className="fa-solid fa-times"
                                style={{ marginRight: "6px" }}
                            ></i>
                            Close
                        </button>
                    </div>

                    {isLoading ? (
                        <div
                            style={{
                                textAlign: "center",
                                padding: "40px",
                                color: "rgba(255, 255, 255, 0.6)",
                            }}
                        >
                            <i
                                className="fa-solid fa-spinner fa-spin"
                                style={{
                                    fontSize: "24px",
                                    marginBottom: "12px",
                                }}
                            ></i>
                            <div>Loading logs...</div>
                        </div>
                    ) : logs.length === 0 ? (
                        <div
                            style={{
                                textAlign: "center",
                                padding: "40px",
                                color: "rgba(255, 255, 255, 0.4)",
                            }}
                        >
                            <i
                                className="fa-solid fa-inbox"
                                style={{
                                    fontSize: "48px",
                                    marginBottom: "16px",
                                    opacity: 0.3,
                                }}
                            ></i>
                            <div>No damage logs found</div>
                            <div style={{ fontSize: "12px", marginTop: "8px" }}>
                                Logs are saved when viewing monster damage
                                breakdowns
                            </div>
                        </div>
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            {logs.map((log) => (
                                <div
                                    key={log.filename}
                                    style={{
                                        background: "rgba(255, 255, 255, 0.03)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        borderRadius: "6px",
                                        padding: "12px 16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        transition: "all 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background =
                                            "rgba(255, 255, 255, 0.05)";
                                        e.currentTarget.style.borderColor =
                                            "rgba(52, 152, 219, 0.3)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background =
                                            "rgba(255, 255, 255, 0.03)";
                                        e.currentTarget.style.borderColor =
                                            "rgba(255, 255, 255, 0.08)";
                                    }}
                                >
                                    <div style={{ flex: 1 }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                    color: "#fff",
                                                }}
                                            >
                                                {log.monsterName}
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "12px",
                                                color: "rgba(255, 255, 255, 0.5)",
                                            }}
                                        >
                                            {formatDate(log.timestamp)}
                                        </div>
                                    </div>
                                    <div
                                        style={{ display: "flex", gap: "8px" }}
                                    >
                                        <button
                                            onClick={() =>
                                                viewLog(log.filename)
                                            }
                                            style={{
                                                background:
                                                    "rgba(52, 152, 219, 0.2)",
                                                border: "1px solid rgba(52, 152, 219, 0.5)",
                                                color: "#3498db",
                                                padding: "6px 12px",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: 600,
                                            }}
                                        >
                                            <i
                                                className="fa-solid fa-eye"
                                                style={{ marginRight: "4px" }}
                                            ></i>
                                            View
                                        </button>
                                        <button
                                            onClick={() =>
                                                deleteLog(log.filename)
                                            }
                                            style={{
                                                background:
                                                    "rgba(231, 76, 60, 0.2)",
                                                border: "1px solid rgba(231, 76, 60, 0.5)",
                                                color: "#e74c3c",
                                                padding: "6px 12px",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: 600,
                                            }}
                                        >
                                            <i
                                                className="fa-solid fa-trash"
                                                style={{ marginRight: "4px" }}
                                            ></i>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {selectedLog && selectedLog.breakdown && (
                <BossDamageBreakdown
                    monsterId={selectedLog.monsterId}
                    monsterName={selectedLog.monsterName}
                    onClose={() => setSelectedLog(null)}
                    t={t}
                    translateSkill={translateSkill}
                    preloadedBreakdown={selectedLog.breakdown}
                />
            )}
        </>
    );
}
