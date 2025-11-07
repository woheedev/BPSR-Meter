import React from "react";
import Dropdown from "../../shared/components/Dropdown";

const OPTIONS = [
    { value: "npcap", label: "Npcap", desc: "Npcap (pcap)" },
    { value: "windivert", label: "WinDivert", desc: "WinDivert" },
];

export function BackendDropdown({
    value,
    onChange,
    disabled,
}: {
    value: string;
    onChange: (v: string) => void;
    disabled?: boolean;
}): React.JSX.Element {
    return (
        <Dropdown
            options={OPTIONS}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ariaLabel="Select capture backend"
        />
    );
}

export default BackendDropdown;
