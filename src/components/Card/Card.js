import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classes from './Card.module.css'

 const MediaControlCard = (props) => {


  return (
    <Card className={classes.root}>
      <CardMedia
      className={classes.cover}
      image={props.img}
      title={props.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Shiraaz
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.title}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default MediaControlCard