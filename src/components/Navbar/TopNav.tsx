import React from "react";
import logo from "../../assets/images/logo.png";
import notification from "../../assets/images/notification.png";
import userProfilePic from "../../assets/images/user-profile-pic.png";
import { Link } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import "./styles.scss";

interface NavProps {
  handleNav: () => void
}

const TopNav = ({ handleNav }: NavProps) => {
  return (
    <div className="top__nav__cont">
      <div className="icon__search__cont">
        <div className="logo__img__cont">
          <img src={logo} alt="company-logo" className="company__logo" />
          <RxHamburgerMenu
            className="nav__hamburger"
            onClick={() => handleNav()}
          />
        </div>
        <div className="search__form__cont">
          <input
            placeholder="Search for anything"
            type="text"
            name="nav__search"
            id="nav__search"
            className="nav__search"
          />
          <button type="button" className="navbar__search__icon">
            <MdOutlineSearch />
          </button>
        </div>
      </div>
      <div className="avatar__noti__cont">
        <Link to="/dashboard" className="doc__link">
          Docs
        </Link>
        <BsBell className="nav__notification" />
        <div className="avatar__cont">
          <div className="profile__pic__cont">
            <img
              src={userProfilePic}
              alt="user-profile-pic"
              className="user__profile__pic"
            />
          </div>

          <p className="user__name">Adedeji</p>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
