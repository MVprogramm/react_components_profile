import React from "react";
import "./greeting.scss";
import moment from "moment";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        Was born {moment(props.userData.birthDate).format("DD MMM YY")} in{" "}
        {props.userData.birthPlace}.
      </div>
    </div>
  );
}

export default Profile;
