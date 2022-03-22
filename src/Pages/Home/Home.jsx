import React from "react";
import "./Home.css";
import { Navigation, Hero } from "../../Component/index"

const Home = () => {
    return (
        <div className="home-container">
            <img
                src="https://user-images.githubusercontent.com/84632214/159449183-427eeecf-2f8d-414d-b806-a4ae5858da3c.png"
                alt="landing"
                className="responsive-images landing-image"
            />
            <div className="landing-container">
                <Navigation />
                <Hero />
            </div>
        </div>
    );
};

export { Home };
