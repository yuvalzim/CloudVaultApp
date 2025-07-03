import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import React from "react";
import { Layout } from "./Layout/Layout";
import { Signup } from "./Signin/Signup";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/Login" element={<Layout />}></Route>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};
