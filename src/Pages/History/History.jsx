import React from "react";
import * as FaIcons from "react-icons/fa";
import "./History.css"
import {HistoryCard, Footer} from "../../Component/index"
import {useHistoryContext} from "../../Context/Index"

const History = () => {

  const {state: {watchedVideo}, clearHistory} = useHistoryContext()
  
  return (
    <>
    <div className="main-container history-container">
      <header className="main-container-header space-between">
        <h2 className="text-md">History ({watchedVideo?.length})</h2> 
        {watchedVideo?.length > 0 && <button className="btn btn-primary btn-clear" onClick={() => clearHistory()}> 
          <FaIcons.FaTrashAlt className="icons" /> Clear
        </button>}
      </header>

      <div className="playlist-wrapper history-video-wrapper">
        {watchedVideo?.map((eachVideo) => <HistoryCard key={eachVideo._id} eachVideo={eachVideo}/>)}
      </div>
    </div>
    <Footer />
    </>
  );
};

export { History };
