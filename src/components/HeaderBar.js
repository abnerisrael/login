import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Tooltip,
    Popover,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderBar(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoff = e => {
        e.preventDefault();
        props.handleLogoff();
    }

    return (
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h6" className={classes.title}>
                    App
                </Typography>

                <Tooltip title="User Options" aria-label="User Options">
                    <IconButton
                        edge="end"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </IconButton>
                </Tooltip>

                <Popover
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button onClick={handleLogoff}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faSignOutAlt}/>
                            </ListItemIcon>

                            <ListItemText primary="Log out" />
                        </ListItem>
                    </List>

                </Popover>

            </Toolbar>
            
        </AppBar>

    );
}