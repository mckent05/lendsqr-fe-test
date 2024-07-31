import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./detailsTop.scss";
import UserInfo from "./UserInfo";

interface userInfoProps {
  status: string | undefined;
  id: string | undefined
  name: string | undefined
}

const DetailsTopControl = ({ status, id, name }: userInfoProps) => {
  const navigate = useNavigate();
  return (
    <div className="details__control__cont">
      <div
        className="back__users__cont"
        onClick={() => navigate("/dashboard/")}
      >
        <MdOutlineKeyboardBackspace />
        <p>Back to Users</p>
      </div>
      <div className="details__control__info">
        <h2>User Details</h2>
        <div className="details__control__btn__cont">
          <button
            type="button"
            className="control__blist blacklisted"
            disabled={status === "blacklisted" && true}
          >
            Blacklist User
          </button>
          {status === "pending" && (
            <button type="button" className="control__active active">
              Activate User
            </button>
          )}
          {status === "inactive" && (
            <button type="button" className="control__active active">
              Activate User
            </button>
          )}
          {status === "active" && (
            <button type="button" className="control__active blacklisted">
              Deactivate User
            </button>
          )}
          {status === "blacklisted" && (
            <button type="button" className="control__active active">
              Activate User
            </button>
          )}
        </div>
      </div>
      <UserInfo id={id} name={name}/>
    </div>
  );
};

export default DetailsTopControl;
