import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  function getAPIResponse(response) {
    setResult(response.data[0]);
  }

  function getPexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const axios = require("axios");
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`;
    let pexelsApiKey =
      "563492ad6f91700001000001e416c601d1004ae7878bf724e7417a3f";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(apiURL)
      .then(getAPIResponse)
      .catch(function (error) {
        window.alert(`Sorry, the word "${word}" is not in this dictionary`);
      });
    axios.get(pexelsApiUrl, { headers: headers }).then(getPexelsResponse);
    event.target.reset();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus="on"
          className="search-field"
          onChange={updateWord}
        />{" "}
        <br />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <SearchResults result={result} />
      <Photos photos={photos} word={word} />
    </div>
  );
}
