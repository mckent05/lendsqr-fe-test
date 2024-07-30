import React, { useEffect, useState } from "react";
import "./details.css";
import DetailsTopControl from "../../components/DetailsUser/DetailsTopControl";
import SingleUserDetail from "../../components/DetailsUser/SingleUserDetail";
import { UserState } from "../../Store/userSlice";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState<null | UserState>(null);
  const { id } = useParams()

  const navigate = useNavigate();

  useEffect(() => {
    const details = localStorage.getItem("User");
    if (details) {
      setUserDetails(JSON.parse(details));
      return;
    }
    navigate("/dashboard/");
  }, []);
  return (
    <div className="details__page__cont">
      <DetailsTopControl
        status={userDetails?.status}
        id={id}
        name={userDetails?.personalInformation.name}
      />
      <SingleUserDetail user={userDetails} />
    </div>
  );
};

export default UserDetails;
