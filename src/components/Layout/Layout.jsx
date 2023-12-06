import React from "react";
import Topbar from "../topbar/Topbar";
import Sidebarbranch from "../sidebar/sidebarbranch";

import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div className="layout_conti">
        <div classname="sidebar">
          <Sidebarbranch />
        </div>
        <div className="maincontent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
