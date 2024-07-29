import React, { useState } from "react";
import UsersListHeader from "./UsersListHeader";
import "./UserList.scss";
import Filter from "./Filter";
import UsersPagination from "./UsersPagination";
import { RootState } from "../../Store/configureStore";
import { useSelector } from "react-redux";
import { UserState } from "../../Store/userSlice";

interface UserDetails {
  name: string;
}

export interface FilterDetailsProp {
  organization?: string;
  userName?: string;
  email?: string;
  date?: string;
  phoneNo?: string;
  status?: string;
}

export interface UsersListHeaderHeaderProps {
  name: UserDetails;
  showFilter: () => void;
}

const userDetailsHeader: UserDetails[] = [
  { name: "organization" },
  { name: "username" },
  { name: "email" },
  { name: "phone no" },
  { name: "date joined" },
  { name: "status" },
];

const UserListContainer = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const userStore = useSelector((state: RootState) => state.users);

  const { users } = userStore;

  const [itemList, setItemList] = useState<UserState[]>(users);

  const handleFilterDisplay = () => {
    setShowFilter((prev) => !prev);
  };

  const handleFilter = (filterDetails: FilterDetailsProp) => {
    let filteredList: UserState[] = [];
    if (filterDetails.organization) {
      filteredList = itemList.filter(
        (item: UserState) =>
          item.personalInformation.company.toLowerCase() ===
          filterDetails.organization?.toLowerCase()
      );
    }
    if (filterDetails.userName) {
      filteredList = itemList.filter(
        (item: UserState) =>
          item.username.toLowerCase() === filterDetails.userName?.toLowerCase()
      );
    }
    if (filterDetails.email) {
      filteredList = itemList.filter(
        (item: UserState) =>
          item.email.toLowerCase() === filterDetails.email?.toLowerCase()
      );
    }
    setItemList(filteredList);
  };

  const handleFormReset = () => {
    setItemList(users);
  };

  return (
    <div className="header__users__cont">
      {showFilter && (
        <Filter
          filterhandle={handleFilter}
          filterDisplay={handleFilterDisplay}
          reset={handleFormReset}
        />
      )}
      <div className="dashboard__users__header__cont">
        {userDetailsHeader.map((detail) => (
          <UsersListHeader
            name={detail}
            key={detail.name}
            showFilter={handleFilterDisplay}
          />
        ))}
      </div>
      <UsersPagination itemsPerPage={10} items={itemList} />
    </div>
  );
};

export default UserListContainer;
