import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/typography';

const useStyles = makeStyles(theme =>({
    root : {
        backgroundColor: theme.palette.grey[600]
    }
}));


function AppFooter() {
    const classes = useStyles();
    return (
        <Grid container variant="footer" className={classes.root}>
            <Grid item xs={4}>
                <Typography variant="button">About Us</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="button">Navigation</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="button">Social</Typography>
            </Grid>
        </Grid>
    );
}

export default AppFooter