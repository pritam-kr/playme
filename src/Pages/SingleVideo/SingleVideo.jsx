import React from "react"
import "./SingleVideo.css"
import { VideoIframe } from "../../Component/index"
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import {useParams} from "react-router-dom"
import {useVideoContext} from "../../Context/Index"

export const SingleVideo = () => {

    const {state: {videos}, getFilteredVideo} = useVideoContext()
 
    const {videoId} = useParams()

    // Now match params video ID from existing videos data
    const isVideo = getFilteredVideo?.find((eachVideo) => eachVideo._id === videoId)
   
    return getFilteredVideo && (<div className="single-videos-container main-container" style={{ marginTop: "5rem" }}>
    <div className="single-video-wrapper">
        <div className="video-player">
            <VideoIframe videoId={isVideo?._id} />
            <div className="video-info">
                <h1 className="space-between">{isVideo?.title} <span className="text-xm grey-text center"><FaIcons.FaEye className="view-icon"/> {isVideo?.view}</span></h1>
                <h3 className="creator-name">{isVideo?.creator}<FaIcons.FaCheckCircle className="icons verified-icon" /></h3>
                <ul>
                    <li className="text-lg"><FaIcons.FaThumbsUp className="icons sidebar-icons" /> Likes</li>
                    <li className="text-lg"><FaIcons.FaArchive className="icons sidebar-icons" /> Watch Later</li>
                </ul>
                <p className="text-lg video-description video-full-description"> <strong>Description:</strong> {isVideo?.description}</p>
            </div>
        </div>
    </div>
</div> )

}