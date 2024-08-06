import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "nowPlayingMovies",
  initialState: {
    nowPlayingMovies: [],
    moviePromoClips: []
  },
  reducers: {
    updateMoviesData: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    updatePromoClips: (state, action) => {
      state.moviePromoClips = action.payload;
    },
    clearSlice: (state) => {
      state.nowPlayingMovies.length = 0;
      state.moviePromoClips.length = 0;
    }
  },
});

export const { updateMoviesData, updatePromoClips, clearSlice } = moviesSlice.actions;

export default moviesSlice.reducer;
