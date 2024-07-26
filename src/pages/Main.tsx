import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./main.css"

const Main = () => {
  return (
    <div className="main__app__cont">
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
