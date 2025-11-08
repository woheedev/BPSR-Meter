import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./main/App";
import GroupApp from "./group/App";
import MonstersApp from "./monsters/App";
import HistoryApp from "./history/App";
import DeviceApp from "./device/App";
import SettingsApp from "./settings/App";
import UpdateApp from "./update/App";
import "/css/style.css";

const renderApp = () => {
    const path = window.location.pathname;

    switch (path) {
        case "/group.html":
            return <GroupApp />;
        case "/monsters.html":
            return <MonstersApp />;
        case "/history.html":
            return <HistoryApp />;
        case "/device.html":
            return <DeviceApp />;
        case "/settings.html":
            return <SettingsApp />;
        case "/update.html":
            return <UpdateApp />;
        default:
            return <MainApp />;
    }
};

const root = document.getElementById("root");
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>{renderApp()}</React.StrictMode>,
    );
} else {
    console.error("Root element not found!");
}
