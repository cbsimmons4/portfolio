import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Cam from '../assets/cam.jpg';
import Navbar from "../components/Navbar"

const styles = (theme) => ({
    ...theme.spreadThis,
    homeContainer: {
        display: 'block',
        margin: 'auto',
        marginTop: "100px",
        width: "50%",
        minWidth: "400px",
        pointerEvents: 'none'
    },
    imageWrapper: {
        textAlign: 'center',
        position: 'relative'
    },
    profileImage: {
        width: "200px",
        height: "200px",
        objectFit: 'cover',
        borderRadius: '50%'
    }
});

export class home extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className = {classes.homeContainer}>
                 <div className ={classes.imageWrapper}>
                    <img src = {Cam} alt='profile' className = {classes.profileImage}/> 
                </div>
                <Navbar home/>
            </div>
        )
    }
}

export default withStyles(styles)(home)
