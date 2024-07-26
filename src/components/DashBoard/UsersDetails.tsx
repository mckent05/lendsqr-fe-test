import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { LuUserX2 } from "react-icons/lu";
import { LuUserCheck2 } from "react-icons/lu";
import { SlEye } from "react-icons/sl";
import { Link } from "react-router-dom";

export interface UserDetailsProps {
  status: string;
  modalToggle: (index: number) => void;
  currentModal: number | null;
}

const UsersDetails = ({
  status,
  modalToggle,
  currentModal,
}: UserDetailsProps) => {
  return (
    <div className="users__details__cont">
      <p className="users__org">Lendsqr</p>
      <p className="users__username">Adedeji</p>
      <p className="users__email">adedeji@lendsqr.com</p>
      <p className="users__phone">07013226104</p>
      <p className="users__date__joined">May 19, 2020</p>
      <p
        className={`status ${status === "pending" ? "status__pending" : ""} ${
          status === "inactive" ? "status__inactive" : ""
        } ${status === "blacklisted" ? "status__blacklisted" : ""} ${
          status === "active" ? "status__active" : ""
        }`}
      >
        {status}
      </p>
      <div className="menu__list__cont">
        <CiMenuKebab className="menu" />
        <div className="menu__list hide__menu__list">
          <Link to={""} className="view__user__link">
            <SlEye />
            <p>View Details</p>
          </Link>
          <Link to="/" className="view__user__link">
            <LuUserX2 />
            <p>blacklist user</p>
          </Link>
          <Link to="/" className="view__user__link">
            <LuUserCheck2 />
            <p>activate user</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsersDetails;
