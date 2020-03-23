import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_BYID_START,
  SEARCH_MOVIE_BYID_COMPLETE,
  SEARCH_MOVIE_BYID_ERROR,
  CLEAR_MOVIES
} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_COMPLETE:
      return { ...state, isLoading: false, movieResults: action.result.data };
    case SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movieResults: null };
    case CLEAR_MOVIES:
      return { ...state, isLoading: false, movieResults: null };
    case SEARCH_MOVIE_BYID_START:
      return { ...state, isLoading: true, movieResult: null };
    case SEARCH_MOVIE_BYID_COMPLETE:
      return { ...state, isLoading: false, movieResult: action.result.data };
    case SEARCH_MOVIE_BYID_ERROR:
      return { ...state, isLoading: false, movieResult: null };
    default:
      return { ...state };
  }
}