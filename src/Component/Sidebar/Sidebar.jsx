import React from "react";
import "./Sidebar.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuthContext, useVideoContext } from "../../Context/Index";
import { toast } from "react-hot-toast"
import { useState } from "react/";

const Sidebar = () => {
  const { isAuth, setIsAuth } = useAuthContext();
  const navigate = useNavigate();

  const {activeSidebar} = useVideoContext()

  console.log(activeSidebar)

  const { pathname } = useLocation();

  //Logout Handler
  const logoutHandler = () => {
    if (isAuth) {
      setIsAuth("")
      localStorage.removeItem("login-token")
      localStorage.removeItem("user")
      toast.success("User Logout!!", { position: "top-right" })
    } else {
      navigate("/login")
    }
  }



  const getActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "var(--background-color)" : ""
  })


  return (
    <>
      <div className={activeSidebar ? "sidebar-wrapper" : "sidebar-wrapper active-sidebar"}>
        <ul className="sidebar-links-wrapper">
          <NavLink to="/" className="sidebar-links sidebar-home text-lg">
            <FaIcons.FaHome className="icons sidebar-icons" /> Home
          </NavLink>
          <NavLink to="/explore" style={getActiveStyle}
            className="sidebar-links sidebar-explore text-lg"
            onClick={() => navigate("/explore")}
          >
            <FaIcons.FaCompass className="icons sidebar-icons" /> Explore
          </NavLink>
          <NavLink to="/playlist" style={getActiveStyle} className="sidebar-links sidebar-playlist text-lg" onClick={() => {
            !isAuth ? navigate("/login") : navigate("/playlist");
          }}>
            <FaIcons.FaFolderPlus className="icons sidebar-icons" /> Playlist
          </NavLink>

          <NavLink to="/likes" style={getActiveStyle}
            className="sidebar-links sidebar-likes text-lg"
            onClick={() => {
              !isAuth ? navigate("/login") : navigate("/likes");
            }}
          >
            <FaIcons.FaThumbsUp className="icons sidebar-icons" /> Likes
          </NavLink>

          <NavLink to="/watchlater" style={getActiveStyle}
            className="sidebar-links sidebar-watch-later text-lg"
            onClick={() => {
              !isAuth ? navigate("/login") : navigate("/watchlater");
            }}
          >
            <FaIcons.FaClock className="icons sidebar-icons" /> Watch Later
          </NavLink>
          <NavLink to="/history" style={getActiveStyle}
            className="sidebar-links sidebar-history text-lg"
            onClick={() => {
              !isAuth ? navigate("/login") : navigate("/history");
            }}
          >
            <FaIcons.FaHistory className="icons sidebar-icons" /> History
          </NavLink>
          <NavLink to="/logout" style={getActiveStyle} className="sidebar-links sidebar-logout text-lg " onClick={() => logoutHandler()}>
            <FaIcons.FaUserCircle className="icons sidebar-icons" /> Logout
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export { Sidebar };
