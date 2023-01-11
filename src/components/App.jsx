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
  /*
  First point here is regarding the mouseOver JS events

  This is a totally acceptable way of adjusting the styles,
  but a more simple method would be to use the css :hover attribute
   
  This will require relocating the inline css to a class and then
  using a className on the button. 

  For example
  .myButton {
    backgroundColor: transparent;
  }

  .myButton:hover {
    background-color: black;
  }

  This would save a lot of lines of code, as you would then have a
  reusable button style for each button in the app.

  Which bings us to point 2
  There are multiple buttons all with the same qualities here.
  They could each be replaced with a shared <MyButton /> component.
  This component would share the CSS, or in this case the bg-color
  functionality for mouseOver, while receving a text and onClick
  prop from the parent component where it is implemented.

  The whole TODO list on this file can be it's own component as well
  like how the Time, Joke and Current Weather components are.
  

  Small final point, the functionality of deleting a list item should
  be changed.
  In this specific case, you will probably get away with it, but 
  generally, filtering an array by the index position can cause issues
  down the road.
  A more safe way of doing this in this instance would be to use a 
  dictionary of key value pairs, where you can reference the key of
  a value that needs to be removed, instead of an index in an array
  which could mutate under more complex circumstances.
  The key will always be unique and specific to the value, regardless
  of where its "position" might be in the dictionary, whereas an array
  item index can be populated by any value, and when removed, all values
  afterwards will shift back into the empty positions.
  ( let me know if more clarification needed on this )
  */