export const LOGIN_BG_LINK = "https://s6.imgcdn.dev/L075v.jpg";
//prev netflix bg-logo : https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg
export const LOGO_URL = "https://s6.imgcdn.dev/L0BON.png";
//prev netflix logo "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
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
