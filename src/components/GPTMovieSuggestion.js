import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptRecomendedMovie, tmdbResult } = gpt;
  /*
  gptRecomendedMovie=[0,  1, 2, 3]
  tmdbResult        =[{},{},{},{}]
  */
  if (!gptRecomendedMovie) return <h1>No Movies Found :/ !</h1>;
  console.log(tmdbResult);
  return (
    <div className=" p-4 m-4 text-white bg-opacity-80">
      {gptRecomendedMovie.map((movie, index) => (
        <MovieList key={movie} title={movie} movie={tmdbResult[index]} />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
