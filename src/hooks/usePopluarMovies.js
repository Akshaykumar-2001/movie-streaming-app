import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const fetchData = async () => {
    const res = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await res.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    if (!popularMovies) fetchData();
  }, []);
};
export default usePopularMovies;
