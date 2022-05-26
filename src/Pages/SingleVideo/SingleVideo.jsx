import React from "react";
import "./SingleVideo.css";
import { VideoIframe, NotesCard, Footer } from "../../Component/index";
import * as FaIcons from "react-icons/fa";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  useVideoContext,
  useLikesContext,
  useAuthContext,
  useWatchLaterContext,
  usePlaylistContext,
} from "../../Context/Index";
import { useState } from "react";
import { useNotes } from "../../Hooks/Index";

export const SingleVideo = () => {
  const [playlistName, setPlaylistName] = useState({ playlist: "" });
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const { getFilteredVideo } = useVideoContext();

  const { videoId } = useParams();

  const { createNotes } = useNotes();
  //For Liked Video
  const {
    saveLikedVideo,
    state: { likedVideo },
    removeLikedVideo,
  } = useLikesContext();

  // For Watch Later Video
  const {
    addToWatchLater, removeWatchLater,
    state: { watchLater },
  } = useWatchLaterContext();

  //For play list
  const {
    createPlaylist,
    addToPlayList,
    state: { playlists },
  } = usePlaylistContext();

  //Create playlist
  const playlistHandler = () => {
    createPlaylist(playlistName);
    setPlaylistName((prev) => ({ ...prev, playlist: "" }));
  };

  // Now match params video ID from existing videos data
  const isVideo = getFilteredVideo?.find(
    (eachVideo) => eachVideo._id === videoId
  );

  // Notes Created
  const createdNotes = isVideo?.notes;

  // liked video
  const likeVideoHandler = () => {
    saveLikedVideo(isVideo);
  };

  // watch later video
  const watchLaterVideoHandler = () => {
    addToWatchLater(isVideo);
  };

  // Note functionality is not working yet I'm on it
  const [notesValue, setNoteValue] = useState({ title: "", noteBody: "" });

  const notesHandler = () => {
    //Sending notes to custom hooks useNotes
    createNotes(notesValue, isAuth, videoId);
  };

  return (
    getFilteredVideo && (
      <>
        <div
          className="single-videos-container main-container"
          style={{ marginTop: "5rem" }}
        >
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
                  {likedVideo.find((eachVideo) => eachVideo._id === videoId) ? (
                    <li
                      className="text-lg btn-likes"
                      onClick={() => removeLikedVideo(videoId)}
                    >
                      <FaIcons.FaThumbsUp className="icons sidebar-icons  active-liked-video" />{" "}
                      Liked
                    </li>
                  ) : (
                    <li
                      className="text-lg btn-likes"
                      onClick={() =>
                        isAuth ? likeVideoHandler() : navigate("/login")
                      }
                    >
                      <FaIcons.FaThumbsUp className="icons sidebar-icons" />{" "}
                      Like
                    </li>
                  )}

                  {watchLater.find((eachVideo) => eachVideo._id === videoId) ? (
                    <li className="text-lg" onClick={() => removeWatchLater(videoId)}>
                      <FaIcons.FaClock className="icons sidebar-icons active-liked-video" />{" "}
                      Watch Later
                    </li>
                  ) : (
                    <li
                      className="text-lg"
                      onClick={() =>
                        isAuth ? watchLaterVideoHandler() : navigate("/login")
                      }
                    >
                      <FaIcons.FaClock className="icons sidebar-icons" /> Watch
                      Later
                    </li>
                  )}

                  <li
                    className="text-lg"
                    onClick={() =>
                      isAuth ? setModal(true) : navigate("/login")
                    }
                  >
                    <FaIcons.FaFolderPlus className="icons sidebar-icons" />{" "}
                    Save to Playlist
                  </li>
                </ul>
                <p className="text-lg video-description video-full-description">
                  {" "}
                  <strong>Description:</strong> {isVideo?.description}
                </p>
              </div>
            </div>
          </div>

          {/*Notes Start */}
          {isAuth && (
            <div className="notes-wrapper">
              <h2 className="text-md heading">Take Notes</h2>

              {/*Form for new note */}
              <div className="note-form">
                <input
                  type="text"
                  className="input"
                  placeholder="Title"
                  onChange={(event) =>
                    setNoteValue((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }))
                  }
                />
                <textarea
                  type="text"
                  placeholder="Notes"
                  className="text-area textarea-input"
                  onChange={(event) =>
                    setNoteValue((prev) => ({
                      ...prev,
                      noteBody: event.target.value,
                    }))
                  }
                ></textarea>
                <button
                  className="btn btn-primary btn-add"
                  onClick={notesHandler}
                >
                  {" "}
                  Add Note
                </button>
              </div>

              <div className="notes-container">
                {createdNotes?.map((eachNote, i) => (
                  <NotesCard
                    title={eachNote.title}
                    description={eachNote.noteBody}
                    key={i}
                    noteId={eachNote._id}
                    videoId={videoId}
                  />
                ))}
              </div>
            </div>
          )}
          {/*Notes end*/}
        </div>
        <Footer />

        {/*  Playlist modal start */}
        <div
          className="playlist-modal-container"
          style={modal ? { display: "flex" } : { display: "none" }}
        >
          <div className="create-playlist-wrapper">
            {/*---Add  to new play list and show exiting playlist */}
            <h3 className="btn-modal-close space-between">
              PlayList{" "}
              <FaIcons.FaTimesCircle
                onClick={() => setModal(false)}
                className="icons"
              />
            </h3>
            <div className="lists-playlist">
              {playlists?.map((data, i) => {
                return data.videos.find(
                  (eachVideo) => eachVideo._id === isVideo._id
                ) ? (
                  <button className="playlist-one" key={i}>
                    <FaIcons.FaCheckCircle className="icons tools-icon icon-circle-plus" />{" "}
                    {data.title}{" "}
                  </button>
                ) : (
                  <button
                    className="playlist-one"
                    key={data._id}
                    onClick={() => addToPlayList(data, isVideo)}
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
                  value={playlistName.playlist}
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
                onClick={() => playlistHandler()}
              >
                <FaIcons.FaPlusCircle className="icons tools-icon icon-circle-plus" />
                Create New Playlist
              </button>
            </div>
          </div>
        </div>
        {/*  Playlist modal end */}
      </>
    )
  );
};
