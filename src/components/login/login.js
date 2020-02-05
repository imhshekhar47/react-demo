import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme=> ({
    root: {
        padding: theme.spacing(9),
    },
    box: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[50],
        boxShadow: theme.shadows[4]
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    field: {
        marginBottom: theme.spacing(4)
    },
    title: {
        marginBottom: theme.spacing(4),
        color: theme.palette.primary.main,
    }
});

class Login extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.root} maxWidth="sm">
                <Box className={classes.box}>
                    <Typography variant="h5" className={classes.title}>Login</Typography>
                    <form noValidate className={classes.form}>
                        <TextField className={classes.field} variant="outlined" id="username" label="Username" name="username" 
                            />
                        <TextField className={classes.field} variant="outlined" id="password" label="Password" name="password" type="password" 
                            />

                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item xs>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
                            </Grid>
                        </Grid> 
                        
                    </form>
                </Box>
            </Container>
        );
    }
}

const LoginComponent = withStyles(styles)(Login)

export { LoginComponent };