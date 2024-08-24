import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const fetchData = async () => {
    const res = await fetch(NOW_PLAYING_URL, API_OPTIONS);
    const json = await res.json();
    // console.log(json.results);

    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    //memoization*
    if (!nowPlayingMovies) fetchData().catch(console.log("error"));
  }, []);
};
export default useNowPlayingMovies;
