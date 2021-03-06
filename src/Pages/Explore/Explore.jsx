import React from "react";
import "./Explore.css";
import {VideoCard,Gif, Footer} from "../../Component/index"
import {useVideoContext} from "../../Context/Index"

export const Explore = () => {

    const {getUniqueCategory, dispatch, getFilteredVideo, state:{categoryName, loader}, searchValue} = useVideoContext()
   
    return (
        <>
        <div className="explore-container main-container">
            <div className="video-list-container"> 
                
                <div className="categories-wrapper">
                    <ul>
                      <button className={categoryName === "ALL" ? "category-list active" : "category-list"} onClick={() => dispatch({type: "FILTER_RESET"})}>All</button> 

                        {getUniqueCategory?.map((eachCategory, i) => <button className={eachCategory === categoryName ? "category-list active" : "category-list" } onClick={() => dispatch({type: "GET_CATEGORY_NAME", payload: eachCategory})} key={i}>{eachCategory}</button>)}
                    </ul> 
                </div>

                {/* Video listing cards will show here */}
                {loader? <div className="loader-container"><Gif /></div> : <div className="video-container">
                {getFilteredVideo?.map((eachVideo) => <VideoCard  eachVideo={eachVideo} key={eachVideo.id}/> )}
                </div>}

            </div>
            
        </div>
        <Footer />
        </>
    );
};


// getFilteredVideo?.filter((eachVideo) => {
//     if(searchValue === ""){
//         return eachVideo
//     }else if(eachVideo.title.toLowerCase().includes(searchValue.toLowerCase())){
//         return eachVideo
//     } 
// })