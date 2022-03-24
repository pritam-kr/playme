import React from "react"
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import "./Navigation.css"

const Navigation = () => {

    return (
        <nav className="nav">
            <div className="nav-wrapper space-between">
                <div className="left-side">
                    <div className="logo center">
                        <FaIcons.FaPlayCircle />
                        <h3>PlayMe</h3>
                    </div>
                </div>

                <div className="right-side">
                    <button className="btn btn-primary btn-nav-login center">
                        <BiIcons.BiLogIn className="icons login-icon" />  Login
                    </button>
                </div>
            </div>
        </nav>
    )
}

export { Navigation }