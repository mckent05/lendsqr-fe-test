import React, { useState } from "react";
import logo from "../../assets/images/avatar.svg";
import star from "../../assets/images/star.png";
import star2 from "../../assets/images/star2.png";

const allLinks: string[] = [
  "General Details",
  "Document",
  "Bank details",
  "Loans",
  "Savings",
  "App and System",
];

interface UserInfo {
  id: string | undefined
  name: string | undefined
}

const UserInfo = ({id, name}:UserInfo) => {
  const [linkControl, setLinkControl] = useState<number>(0);

  const handleLink = (index: number) => {
    setLinkControl(index);
  };
  return (
    <div className="user__info__wrapper">
      <div className="user__info__cont">
        <div className="name__pic__cont">
          <div className="user__info__ppic">
            <img src={logo} alt="avatar" />
          </div>
          <div className="name__id__cont">
            <h1>{name}</h1>
            <p>{id}</p>
          </div>
        </div>
        <div className="ratings__cont">
          <p>User's Tier</p>
          <div className="user__ratings">
            <img src={star} alt="rating" />
            <img src={star2} alt="rating" />
            <img src={star2} alt="rating" />
          </div>
        </div>
        <div className="loan__amount">
          <h2>N200,000</h2>
          <p className="balance__account__number">0060148669/Access Bank</p>
        </div>
      </div>
      <div className="user__info__links">
        {allLinks.map((link, index) => (
          <h3
            className={`top__control__link ${
              linkControl === index ? "active__control" : ""
            }`}
            onClick={() => handleLink(index)}
          >
            {" "}
            {link}{" "}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
