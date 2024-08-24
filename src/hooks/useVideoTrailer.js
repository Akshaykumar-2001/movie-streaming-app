import { useEffect } from "react";
import { API_OPTIONS, TRAILER_URL } from "../utils/constants";
import { addTrailer } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useVideoTrailer = (id) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      TRAILER_URL + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length === 0 ? json.results[0] : filterData[0]; //handle no trailer for the movie and one or more trailers
    dispatch(addTrailer(trailer));
    // console.log(json.results);
    // console.log(trailer);
  };
  useEffect(() => {
    fetchData();
  }, []);
};
export default useVideoTrailer;
