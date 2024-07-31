import React from "react";
import PersonalInformation from "./PersonalInformation";
import EducationEmploy from "./EducationEmploy";
import Socials from "./Socials";
import Guarantor from "./Guarantor";
import "./personal.scss";
import { UserState } from "../../Store/userSlice";
import UnnamedSection from "./UnnamedSection";

interface SingleUserDetailProps {
  user: UserState | null;
}

const SingleUserDetail = ({ user }: SingleUserDetailProps) => {
  return (
    <div className="single__user__cont">
      <PersonalInformation personalInfo={user?.personalInformation} />
      <EducationEmploy education={user?.educationAndEmployment} />
      <Socials />
      <Guarantor guarantorInfo={user?.guarantor} />
      <UnnamedSection guarantor={user?.guarantor} />
    </div>
  );
};

export default SingleUserDetail;
