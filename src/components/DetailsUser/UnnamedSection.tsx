import React from "react";
import { guarantor } from "../../Store/userSlice";

interface UnnamedProps {
    guarantor: guarantor | undefined
}

const UnnamedSection = ({guarantor}: UnnamedProps) => {
  return (
    <div className="unnamed__cont personal__info__cont">
      <div className="personal__info__wrapper">
        <div className="full__name__guarantor single__info">
          <p>Full name</p>
          <h3>{guarantor?.name}</h3>
        </div>
        <div className="phono__guarantor single__info">
          <p>phone number</p>
          <h3>{guarantor?.phoneNo}</h3>
        </div>
        <div className="email__guarantor single__info">
          <p>email address</p>
          <h3>{guarantor?.email}</h3>
        </div>
        <div className="relationship__guarantor single__info">
          <p>Relationship</p>
          <h3>{guarantor?.relationship}</h3>
        </div>
      </div>
    </div>
  );
};

export default UnnamedSection;
