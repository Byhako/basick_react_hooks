import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../api';

import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR
} from '../../consts/actionTypes';

export function* searchMovie({ movieName }) {
  try {
    const result = yield call(apiCall, `&s=${movieName}`, null, null, 'GET');
    yield put({ type: SEARCH_MOVIE_COMPLETE, result});
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_ERROR, error});
  }
};

export default function* search() {
  yield takeLatest(SEARCH_MOVIE_START, searchMovie);
};
