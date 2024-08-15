import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "nowPlayingMovies",
  initialState: {
    nowPlayingMovies: null,
    moviePromoClips: null,
    randomMovieIndex: null,
  },
  reducers: {
    updateMoviesData: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    updatePromoClips: (state, action) => {
      state.moviePromoClips = action.payload;
    },
    updateRandomMovieIndex: (state, action) => {
      state.randomMovieIndex = action.payload;
    },
    clearSlice: (state) => {
      state.nowPlayingMovies.length = 0;
      state.moviePromoClips.length = 0;
    },
  },
});

export const {
  updateMoviesData,
  updatePromoClips,
  updateRandomMovieIndex,
  clearSlice,
} = moviesSlice.actions;

export default moviesSlice.reducer;
