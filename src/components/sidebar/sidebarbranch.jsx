import React from "react";
import { Link } from "react-router-dom";
import "./sidebarbranch.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="." className="link">
                <span className="sidebarIcon">
                  <i className="ri-align-justify"></i>
                </span>
                Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="branchalytics" className="link">
                <span className="sidebarIcon">
                  <i className="ri-building-line"></i>
                </span>
                Branchalytics
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="service_requests" className="link">
                <span className="sidebarIcon">
                  <i className="ri-file-chart-line"></i>
                </span>
                Service Requests
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="feedback" className="link">
                <span className="sidebarIcon">
                  <i className="ri-feedback-fill"></i>
                </span>
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
