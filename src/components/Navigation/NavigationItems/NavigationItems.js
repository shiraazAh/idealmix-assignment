import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Pizza</NavigationItem>
            <NavigationItem link="/Favourite" exact>Favourite</NavigationItem>   
        </ul>
    )
}

export default navigationItems;