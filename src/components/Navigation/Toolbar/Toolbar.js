import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import NavigationItems from '../Navigation Items/NavigationItems';
import Logo from '../../Logo/Logo';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import classes from './Toolbar.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    ['@media (min-width:500px)']: { // eslint-disable-line no-useless-computed-key
        display: 'none'
      }
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    textAlign: "center",
  },
  toolbar: {
      background: "#CF8F2E",
  }
}));

const ButtonAppBar = (props) => {
  const materialClasses = useStyles();

  return (
    <div className={materialClasses.root}>
      <AppBar position="static" className={materialClasses.toolbar}>
        <Toolbar>
            <IconButton edge="start" className={materialClasses.menuButton} color="inherit" aria-label="menu" onClick={props.toggleSideDrawer}>
                <MenuIcon />
            </IconButton>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <Typography variant="h5" className={materialClasses.title}>
            </Typography>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;