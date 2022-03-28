import React from "react";
import "./Explore.css";
import {VideoCard,Gif} from "../../Component/index"
import {useVideoContext} from "../../Context/Index"

 

export const Explore = () => {

    const {getUniqueCategory, dispatch, getFilteredVideo} = useVideoContext()
   
    return (
        <div className="explore-container main-container">
            <div className="video-list-container"> 
                
                <div className="categories-wrapper">
                    <ul>
                      <li className={getUniqueCategory?.length === 5 ? "category-list active" : "category-list"} onClick={() => dispatch({type: "FILTER_RESET"})}>All</li> 
                        {getUniqueCategory?.map((eachCategory, i) => <li className="category-list" onClick={() => dispatch({type: "GET_CATEGORY_NAME", payload: eachCategory})} key={i}>{eachCategory}</li>)}
                    </ul> 
                </div>

                {/* Video listing cards will show here */}
                <div className="video-container">
                     {getFilteredVideo.length === 0 ? <Gif />: getFilteredVideo?.map((eachVideo) => <VideoCard  eachVideo={eachVideo} key={eachVideo.id}/> ) }
                </div>
            </div>
        </div>
    );
};
