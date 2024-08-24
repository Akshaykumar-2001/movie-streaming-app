import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.nowPlayingMovies);
  if (
    !movies.nowPlayingMovies ||
    !movies.popularMovies ||
    !movies.topRatedMovies ||
    !movies.upcomingMovies
  )
    return;
  // console.log("early return ");
  return (
    <div className="-mt-64">
      <MovieList title={"Now Playing"} movie={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movie={movies.topRatedMovies} />
      <MovieList title={"Popular Movies"} movie={movies.popularMovies} />
      <MovieList title={"upcoming Movies"} movie={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
