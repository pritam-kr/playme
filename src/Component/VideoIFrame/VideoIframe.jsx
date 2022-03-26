import React from "react";

export const VideoIframe = (ID) => {

  const {videoId} = ID
  return (
    <iframe className="video-frame"  src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  );
};
