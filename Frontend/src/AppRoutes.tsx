import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import React from "react";
import { Layout } from "./Layout/Layout";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};
