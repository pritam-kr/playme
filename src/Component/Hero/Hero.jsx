import React from "react";
import "./Hero.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import { useVideoContext, useAuthContext } from "../../Context/Index";

const Hero = () => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();
  const {
    getUniqueCategory,
    dispatch,
    state: { categoryName },
  } = useVideoContext();

  const categoryHandler = (category) => {
    if (isAuth) {
      dispatch({ type: "VIDEOS_CATEGORY_NAME", payload: category });
      navigate("/explore");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2>Learn New trends with</h2>
        <h1 className="site-name center">
          <FaIcons.FaPlayCircle /> PlayMe
        </h1>
        <p className="text-lg" style={{ marginTop: "1rem" }}>
          PlayMe is a learning platform for students.
        </p>
        <div className="searchbar-wrapper center">
          <button
            className="btn btn-explore center"
            onClick={() => navigate("/explore")}
          >
            <BiIcons.BiVideoPlus className="icons video-icon" />
            Explore 
          </button>
        </div>

        <div className="videos-category">
          <h2 className="text-md">Videos Categories</h2>
          {getUniqueCategory?.map((eachCategory, i) => (
            <button
              className="category-chips"
              onClick={() => categoryHandler(eachCategory)}
              key={i}
            >
              {eachCategory}
            </button>
          ))}
        </div>

        <FaIcons.FaGithub />
      </div>
    </div>
  );
};

export { Hero };
