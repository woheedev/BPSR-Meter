import React from "react";

interface SettingsDescriptionProps {
    children: React.ReactNode;
}

export default function SettingsDescription({
    children,
}: SettingsDescriptionProps): React.JSX.Element {
    return <p className="settings-description">{children}</p>;
}
