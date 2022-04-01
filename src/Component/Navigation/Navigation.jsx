import React from "react"
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import "./Navigation.css"
import {useNavigate, Link} from "react-router-dom"
import {useAuthContext} from "../../Context/Index"


const Navigation = () => {
    const navigate = useNavigate()
    const {isAuth, logoutHandler} = useAuthContext()

    return (
        <nav className="nav">
            <div className="nav-wrapper space-between">
                <div className="left-side">
                    <Link to="/" className="logo center">
                        <FaIcons.FaPlayCircle />
                        <h3>PlayMe</h3>
                    </Link>
                </div>

                <div className="right-side">
                    {isAuth ? <button className="btn btn-primary btn-nav-login center" onClick={() =>  logoutHandler()}>
                        <BiIcons.BiLogIn className="icons home-login-icon" />  Logout
                    </button> : <button className="btn btn-primary btn-nav-login center" onClick={() => navigate('/login')}>
                        <BiIcons.BiLogIn className="icons home-login-icon" />  Login
                    </button>}
                </div>
            </div>
        </nav>
    )
}

export { Navigation }