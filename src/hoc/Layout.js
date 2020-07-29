import React, { useState } from 'react';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/Sidedrawer/Sidedrawer';
import classes from './Layout.module.css';

const Layout = (props) => {

    const [sideDrawer, setSideDrawer] = useState(false);

    const closeSideDrawer = () => {
        setSideDrawer(false);
    }

    const toggleSideDrawer = () => {
        setSideDrawer((prevState) => {
            return !prevState
        })
    }

    return (
        <div className={classes.Layout}>
        <SideDrawer open={sideDrawer} click={closeSideDrawer}></SideDrawer>
        <Toolbar toggleSideDrawer={toggleSideDrawer}></Toolbar>
        <main>{props.children}</main>
        </div>
    )
}

export default Layout