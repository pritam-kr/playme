import React, {useState} from "react"
import {descriptionShort, titleShort} from "../../Utils/Index"
import * as FaIcons from "react-icons/fa";
import "./VideoCard.css"
import {useNavigate} from "react-router-dom"
import {useLikesContext, useHistoryContext, useAuthContext, useWatchLaterContext} from "../../Context/Index"

export const VideoCard = ({eachVideo}) => {
    const {isAuth} = useAuthContext()
    const navigate = useNavigate()
    const [tool, setTool] = useState(false)

    //For Liked Video
    const {saveLikedVideo} = useLikesContext()

    //For History Video
    const {addHistoryVideo} = useHistoryContext()

    //For Watchlater video
    const {addToWatchLater} = useWatchLaterContext()
    
    //Doing Destructure 
    const {_id, thumbnail, creatorImg, title, description, creator} = eachVideo

    const singleVideoHandler = () => {
        //doing navigate to videoId
        navigate(`/video/${_id}`)
        addHistoryVideo(eachVideo)
    }

    //like handler
    const likedHandler = () => {
       // sending liked video object to likes context
       (isAuth ? saveLikedVideo(eachVideo) :navigate("/login"))
       setTool(false)
    }

    // Watch Later Handler 
    const watchLaterHandler = () => {
        (isAuth ? addToWatchLater(eachVideo) :navigate("/login"))
        setTool(false)
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
                       <p className="center" onClick={() => likedHandler()}> <FaIcons.FaThumbsUp className="icons tools-icon liked-cons"/></p>
                      <p  className="center"  onClick={() =>watchLaterHandler()}>  <FaIcons.FaClock className="icons tools-icon watchLater-icon"/></p>
                    </div>

                    <button className="btn-popup"  onClick={() => setTool(!tool)}>
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