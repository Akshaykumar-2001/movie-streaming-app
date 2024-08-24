import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS, TMDB_SEARCH_MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../redux/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const fetchFromTMDB = async (movie) => {
    const data = await fetch(
      TMDB_SEARCH_MOVIE_URL +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("Result here : ");
    // console.log(json.results);
    return json.results;
  };
  const handleSearch = async () => {
    // console.log(searchText.current.value);
    const query =
      "Act as a Movie Recommendation system and suggest me some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like example result given ahead. Example Result : jalsa, indra, tholi prema, rangasthlam, athaarintikidaredhi";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const gptRecomendedMovieList =
      gptResults.choices[0].message.content.split(",");
    console.log(gptRecomendedMovieList);
    const promiseArray = gptRecomendedMovieList.map((movie) =>
      fetchFromTMDB(movie)
    ); //will return promises*******
    const tmdbResultDataEachMovie = await Promise.all(promiseArray);
    dispatch(
      addGptMovies({
        gptRecomendedMovieList: gptRecomendedMovieList,
        tmdbResultDataEachMovie: tmdbResultDataEachMovie,
      })
    );
    console.log(tmdbResultDataEachMovie);
  };
  return (
    <div className="pt-[10%] flex justify-center hover:shadow-2xl">
      <form
        className="w-1/2 bg-black grid grid-cols-12 p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="border border-black p-4 col-span-9"
          type="text"
          placeholder="What do you want to watch ?"
        />
        <button
          className="bg-red-600 text-white p-4 mx-2 col-span-3 font-bold hover:underline text-lg"
          onClick={handleSearch}
        >
          Search 🔎
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
