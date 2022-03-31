import React from "react";
import "./PlaylistVideos.css";
import { useParams } from "react-router-dom";
import { usePlaylistContext } from "../../Context/Index";
import {PlayListVideoCard} from "../../Component/index"
import {FixedLoader} from "../../Component/FixedLoader/FixedLoader"

const PlaylistVideos = () => {
  const { playlistId } = useParams();

  const {
    state: { playlists },
  } = usePlaylistContext();

  const isPlaylistVideo = playlists.find(
    (eachPlaylist) => eachPlaylist._id === playlistId
  );
  const getAllVideo = isPlaylistVideo?.videos;

  
  return (
    <div className="main-container">
      <header className="main-container-header">
        <h1 className="text-md">
          {isPlaylistVideo.title} ({getAllVideo.length})
        </h1>
        <div className="playlist-wrapper playlist-videos-wrapper">
            {getAllVideo?.length === 0 ? <FixedLoader message={"You dont have any video"} /> : getAllVideo?.map((eachVideo) =>  <PlayListVideoCard key={eachVideo._id} eachVideo={eachVideo}/>)}
        </div>
      </header>
    </div>
  );
};

export { PlaylistVideos };
