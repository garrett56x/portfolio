import React from 'react';
import './Hero.css';
import headshot from "../../assets/headshot.png";

function Hero() {
  return (
    <div className="home-hero">
        <div className="container">
            <img className="headshot" alt="headshot" src={headshot} />
            <div className="title">
                <h1>Garrett Van Neste - Web Developer</h1>
            </div>
        </div>
    </div>
  );
}
export default Hero;
