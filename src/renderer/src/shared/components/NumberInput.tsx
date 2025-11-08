import React from "react";

interface SettingsNumberInputProps {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SettingsNumberInput({
    label,
    value,
    min,
    max,
    onChange,
}: SettingsNumberInputProps): React.JSX.Element {
    return (
        <div className="settings-input-row">
            <label className="settings-input-label">{label}</label>
            <input
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                className="settings-number-input"
            />
        </div>
    );
}
