import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "nowPlayingMovies",
  initialState: {
    nowPlayingMovies: null,
    moviePromoClips: null
  },
  reducers: {
    updateMoviesData: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    updatePromoClips: (state, action) => {
      state.moviePromoClips = action.payload;
    }
  },
});

export const { updateMoviesData, updatePromoClips } = moviesSlice.actions;

export default moviesSlice.reducer;
