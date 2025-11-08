import React from "react";
import WindowHeader, {
    type WindowHeaderProps,
} from "@/src/shared/components/WindowHeader";

export interface HistoryHeaderProps extends Omit<WindowHeaderProps, "title"> {}

export function HistoryHeader(props: HistoryHeaderProps): React.JSX.Element {
    return (
        <WindowHeader
            {...props}
            title={props.t("ui.titles.combatHistory")}
            className="controls gap-1 !rounded-bl-none !rounded-br-none"
        />
    );
}
