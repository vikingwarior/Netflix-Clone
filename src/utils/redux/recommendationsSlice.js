import { createSlice } from "@reduxjs/toolkit";

const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState: {
    movieRecommendations: [],
    tmdbResponse: [],
  },
  reducers: {
    addOrUpdateRecommendations: (state, action) => {
      state.movieRecommendations = action.payload;
    },
    addOrUpdateTmdbResponse: (state, action) => {
      state.movieRecommendations = action.payload;
    },
    clearSlice: (state) => {
      state.movieRecommendations.length = 0;
      state.tmdbResponse.length = 0;
    },
  },
});

export const { addOrUpdateRecommendations, clearSlice } =
  recommendationsSlice.actions;

export default recommendationsSlice.reducer;
