import React from "react";
import { useSelector } from "react-redux";
import { CiMenuKebab } from "react-icons/ci";
import { LuUserX2 } from "react-icons/lu";
import { LuUserCheck2 } from "react-icons/lu";
import { SlEye } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { UserState } from "../../Store/userSlice";
import { RootState } from "../../Store/configureStore";

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

  const userStore = useSelector((state: RootState) => state.users);

  const navigate = useNavigate()

  const navigateUserDetails = () => {
    const selectedUser = userStore.users.filter((selected) => selected.id === user.id)
    localStorage.setItem('User', JSON.stringify(selectedUser[0]))
    navigate(`/dashboard/users/${user.id}`)
  }
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
            <button type="button" onClick={navigateUserDetails} className="view__user__link">
              <SlEye />
              <p>View Details</p>
            </button>
            <button type="button" className="view__user__link">
              <LuUserX2 />
              <p>blacklist user</p>
            </button>
            <button type="button" className="view__user__link">
              <LuUserCheck2 />
              <p>activate user</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersDetails


