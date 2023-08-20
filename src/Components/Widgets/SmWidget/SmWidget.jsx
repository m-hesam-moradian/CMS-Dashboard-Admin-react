import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { SmWidgetData } from "./../../../Data";
import "./SmWidget.css";

export default function SmWidget() {
  return (
    <div className="SmWidget">
      <span className="SmWidget-title">New users</span>
      <ul>
        {SmWidgetData.map((user) => {
          return (
            <li>
              <img src={user.img} />
              <div className="SmWidget-title">
                <span className="SmWidget-name">{user.name}</span>
                <span className="SmWidget-job">{user.job}</span>
              </div>
              <button>
                <VisibilityIcon></VisibilityIcon>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
