import React from 'react';
import NavigationItems from '../Navigation Items/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;