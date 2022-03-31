import React from "react";
import "./HistoryCard.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import {useHistoryContext} from "../../Context/Index"
 

const HistoryCard = ({ eachVideo }) => {

  //Doing Destructure 
  const { _id, thumbnail, title, description, creator, view } = eachVideo

  const { deleteHistory} = useHistoryContext()

  //or Single Video
  const navigate = useNavigate()
  const singleVideoHandler = (_id) => {
    navigate(`/video/${_id}`)
  }


  return (

    <div className="images-card horizontal-cart-card history-card" key={_id}>
      <img className="card-img" src={thumbnail} alt="" onClick={() => singleVideoHandler(_id)} />

      <div className="card-content video-content">
        <h3 className="video-title space-between" > {title} <span><FaIcons.FaTrash className="icons" onClick={() => deleteHistory(_id)}/></span></h3>
        <p className="creator-title text-xm">{creator} <FaIcons.FaCheckCircle className="icons" /></p>
        <p className="text-xm grey-text">
          <FaIcons.FaEye className="view-icon" /> {view}
        </p>
        <p className="card-text video-description"> 
          {description}
        </p>
      </div>
    </div>

  );
};

export { HistoryCard };
