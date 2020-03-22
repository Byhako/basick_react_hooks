import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'querystring';

import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors';

import {
  Container,
} from '@material-ui/core';

const Results = ({ location }) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => movieResults(state));
  console.log(movies);
  

  useEffect(() => {
    const movieName = queryString.parse(location.search)['?movieName'];
    dispatch(searchMovie(movieName));
  }, [dispatch, location]);

  return (
    <Container>
      Resulatos
    </Container>
  )
}

export default Results;
