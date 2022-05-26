import React, { useState } from 'react'
import "./WatchLaterCard.css"
import * as FaIcons from "react-icons/fa";
import { titleShort, descriptionShort } from "../../Utils/Index"
import {useNavigate} from "react-router-dom"
import {useWatchLaterContext, useHistoryContext} from "../../Context/Index"

const WatchLaterCard = ({eachVideo}) => {
    const navigate = useNavigate()
    const {removeWatchLater} =  useWatchLaterContext()
    const {addHistoryVideo} = useHistoryContext()
    
    const [tool, setTool] = useState(false)
    const { _id, thumbnail, title, creatorImg, creator, description } = eachVideo

    const singleVideoHandler = (_id) => {
        //doing navigate to videoId
        navigate(`/video/${_id}`)
        addHistoryVideo(eachVideo)
    }

    const removeWatchLaterVideoHandler = ()=>{
        removeWatchLater(eachVideo._id)
        setTool(false)
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
                    <button className="center" onClick={() => removeWatchLaterVideoHandler()}> <FaIcons.FaTrash className="icons tools-icon" /></button>
                </div>

                <button className="btn-popup"  onClick={() => setTool(!tool)}>
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



export { WatchLaterCard }