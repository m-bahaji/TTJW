import React, { useState } from "react";
import ListItem from "./ListItem";
import Time from "./Time";
import CurrentWeather from "./CurrentWeather";
import Joke from "./Joke";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

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
      /**
       * NOTE: In general you should not filter an array based on an index as the index is prone to chagne.
       * Define how an item looks, for example a task has a title (your string) and an unique identifier (taskId)(task as object)
       * If you then filter, you can compare id and taskId which makes the code more reliable.
       */
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="custom-container-TODO Todo-List">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
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
  );
}
