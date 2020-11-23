import React from 'react';
import './Projects.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// import paintconnection from '../../assets/paintconnection.png';
// import weddingsite from '../../assets/weddingsite.png';
import utrip from '../../assets/utrip.png';

const useStyles = makeStyles({
    projectsContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexFlow: "row wrap",
    },
    project: {
      maxWidth: 345,
      margin: "0 10px",
      marginBottom: "20px",
    },
    media: {
      height: 140,
    },
  });

function Projects() {
    const classes = useStyles();

  return (
    <div className="projects">
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <div className={classes.projectsContainer}>
        <Card className={classes.project}>
                <CardActionArea href="https://utrip-clone.netlify.app/" target="_blank">
                    <CardMedia
                    className={classes.media}
                    image={utrip}
                    title="Utrip Clone"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Utrip Clone
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A clone of the old Utrip travel planning website rebuilt from scratch in React. Based off old screen shots and my memory.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://github.com/garrett56x/utrip-clone" target="_blank">
                        Frontend Repo
                    </Button>
                    {/* <Button size="small" color="primary" href="https://github.com/garrett56x/painting-leads-api" target="_blank">
                        Backend Repo
                    </Button> */}
                </CardActions>
            </Card>
            {/* <Card className={classes.project}>
                <CardActionArea href="https://www.thepaintconnection.com/" target="_blank">
                    <CardMedia
                    className={classes.media}
                    image={paintconnection}
                    title="The Paint Connection"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        The Paint Connection
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A lead marketplace for painting houses built using React &amp; Redux with a Node &amp; Express REST API
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://github.com/garrett56x/painting-leads-frontend" target="_blank">
                        Frontend Repo
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/garrett56x/painting-leads-api" target="_blank">
                        Backend Repo
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.project}>
                <CardActionArea href="https://www.angieandgarrett.com/" target="_blank">
                    <CardMedia
                    className={classes.media}
                    image={weddingsite}
                    title="Wedding Website"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Wedding Website
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A website for my wedding built using React. Highlights: Favoriting and filtering on Things to Do page.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://www.angieandgarrett.com/things-to-do" target="_blank">
                        Things To Do
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/garrett56x/wedding-site" target="_blank">
                        Github Repo
                    </Button>
                </CardActions>
            </Card> */}
            <div className="stats">
                <div className="stats-left">
                    <img className="stat" src="https://github-readme-stats.vercel.app/api?username=garrett56x&show_icons=true&count_private=true&hide=issues,contribs&theme=dark" alt="github-stats" />
                    {/* <img className="stat" src="https://github-readme-stats.vercel.app/api/wakatime?username=garrett56x&theme=dark" alt="wakatime-stats" /> */}
                </div>
                <img className="stat" src="https://github-readme-stats.vercel.app/api/top-langs/?username=garrett56x&theme=dark&hide=ruby,php,coffeescript" alt="language-stats" />
            </div>
        </div>
    </div>
  );
}
export default Projects;
