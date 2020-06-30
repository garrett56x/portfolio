import React from 'react';
import './Contact.css';

import { Button, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Mail from '@material-ui/icons/Mail';

function Contact() {
  return (
    <div className="contact">
    <Typography variant="h4" gutterBottom>Contact</Typography>
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
  );
}
export default Contact;
