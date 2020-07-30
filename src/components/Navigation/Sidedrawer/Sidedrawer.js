import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

import classes from './Sidedrawer.module.css';

/*** Side drawer Component ***/

//Side drawer Styles 

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  navigation: {
      marginLeft: "0px"
  }
});

const TemporaryDrawer = (props) => {

  //Setting side drawer styles
  const materialClasses = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(materialClasses.list, {
        [materialClasses.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={props.click}
      onKeyDown={props.click}
    >
    <div className={classes.Logo}>
        <Logo />
    </div>
    <Divider />
    <List className={materialClasses.navigation}>
        <NavigationItems />
    </List>
    </div>
  );

  return (
    <div>
        <React.Fragment >
          <Drawer anchor="left" open={props.open} onClose={props.click}>
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;