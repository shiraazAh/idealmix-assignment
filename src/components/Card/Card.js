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
        <CardContent className={classes.text}>
          <Typography component="h6" variant="h6">
          {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {props.publisher}
          </Typography>
        </CardContent>
        <Typography variant="subtitle2" className={classes.date}>
          25th July 2019
        </Typography>
          <Typography variant="subtitle2" className={classes.time}>
          2:25
          </Typography>
      </div>
    </Card>
  );
}

export default MediaControlCard