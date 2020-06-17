import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import SamplePic from '../images/face.jpg';
import HatenaAlt from '../images/hatenaalt.jpg';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#01579b',
    marginBottom:20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 0 0',
  },
  cover: {
    width: 120,
  },
  penIcon: {
    height: 15,
    width: 15,
    color:'#ffd600',
  },
}));

export default function MediaControlCard({ imgurl,day,title }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
     <CardMedia
        className={classes.cover}
        component="img"
        src={ imgurl != null ? imgurl : HatenaAlt }
        title="はてなブログ画像"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1">
            <CreateOutlinedIcon className={classes.penIcon} /><b>{ title }</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <u>{ day }</u>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}