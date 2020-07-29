import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const CircularIndeterminate = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="inherit" size={100} thickness={3.6}/>
    </div>
  );
}

export default CircularIndeterminate;