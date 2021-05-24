import React from "react";
import "./InfoBar.css";
const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        className="onlineIcon"
        alt="online img"
        src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png"
      />
      <h3>{room}</h3>
    </div>
    <div className="RightInnerContainer">
      <a href="/">
        <img
          className="closeIcon"
          src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png"
          alt="close img"
        />
      </a>
    </div>
  </div>
);

export default InfoBar;
