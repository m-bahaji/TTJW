import React, { useState } from "react";
import ListItem from "./ListItem";
import Time from "./Time";
import CurrentWeather from "./CurrentWeather";
import Joke from "./Joke";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText === "" || inputText === null) {
      return;
    }
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function mouseOver() {
    setButtonColor(true);
  }
  function mouseOut() {
    setButtonColor(false);
  }

  return (
    <div>
      <div className="heading custom-container-heading">
        <h1>TTJW APP</h1>
      </div>
      <div className="container">
        <div className="custom-container-TODO Todo-List">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button
              style={{
                backgroundColor: buttonColor === true ? "black" : "transparent",
              }}
              onMouseOut={mouseOut}
              onMouseOver={mouseOver}
              onClick={addItem}
            >
              <span>Hinzufügen</span>
            </button>
          </div>
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <ListItem
                  customValue={todoItem}
                  onChecked={deleteItem}
                  key={index}
                  id={index}
                />
              ))}
            </ul>
          </div>
        </div>
        <Time />
        <Joke />
        <CurrentWeather />
      </div>
    </div>
  );
}
