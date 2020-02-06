import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/typography';

const useStyles = makeStyles(theme =>({
    root : {
        paddingTop: theme.spacing(4)
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