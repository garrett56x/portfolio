import React from 'react';
import './Projects.css';
import { Paper, Typography } from '@material-ui/core';
import paintconnection from '../../assets/paintconnection.png';
import weddingsite from '../../assets/weddingsite.png';

function Projects() {
  return (
    <div className="projects">
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <div className="projects-container">
            <a className="project-link" href="https://www.thepaintconnection.com/" target="_blank">
                <Paper className="project">
                    <div className="project-image" style={{ backgroundImage: `url(${paintconnection})` }} />
                    <div className="project-description">
                        <Typography variant="h5">The Paint Connection</Typography>
                        <Typography variant="body2">A lead marketplace for painting houses built using React &amp; Redux with a Node &amp; Express REST API</Typography>
                    </div>
                </Paper>
            </a>
            <a className="project-link" href="https://www.angieandgarrett.com/" target="_blank">
                <Paper className="project">
                    <div className="project-image" style={{ backgroundImage: `url(${weddingsite})` }} />
                    <div className="project-description">
                        <Typography variant="h5">Wedding Website</Typography>
                        <Typography variant="body2">A website for my wedding built using React</Typography>
                    </div>
                </Paper>
            </a>
            <div className="stats">
                <div className="stats-left">
                    <img className="stat" src="https://github-readme-stats.vercel.app/api?username=garrett56x&show_icons=true&count_private=true&hide=issues,contribs&theme=dark" alt="github-stats" />
                    <img className="stat" src="https://github-readme-stats.vercel.app/api/wakatime?username=garrett56x&theme=dark" alt="wakatime-stats" />
                </div>
                <img className="stat" src="https://github-readme-stats.vercel.app/api/top-langs/?username=garrett56x&theme=dark" alt="language-stats" />
            </div>
        </div>
    </div>
  );
}
export default Projects;
