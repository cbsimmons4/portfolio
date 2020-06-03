import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography'; 
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';


import kkids from '../assets/kkids.jpg';
import fc from '../assets/fc.png';
import wjr from '../assets/wjr.png';
import gk from '../assets/gk.png'




import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LinkIcon from '@material-ui/icons/Link';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WebIcon from '@material-ui/icons/Web';



const styles = (theme) => ({
    ...theme.spreadThis,
    contentContainer: {
        padding: '60px'
    },
    timelineContainer: {
        paddingBottom: '30px'
    },
    awardAndCoursework: {
        paddingBottom: '15px'
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
    videoLink: {
        color: '#36454f'
    }
});

export class involvement extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Navbar involvement/>
                <div className = "pageContainer">
                    <div className = {classes.contentContainer}>
                        <Typography className = {classes.sectionHeader} align="center"
                        variant="h4" colors ="textSecondary" color = "secondary">
                        Involvement
                        </Typography>

                        {/* Kkids */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {kkids}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>Kangaroo Kids Precision Jump Rope Team</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                                The Kangaroo Kids are a precision jump rope team from my home county - Howard County, MD.
                                                After joining the team as a member back in 2009, I have represented them in many shows,
                                                national competitions, and international competitions. Additionally, I have been
                                                both a performance coach and competition coach for their team. Even today, I like
                                                to stay involved with the Kangaroo Kids!  
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">  
                                            <Tooltip title = "Kangaroo Kids Website">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "https://www.kangarookids.org/">
                                                    <LinkIcon/>
                                                </IconButton>
                                            </Tooltip>    
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                        {/* Kkids */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {fc}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>Flight Crew Jump Rope</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                                Flight Crew Jump Rope is a professional performance jump rope team
                                                that was founded in 2014, when they competed in America's Got Talent Season 9
                                                and made it to the semi finals. Since then, thay have performed all over the world,
                                                in places like Hong Kong, Dubai, Cirque Dreams, Disney Cruise Lines, and many more!
                                                I joined the team in 2018, joining in on some of the adventures!
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">  
                                            <Tooltip title = "Flight Crew Website">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "http://www.flightcrewjumprope.com/">
                                                    <LinkIcon/>
                                                </IconButton>
                                            </Tooltip>    
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                        {/* WEjumpROPE */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {wjr}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>WEjumpROPE</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                            WEjumpROPE is a performance jump rope group that I helped co-found back in 2014,
                                            We are simply a bunch of friends dedicated to spreading our passion of jump rope, doing 
                                            so through jump rope performances, media production, and leading jump rope workshops.
                                            We showcase our adventures on youtube, instagram, tiktok, and other platforms, where the
                                            group collectively has over half a million followers and over 100 million views.
                                            Here are some of my favorite WEjumpROPE videos: <a
                                            className = {classes.videoLink}
                                             target="_blank" rel="noopener noreferrer"href ="https://youtu.be/xCHzGo1t6iU"> World Jump Rope 2018,
                                            </a> <a 
                                            className = {classes.videoLink}
                                            target="_blank" rel="noopener noreferrer"href ="https://youtu.be/kxbu8MBh9x0">Kangaroo Kids Workshop 2019,
                                            </a> and <a 
                                            className = {classes.videoLink}
                                            target="_blank" rel="noopener noreferrer"href ="https://youtu.be/BSusAyCewyw">Fire!
                                            </a>  
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">  
                                            <Tooltip title = "WEjumpROPE website">
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

                        {/* Gymkana */}
                        <Card className = {classes.card}>
                            <Grid container spacing={0}>
                                <Grid item xs = {12} sm = {2}>
                                    <CardMedia className = {classes.cover} image = {gk}/>
                                </Grid>
                                <Grid item xs = {12} sm={10}>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className = {classes.skillsubHeader} align="left"
                                            variant="h5" colors ="textSecondary" color = "secondary">
                                            <span style={{fontWeight: "bold"}}>Gymkana</span> 
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">
                                            Gymkana is a 100% drug and alchohol free performance gymnastics and 
                                            acrobtics troupe at the University of Maryland. Their purpose
                                            is to inspire healthy lifestyles through performance and mentorship.
                                            I joined as a pledge member from August 2017 to December 2018 during
                                            my time at the University of Maryland.
                                        </Typography>
                                        <Typography align="left"
                                            variant="body2" colors ="textSecondary" color = "secondary">  
                                            <Tooltip title = "Gymkana website">
                                                <IconButton aria-label="delete" color="secondary"
                                                target="_blank" rel="noopener noreferrer"
                                                href = "http://www.gymkana.umd.edu/index.html">
                                                    <LinkIcon/>
                                                </IconButton>
                                            </Tooltip>   
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>

                        <hr className = {classes.divider}/>
                        <Typography className = {classes.sectionHeader} align="center"
                        variant="h4" colors ="textSecondary" color = "secondary">
                        Notable Events Timeline
                        </Typography>
                        <div className = {classes.timelineContainer}>
                            <Typography className = {classes.sectionHeader} align="center"
                            variant="h5" colors ="textSecondary" color = "secondary">
                            2020
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                WEjumpROPE:
                                Build WEjumpROPE website, wejumprope.com
                                <IconButton aria-label="delete" color="secondary"
                                target="_blank" rel="noopener noreferrer"
                                href = "http://www.wejumprope.com/">
                                    <LinkIcon/>
                                </IconButton>
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Flight Crew:
                                Helped choreoghraph new five person show for the
                                2020 year with many show opportunities lined up. *Cancelled due
                                to covid-19
                            </Typography>

                            <Typography className = {classes.sectionHeader} align="center"
                            variant="h5" colors ="textSecondary" color = "secondary">
                            2019
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Kangaroo Kids:
                                 Competition team coach. Responsible for running competition team
                                 practice to prepare athletes for National and International jump
                                 rope competitions 
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Flight Crew:
                                 Disney Cruise Line. Performed four person Disney themed act
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 WEjumpROPE: 
                                 Live announcer at the USA Jump Rope Nationals Event
                            </Typography>

                            <Typography className = {classes.sectionHeader} align="center"
                            variant="h5" colors ="textSecondary" color = "secondary">
                            2018
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Flight Crew:
                                 Dubai mall tour: Performed in six person act at various malls in Dubai
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Flight Crew:
                                 North Dakota Medora Musical: Performed in six person act as a
                                 month long guess entertainer
                                 <IconButton aria-label="delete" color="secondary"
                                target="_blank" rel="noopener noreferrer"
                                href = "https://youtu.be/HVNbCmJPzNM">
                                    <LinkIcon/>
                                </IconButton>
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Gymkana: 
                                 Member of six person act that won Best Act Award
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 WEjumpROPE: 
                                 World Jump Rope Team Freestyle 1st place
                                 <IconButton aria-label="delete" color="secondary"
                                target="_blank" rel="noopener noreferrer"
                                href = "https://youtu.be/6GiSlabPyO0">
                                    <LinkIcon/>
                                </IconButton>
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Other: 
                                 Precalculus tutor for Math115 
                            </Typography>

                            <Typography className = {classes.sectionHeader} align="center"
                            variant="h5" colors ="textSecondary" color = "secondary">
                            2017
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Kangaroo Kids:
                                 World Jump Rope Team Freestyle 1st place
                                 <IconButton aria-label="delete" color="secondary"
                                target="_blank" rel="noopener noreferrer"
                                href = "https://youtu.be/7SpQRWUu3z0">
                                    <LinkIcon/>
                                </IconButton>
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Kangaroo Kids:
                                 World Jump Rope Individual Freestyle 3rd place
                                 <IconButton aria-label="delete" color="secondary"
                                target="_blank" rel="noopener noreferrer"
                                href = "https://youtu.be/jM9iic1eujQ">
                                    <LinkIcon/>
                                </IconButton>
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Gymkana:
                                 Joined Gymkana as pledge member
                            </Typography>

                            <Typography className = {classes.sectionHeader} align="center"
                            variant="h5" colors ="textSecondary" color = "secondary">
                            2016
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Kangaroo Kids:
                                 Choreographed winning competition team show for USA Jump Rope Nationals
                                 <IconButton aria-label="delete" color="secondary"
                                target="_blank" rel="noopener noreferrer"
                                href = "https://youtu.be/XernTiPyqis">
                                    <LinkIcon/>
                                </IconButton> 
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Kangaroo Kids:
                                 Male Recipient of the AAU Joel Ferrell Outstanding Performance Memorial Award
                                 to recognize the athletic ability and sportsmanship of an athlete representing
                                 <IconButton aria-label="delete" color="secondary"
                                target="_blank" rel="noopener noreferrer"
                                href = "http://www.aaujrogames.org/aboutus/joelferrellaward.aspx">
                                    <LinkIcon/>
                                </IconButton> 
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Kangaroo Kids:
                                 Set US jump rope record in male triple unders
                                 <IconButton aria-label="delete" color="secondary"
                                target="_blank" rel="noopener noreferrer"
                                href = "https://www.instagram.com/p/BHQNhgIhNAb/">
                                    <LinkIcon/>
                                </IconButton> 
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Other:
                                 Dickinson College Competitive Programming Team. Only member of freshman
                                 class to compete on the team
                            </Typography>
                            
                            <Typography className = {classes.sectionHeader} align="center"
                                variant="h5" colors ="textSecondary" color = "secondary">
                                2015 & Before
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Kangaroo Kids:
                                 AAU MD Athletic Award (2013 - 2015)
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 Kangaroo Kids:
                                 Performing team coach (2013 -2015)
                            </Typography>
                            <Typography  className = {classes.awardAndCoursework} align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                 WEjumpROPE:
                                 Helped Co-found team (2014)
                            </Typography>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(involvement)
