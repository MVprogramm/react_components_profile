import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Profile from "./Profile.jsx";

const rootElem = document.querySelector("#root");

const userData = {
  firstName: "James",
  lastName: "Bond",
  birthDate: new Date("1891-01-17"),
  birthPlace: "London",
};

ReactDOM.render(
  <Profile
    firstName={userData.firstName}
    lastName={userData.lastName}
    birthDate={userData.birthDate}
    birthPlace={userData.birthPlace}
  />,
  rootElem
);
