import React from "react";

interface SettingsRangeInputProps {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showValue?: boolean;
}

export default function SettingsRangeInput({
    label,
    value,
    min,
    max,
    onChange,
    showValue = true,
}: SettingsRangeInputProps): React.JSX.Element {
    return (
        <div className="settings-input-row mt-2">
            <label className="settings-input-label">
                {label} {showValue && `(${value}%)`}
            </label>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                className="settings-range-input"
                style={{ width: "100%" }}
            />
        </div>
    );
}
