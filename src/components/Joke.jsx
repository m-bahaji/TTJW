import React, { useState } from "react";

export default function Joke(props) {
  const [currentJoke, setJoke] = useState(null);
  const [buttonColor, setButtonColor] = useState(false);

  function handleClick() {
    const APIJOKE =
      "https://v2.jokeapi.dev/joke/Any?lang=de&blacklistFlags=racist,sexist&type=single&idRange=0-30";

    fetch(APIJOKE)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
      });
  }
  function mouseOver() {
    setButtonColor(true);
  }
  function mouseOut() {
    setButtonColor(false);
  }
  return (
    <div className="custom-container-Joke Joke-Generator">
      <div className="heading">
        <h1>Joke Generator</h1>
      </div>
      <button
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{
          backgroundColor: buttonColor === true ? "black" : "transparent",
        }}
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
