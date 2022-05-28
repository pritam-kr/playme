import React from "react";
import { useVideoContext } from "../../Context/VideoContext";
import "./SearchResult.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ searchQuery, setShowSearchResult, inputRef }) => {
  const navigate = useNavigate();

  const {
    state: { videos },
  } = useVideoContext();

  const isSearched = [...videos]?.filter(
    (eachVideo) =>
      eachVideo.title.toLowerCase().includes(searchQuery.query.toLowerCase()) ||
      eachVideo.categoryName.toLowerCase().includes(searchQuery.query.toLowerCase())
  );

  const singleVideoHandler = (_id) => {
    //doing navigate to videoId
      inputRef.current.value = ""
    navigate(`/video/${_id}`);
    setShowSearchResult(false);
   
  };

  return (
    <div className="search-result">
      <div className="search-result-wrapper">
        {isSearched.length === 0 ? (
          <p className="text-md" style={{ marginTop: "1rem" }}>
            Match not found 😞
          </p>
        ) : (
          isSearched?.map((eachVideo, i) => (
            <div
              className="searched-item"
              key={i}
              onClick={() => singleVideoHandler(eachVideo._id)}
            >
              <div className="item-one">
                <FaIcons.FaHistory />
              </div>
              <div className="item-two">
                <img src={eachVideo.thumbnail} alt="thumbnail" />{" "}
                <p>{eachVideo.title}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { SearchResult };
