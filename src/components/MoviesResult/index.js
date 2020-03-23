import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Card, Grid, Typography, Button,
} from '@material-ui/core';
import styles from './styles';

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const classes = styles();
  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid>
          <img src={Poster} alt='null' className={classes.poster} />
        </Grid>
        <Grid className={classes.gridContainer}>
          <Typography variant='h5'><strong>{Title}</strong></Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>

          <Button
            color='primary'
            variant='contained'
            className={classes.btn}
            onClick={() => history.push(`/movie/${imdbID}`)}
          >Ver Más</Button>
        </Grid>
      </Grid>
    </Card>
  )
};

export default withRouter(MovieResult);
