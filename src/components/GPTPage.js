import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { LOGIN_BG_LINK } from "../utils/constants";

const GPTPage = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img src={LOGIN_BG_LINK} alt="Bg-logo" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTPage;
