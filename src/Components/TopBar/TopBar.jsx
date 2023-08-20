import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import "./TopBar.css";
export default function TopBar() {
  return (
    <div className="TopBar">
      <div className="topbar-contaner">
        <div className="topbar-left">React CMS Dashboard </div>
        <div className="topbar-right">
          <div className="icon">
            <NotificationsNoneIcon className="notif-icon "></NotificationsNoneIcon>
            <div className="notif-icon-adget adget">2</div>
          </div>
          <div className="icon">
            <LanguageIcon className="lang-icon "></LanguageIcon>
            <div className="lang-icon-adget adget">2</div>
          </div>
          <div className="icon">
            <SettingsIcon className="setting-icon "></SettingsIcon>
           
          </div>
          <div>
            <img
              src="images/Screenshot 2023-07-11 105616.png"
              alt=""
              className="profile-avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
