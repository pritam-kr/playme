import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./Topbar.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuthContext, useVideoContext } from "../../Context/Index";
import { useEffect } from "react";

const Topbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const { setActiveSidebar, activeSidebar, setSearchValue } = useVideoContext();
  const pathname = useLocation();

  // Implementing search Filter feature
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    setSearchValue(searchTerm);
  }, [searchTerm, setSearchValue])

  const SearchInputHandler = (event) => {
    if (pathname === "/explore") {
      return;
    } else if (event.target) {
      setSearchTerm(event.target.value);
      navigate("/explore");
    }
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
              type="search"
              className="input video-search"
              placeholder="Search"
              onChange={(event) => SearchInputHandler(event)}
            />
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
              <button
                className="btn btn-primary logged-user-icon center"
                onClick={() => navigate("/profile")}
              >
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
