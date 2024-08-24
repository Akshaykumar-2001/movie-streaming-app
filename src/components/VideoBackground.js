import React, { useEffect } from "react";
import useVideoTrailer from "../hooks/useVideoTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useVideoTrailer(id);

  const trailer = useSelector((store) => store.movies?.trailer);
  if (trailer === null) return; //early return b/c before fetching trailer is null so we can't access null
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailer.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
