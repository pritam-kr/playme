import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./Topbar.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuthContext, useVideoContext } from "../../Context/Index";

const Topbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const { setActiveSidebar, activeSidebar, setSearchValue } = useVideoContext();
  const pathname = useLocation();
  // Implementing search Filter feature
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = () => {
    if (searchTerm === "") {
      return;
    } else {
      if (pathname === "/explore") {
        return;
      } else {
        navigate("/explore");
      }
      setSearchValue(searchTerm);
    }
    setSearchTerm("");
  };

  return (
    //Top bar
    <header className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <FaIcons.FaBars
            className="icons hamburger-icons"
            onClick={() => setActiveSidebar(!activeSidebar)}
          />
          <div className="logo-wrapper">
            <Link to="/explore" className="center">
              <FaIcons.FaPlayCircle className="icons topbar-logo-icon" />
              <h3 className="topbar-logo">PlayMe</h3>
            </Link>
          </div>
        </div>
        <div className="topbar-center">
          <div className="searchbar-wrapper">
            <input
              type="text"
              className="input video-search"
              value={searchTerm}
              placeholder="Search"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="btn btn-search" onClick={() => searchHandler()}>
              <FaIcons.FaSearch className="icons topbar-search-icon" />
            </button>
          </div>
        </div>
        <div className="topbar-right">
          <div className="auth-wrapper">
            {!isAuth ? (
              <button
                className="btn btn-primary btn-nav-login center"
                onClick={() => navigate("/login")}
              >
                <FaIcons.FaUserCircle className="icons login-icon" />{" "}
                <span className="login-text">Login</span>
              </button>
            ) : (
              <button className="btn btn-primary logged-user-icon center">
                <FaIcons.FaUserCircle className="icons login-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Topbar };
