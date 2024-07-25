import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
