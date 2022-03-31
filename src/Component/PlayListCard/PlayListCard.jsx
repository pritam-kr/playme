import React from "react";
import "./PlayListCard.css";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";
import * as FaIcons from "react-icons/fa"
import {usePlaylistContext} from "../../Context/Index"

const PlayListCard = ({ eachPlaylist }) => {
  const { title, videos, _id } = eachPlaylist;
  const navigate = useNavigate()

  const {deletePlaylist} = usePlaylistContext()

  const playlistVideosHandler = () => {
   navigate(`/playlist/${_id}`)
  }

  return (
    <div className="playlist-card">
      <div className="playlist-info">
        <img
          src={
            videos?.length === 0
              ? "https://res.cloudinary.com/dhqxln7zi/image/upload/v1648118531/new_vohp8t.jpg"
              : videos.slice(-1)[0]?.thumbnail
          }
          onClick={() => playlistVideosHandler()}
          alt={title}
          className="responsive-images playlist-image"
        />
        <h3 className="playlist-title space-between">
          {title} ({videos.length})
          <span> <FaIcons.FaTrash className="icons card-icon btn-playlist-delete" onClick={() => deletePlaylist(_id)}/></span>
        </h3>
      </div>
    </div>
  );
};

export { PlayListCard };
