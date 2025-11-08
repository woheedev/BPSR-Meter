import React from "react";
import WindowHeader, {
    type WindowHeaderProps,
} from "@/src/shared/components/WindowHeader";

export interface MonstersHeaderProps extends Omit<WindowHeaderProps, "title"> {}

export function MonstersHeader(props: MonstersHeaderProps): React.JSX.Element {
    return <WindowHeader {...props} title={props.t("ui.titles.monsters")} />;
}

export default MonstersHeader;
