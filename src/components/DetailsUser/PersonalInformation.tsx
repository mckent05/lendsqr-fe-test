import React from "react";
import { personalInformation } from "../../Store/userSlice";

interface InfoProps {
  personalInfo: personalInformation | undefined
}

const PersonalInformation = ({personalInfo}:InfoProps) => {
  return (
    <div className="personal__info__cont">
      <h1 className="category__name">{personalInfo?.categoryName}</h1>
      <div className="personal__info__wrapper">
        <div className="full__name single__info">
          <p>Full Name</p>
          <h3>{personalInfo?.name}</h3>
        </div>
        <div className="phone__num single__info">
          <p>Phone No</p>
          <h3>{personalInfo?.phoneNo}</h3>
        </div>
        <div className="email__addy single__info">
          <p>Email</p>
          <h3>{`${personalInfo?.name}@gmail.com`}</h3>
        </div>
        <div className="bvn single__info">
          <p>BVN</p>
          <h3>{personalInfo?.bvn}</h3>
        </div>
        <div className="gender single__info">
          <p>Gender</p>
          <h3>{personalInfo?.gender}</h3>
        </div>
        <div className="marital__status single__info">
          <p>Marital Status</p>
          <h3>{personalInfo?.maritalStatus}</h3>
        </div>
        <div className="children single__info">
          <p>Children</p>
          <h3>{personalInfo?.children}</h3>
        </div>
        <div className="residence single__info">
          <p>Type of residence</p>
          <h3>{personalInfo?.type}</h3>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
