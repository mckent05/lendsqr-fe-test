import React from "react";
import allLinks from "./links";
import { MdKeyboardArrowDown } from "react-icons/md";
import CategoryNavLinks from "./CategoryNavLinks";
import { useNavContext } from "../../context";
import "./sidenav.scss";
import NavLinks from "./NavLinks";
import home from "../../assets/images/navlinkImages/home.png";
import org from "../../assets/images/navlinkImages/organization.png";
const SideNav = () => {
  const navState = useNavContext();
  return (
    <div className={`side__nav__cont ${navState && "show__side"}`}>
      <div className="switch__org__cont">
        <div className="switch__org__arrow__cont">
          <NavLinks logo={org} pathName="switch organization" />
          <MdKeyboardArrowDown />
        </div>
        <div className="home__logo__cont">
          <NavLinks logo={home} pathName="dashboard" />
        </div>
      </div>
      <div className="nav__links__cont">
        {allLinks.map((link) => (
          <CategoryNavLinks
            key={link.categoryName}
            categoryName={link.categoryName}
            navLinks={link.navLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNav;
