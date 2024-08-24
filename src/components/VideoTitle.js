import React from "react";

const VideoTitle = ({ title, overview }) => {
  //   const nowPlayingMovies=useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div className="aspect-video w-screen absolute text-white bg-gradient-to-b from-black pt-28 pl-6">
      <h1 className="text-4xl font-bold my-4">{title}</h1>
      <p className="w-3/12 my-2 text-justify">{overview}</p>
      <div>
        <button className="bg-red-500 m-2 p-4 text-white rounded-md bg-opacity-85 hover:shadow-2xl hover:bg-opacity-60">
          ▷ Play
        </button>
        <button className="bg-red-500 m-2 p-4 text-white rounded-md bg-opacity-85 hover:shadow-2xl hover:bg-opacity-60">
          More ⓘ
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
