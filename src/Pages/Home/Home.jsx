import React from "react";
import "./Home.css";
import { Navigation, Hero } from "../../Component/index"

const Home = () => {
    return (
        <div className="home-container">
            <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1648118531/new_vohp8t.jpg"
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
