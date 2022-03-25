import React from "react"
import "./Hero.css"
import * as FaIcons from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import * as BiIcons from "react-icons/bi";
 
const Hero = () => {

    const navigate = useNavigate()

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h2>Learn New trends with</h2>
                <h1 className="site-name center"><FaIcons.FaPlayCircle /> PlayMe</h1>
                <p className="text-lg" style={{ marginTop: "1rem" }}>PlayMe is a learning platform for students.</p>
                <div className="searchbar-wrapper center">
                    <button className="btn btn-explore center" onClick={() => navigate("/explore")}>
                        <BiIcons.BiVideoPlus className="icons video-icon" /> Watch Now </button>
                </div>
                <FaIcons.FaGithub />
            </div>
        </div>
    )
}

export { Hero }