import React from "react";
import "./greeting.scss";
import moment from "moment";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile__name">
        {props.firstName} {props.lastName}.
      </div>
      <div className="profile__birth">
        Was born {moment(props.birthDate).format("DD MMM YY")} in{" "}
        {props.birthPlace}.
      </div>
    </div>
  );
}

export default Profile;
