import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptRecomendedMovie: null,
    tmdbResult: null,
  },
  reducers: {
    toggleShowGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptRecomendedMovieList, tmdbResultDataEachMovie } =
        action.payload;
      state.gptRecomendedMovie = gptRecomendedMovieList;
      state.tmdbResult = tmdbResultDataEachMovie;
    },
  },
});
export const { toggleShowGptSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
