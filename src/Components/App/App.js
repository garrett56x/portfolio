import React from 'react';
import './App.css';
import { AppBar, Button, IconButton, Paper, Toolbar } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import cssLogo from "../../assets/css.png";
import headshot from "../../assets/headshot.png";
import htmlLogo from "../../assets/html.png";
import javascriptLogo from "../../assets/javascript.png";
import nodeLogo from "../../assets/node.png";
import reactLogo from "../../assets/react.png";
import reduxLogo from "../../assets/redux.png";

function App() {
  return (
    <div className="App">
      <AppBar color="dark" position="static">
        <Toolbar>
          <Button>Garrett Van Neste</Button>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton color="inherit" aria-label="github" href="https://github.com/garrett56x" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="linkedin" href="https://www.linkedin.com/in/garrett-van-neste/" target="_blank">
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="home-hero">
          <div className="container">
              <img className="headshot" alt="headshot" src={headshot} />
              <div className="title">
                  <h1>Garrett Van Neste - Web Developer</h1>
              </div>
          </div>
      </div>
      <div className="logos">
        <img className="logo" alt="reactLogo" src={reactLogo} />
        <img className="logo" alt="reduxLogo" src={reduxLogo} />
        <img className="logo" alt="nodeLogo" src={nodeLogo} />
        <img className="logo" alt="javascriptLogo" src={javascriptLogo} />
        <img className="logo" alt="htmlLogo" src={htmlLogo} />
        <img className="logo" alt="cssLogo" src={cssLogo} />
      </div>
    </div>
  );
}
export default App;
