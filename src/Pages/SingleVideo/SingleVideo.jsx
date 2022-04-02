import React from "react";
import "./SingleVideo.css";
import { VideoIframe } from "../../Component/index";
import * as FaIcons from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import {
    useVideoContext,
    useLikesContext,
    useAuthContext,
    useWatchLaterContext,
    usePlaylistContext,
    
} from "../../Context/Index";
import { useState } from "react";

export const SingleVideo = () => {
    const [playlistName, setPlaylistName] = useState({playlist: ""})
    const { isAuth } = useAuthContext();
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);
    
    const {
        state: { videos },
        getFilteredVideo,
    } = useVideoContext();

    const { videoId } = useParams();
    //For Liked Video
    const { saveLikedVideo, state: {likedVideo}, removeLikedVideo } = useLikesContext();
 
    // For Watch Later Video
    const { addToWatchLater } = useWatchLaterContext();

    //For play list
    const {createPlaylist,  addToPlayList, state: {playlists} } = usePlaylistContext()
    
  
    //Create playlist 
    const playlistHandler = () =>{
         createPlaylist(playlistName)   
         setPlaylistName((prev) => ({...prev, playlist: ""}))
    }

    // Now match params video ID from existing videos data
    const isVideo = getFilteredVideo?.find(
        (eachVideo) => eachVideo._id === videoId
    );

    
    // liked video
    const likeVideoHandler = () => {
        saveLikedVideo(isVideo);
    };

    // watch later video
    const watchLaterVideoHandler = () => {
        addToWatchLater(isVideo);
    };

    return (
        getFilteredVideo && (
            <div
                className="single-videos-container main-container"
                style={{ marginTop: "5rem" }}>
                <div className="single-video-wrapper">
                    <div className="video-player">
                        <VideoIframe videoId={isVideo?._id} />

                        <div className="video-info">

                            <h1 className="space-between">
                                {isVideo?.title}
                                <span className="text-xm grey-text center">
                                    <FaIcons.FaEye className="view-icon" /> {isVideo?.view}
                                </span>
                            </h1>
                            <h3 className="creator-name">
                                {isVideo?.creator}
                                <FaIcons.FaCheckCircle className="icons verified-icon" />
                            </h3>
                            <ul>

                                {likedVideo.find((eachVideo) => eachVideo._id === videoId) ? <li
                                    className="text-lg btn-likes active-liked-video"
                                    onClick={() =>
                                        removeLikedVideo(videoId)
                                    }
                                >
                                    <FaIcons.FaThumbsUp className="icons sidebar-icons" /> Liked
                                </li>: <li
                                    className="text-lg btn-likes"
                                    onClick={() =>
                                        isAuth ? likeVideoHandler() : navigate("/login")
                                    }
                                >
                                    <FaIcons.FaThumbsUp className="icons sidebar-icons" /> Like
                                </li>}

                                

                                <li
                                    className="text-lg"
                                    onClick={() =>
                                        isAuth ? watchLaterVideoHandler() : navigate("/login")
                                    }
                                >
                                    <FaIcons.FaClock className="icons sidebar-icons" /> Watch
                                    Later
                                </li>

                                <li
                                    className="text-lg"
                                    onClick={() => (isAuth ? setModal(true) : navigate("/login"))}
                                >
                                    <FaIcons.FaFolderPlus className="icons sidebar-icons" /> Save
                                    to Playlist
                                </li>
                            </ul>
                            <p className="text-lg video-description video-full-description">
                                {" "}
                                <strong>Description:</strong> {isVideo?.description}
                            </p>


                        </div>
                    </div>
                </div>

                 {/*  Playlist modal start */ }
                 <div className="playlist-modal-container"
                 style={modal ? { display: "flex" } : { display: "none" }}>
                 <div className="create-playlist-wrapper">

                     {/*---Add  to new play list and show exiting playlist */}
                       <h3  className="btn-modal-close space-between">PlayList <FaIcons.FaTimesCircle onClick={() => setModal(false)} className="icons"/></h3>             
                     <div className="lists-playlist">
                          {playlists?.map((data, i) => {
                              return (data.videos.find((eachVideo) => eachVideo._id === isVideo._id) ? <button className="playlist-one" key={i}><FaIcons.FaCheckCircle className="icons tools-icon icon-circle-plus" /> {data.title}  </button>: <button className="playlist-one" key={data._id} onClick={() => addToPlayList(data, isVideo)}>
                              <FaIcons.FaPlusCircle className="icons tools-icon icon-circle-plus" />
                              {data.title}
                          </button> )
                          })}
                     </div>

                     <div className="add-new-playlist">
                         <div className="input-playlist-wrapper">
                             <input
                                 type="text"
                                 className="input"
                                 value={playlistName.playlist}
                                 placeholder="Enter playlist Name" onChange={(event) => setPlaylistName((prev) => ({...prev, playlist: event.target.value}))}
                             />
                         </div>

                         <button className="btn-playlist-create center" onClick={() => playlistHandler()}>
                             <FaIcons.FaPlusCircle className="icons tools-icon icon-circle-plus" />
                             Create New Playlist
                         </button>
                     </div>
                 </div>
                </div>
                 {/*  Playlist modal end */ }

            </div>
        )
    );
};
