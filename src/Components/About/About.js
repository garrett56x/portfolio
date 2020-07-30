import React from 'react';
import './About.css';
import { Typography } from '@material-ui/core';

function About() {
  return (
    <div className="about">
    <Typography variant="h4" gutterBottom>About Me</Typography>
    <Typography variant="body2" gutterBottom>
        I started my professional engineering journey in 2015 at a startup called Utrip. There, I was part of a small
        team where I had the opportunity to work on every part of the tech stack. This was a really great place for me 
        to learn what I liked to work on by getting exposure to many different technologies. At Utrip I found my passion 
        for working on the front end.
    </Typography>
    <Typography variant="body2" gutterBottom>
        While I'm a capable full stack engineer, I pursued my love for front end engineering and ended up taking a contract
        at Microsoft in 2019. Going from a small startup to Microsoft was a bit of a shock at first, but it was great to
        experience the contrast. I learned new things like unit testing, which I hadn't had experience with at Utrip.
    </Typography>
    </div>
  );
}
export default About;
