import React from 'react';
import NavigationItems from '../Navigation Items/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle'
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.toggleSideDrawer}></DrawerToggle>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;