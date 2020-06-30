import React from 'react';
import './NavBar.css';
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function NavBar() {
  return (
    <AppBar color="secondary" className="navbar">
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
  );
}
export default NavBar;
