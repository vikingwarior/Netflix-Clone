import { configureStore } from "@reduxjs/toolkit";

import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";
import recommendationsSliceReducer from "./recommendationsSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
    recommendations: recommendationsSliceReducer,
  },
});

export default appStore;
