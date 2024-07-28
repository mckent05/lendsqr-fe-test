import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { LuUserX2 } from "react-icons/lu";
import { LuUserCheck2 } from "react-icons/lu";
import { SlEye } from "react-icons/sl";
import { Link } from "react-router-dom";
import { UserState } from "../../Store/userSlice";

export interface UserDetailsProps {
  modalToggle: (index: number) => void;
  currentModal: number | null;
  userIndex: number;
  user: UserState;
  handleRef: any;
}

const UsersDetails = ({
  modalToggle,
  currentModal,
  userIndex,
  user,
  handleRef,
}: UserDetailsProps) => {
  return (
    <div className="users__details__cont">
      <p className="users__org">{user.personalInformation.company}</p>
      <p className="users__username">{user.username}</p>
      <p className="users__email">{user.email}</p>
      <p className="users__phone">{user.personalInformation.phoneNo}</p>
      <p className="users__date__joined">{user.personalInformation.dob}</p>
      <p
        className={`status ${
          user.status === "pending" ? "status__pending" : ""
        } ${user.status === "inactive" ? "status__inactive" : ""} ${
          user.status === "blacklisted" ? "status__blacklisted" : ""
        } ${user.status === "active" ? "status__active" : ""}`}
      >
        {user.status}
      </p>
      <div className="menu__list__cont">
        <CiMenuKebab className="menu" onClick={() => modalToggle(userIndex)} />
        {currentModal === userIndex && (
          <div className="menu__list" ref={handleRef}>
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
        )}
      </div>
    </div>
  );
};

export default UsersDetails;
