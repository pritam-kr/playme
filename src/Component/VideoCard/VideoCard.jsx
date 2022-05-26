import React, { useState } from "react";
import { descriptionShort, titleShort, timeAgoFormatter } from "../../Utils/Index";
import * as FaIcons from "react-icons/fa";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";
import {
  useLikesContext,
  useHistoryContext,
  useAuthContext,
  useWatchLaterContext,
  usePlaylistContext,
} from "../../Context/Index";

export const VideoCard = ({ eachVideo }) => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();
  const [tool, setTool] = useState(false);

  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);
  const {
    createPlaylist,
    addToPlayList,
    state: { playlists },
  } = usePlaylistContext();
  const [playlistName, setPlaylistName] = useState({ playlist: "" });
 

  //Playlist Handler
  const playlistHandlers = () => {
    createPlaylist(playlistName);
  };

  //Modal Handler
  const modalHandler = () => {
    setCreatePlaylistModal(true);
    setTool(false);
  };

  //For Liked Video
  const { saveLikedVideo } = useLikesContext();

  //For History Video
  const { addHistoryVideo } = useHistoryContext();

  //For Watchlater video
  const { addToWatchLater } = useWatchLaterContext();

  //Doing Destructure
  const { _id, thumbnail, creatorImg, title, description, creator, view, timeStamp } = eachVideo;

  const singleVideoHandler = () => {
    //doing navigate to videoId
    navigate(`/video/${_id}`);
    if(isAuth){
      addHistoryVideo(eachVideo);
    }
  };

  //like handler
  const likedHandler = () => {
    // sending liked video object to likes context
    isAuth ? saveLikedVideo(eachVideo) : navigate("/login");
    setTool(false);
  };

  // Watch Later Handler
  const watchLaterHandler = () => {
    isAuth ? addToWatchLater(eachVideo) : navigate("/login");
    setTool(false);
  };

  return (
    <>
      <div className="card-box video-card">
        <img
          src={thumbnail}
          alt={title}
          className="responsive-images video-thumbnail"
          onClick={() => singleVideoHandler()}
        />
        <div className="card-content ">
          <div className="space-between">
            <div className="center">
              <img
                src={creatorImg}
                alt="creator-img"
                className="avatar img-responsive img-rounded avatar-ex-small creator-avatar"
              />
              <h2 className="card-title video-title">{titleShort(title)}</h2>
            </div>

            <div
              className="tools space-between"
              style={tool ? { display: "flex" } : { display: "none" }}
            >
              <button className="center" onClick={() => likedHandler()}>
                <FaIcons.FaThumbsUp className="icons tools-icon liked-cons" />
              </button>
              <button className="center" onClick={() => watchLaterHandler()}>
                <FaIcons.FaClock className="icons tools-icon watchLater-icon" />
              </button>
              {isAuth && (
                <button className="center" onClick={() => modalHandler()}>
                  <FaIcons.FaFolderPlus className="icons tools-icon watchLater-icon" />
                </button>
              )}
            </div>

            <button className="btn-popup" onClick={() => setTool(!tool)}>
              <FaIcons.FaEllipsisV className="icons card-icon" />
            </button>
          </div>
          <p className="creator-title text-xm">
            {creator} <FaIcons.FaCheckCircle className="icons" />
          </p>
          <p className="creator-title view-title text-xm">
            {view} views <FaIcons.FaCircle  className="icons"/> <span>{timeAgoFormatter(timeStamp) }</span>
          </p>
          <p className="card-text video-description">
            {descriptionShort(description)}
          </p>
        </div>

        {/*  Playlist modal start */}
        <div
          className="playlist-modal-container"
          style={
            createPlaylistModal ? { display: "flex" } : { display: "none" }
          }
        >
          <div className="create-playlist-wrapper">
            {/*---Add  to new play list and show exiting playlist */}
            <h3 className="btn-modal-close space-between">
              PlayList 
              <FaIcons.FaTimesCircle
                onClick={() => setCreatePlaylistModal(false)}
                className="icons"
              />
            </h3>
            <div className="lists-playlist">
              {playlists?.map((data, i) => {
                return data.videos.find(
                  (video) => video._id === eachVideo._id
                ) ? (
                  <button className="playlist-one">
                    {" "}
                    <FaIcons.FaCheckCircle className="icons tools-icon icon-circle-plus" />{" "}
                    {data.title}
                  </button>
                ) : (
                  <button
                    className="playlist-one"
                    key={data._id}
                    onClick={() => addToPlayList(data, eachVideo)}
                  >
                    <FaIcons.FaPlusCircle className="icons tools-icon icon-circle-plus" />
                    {data.title}
                  </button>
                );
              })}
            </div>

            <div className="add-new-playlist">
              <div className="input-playlist-wrapper">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter playlist Name"
                  onChange={(event) =>
                    setPlaylistName((prev) => ({
                      ...prev,
                      playlist: event.target.value,
                    }))
                  }
                />
              </div>

              <button
                className="btn-playlist-create center"
                onClick={() => playlistHandlers()}
              >
                <FaIcons.FaPlusCircle className="icons tools-icon icon-circle-plus" />
                Create New Playlist
              </button>
            </div>
          </div>
        </div>  
        {/*  Playlist modal end */}
      </div>
    </>
  );
};
