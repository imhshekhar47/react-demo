import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: theme.zIndex.appBar,
    },
    flex: {
        flexGrow: 1,
    }
  });

class AppHeader extends React.Component {
    render() {
        const { classes, title } = this.props;
        return (
            <AppBar position="static" color="primary" elevation={0}>
                <Toolbar color="primary">
                    <IconButton edge="start" color="inherit"><MenuIcon></MenuIcon></IconButton>
                    <Typography variant="h6" className={classes.flex}>{title}</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

const AppNavigationBar = withStyles(styles)(AppHeader);

export { AppNavigationBar };