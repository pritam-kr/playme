import React, { useState } from 'react'
import "./Card.css"
import * as FaIcons from "react-icons/fa";
import { titleShort, descriptionShort } from "../../Utils/Index"
import {useNavigate} from "react-router-dom"
import {useLikesContext} from "../../Context/Index"

const Card = ({eachVideo}) => {
    const navigate = useNavigate()
    const {removeLikedVideo} = useLikesContext()
    const [tool, setTool] = useState(false)
    const { _id, thumbnail, title, creatorImg, creator, description } = eachVideo

    const singleVideoHandler = (_id) => {
        //doing navigate to videoId
        navigate(`/video/${_id}`)
    }

    return (
        <div className="card-box video-card" key={_id}>
        <img
            src={thumbnail}
            alt={title}
            className="responsive-images video-thumbnail" onClick={() => singleVideoHandler(_id)} 
        />
        <div className="card-content ">
            <div className="space-between">
                <div className="center">
                    <img
                        src={creatorImg}
                        alt="creator-img"
                        className="avatar img-responsive img-rounded avatar-ex-small creator-avatar" 
                    />
                    <h2 className="card-title video-title" >
                        {titleShort(title)}
                    </h2>
                </div>

                <div className="tools space-between" style={tool ? {display: "flex"}: {display: "none"}}>
                    <p className="center" onClick={() => removeLikedVideo(eachVideo)}> <FaIcons.FaTrash className="icons tools-icon" /></p>
                </div>

                <button className="btn-popup"   onClick={() => setTool(!tool)}>
                    <FaIcons.FaEllipsisV className="icons card-icon" />
                </button>
            </div>
            <p className="creator-title text-xm">{creator}<FaIcons.FaCheckCircle className="icons" /></p>
            <p className="card-text video-description">
                {descriptionShort(description)}
            </p>
        </div>
    </div>
    )
}



export { Card }