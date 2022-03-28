import React from "react";
import "./HistoryCard.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom"
 

const HistoryCard = ({ eachVideo }) => {

  //Doing Destructure 
  const { _id, thumbnail, title, description, creator, view } = eachVideo

  //or Single Video
  const navigate = useNavigate()
  const singleVideoHandler = (_id) => {
    navigate(`/video/${_id}`)
  }


  return (

    <div className="images-card horizontal-cart-card history-card" key={_id}>
      <img className="card-img" src={thumbnail} alt="" onClick={() => singleVideoHandler(_id)} />

      <div className="card-content video-content">
        <h3 className="video-title space-between" onClick={() => singleVideoHandler(_id)}>{title} <span className="text-xm grey-text center">
          <FaIcons.FaEye className="view-icon" /> {view}
        </span></h3>
        <p className="creator-title text-xm">{creator} <FaIcons.FaCheckCircle className="icons" /></p>
        <p className="card-text video-description">
          {description}
        </p>
      </div>
    </div>

  );
};

export { HistoryCard };
