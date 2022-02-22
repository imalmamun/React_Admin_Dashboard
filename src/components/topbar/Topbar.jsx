import React from "react";
import "./topbar.css";
import { Notifications, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/3054137/pexels-photo-3054137.jpeg?cs=srgb&dl=pexels-nasser-almutairi-3054137.jpg&fm=jpg"
            alt="Mohammad Idris"
            className="avaterProfile"
          />
        </div>
      </div>
    </div>
  );
}
