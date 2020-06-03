import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 
import Tooltip from '@material-ui/core/Tooltip';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = (theme) => ({
    ...theme.spreadThis,
    
    navbar: {
        pointerEvents: 'all',
        display: 'block',
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
    },
    tooltip: {
        color: '#358523'
    }
});

export class Navbar extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className = {classes.navbar}>
                <Typography 
                variant="body2" colors ="textSecondary" color = "primary">
                    {
                         !this.props.home ? (
                             <Fragment>
                                  <Button color="primary" component={Link} to="/">Home</Button>/
                             </Fragment>  
                        ) : null
                    } 
                    { 
                        !this.props.about ? (
                            <Fragment>
                                <Button color="primary" component={Link} to="/about">About</Button>/ 
                            </Fragment>  
                       ) : null
                    }
                    { 
                        !this.props.projects ? (
                            <Fragment>
                                <Button color="primary" component={Link} to="/projects">Projects</Button>
                                {
                                    !this.props.involvement ? ('/') :null
                                }
                            </Fragment>  
                       ) : null
                    }
                    { 
                        !this.props.involvement ? (
                            <Fragment>
                                <Button color="primary" component={Link} to="/involvement">Involvement</Button>
                            </Fragment>  
                       ) : null
                    }
                </Typography>

                <Tooltip title = "Github">
                    <IconButton aria-label="delete" color="primary"
                    target="_blank" rel="noopener noreferrer"
                    href = "https://github.com/cbsimmons4">
                        <GitHubIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title = "Linkedin">
                    <IconButton aria-label="delete" color="primary"
                    target="_blank" rel="noopener noreferrer"
                    href = "https://www.linkedin.com/in/cbsimmons4/">
                        <LinkedInIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title = "Email: cbsimmons@gmail.com">
                    <IconButton aria-label="delete" color="primary"
                    target="_blank" rel="noopener noreferrer"
                    href = "mailto:cbsimmons4@gmail.com">
                        <EmailIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title = "Resume">
                    <IconButton aria-label="delete" color="primary"
                    target="_blank" rel="noopener noreferrer"
                    href = "https://docs.google.com/document/d/1r-_g5DGtiPkYELYYj-6SBu8PSJc6Uug6P5MThC2FI-0/edit?usp=sharing">
                        <AttachmentIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title = "Social Ditto">
                    <IconButton aria-label="delete" color="primary"
                    target="_blank" rel="noopener noreferrer"
                    href = "https://shout-96591.web.app/users/Cameron_Simmons">
                        <AccountCircleIcon/>
                    </IconButton>
                </Tooltip>
            </div> 
        )
    }
}

export default withStyles(styles)(Navbar)
