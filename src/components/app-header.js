import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu'
import MailIcon from '@material-ui/icons/Mail';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: theme.zIndex.appBar,
    },
    flex: {
        flexGrow: 1,
    },
    drawerHeader: {
        width: 250,
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    divider: {
        height: 2
    }
});

class AppNavigationComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isDrawerOpen: false,
            anchorEl: null,
        }
    }

    onClickProfileMenu = event => {
        if (this.state.anchorEl) {
            this.setState({ anchorEl: null })
        } else {
            this.setState({ anchorEl: event.currentTarget })
        }
    }

    onDrawerToggle = () => {
        this.setState(prevState => {
            return { ...prevState, isDrawerOpen: !prevState.isDrawerOpen }
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        const { classes, title, user } = this.props
        if (user) {
            return (
                <React.Fragment>
                    <AppBar position="static" color="primary" elevation={0}>
                        <Toolbar color="primary">
                            <IconButton edge="start" color="inherit"
                                onClick={this.onDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.flex}>{title}</Typography>
                            <Button variant="contained" color="primary" disableElevation
                                startIcon={<AccountCircle />}
                                onClick={this.onClickProfileMenu}>
                                <Typography variant="caption">Welcome {user.username}</Typography>
                            </Button>
                            <Menu id="profile-menu"
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                open={Boolean(this.state.anchorEl)}
                                anchorEl={this.state.anchorEl}
                                onClose={this.onClickProfileMenu}>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>My Account</MenuItem>
                            </Menu>

                        </Toolbar>
                    </AppBar>
                    <Drawer variant="temporary"
                        anchotr="left"
                        open={this.state.isDrawerOpen}
                        onClose={this.onDrawerToggle} >
                        <div className={classes.drawer}>
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={this.onDrawerToggle} >
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <Divider className={classes.divider} />
                            <List>
                                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </Drawer>
                </React.Fragment>
            );
        } else {
            return (
                <AppBar position="static" color="primary" elevation={0}>
                    <Toolbar color="primary">
                        <IconButton edge="start" color="inherit"><HomeIcon /></IconButton>
                        <Typography variant="h6" className={classes.flex}>{title}</Typography>
                        <Button color="inherit">Help</Button>
                    </Toolbar>
                </AppBar>
            );
        }

    }
}

const AppHeader = withStyles(styles)(AppNavigationComponent);

export default AppHeader