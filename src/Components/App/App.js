import React from 'react';
import './App.css';
import Hero from '../Hero/Hero';
import Logos from '../Logos/Logos';
import NavBar from '../NavBar/NavBar';

import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Mail from '@material-ui/icons/Mail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Logos />
      <div className="about">
        <h1>About Me</h1>
        <p>
          I started my professional engineering journey in 2015 at a startup called Utrip. There, I was part of a small
          team where I had the opportunity to work on every part of the tech stack. This was a really great place for me 
          to learn what I liked to work on by getting exposure to many different technologies. At Utrip I found my passion 
          for working on the front end.
        </p>
        <p>
          While I'm a capable full stack engineer, I persued my love for front end engineering and ended up taking a contract
          at Microsoft in 2019. Going from a small startup to Microsoft was a bit of a shock at first, but it was great to
          experience the contrast. I learned new things like unit testing, which I hadn't had experience with at Utrip.
        </p>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact-buttons">
          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            aria-label="github"
            href="https://github.com/garrett56x"
            target="_blank"
          >
            Github
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedInIcon />}
            aria-label="linkedin"
            href="https://www.linkedin.com/in/garrett-van-neste/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Mail />}
            aria-label="email"
            href="mailto: garrett56x@gmail.com"
          >
            Email
          </Button>
        </div>
      </div>
    </div>
  );
}
export default App;
