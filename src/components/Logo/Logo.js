import React from 'react';
import LogoImage from '../../assets/Simple logo.png'
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={LogoImage} alt="Logo" />
        </div>
    )
}

export default logo;