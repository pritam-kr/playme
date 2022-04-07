import React, { useState } from "react";
import "./Playlist.css";
import { usePlaylistContext } from "../../Context/PlaylistContext";
import { PlayListCard, Footer } from "../../Component/index";
import * as FaIcons from "react-icons/fa";
 

export const Playlist = () => {
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);
  const [playlistName, setPlaylistName] = useState({ playlist: "" });

  const {
    state: { playlists },
    createPlaylist,
  } = usePlaylistContext();

  const playlistHandler = () => {
    createPlaylist(playlistName);
    setCreatePlaylistModal(false)
  };

 
  return (
    <>
      <div className="main-container playlist-container">
        <header className="main-container-header space-between">
          <h1 className="text-md">Playlist ({playlists?.length})</h1>

          <button className="btn btn-primary center" onClick={() => setCreatePlaylistModal(true)}><FaIcons.FaPlusCircle className="icons" />Playlist</button>
        </header>

        <div className="playlist-wrapper playlist-video-wrapper">
          {playlists?.map((eachPlaylist) => (
            <PlayListCard eachPlaylist={eachPlaylist} key={eachPlaylist._id} />
          ))}
        </div>
      </div>

      {/*==Modal for create playlist==*/}
      <div className="create-playlist-modal-wrapper" style={createPlaylistModal===false ? {display: "none"}: {display: "flex"}}>
     
        <div className="create-playlist-modal" > 
        <div className="space-between modal-close-button"> <h4 className="text-sm">PlayList</h4> <FaIcons.FaTimesCircle className="icons tools-icon " onClick={() => setCreatePlaylistModal(false)}/></div>
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
            onClick={() => playlistHandler()}
          >
            {" "}
            <FaIcons.FaPlusCircle className="icons tools-icon icon-circle-plus" />
            Create New Playlist
          </button>
        </div>
      </div>
      {/*==Modal for create playlist==*/}

      <Footer />
    </>
  );
};
