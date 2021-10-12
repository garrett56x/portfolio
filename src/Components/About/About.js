import React from 'react';
import './About.css';
import { Typography } from '@material-ui/core';

function About() {
  return (
    <div className="about">
    <Typography variant="h4" gutterBottom>About Me</Typography>
    <Typography variant="body2" gutterBottom>
      I love building responsive web apps, and I'm the dev that will make your app look great on any screen size! With an increasing trend towards mobile web, I believe it's not only important to start with a mobile-first approach to building an app, but it is also easier in terms of implementation. It's much easier to take a condensed version of an app and spread it out across more real estate, than it is the other way around.
    </Typography>
    <Typography variant="body2" gutterBottom>
      My current area of expertise is front-end development in React &amp; TypeScript. While my focus is on the front end, I don't shy away from back end work; I enjoy working on a Node API from time to time. In my most recent role, I became quite proficient in Shopify/liquid development.
    </Typography>
    </div>
  );
}
export default About;
