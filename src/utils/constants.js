export const LOGIN_BG_LINK = "https://s6.imgcdn.dev/L075v.jpg";

export const LOGO_URL = "https://s6.imgcdn.dev/L0BON.png";

export const USER_ICON =
  "https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const IMG_URL_PATH = "https://image.tmdb.org/t/p/w500/";

export const TRAILER_URL = "https://api.themoviedb.org/3/movie/";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const TMDB_SEARCH_MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?query=";

export const UP_COMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

// export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
