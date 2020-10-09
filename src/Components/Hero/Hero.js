import React from 'react';
import './Hero.css';
import headshot from '../../assets/headshot.png';
import { Button, Typography } from '@material-ui/core';

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function Hero({ contactRef }) {
  const executeScroll = () => scrollToRef(contactRef);

  return (
    <div className="home-hero">
        <div className="container">
            <img className="headshot" alt="headshot" src={headshot} />
            <div className="title">
                <Typography variant="h4">Garrett Van Neste - Web Developer</Typography>
                <Button variant="contained" color="primary" onClick={executeScroll}>Contact Me</Button>
            </div>
        </div>
    </div>
  );
}
export default Hero;
