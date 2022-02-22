import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  People,
  Storefront,
  AttachMoney,
  BarChart,
  Email,
  Chat,
  Feedback,
  Report,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Dashboard</h1>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Link to="/" className="sidebarLink">
                <LineStyle className="sidebarIcon" />
                Home
              </Link>
            </li>

            <li className="sidebarListItem ">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>

            <li className="sidebarListItem ">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Quick Menu</h1>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/users" className="sidebarLink">
                <People className="sidebarIcon" />
                Users
              </Link>
            </li>

            <li className="sidebarListItem ">
              <Link to="/products" className="sidebarLink">
              <Storefront className="sidebarIcon" />
              Products
              </Link>
            </li>

            <li className="sidebarListItem ">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>

            <li className="sidebarListItem ">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Notifications</h1>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcon" />
              Mail
            </li>

            <li className="sidebarListItem ">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>

            <li className="sidebarListItem ">
              <Chat className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Staff</h1>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcon" />
              Manage
            </li>

            <li className="sidebarListItem ">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>

            <li className="sidebarListItem ">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
