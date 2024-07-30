import React from "react";
import { educationAndEmployment } from "../../Store/userSlice";

interface EducationProps {
  education: educationAndEmployment | undefined
}

const EducationEmploy = ({ education }: EducationProps) => {
  return (
    <div className="education__employment__cont personal__info__cont">
      <h1 className="category__name">{education?.categoryName}</h1>
      <div className="personal__info__wrapper">
        <div className="education single__info">
          <p>Level of Education</p>
          <h3>{education?.levelofEducation}</h3>
        </div>
        <div className="employment single__info">
          <p>Employment status</p>
          <h3>{education?.employmentStatus}</h3>
        </div>
        <div className="employment__sect single__info">
          <p>sector of employment</p>
          <h3>{education?.sectorOfEmployment}</h3>
        </div>
        <div className="employ__duration single__info">
          <p>duration of employment</p>
          <h3>{education?.employmentDuration}</h3>
        </div>
        <div className="email__addy single__info">
          <p>office email</p>
          <h3>office@lendsqr.com</h3>
        </div>
        <div className="income single__info">
          <p>monthly income</p>
          <h3>{education?.monthlyIncome}</h3>
        </div>
        <div className="loan__repayment single__info">
          <p>Loan repayment</p>
          <h3>{education?.loanRepayment}</h3>
        </div>
      </div>
    </div>
  );
};

export default EducationEmploy;
