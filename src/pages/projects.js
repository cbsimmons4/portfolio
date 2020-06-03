import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography'; 
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';

import sl from '../assets/sl.jpeg';
import oblio from '../assets/oblio.png';
import lym from '../assets/lym.png';
import ditto from '../assets/ditto.png';
import owsf from '../assets/owsf.png';
import wjr from '../assets/wjr.png';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LinkIcon from '@material-ui/icons/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WebIcon from '@material-ui/icons/Web';



const styles = (theme) => ({
    ...theme.spreadThis,
    contentContainer: {
        padding: '60px'
    },
    sectionHeader: {
        padding: '20px'
    },
    divider: {
        margin: '20px auto',
        textAlign: 'center',
        width: '50%',
        height: '1px',
        backgroundColor: '#36454f',
        border: 'none'
    },
    card: {
        borderRadius: '40px',
        display: 'flex',
        marginBottom: 20,
        background: 'none',
        border: 'none',
        boxShadow: 'none'

    },
    cover: {
        display: 'block',
        margin: 'auto',
        width: 80,
        height: 80,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%',
    },
});

export class projects extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Navbar projects/>
                <div className = "pageContainer">
                    <div className = {classes.contentContainer}>
                        <Typography className = {classes.sectionHeader} align="center"
                        variant="h4" colors ="textSecondary" color = "secondary">
                        Projects
                        </Typography>
                        {/* Oblio */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {oblio}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>Oblio</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                                Oblio is a web app that can guess what 4 digit number the user is thinking
                                                based on information given after each guess. After each guess, the user provides
                                                how many digits are in the correct location in the guess and how many digits are
                                                in the guess but in the incorrect location. There is also the option for the app to
                                                pick the number, then the user guesses what number the app has picked. This app was 
                                                build with React, react-redux, and material-ui.
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                            <Tooltip title = "Github">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://github.com/cbsimmons4/oblio">
                                                    <GitHubIcon/>
                                                </IconButton>
                                            </Tooltip>  
                                            {/* <Tooltip title = "Oblio App">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://oblio-game.herokuapp.com/">
                                                    <LinkIcon/>
                                                </IconButton>
                                            </Tooltip>     */}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                        {/* Losing your mables */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {lym}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>Losing Your Marbles</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                                This is seeking game with some first person shooter mechanics, in a procedurally
                                                generated map. The game was made by three people, where my main roles were the
                                                following: procedurally generated connected maze and forest, runtime navmesh bake,
                                                main menu, audio, miniMap UI, loading scene management, player movement. This game
                                                in written in C#, using the Unity game engine and assets from the Unity assets store
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                            <Tooltip title = "Github">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://github.com/cbsimmons4/Losing_Your_Marbles">
                                                    <GitHubIcon/>
                                                </IconButton>
                                            </Tooltip>      
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                        {/* Social Ditto */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {ditto}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>Social Ditto</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                                This is a basic social media web app where users can signup, login, update their bios,
                                                make posts, like, comment, view other user's profiles, and receive notifications when
                                                another user likes or comments on their posts. This is built using the JAM stack with
                                                React, Express, and Firebase. Nowadays, I occasionally post updates on my Social Ditto
                                                page with new projects I'm working on and things I'm learning.
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                            <Tooltip title = "Github">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://github.com/cbsimmons4/social-client">
                                                    <GitHubIcon/>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title = "Social Ditto">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://shout-96591.web.app/users/Cameron_Simmons">
                                                    <AccountCircleIcon/>
                                                </IconButton>
                                            </Tooltip>     
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                        {/* SL */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {sl}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>Identifying Synthetic Lethal Interactions in Genes
                                            Using Node2Vec and Random Forest</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                                This a four person group project in bioinformatics research. The idea was to try to predict synthetic
                                                lethality among genetic interactions using graph network machine learning.
                                                For this project, I built the raw data parcer that created input for Node2Vec and the Node2Vec output parcer that
                                                re-mapped vectors to gene interactions.I also trained a scikit-learn random forest, used to predict
                                                synthetic lethality among interactions. This project was presented at the University of Maryland
                                                Semesterly Computer Science Honors Symposium. We used excel, python, scikit-learn, node2Vec, and LaTex
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                            <Tooltip title = "Github">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://github.com/cbsimmons4/Synthetic_Lethal_Interaction_Prediction">
                                                    <GitHubIcon/>
                                                </IconButton>
                                            </Tooltip>    
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                        {/* OWSF */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {owsf}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>Open Weapon Site Finder</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                                This is a open-source initiative for finding military sites using publicly available 
                                                remote sensing data from Sentinel's C-Band radar.
                                                For this project, we detected low-power but consistent interference by tracking
                                                the pixels that were the "brighest" over the longest period of time. Using a
                                                multi-temporal analysis method, we were able to detect several types of military radar systems,
                                                allowing us to use image processing to isolate the coordinates of the missile sites.
                                                This project was a submission to Bitcamp Hackathon 2019, where we won best digital forensics
                                                hack and were runner ups for the best machine learning hack.
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                            <Tooltip title = "Github">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://github.com/rytse/owsf">
                                                    <GitHubIcon/>
                                                </IconButton>
                                            </Tooltip>    
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                        {/* WJR */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {wjr}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>WEjumpROPE.com</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                                This is a website I built for WEjumpROPE LLC, a jump rope team I help found
                                                back in 2014. It's the first website I ever build when I started learning
                                                about web development. It features a responsive design, a shop page using
                                                paypal buttons, modals with updating youtube playlists, a contact page, 
                                                and a live instagram feed. It was build using HTML, CSS, Bootstrap, and 
                                                some plugins.
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                            <Tooltip title = "Github">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://github.com/cbsimmons4/WEjumpROPE-site">
                                                    <GitHubIcon/>
                                                </IconButton>
                                            </Tooltip>  
                                            <Tooltip title = "wejumprope.com">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "http://www.wejumprope.com/">
                                                    <LinkIcon/>
                                                </IconButton>
                                            </Tooltip>    
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(projects)
