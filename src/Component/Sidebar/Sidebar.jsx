import React from "react";
import "./Sidebar.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthContext, useVideoContext } from "../../Context/Index";
 
const Sidebar = () => {
  const { isAuth,  logoutHandler } = useAuthContext();
  const navigate = useNavigate();
  const {activeSidebar} = useVideoContext()
  
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

          <NavLink to="/latest" style={getActiveStyle} className="sidebar-links sidebar-home text-lg">
             <FaIcons.FaSort className="icons sidebar-icons" /> Latest Video
          </NavLink>

          <NavLink to="/explore" style={getActiveStyle}
            className="sidebar-links sidebar-explore text-lg"
             
          >
            <FaIcons.FaCompass className="icons sidebar-icons" /> Explore
          </NavLink>

          <NavLink to="/playlist" style={getActiveStyle} className="sidebar-links sidebar-playlist text-lg" >
            <FaIcons.FaFolderPlus className="icons sidebar-icons" /> Playlist
          </NavLink>

          <NavLink to="/likes" style={getActiveStyle}
            className="sidebar-links sidebar-likes text-lg"
           
          >
            <FaIcons.FaThumbsUp className="icons sidebar-icons" /> Likes
          </NavLink>

          <NavLink to="/watchlater" style={getActiveStyle}
            className="sidebar-links sidebar-watch-later text-lg"
            
          >
            <FaIcons.FaClock className="icons sidebar-icons" /> Watch Later
          </NavLink>
          <NavLink to="/history" style={getActiveStyle}
            className="sidebar-links sidebar-history text-lg"
          >
            <FaIcons.FaHistory className="icons sidebar-icons" /> History
          </NavLink>
         {!isAuth ?  <NavLink to="/login" style={getActiveStyle} className="sidebar-links sidebar-logout text-lg " onClick={() => navigate('/login')}>
            <FaIcons.FaUserCircle className="icons sidebar-icons" /> Login
          </NavLink> :  <NavLink to="/logout" style={getActiveStyle} className="sidebar-links sidebar-logout text-lg " onClick={() => logoutHandler()}>
            <FaIcons.FaSignOutAlt className="icons sidebar-icons" /> Logout
          </NavLink>}
        </ul>
      </div>
    </>
  );
};

export { Sidebar };
