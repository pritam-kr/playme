import React from "react"
import {descriptionShort, titleShort} from "../../Utils/Index"
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import "./VideoCard.css"

export const VideoCard = ({eachVideo}) => {
    return (
        <div className="card-box video-card">
            <img
                src={eachVideo.thumbnail}
                alt=""
                className="responsive-images video-thumbnail"
            />
            <div className="card-content ">
                <div className="space-between">
                    <div className="center">
                        <img
                            src={eachVideo.creatorImg}
                            alt="creator-img"
                            className="avatar img-responsive img-rounded avatar-ex-small creator-avatar"
                        />
                        <h2 className="card-title video-title">
                            {titleShort(eachVideo.title)}
                        </h2>
                    </div>

                    <p>
                        <FaIcons.FaEllipsisV className="icons card-icon" />
                    </p>
                </div>
                <p className="creator-title text-xm">{eachVideo.creator} <FaIcons.FaCheckCircle className="icons" /></p>
                <p className="card-text video-description">
                    {descriptionShort(eachVideo.description)}
                </p>
            </div>
        </div>
    )
}