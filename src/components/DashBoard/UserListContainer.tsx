import React, { useState } from "react";
import "./UserList.css";
import UsersListHeader from "./UsersListHeader";
import "./UserList.css"
import UserDetails from "../../pages/UserDetails/UserDetails";
import UsersDetails from "./UsersDetails";
import Filter from "./Filter";
import ListUsers from "./ListUsers";

interface UserDetails {
    name:string
}

export interface UsersListHeaderHeaderProps {
  name: UserDetails
  showFilter: () => void
}

const UserListContainer = () => {
  const userDetailsHeader: UserDetails[] = [
    {name:"organization"},
    {name:"username"},
    {name:"email"},
    {name:"phone no"},
    {name:"date joined"},
    {name:"status"},
  ];

  const [showFilter, setShowFilter] = useState<boolean>(false)

 

  const handleFilterDisplay = () => {
    setShowFilter((prev) => !prev)
  }

  return (
    <div className="header__users__cont">
      {
        showFilter && <Filter/>
      }
      <div className="dashboard__users__header__cont">
        {userDetailsHeader.map((detail) => (
          <UsersListHeader name={detail} showFilter={handleFilterDisplay}  />
        ))}
      </div>
      <ListUsers />
    </div>
  );
};

export default UserListContainer;
