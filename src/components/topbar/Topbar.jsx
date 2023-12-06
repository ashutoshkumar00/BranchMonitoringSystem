import React, { useEffect, useState } from "react";
import "./Topbar.css";
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { clearAuthData, setBranchName } from "../BranchSlice/BranchSlice";
const Topbar = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.branch.token);
  const branchId = useSelector((state) => state.branch.branchId);
  const role = useSelector((state) => state.branch.role);


  useEffect(() => {
    load();
  }, []);

  const load = () => {

  axios.interceptors.request.use(
    config=>{
      config.headers.authorization="Bearer "+token;
      return config;
    },
    error=>{
      return Promise.reject(error)
    }
  );

  axios.get(`http://localhost:9000/getbranchnamebyid/${branchId}`
    ).then((response) => {
      dispatch(setBranchName(response.data))
    })
    .catch((error) => {
      alert("Bad request");
    });
  }

  const branchName = useSelector((state)=>state.branch.branchName)
  const adminName = useSelector((state)=>state.branch.adminName)

  const handleLogout = ()=>{
    dispatch(clearAuthData());
    navigate("/signin")
  }

  console.log(branchName)

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <span className="logo1">{branchName}</span>
          <span className="logo2">{role==='admin'?"Head Admin":"Branch Admin"}</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <i class="ri-notification-fill"></i>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <i class="ri-global-line"></i>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <i class="ri-settings-4-fill"></i>
          </div>
          {/* <img
            src="https://i.pinimg.com/736x/a0/1b/77/a01b7746d59d485b10cc63e8ce7ec666.jpg"
            alt=""
            className="topAvatar"
          /> */}
          <button type ='button' onClick={handleLogout} >Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
