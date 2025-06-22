import type { FC } from "react";
import type { Option } from "./OptionInterface";
import React from "react";
import { useNavigate } from "react-router-dom";

interface OptionCardProps {
    option: Option;
}

export const OptionComponent: FC<OptionCardProps> = ({ option }) => {
    const navigation = useNavigate();

    const navigateToLink = () => {
        navigation(option.link);
    };
    return (
        <div
            className="d-flex ps-4 user-select-none rounded-pill align-items-center sidebar-item "
            style={{ cursor: "pointer" }}
            onClick={navigateToLink}
        >
            <i className={option.iconClass}></i>
            <p className="my-1 fs-6 ps-2">{option.name}</p>
        </div>
    );
};
