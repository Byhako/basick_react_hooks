import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieById } from '../../redux/actions/search';
import { movieResult } from '../../redux/selectors';

import { Container, CircularProgress, Typography } from '@material-ui/core';
import styles from './styles';

export default ({ match }) => {
  const dispatch = useDispatch();
  const classes = styles();

  useEffect(() => {
    dispatch(searchMovieById(match.params.id))
  }, [dispatch, match])

  const movie = useSelector(state => movieResult(state));

  if (!movie) {
    return (
      <div className={classes.loader}>
        <CircularProgress size={100} color='primary' />
      </div>
    )
  }

  return (
    <Container className={classes.container}>
      <Typography variant='h3'>{movie.Title}</Typography>
      <img src={movie.Poster} alt='null' className={classes.poster} />
      <Typography variant='h5'>
        <strong>Actores: </strong>{movie.Actors}
      </Typography>
      <br />
      <Typography variant='h5'>
        <strong>Director: </strong>{movie.Director}
      </Typography>
      <br />
      <Typography variant='h5'>
        <strong>Pais: </strong>{movie.Country}
      </Typography>
      <br />
      <Typography variant='h5'>
        <strong>Clasificación: </strong>{movie.Rated}
      </Typography>
      <br />
      <Typography variant='h5'>
        <strong>Premios: </strong>{movie.Awards}
      </Typography>
      <br />
      <Typography variant='h5'>
        <strong>Sinopsis: </strong>{movie.Plot}
      </Typography>
    </Container>
  )
};
