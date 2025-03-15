import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieReducer from "../store/movieSlice";
import { watchMovieSaga } from "../store/moviesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchMovieSaga);

export default store;
