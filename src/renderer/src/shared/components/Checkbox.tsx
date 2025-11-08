import React from "react";

interface SettingsCheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
    className?: string;
}

export default function SettingsCheckbox({
    label,
    checked,
    onChange,
    className = "column-item settings-row",
}: SettingsCheckboxProps): React.JSX.Element {
    return (
        <label className={className}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="fake-checkbox" aria-hidden></span>
            <span className="column-label">{label}</span>
        </label>
    );
}
