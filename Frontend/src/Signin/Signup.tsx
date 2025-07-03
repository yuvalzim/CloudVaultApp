import type { FC } from "react";
import React from "react";
import "./Signup.css";

export const Signup: FC = () => {
  return (
    <div className="d-flex h-100">
      <section className="bg-info w-50 h-100 d-flex flex-column align-items-center animated-bg">
        <h2 className="fw-bold mt-5">Create your free account</h2>
        <p className="mt-3">
          Explore CloudVault's features and start storing your files!
        </p>
      </section>
      <section className="w-50 mt-5" style={{ paddingLeft: "10%" }}>
        <h4 className="text-align-center">Sign up to CloudVault</h4>
        <form className=" mt-5 w-100 ">
          <div>
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control w-75"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="my-4">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control w-75"
              id="password"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="form-label fw-bold">Username</label>
            <input
              className="form-control w-75"
              id="username"
              placeholder="Username"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4 w-75 fw-bold">
            Continue &rarr;
          </button>
        </form>
      </section>
    </div>
  );
};
