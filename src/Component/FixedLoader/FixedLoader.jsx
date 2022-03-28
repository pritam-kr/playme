import React from 'react'
import "./FixLoader.css"
import {useNavigate} from "react-router-dom"

const FixedLoader = ({ message }) => {

const navigate = useNavigate()

    return (
        <div className='fix-loader'>
            <h1 className='text-md'>{message}</h1>
            <button className='navigate-button' onClick={() => navigate("/explore")}>Explore</button>
        </div>
    )
}

export { FixedLoader }