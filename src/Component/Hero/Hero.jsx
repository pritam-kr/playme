import React from "react"
import "./Hero.css"
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

const Hero = () => {
    return(
        <div className="hero-container">
        <div className="hero-content">
            <h2>Learn New trends with</h2>
            <h1 className="site-name center"><FaIcons.FaPlayCircle /> PlayMe</h1>
            <p className="text-lg" style={{marginTop: "1rem"}}>PlayMe is a learning platform for students.</p>
            <div className="searchbar-wrapper">
                <form className="searchbar-form center">
                    <input type="text" className="input" placeholder="Search"/>  

                    <button className="btn btn-search"><BiIcons.BiSearch className="icons search-icons"/></button>
                </form>
            </div>
            <FaIcons.FaGithub />
        </div>
    </div>
    )
} 

export {Hero}