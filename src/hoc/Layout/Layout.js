import React, { useState } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

const Layout = (props) => {

    //Setting Boolean value for Side drawer to the state 
    const [sideDrawer, setSideDrawer] = useState(false);

    //Function to close side drawer 
    const closeSideDrawer = () => {
        setSideDrawer(false);
    }

    // Function to toggle side drawer
    const toggleSideDrawer = () => {
        setSideDrawer((prevState) => {
            return !prevState
        })
    }

    return (
        <div>
        <SideDrawer open={sideDrawer} click={closeSideDrawer}></SideDrawer>
        <Toolbar toggleSideDrawer={toggleSideDrawer}></Toolbar>
        <main>{props.children}</main>
        </div>
    )
}

export default Layout