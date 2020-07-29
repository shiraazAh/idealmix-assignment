import React from 'react';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <div className={classes.Layout}>
        <Toolbar></Toolbar>
        <main>{props.children}</main>
        </div>
    )
}

export default layout