import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/typography'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4)
    },
    footer: {
        borderTop: `1px solid ${theme.palette.grey[900]}`
    },
    section: {
        padding: theme.spacing(2),
        textAlign: 'center'
    }
}));


function AppFooter() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container variant="footer" className={classes.root}>
                    <Grid item xs={4} className={classes.section}>
                        <Typography variant="h6">About Us</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                        <Typography variant="h6">Navigation</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                        <Typography variant="h6">Social</Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default AppFooter