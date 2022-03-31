import React from "react";
import "./Sidebar.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuthContext } from "../../Context/Index";
import {toast} from "react-hot-toast"

const Sidebar = () => {
  const { isAuth, setIsAuth } = useAuthContext();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  //Logout Handler
  const logoutHandler = () => {
    if(isAuth){
      setIsAuth("")
      localStorage.removeItem("login-token")
      localStorage.removeItem("user")
      toast.success("User Logout!!", {position: "top-right"})
    }else{
      navigate("/login")
    }
  }
  
  
  return (
    <>
      <div className="sidebar-wrapper">
        <ul className="sidebar-links-wrapper">
          <li className="sidebar-links sidebar-home text-lg">
            <FaIcons.FaHome className="icons sidebar-icons" /> Home
          </li>
          <li
            className="sidebar-links sidebar-explore text-lg"
            onClick={() => navigate("/explore")}
          >
            <FaIcons.FaCompass className="icons sidebar-icons" /> Explore
          </li>
          <li className="sidebar-links sidebar-playlist text-lg" onClick={() => {
            !isAuth ? navigate("/login") : navigate("/playlist");
          }}>
          <FaIcons.FaFolderPlus className="icons sidebar-icons" /> Playlist
          </li>

          <li
            className="sidebar-links sidebar-likes text-lg"
            onClick={() => {
              !isAuth ? navigate("/login") : navigate("/likes");
            }}
          >
            <FaIcons.FaThumbsUp className="icons sidebar-icons" /> Likes
          </li>

          <li
            className="sidebar-links sidebar-watch-later text-lg"
            onClick={() => {
              !isAuth ? navigate("/login") : navigate("/watchlater");
            }}
          >
            <FaIcons.FaClock className="icons sidebar-icons" /> Watch Later
          </li>
          <li
            className="sidebar-links sidebar-history text-lg"
            onClick={() => {
              !isAuth ? navigate("/login") : navigate("/history");
            }}
          >
            <FaIcons.FaHistory className="icons sidebar-icons" /> History
          </li>
          <li className="sidebar-links sidebar-logout text-lg " onClick={() => logoutHandler()}>
            <FaIcons.FaUserCircle className="icons sidebar-icons" /> Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export { Sidebar };
