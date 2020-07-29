import React from 'react';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigation Items/NavigationItems';
import classes from './Sidedrawer.module.css';

const sideDrawer = (props) => {

    let assignedClasses = [classes.SideDrawer, classes.Close];

    if(props.open) {
        assignedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <React.Fragment>
            <BackDrop show={props.open} clicked={props.click}></BackDrop>
            <div className={assignedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </React.Fragment>
    )
};

export default sideDrawer;