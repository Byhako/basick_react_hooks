import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_BYID_START,
  CLEAR_MOVIES
} from '../../consts/actionTypes';

export const searchMovie = movieName => ({
  type: SEARCH_MOVIE_START,
  movieName
});

export const searchMovieById = id => ({
  type: SEARCH_MOVIE_BYID_START,
  id
});

export const clearMovies = () => ({
  type: CLEAR_MOVIES
});
