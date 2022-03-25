import React from "react"
import "./Sidebar.css"
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

const Sidebar = () => {
    return(
        <>
        <div className="sidebar-wrapper">
            <ul className="sidebar-links-wrapper">
                <li className="sidebar-links sidebar-home text-lg"><FaIcons.FaHome className="icons sidebar-icons"/> Home </li>
                <li className="sidebar-links sidebar-explore text-lg"><FaIcons.FaCompass className="icons sidebar-icons"/> Explore</li>
                <li className="sidebar-links sidebar-playlist text-lg"><FaIcons.FaFolder className="icons sidebar-icons"/> Playlist</li>
                <li className="sidebar-links sidebar-likes text-lg"><FaIcons.FaThumbsUp className="icons sidebar-icons"/> Likes</li>
                <li className="sidebar-links sidebar-watch-later text-lg"><FaIcons.FaArchive className="icons sidebar-icons"/> Watch Later</li>
                <li className="sidebar-links sidebar-history text-lg"><FaIcons.FaStopwatch className="icons sidebar-icons"/> History</li>
                <li className="sidebar-links sidebar-logout text-lg logout-list"><FaIcons.FaUserCircle className="icons sidebar-icons"/> Logout</li>
            </ul>
        </div>
        </>
    )
}

export {Sidebar}