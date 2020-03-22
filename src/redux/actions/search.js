import { SEARCH_MOVIE_START } from '../../consts/actionTypes';

export const searchMovie = movieName => ({
  type: SEARCH_MOVIE_START,
  movieName
});
