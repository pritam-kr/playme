import React from 'react'
import "./Profile.css"
import { Footer } from "../../Component/index"
import { useAuthContext } from "../../Context/Index"
import * as FaIcons from "react-icons/fa"



const Profile = () => {
    const { user : {firstName, lastName, email}, isAuth , logoutHandler} = useAuthContext()
    return (
        <>
            <div className='main-container'>

                <header className="main-container-header ">
                    <h2 className="text-lg">Account</h2>
                </header>

                <div className='profile-wrapper'>
                    <div className='profile-card'>
                        <div className='user-avatar'>
                            <FaIcons.FaUserCircle className='icons user-icon' />
                        </div>
                        <div className='user-info'>
                            <ul>
                                <li className='lists'><strong>Name:</strong> {firstName} {lastName}</li>
                                <li className='lists'><strong>Email:</strong> {email}</li>
                                <li className='lists list-logout' onClick={() => isAuth && logoutHandler()} >Logout</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export { Profile } 