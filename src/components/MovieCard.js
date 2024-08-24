import React from "react";
import { IMG_URL_PATH } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return; // handling if the movie path is noth there then it will be like logo which messes up the movie list
  return (
    <div className="w-44 p-2">
      <img alt="logo" src={IMG_URL_PATH + movie.poster_path} />
    </div>
  );
};

export default MovieCard;
