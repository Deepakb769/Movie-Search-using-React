import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovies, addMovie } from "../api";
import { 
  fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure, 
  addMovieRequest, addMovieSuccess, addMovieFailure 
} from "./movieSlice";

function* fetchMoviesSaga(action) {
  try {
    const data = yield call(fetchMovies, action.payload);
    yield put(fetchMoviesSuccess(data));
  } catch (error) {
    yield put(fetchMoviesFailure("Error fetching movies"));
  }
}

function* addMovieSaga(action) {
  try {
    const newMovie = yield call(addMovie, action.payload);
    yield put(addMovieSuccess(newMovie));
  } catch (error) {
    yield put(addMovieFailure("Error adding movie"));
  }
}

export function* watchMovieSaga() {
  yield takeLatest(fetchMoviesRequest.type, fetchMoviesSaga);
  yield takeLatest(addMovieRequest.type, addMovieSaga);
}
