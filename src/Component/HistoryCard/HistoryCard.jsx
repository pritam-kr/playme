import React from "react";
import "./HistoryCard.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useHistoryContext } from "../../Context/Index";
import { timeAgoFormatter } from "../../Utils/TimeAgo";
 

const HistoryCard = ({ eachVideo }) => {
  //Doing Destructure
  const { _id, thumbnail, title, description, creator, view } = eachVideo;

  const { deleteHistory } = useHistoryContext();

  //or Single Video
  const navigate = useNavigate();
  const singleVideoHandler = (_id) => {
    navigate(`/video/${_id}`);
  };

  return (
    <div className="latest-card history-card" key={_id}>
      <img
        className="horizontal-card-thumbnail"
        src={thumbnail}
        alt="Thumbnail"
        onClick={() => singleVideoHandler(_id)}
      />
      <div className="card-content video-content">
        <h3 className="video-title space-between"> {title} </h3>{" "}
        <p className="creator-title text-xm channel-name">
          {" "}
          {creator} <FaIcons.FaCheckCircle className="icons" />
        </p>{" "}
        <p className="text-xm grey-text">
          <FaIcons.FaEye className="view-icon" /> {view} <span>{timeAgoFormatter(eachVideo.timeStamp)}</span>
        </p>{" "}
        <p className="card-text video-description"> {description} </p>
        <span>
          <FaIcons.FaTrash
            className="icons history-delete-icon"
            onClick={() => deleteHistory(_id)}
          />{" "}
        </span>{" "}
      </div>{" "}
    </div>
  );
};

export { HistoryCard };
