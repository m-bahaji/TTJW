import React, { useState } from "react";

export default function Joke(props) {
  const [currentJoke, setJoke] = useState(null);

  function handleClick() {
    const APIJOKE =
      "https://v2.jokeapi.dev/joke/Any?lang=de&blacklistFlags=racist,sexist&type=single&idRange=0-30";

    fetch(APIJOKE)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
      });
  }

  return (
    <div className="custom-container-Joke Joke-Generator">
      <div className="heading">
        <h1>Joke Generator</h1>
      </div>
      <button
        className="joke-button"
        onClick={handleClick}
      >
        <span>Generate</span>
      </button>
      {currentJoke && (
        <div>
          <p>{currentJoke.joke} </p>
        </div>
      )}
    </div>
  );
}
