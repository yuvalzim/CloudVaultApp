import React, { type FC } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { SideBar } from "../Sidebar/Sidebar";

export const Layout: FC = () => {
    return (
        <div>
            <Header></Header>
            <main className="d-flex">
                <div style={{ width: "15%" }}>
                    <SideBar />
                </div>

                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
