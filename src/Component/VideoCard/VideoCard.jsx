import React from "react"
import {descriptionShort, titleShort} from "../../Utils/Index"
import * as FaIcons from "react-icons/fa";
import "./VideoCard.css"
import {useNavigate} from "react-router-dom"

export const VideoCard = ({eachVideo}) => {
    const navigate = useNavigate()

    //Doing Destructure 
    const {_id, thumbnail, creatorImg, title, description, creator} = eachVideo

    const singleVideoHandler = () => {
        //doing navigate to videoId
        navigate(`/video/${_id}`)
    }


    return (
        <div className="card-box video-card">
            <img
                src={thumbnail}
                alt={title}
                className="responsive-images video-thumbnail" onClick={() => singleVideoHandler()}
            />
            <div className="card-content ">
                <div className="space-between">
                    <div className="center">
                        <img
                            src={creatorImg}
                            alt="creator-img"
                            className="avatar img-responsive img-rounded avatar-ex-small creator-avatar"
                        />
                        <h2 className="card-title video-title">
                            {titleShort(title)}
                        </h2>
                    </div>

                    <p>
                        <FaIcons.FaEllipsisV className="icons card-icon" />
                    </p>
                </div>
                <p className="creator-title text-xm">{creator} <FaIcons.FaCheckCircle className="icons" /></p>
                <p className="card-text video-description">
                    {descriptionShort(description)}
                </p>
            </div>
        </div>
    )
}