import React from "react";
import "./Feature.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Feature(props) {
    let { title, price, percent, arrow, description } = props;
  return (
    <div className="Feature">
      <div className="Feature-container">
        <div className="Feature-up">{title}</div>
        <div className="Feature-midle">
          <div className="Feature-price">${price}</div>
          <div className="Feature-percent">
            {percent}
            {arrow ==`ArrowDownwardIcon` ? (
              <ArrowDownwardIcon className="arrowdown"></ArrowDownwardIcon>
            ) : (
              <ArrowUpwardIcon className="arrowup"></ArrowUpwardIcon>
            )}
          </div>
        </div>
        <div className="Feature-describtion">{description}</div>
      </div>
    </div>
  );
}
