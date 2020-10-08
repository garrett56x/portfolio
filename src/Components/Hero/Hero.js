import React from 'react';
import './Hero.css';
import headshot from '../../assets/headshot.png';
import { Button, Typography } from '@material-ui/core';

function Hero() {
  return (
    <div className="home-hero">
        <div className="container">
            <img className="headshot" alt="headshot" src={headshot} />
            <div className="title">
                <Typography variant="h4">Garrett Van Neste - Web Developer</Typography>
                <Button href="#contact" variant="contained" color="primary">Contact Me</Button>
            </div>
        </div>
    </div>
  );
}
export default Hero;
