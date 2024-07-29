import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./main.scss";
import { AppDispatch, RootState } from "../Store/configureStore";
import { fetchItems } from "../Store/userSlice";

const Main = () => {
  const users = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="main__app__cont">
      <nav>
        <Navbar />
      </nav>
      {users.users.length > 0  ? (
        <Outlet />
      ) : (
        <h1 className="loading__cont">Loading...</h1>
      )}
    </div>
  );
};

export default Main;
