import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'; 
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';

import micro from '../assets/Micro.jpg';
import umd from '../assets/umd.png';
import sl from '../assets/sl.jpeg';
import phillips from '../assets/phillips.jpg';

import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import WebIcon from '@material-ui/icons/Web';
import CloudIcon from '@material-ui/icons/Cloud';
import BuildIcon from '@material-ui/icons/Build';
import SettingsIcon from '@material-ui/icons/Settings';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = (theme) => ({
    ...theme.spreadThis,
    contentContainer: {
        padding: '60px'
    },
    awardsAndCourseworkContainer:{
        padding: '0px 30px'
    },
    awardAndCoursework: {
        paddingBottom: '15px'
    },
    sectionHeader: {
        padding: '20px'
    },
    aboutText: {
        padding: '10px 0px'
    },
    skillsSections: {
        margin: 'auto'
    },
    divider: {
        margin: '20px auto',
        textAlign: 'center',
        width: '50%',
        height: '1px',
        backgroundColor: '#36454f',
        border: 'none'
    },
    skillSubheaderDivider: {
        margin: 'auto',
        textAlign: 'center',
        width: '70%',
        height: '1px',
        backgroundColor: '#36454f',
        border: 'none'
    },
    icon: {
        display: 'block',
        margin: 'auto'
    },
    skillContent: {
        display: 'block',
        margin: 'auto',
        padding: '10px'
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
    }
});

export class about extends Component {
    render() {
        const {classes} = this.props;
        return (
        <Fragment>
            <Navbar about/>
            <div className = "pageContainer">
                <div className = {classes.contentContainer}>
                    <Typography className = {classes.sectionHeader} align="center"
                    variant="h4" colors ="textSecondary" color = "secondary">
                    About Me
                    </Typography>
                    <Typography className = {classes.aboutText} align="left"
                    variant="body1" colors ="textSecondary" color = "secondary">
                    Hello there! I'm Cameron Simmons - a software engineer, full-stack web developer, and data scientist.
                    </Typography>
                    <Typography className = {classes.aboutText} align="left"
                    variant="body1" colors ="textSecondary" color = "secondary">
                    I graduated in December 2019 from the University of Maryland - College Park (UMD), where I majored in Computer Science
                    with a minor in Mathematics. However, prior to attending UMD, I had transferred from Dickinson College, where I had studied
                    Computer Science and Economics from August 2016 to May 2017. Along the way, I have gained internship experience, completed
                    research, built personal projects, and competed in coding competitions and hackathons.
                    Checkout my <Link className = "link" to="/projects">projects</Link> page to see some of what I've worked on!
                    I also post updates of what i'm working on my <a
                     className = 'link' target="_blank" rel="noopener noreferrer"
                    href = "https://shout-96591.web.app/users/Cameron_Simmons">
                        Social Ditto
                    </a> page!
                    </Typography>
                    <Typography className = {classes.aboutText} align="left"
                    variant="body1" colors ="textSecondary" color = "secondary">
                    Aside from programming, I am also a professional performance jump roper!
                    Within the sport of jump rope, I have traveled the world performing in various venues,
                    coached hundreds of children and adults on how to jumprope, co-founded my own team, 
                    set US records, competed and won on the world stage, 
                    and have been a live announcer at the USA Jumprope Nationals event.
                    Checkout my <Link className = "link" to="/involvement">involvement</Link> page
                    to see more about my jump rope experience and other stuff I have done!
                    </Typography>
                    <hr className = {classes.divider}/>
                    <Typography className = {classes.sectionHeader} align="center"
                    variant="h4" colors ="textSecondary" color = "secondary">
                    Skills
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <CodeIcon className = {classes.icon}/>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Programming Languages
                            </Typography> 
                            <hr className = {classes.skillSubheaderDivider}/>
                            <div className= {classes.skillContent}>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    Javascript, Java, Python,
                                </Typography>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    C#, Ruby
                                </Typography> 
                            </div>  
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <StorageIcon className = {classes.icon}/>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Databases
                            </Typography> 
                            <hr className = {classes.skillSubheaderDivider}/>
                            <div className= {classes.skillContent}>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    <span style={{fontWeight: "bold"}}>Relational: </span> MySQL
                                </Typography> 
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    <span style={{fontWeight: "bold"}}>NoSQL: </span> MongoDB, Firebase Realtime,
                                </Typography>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    Amazon DynamoDB
                                </Typography> 
                            </div>  
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <WebIcon className = {classes.icon}/>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Web Technologies
                            </Typography> 
                            <hr className = {classes.skillSubheaderDivider}/>
                            <div className= {classes.skillContent}>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    <span style={{fontWeight: "bold"}}>Front-End: </span> HTML, CSS, React.js, 
                                </Typography>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    Material UI, Bootstrap / React-Bootstrap
                                </Typography>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    <span style={{fontWeight: "bold"}}>Back-End: </span> Node.js, Express.js,
                                </Typography>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    Flask (Python)
                                </Typography>
                            </div>  
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <CloudIcon className = {classes.icon}/>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Cloud Services
                            </Typography> 
                            <hr className = {classes.skillSubheaderDivider}/>
                            <div className= {classes.skillContent}>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    Amazon Web Services, Firebase-GCP
                                </Typography>  
                            </div>  
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <SettingsIcon className = {classes.icon}/>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Data Science
                            </Typography> 
                            <hr className = {classes.skillSubheaderDivider}/>
                            <div className= {classes.skillContent}>
                            <Typography align="center"
                                variant="body2" colors ="textSecondary" color = "secondary">
                                <span style={{fontWeight: "bold"}}>Languages: </span> Python, R, SAS
                            </Typography>  
                            <Typography align="center"
                                variant="body2" colors ="textSecondary" color = "secondary">
                                <span style={{fontWeight: "bold"}}>ML: </span> Tensorflow - Keras, Scikit-learn,
                            </Typography>  
                            <Typography align="center"
                                variant="body2" colors ="textSecondary" color = "secondary">
                                Node2Vec
                            </Typography>
                            </div>  
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <BuildIcon className = {classes.icon}/>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Tools
                            </Typography> 
                            <hr className = {classes.skillSubheaderDivider}/>
                            <div className= {classes.skillContent}>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    <span style={{fontWeight: "bold"}}>IDE/Editors: </span> VS Code, Sublime, Eclipse 
                                </Typography>
                                <Typography align="center"
                                    variant="body2" colors ="textSecondary" color = "secondary">
                                    <span style={{fontWeight: "bold"}}>Software: </span> Unity, Blender, Final-Cut Pro
                                </Typography>
                            </div>  
                        </Grid>
                    </Grid>
                    
                    <hr className = {classes.divider}/>
                    <Typography className = {classes.sectionHeader} align="center"
                    variant="h4" colors ="textSecondary" color = "secondary">
                    Experience
                    </Typography>
                    
                    <Card className = {classes.card}>
                        <Grid container spacing={0}>
                            <Grid item xs = {12} sm = {2}>
                                <CardMedia className = {classes.cover} image = {micro}/>
                            </Grid>
                            <Grid item xs = {12} sm={10}>
                                <CardContent className = {classes.cardContent}>
                                    <Typography className = {classes.skillsubHeader} align="left"
                                        variant="h5" colors ="textSecondary" color = "secondary">
                                        <span style={{fontWeight: "bold"}}>Microstrategy</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body1" colors ="textSecondary" color = "secondary">
                                        <span style={{fontStyle: 'italic'}}>Software Engineering Intern</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body1" colors ="textSecondary" color = "secondary">
                                        <span style={{fontStyle: 'italic'}}>May 2019 - August 2019 / Tysons, VA</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Implemented MicroStrategy Library “Show Data...” feature that
                                            allows users to select pre-existing data visualizations and consume data as a grid.
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Added support for export to Excel and PDF in “Show Data...” feature.
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Added support for selecting additional data Metrics/Attributes
                                            to “Show Data...” feature
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Added support for undo & redo in Microstrategy Library
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Utilized: React.js, React-Redux, CSS/SASS
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                    <Card className = {classes.card}>
                        <Grid container spacing={0}>
                            <Grid item xs = {12} sm = {2}>
                                <CardMedia className = {classes.cover} image = {umd}/>
                            </Grid>
                            <Grid item xs = {12} sm={10}>
                                <CardContent className = {classes.cardContent}>
                                    <Typography className = {classes.skillsubHeader} align="left"
                                        variant="h5" colors ="textSecondary" color = "secondary">
                                        <span style={{fontWeight: "bold"}}>University of Maryland - Distance Education
                                        and Technology Services</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body1" colors ="textSecondary" color = "secondary">
                                        <span style={{fontStyle: 'italic'}}>Technical Director</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body1" colors ="textSecondary" color = "secondary">
                                        <span style={{fontStyle: 'italic'}}>August 2019 - December 2019 / Tysons, VA</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Provided technology support to faculty, and facilitated distance student's
                                            learning experience.
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Operate video equipment used to broadcast courses, recording each class.
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                    <hr className = {classes.divider}/>
                    <Typography className = {classes.sectionHeader} align="center"
                    variant="h4" colors ="textSecondary" color = "secondary">
                    Research
                    </Typography>

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
                                        variant="body1" colors ="textSecondary" color = "secondary">
                                        <span style={{fontStyle: 'italic'}}>Lead Author</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body1" colors ="textSecondary" color = "secondary">
                                        <span style={{fontStyle: 'italic'}}>September 2018 - December 2018 / College Park, MD</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Bioinformatics research in predicting synthetic lethality among genetic interactions 
                                            using graph network machine learning.
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Built raw data parcer that created input for Node2Vec and Node2Vec output parcer
                                            that re-mapped vectors to genetic interactions
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Trained Scikit-learn random forest, used to predicted synthetic lethal interections
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Presented at the UMD Semesterly CS Honors Symposium.
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Utilized: Excel, Python, Scikit-learn, Node2Vec, LaTex
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

                    <Card className = {classes.card}>
                        <Grid container spacing={0}>
                            <Grid item xs = {12} sm = {2}>
                                <CardMedia className = {classes.cover} image = {phillips}/>
                            </Grid>
                            <Grid item xs = {12} sm={10}>
                                <CardContent className = {classes.cardContent}>
                                    <Typography className = {classes.skillsubHeader} align="left"
                                        variant="h5" colors ="textSecondary" color = "secondary">
                                        <span style={{fontWeight: "bold"}}>UMIACS Virtual and Augmented Reality Laboratory</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body1" colors ="textSecondary" color = "secondary">
                                        <span style={{fontStyle: 'italic'}}>February 2018 - May 2018 / College Park, MD</span> 
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Researched ways to integrate new technologies with visitor experiences
                                            for The Phillips Collection art museum in Washington DC.
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Helped build a VR museum that allows users to view, interact with, and curate virtual art galleries.
                                    </Typography>
                                    <Typography align="left"
                                        variant="body2" colors ="textSecondary" color = "secondary">
                                            - Utilized: C#, Unity, Oculus VR
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                    <hr className = {classes.divider}/>
                    <Typography className = {classes.sectionHeader} align="center"
                    variant="h4" colors ="textSecondary" color = "secondary">
                    Honors & Awards
                    </Typography>
                    <div className = {classes.awardsAndCourseworkContainer}>
                        <Typography className = {classes.awardAndCoursework} align="center"
                            variant="body1" colors ="textSecondary" color = "secondary">
                             Computer Science Departamental Honors. Unviversity of Maryland - College Park
                        </Typography>
                        <Typography  className = {classes.awardAndCoursework} align="center"
                            variant="body1" colors ="textSecondary" color = "secondary">
                            Honors College, University Honors. Unviversity of Maryland - College Park
                        </Typography>
                        <Typography  className = {classes.awardAndCoursework} align="center"
                            variant="body1" colors ="textSecondary" color = "secondary">
                             Best digital forensics hack, runner up for best machine
                            learning hack. Bitcamp Hackathon 2019
                        </Typography>
                        <Typography  className = {classes.awardAndCoursework} align="center"
                            variant="body1" colors ="textSecondary" color = "secondary">
                            The Jane Hill Prize in Computer Science, awarded to the member of the freshman class who excels
                            in computer science. Dickinson College 2017 
                        </Typography>
                    </div>

                    <hr className = {classes.divider}/>
                    <Typography className = {classes.sectionHeader} align="center"
                    variant="h4" colors ="textSecondary" color = "secondary">
                    Coursework
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Advanced Data-Structures
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Design and Analysis of Algorithms
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Bioinformatics, Databases, and Tools
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Computer Systems Architecture
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Programming Language Technologies and Paradigms 
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Game Programming
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Back-End Development in Node with Express
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Healthcare with Artificial Intelligence
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                MySQL Databases
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Monte Carlo Methods
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Design Patterns for Object Oriented Programming
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Calulus I, II, and III
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Advanced Calculus I (Real Analysis I)
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Applications of Linear Algebra
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Statistical Computing with SAS
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Applied Probability and Statistics I
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Introduction of Macroeconomics 
                            </Typography> 
                        </Grid>
                        <Grid className = {classes.skillsSections} item sm={6}>
                            <Typography align="center"
                                variant="body1" colors ="textSecondary" color = "secondary">
                                Intermediate Microeconomics
                            </Typography> 
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Fragment>
        )
    }
}

export default withStyles(styles)(about)
