import { createSlice } from "@reduxjs/toolkit";

const recommendationsSlice = createSlice({
    name: "recommendations",
    initialState: {
        movieRecommendations: []
    },
    reducers:{
        addOrUpdateRecommendations: (state, action) => {
            state.movieRecommendations = action.payload;
        },
        clearSlice: (state) => {
            state.movieRecommendations.length = 0;
        }
    }
});

export const {addOrUpdateRecommendations, clearSlice} = recommendationsSlice.actions;

export default recommendationsSlice.reducer;