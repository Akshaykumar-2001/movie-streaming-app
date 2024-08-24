import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieRducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieRducer,
    gpt: gptReducer,
  },
});

export default appStore;
