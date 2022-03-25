import React from "react";
import "./Explore.css";
import { Sidebar } from "../../Component/index";


export const Explore = () => {
    return (
        <div className="explore-container">
            <Sidebar />
            <div className="video-list-container">
                
                <div className="categories-wrapper">
                    <ul>
                        <li className="category-list">All</li>
                        <li className="category-list">Front-end</li>
                        <li className="category-list">Back-end</li>
                        <li className="category-list">Game</li>
                        <li className="category-list">API</li>
                        <li className="category-list">Reactjs</li>
                    </ul>
                </div>

                {/* Video listing cards will show here */}
                <div className="video-container">
                    <h1>Explore</h1>
                </div>
            </div>
        </div>
    );
};
