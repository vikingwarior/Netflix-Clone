import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "nowPlayingMovies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    updateMoviesData: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { updateMoviesData } = moviesSlice.actions;

export default moviesSlice.reducer;
