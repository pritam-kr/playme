import React from "react";

export const VideoIframe = (link) => {
  return (
    
      <iframe
        width="560"
        height="315"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    
  );
};
