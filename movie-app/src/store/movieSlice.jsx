import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMoviesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    fetchMoviesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addMovieRequest: (state) => {
      state.loading = true;
    },
    addMovieSuccess: (state, action) => {
      state.movies.push(action.payload);
      state.loading = false;
    },
    addMovieFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { 
  fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure, 
  addMovieRequest, addMovieSuccess, addMovieFailure 
} = movieSlice.actions;

export default movieSlice.reducer;  