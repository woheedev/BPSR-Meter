import React from "react";

interface KeybindInputProps {
    label: string;
    value: string;
    type: string;
    isRecording: boolean;
    onFocus: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onBlur: () => void;
    pressKeysPlaceholder: string;
}

export default function KeybindInput({
    label,
    value,
    type,
    isRecording,
    onFocus,
    onKeyDown,
    onBlur,
    pressKeysPlaceholder,
}: KeybindInputProps): React.JSX.Element {
    return (
        <div className="settings-input-row mt-2">
            <label className="settings-input-label w-[200px]">{label}</label>
            <div className="max-w-[300px] w-full relative">
                <input
                    type="text"
                    value={isRecording ? pressKeysPlaceholder : value}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    readOnly
                    className="settings-text-input"
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        backgroundColor: isRecording
                            ? "rgba(59, 130, 246, 0.2)"
                            : "var(--bg-dark)",
                        border: isRecording
                            ? "2px solid rgba(59, 130, 246, 0.5)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "8px 40px 8px 12px",
                        fontSize: "13px",
                        fontFamily: "monospace",
                        color: isRecording
                            ? "rgba(59, 130, 246, 1)"
                            : "var(--text-primary)",
                        textAlign: "center",
                        transition: "all 0.2s ease",
                        fontWeight: isRecording ? "600" : "500",
                    }}
                />
                {!isRecording && (
                    <i
                        className="fa-solid fa-keyboard"
                        style={{
                            position: "absolute",
                            right: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "rgba(255, 255, 255, 0.5)",
                            pointerEvents: "none",
                            fontSize: "14px",
                        }}
                    />
                )}
                {isRecording && (
                    <i
                        className="fa-solid fa-circle-dot"
                        style={{
                            position: "absolute",
                            right: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "rgba(59, 130, 246, 1)",
                            pointerEvents: "none",
                            fontSize: "14px",
                            animation: "pulse 1.5s ease-in-out infinite",
                        }}
                    />
                )}
            </div>
        </div>
    );
}
