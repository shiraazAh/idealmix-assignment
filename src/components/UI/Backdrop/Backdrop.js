import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 100,
    color: '#fff',
  },
}));

const SimpleBackdrop = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={props.show} onClick={props.clicked} />
    </div>
  );
}

export default SimpleBackdrop;
