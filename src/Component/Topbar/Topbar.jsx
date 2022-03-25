import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import "./Topbar.css";
import { useNavigate } from "react-router-dom"

const Topbar = () => {
  const navigate = useNavigate()
  return (
    //Top bar
    <header className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
        <FaIcons.FaBars className="icons hamburger-icons" />
          <div className="logo-wrapper"> 
            <FaIcons.FaPlayCircle className="icons topbar-logo-icon" />
            <h3 className="topbar-logo">PlayMe</h3>
          </div>
        </div>
        <div className="topbar-center">
          <div className="searchbar-wrapper">
             
              <input type="text" className="input video-search" placeholder="Search" />{" "}
              <button className="btn btn-search">
                <FaIcons.FaSearch className="icons topbar-search-icon" />
              </button>
             
          </div>
        </div>
        <div className="topbar-right">
          <div className="auth-wrapper">
            <button className="btn btn-primary btn-nav-login center" onClick={() => navigate("/login")}>
              <FaIcons.FaUserCircle className="icons login-icon" /> <span className="login-text">Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Topbar };
