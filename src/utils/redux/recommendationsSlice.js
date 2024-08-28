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
      state.tmdbResponse = action.payload;
    },
    clearSlice: (state) => {
      state.movieRecommendations.length = 0;
      state.tmdbResponse.length = 0;
    },
  },
});

export const { addOrUpdateRecommendations, addOrUpdateTmdbResponse, clearSlice } =
  recommendationsSlice.actions;

export default recommendationsSlice.reducer;
