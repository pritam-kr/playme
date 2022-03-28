import React, {useState} from "react"
import {descriptionShort, titleShort} from "../../Utils/Index"
import * as FaIcons from "react-icons/fa";
import "./VideoCard.css"
import {useNavigate} from "react-router-dom"
import {useLikesContext, useHistoryContext} from "../../Context/Index"

export const VideoCard = ({eachVideo}) => {
    const navigate = useNavigate()
    const [tool, setTool] = useState(false)

    //For Liked Video
    const {saveLikedVideo} = useLikesContext()

    //For History Video
    const {addHistoryVideo} = useHistoryContext()
    
    //Doing Destructure 
    const {_id, thumbnail, creatorImg, title, description, creator} = eachVideo

    const singleVideoHandler = () => {
        //doing navigate to videoId
        navigate(`/video/${_id}`)
        addHistoryVideo(eachVideo)
    }

    //Tool handler
    const toolHandler = () => {
       setTool(false)
       // sending liked video object to likes context
       saveLikedVideo(eachVideo)
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
                    
                    <div className="tools space-between" style={tool ? {display: "flex"}: {display: "none"}}>
                       <p className="center" onClick={() => toolHandler()}> <FaIcons.FaThumbsUp className="icons tools-icon"/></p>
                      <p  className="center"  onClick={() =>toolHandler()}>  <FaIcons.FaClock className="icons tools-icon"/></p>
                    </div>

                    <button className="btn-popup"  onMouseEnter={() => setTool(true)} onClick={() => setTool(false)}>
                        <FaIcons.FaEllipsisV className="icons card-icon"/> 
                    </button>
                </div>
                <p className="creator-title text-xm">{creator} <FaIcons.FaCheckCircle className="icons" /></p>
                <p className="card-text video-description">
                    {descriptionShort(description)}
                </p>
            </div>
        </div>
    )
}