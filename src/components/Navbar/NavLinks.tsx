import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinkList } from "./links";

const NavLinks = ({ logo, pathName }: NavLinkList) => {
  return (
    <div className="links__cont">
      <NavLink
        to={pathName === "users" ? `/dashboard/${pathName}`: "/" }
        className={({ isActive }: { isActive: boolean }): string => {
          return `navLink ${isActive && "active__link"}`;
        }}
      >
        <img className="nav__logo" src={logo} alt="nav_logo" />
        <p className="link__name">{pathName}</p>
      </NavLink>
    </div>
  );
};

export default NavLinks;
