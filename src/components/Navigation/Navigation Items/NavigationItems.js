import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/Option1" exact>Option 1</NavigationItem>
            <NavigationItem link="/Option2" exact>Option 2</NavigationItem>   
        </ul>
    )
}

export default navigationItems;