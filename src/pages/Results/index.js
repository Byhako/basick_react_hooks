import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'querystring';

import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors';

import MovieResult from '../../components/MoviesResult';
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  Button
} from '@material-ui/core';
import styles from './styles';

const Results = ({ location, history }) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchLoading(state));
  const classes = styles();

  useEffect(() => {
    const movieName = queryString.parse(location.search)['?movieName'];
    dispatch(searchMovie(movieName));
  }, [dispatch, location]);

  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => (
        <MovieResult key={index} {...value} />
      ))
    } else if (isLoading) {
      return <CircularProgress size={100} color='primary' />;
    }
    return <div />;
  };

  return (
    <Container className={classes.container}>
      <Grid className={classes.titleContainer}>
        <Typography variant='h3' className={classes.title}>
          Lista de Películas
        </Typography>
        <Button
          color='primary'
          className={classes.btn}
          onClick={() => history.push('/')}
        >Regresar</Button>
      </Grid>
      {renderMovies()}
    </Container>
  )
}

export default Results;
