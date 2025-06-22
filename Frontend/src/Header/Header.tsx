import type { FC } from "react";
import React from "react";

export const Header: FC = () => {
  return (
    <div className="d-flex justify-content-between px-4 py-2">
      <section className="d-flex">
        <p className="fs-2 pe-3">CloudVault</p>
        <i className="bi bi-safe h1"></i>
      </section>
      <section className="d-flex">
        <i className="bi bi-gear h1"></i>
        <i className="bi bi-person-circle h1 px-4"></i>
      </section>
    </div>
  );
};
