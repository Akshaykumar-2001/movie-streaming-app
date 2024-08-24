import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movie }) => {
  if (!movie) return;
  // console.log(nowPlayingMovies);
  return (
    <div className="bg-black pb-2 pl-4 bg-opacity-80">
      <h1 className="text-xl text-white font-bold pl-2">{title}</h1>
      <div className="flex  overflow-x-scroll">
        <div className="flex ">
          {movie.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
