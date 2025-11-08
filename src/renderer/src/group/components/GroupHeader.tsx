import React from "react";
import WindowHeader, {
    type WindowHeaderProps,
} from "@/src/shared/components/WindowHeader";

export interface GroupHeaderProps extends Omit<WindowHeaderProps, "title"> {}

export function GroupHeader(props: GroupHeaderProps): React.JSX.Element {
    return (
        <WindowHeader {...props} title={props.t("ui.titles.groupManagement")} />
    );
}
