import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ForumIcon from "@mui/icons-material/Forum";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./SideBar.css";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBar-contaner">
        <div className="SideBar-section">
          <h3>Dashboard</h3>
          <ul>
            <Link to="/">
              <li className="active">
                <HomeIcon />
                Home
              </li>
            </Link>
            <Link to="/Users">
              <li>
                <PeopleOutlineIcon />
                Users
              </li>
            </Link>
            <Link to="NewUser">
              <li>
                <PersonAddIcon />
                New User
              </li>
            </Link>
            <Link to="Products">
              <li>
                <QrCode2Icon />
                Products
              </li>
            </Link>
          </ul>
        </div>
        <div className="SideBar-section">
          <h3>Quick menu</h3>
          <ul>
            <li>
              <PointOfSaleIcon />
              sales
            </li>

            <li>
              <BarChartIcon />
              Analytics
            </li>
            <li>
              <ReceiptLongIcon />
              Transactions
            </li>
            <li>
              <ReportGmailerrorredIcon />
              Reports
            </li>
          </ul>
        </div>
        <div className="SideBar-section">
          <h3>Notification</h3>
          <ul>
            <li>
              <MailOutlineIcon />
              Mail
            </li>
            <li>
              <ThumbUpAltIcon />
              Feedback
            </li>
            <li>
              <ForumIcon />
              Messages
            </li>
          </ul>
        </div>
        <div className="SideBar-section">
          <h3>Staff</h3>
          <ul>
            <li>
              <ManageAccountsIcon />
              Manage
            </li>
            <li>
              <BarChartIcon />
              Analytics
            </li>
            <li>
              <ReportGmailerrorredIcon />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
