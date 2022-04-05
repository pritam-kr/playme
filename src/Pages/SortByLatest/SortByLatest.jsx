import React from "react";
import { Footer } from "../../Component/index";
import {
  useVideoContext,
  useHistoryContext,
  useAuthContext,
} from "../../Context/Index";
import * as FaIcons from "react-icons/fa";
import { timeAgoFormatter } from "../../Utils/Index";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const SortByLatest = () => {
  const { getSortByLatest } = useVideoContext();
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();
  const { addHistoryVideo } = useHistoryContext();

  const singleVideoHandler = (eachVideo) => {
    navigate(`/video/${eachVideo._id}`);
    isAuth && addHistoryVideo(eachVideo);
  };

  return (
    <>
      <div className="main-container watchlater-container latest-video-container">
        <header className="main-container-header">
          <h1 className="text-md">Latest Video ({getSortByLatest?.length})</h1>
        </header>

        <div className="playlist-wrapper history-video-wrapper">
          {getSortByLatest?.map((eachVideo, i) => {
            return (
              <div
                className="images-card horizontal-cart-card history-card"
                key={i}
              >
                <img
                  className="card-img"
                  src={eachVideo.thumbnail}
                  alt={eachVideo.title}
                  onClick={() => singleVideoHandler(eachVideo)}
                />

                <div className="card-content video-content">
                  <h3 className="video-title space-between">
                    {eachVideo.title}
                  </h3>
                  <p className="creator-title text-xm">
                    {eachVideo.creator}
                    <FaIcons.FaCheckCircle className="icons" />
                  </p>
                  <p className="text-xm grey-text">
                    <FaIcons.FaEye className="view-icon" /> {eachVideo.view}
                    <FaIcons.FaCircle className="icons bullet-icon" />
                    <span>{timeAgoFormatter(eachVideo.timeStamp)}</span>
                  </p>
                  <p className="card-text video-description">
                    {eachVideo.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { SortByLatest };
