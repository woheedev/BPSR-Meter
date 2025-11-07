import React, { useEffect, useRef, useState } from "react";

interface DropdownOption {
    value: string;
    label: string;
    desc?: string;
}

interface DropdownProps {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    ariaLabel?: string;
    minWidth?: number;
    className?: string;
}

export default function Dropdown({
    options,
    value,
    onChange,
    disabled = false,
    ariaLabel = "Select option",
    minWidth,
    className = "backend-dropdown"
}: DropdownProps): React.JSX.Element {
    const [open, setOpen] = useState(false);
    const [highlight, setHighlight] = useState<number>(() => 
        Math.max(0, options.findIndex((o) => o.value === value))
    );
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setHighlight(Math.max(0, options.findIndex((o) => o.value === value)));
    }, [value, options]);

    useEffect(() => {
        function onDoc(e: MouseEvent) {
            if (!ref.current) return;
            if (!ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    const toggle = () => {
        if (disabled) return;
        setOpen((s) => !s);
    };

    const handleSelect = (val: string) => {
        onChange(val);
        setOpen(false);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setHighlight((h) => (h + 1) % options.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setOpen(true);
            setHighlight((h) => (h - 1 + options.length) % options.length);
        } else if (e.key === "Enter") {
            e.preventDefault();
            handleSelect(options[highlight].value);
        } else if (e.key === "Escape") {
            setOpen(false);
        }
    };

    const selected = options.find((o) => o.value === value) || options[0];

    return (
        <div 
            className={className} 
            ref={ref} 
            style={minWidth ? { minWidth } : undefined}
        >
            <button
                type="button"
                className={`backend-trigger ${disabled ? "disabled" : ""}`}
                onClick={toggle}
                onKeyDown={onKeyDown}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={ariaLabel}
                disabled={disabled}
            >
                <div className="trigger-left">
                    <div className="trigger-label">{selected.label}</div>
                    {selected.desc && <div className="trigger-desc">{selected.desc}</div>}
                </div>
                <div className="trigger-chevron" aria-hidden />
            </button>

            {open && (
                <ul className="backend-list" role="listbox" tabIndex={-1}>
                    {options.map((opt, idx) => (
                        <li
                            key={opt.value}
                            role="option"
                            aria-selected={opt.value === value}
                            className={`backend-option ${opt.value === value ? "selected" : ""} ${idx === highlight ? "highlight" : ""}`}
                            onMouseEnter={() => setHighlight(idx)}
                            onClick={() => handleSelect(opt.value)}
                        >
                            <div className="opt-label">{opt.label}</div>
                            {opt.desc && <div className="opt-desc">{opt.desc}</div>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
