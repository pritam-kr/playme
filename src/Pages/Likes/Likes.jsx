import React from "react";
import "./Likes.css";
import { Card, FixedLoader } from "../../Component/index";
import { useLikesContext } from "../../Context/Index";


const Likes = () => {
  const {
    state: { likedVideo },
  } = useLikesContext();

  return (
    <div className="main-container likes-container">
      <header className="main-container-header">
        <h1 className="text-md">Liked Video ({likedVideo.length})</h1>
      </header>
      <div className="playlist-wrapper liked-video-wrapper">
      { likedVideo?.length === 0 ? <FixedLoader message={"There is no Liked video. Please add 😊"} /> : likedVideo?.map((eachVideo) => (
          <Card key={eachVideo._id} eachVideo={eachVideo} />
        ))}
      </div>
    </div>
  );
};

export { Likes };
