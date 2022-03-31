import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom"
import * as FaIcons from "react-icons/fa";
import { titleShort, descriptionShort } from "../../Utils/Index";
import { useAuthContext, usePlaylistContext, useHistoryContext} from "../../Context/Index";
import "./PlayListVideoCard.css"

const PlayListVideoCard = ({ eachVideo }) => {

    const {playlistId} = useParams()
    const navigate = useNavigate()

    const {addHistoryVideo} = useHistoryContext()

    const { isAuth } = useAuthContext();
    const { _id, thumbnail, title, creatorImg, creator, description } = eachVideo;

    const {deleteParticularVideo} = usePlaylistContext()

    const [activeTrashIcon, setActiveTrashIcon] = useState(false)

    //Single Video Handler and making history of it

    const singleAndHistoryVideoHandler = () => {
        
        if(isAuth){
            navigate(`/video/${_id}`)
            addHistoryVideo(eachVideo)
        }else{
            return
        }
    }

    return (
        <div className="card-box video-card playlist-video-card" key={_id}>
            <img
                src={thumbnail}
                alt={title}
                className="responsive-images video-thumbnail" onClick={() => singleAndHistoryVideoHandler()}
            /> 
            <div className="card-content ">
                <div className="space-between">
                    <div className="center">
                        <img
                            src={creatorImg}
                            alt="creator-img"
                            className="avatar img-responsive img-rounded avatar-ex-small creator-avatar"
                        />
                        <h2 className="card-title video-title"  onClick={() => navigate(`/video/${_id}`)}>{titleShort(title)}</h2>
                    </div>

                    <div className={activeTrashIcon === false ? "tools space-between": "tools active-trash-icon"} >
                        <button className="center" onClick={() =>deleteParticularVideo(eachVideo._id, playlistId)}>
                            <FaIcons.FaTrash className="icons tools-icon liked-cons" />
                        </button>
                    </div>

                    <button className="btn-popup" onClick={() => setActiveTrashIcon(!activeTrashIcon)}>
                        <FaIcons.FaEllipsisV className="icons card-icon" />
                    </button>
                </div>
                <p className="creator-title text-xm">
                    {creator} <FaIcons.FaCheckCircle className="icons" />
                </p>
                <p className="card-text video-description">
                    {descriptionShort(description)}
                </p>
            </div>
        </div>
    );
};

export { PlayListVideoCard };
