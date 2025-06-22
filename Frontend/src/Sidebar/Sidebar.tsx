import type { FC } from "react";
import { OptionComponent } from "./SidebarOptions/OptionComponent";
import React, { useState } from "react";
import { options } from "./SidebarOptions/options";
import "./Sidebar.css";

export const SideBar: FC = () => {
    const [currentTab, setCurrentTab] = useState<string>("Home");
    return options.map((currentOption) => (
        <div
            key={currentOption.name}
            className={`rounded-pill ${
                currentTab === currentOption.name ? "active-tab" : ""
            }`}
            onClick={() => setCurrentTab(currentOption.name)}
        >
            <OptionComponent option={currentOption} />
        </div>
    ));
};
