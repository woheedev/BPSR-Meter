import React from "react";
import Dropdown from "@shared/components/Dropdown";

const OPTIONS = [
    { value: "hp", label: "HP" },
    { value: "name", label: "Name" },
    { value: "distance", label: "Distance" },
];

export function SortDropdown({
    value,
    onChange,
}: {
    value: string;
    onChange: (v: string) => void;
}): React.JSX.Element {
    return (
        <Dropdown
            options={OPTIONS}
            value={value}
            onChange={onChange}
            ariaLabel="Select sort"
            minWidth={140}
        />
    );
}

export default SortDropdown;
