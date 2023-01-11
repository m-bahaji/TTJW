import React, { useState } from "react";

export default function ListItem(props) {
  const [isClicked, setStatus] = useState(false);
  function handleClick() {
    setStatus((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div className="box">
      <li
        style={{ textDecoration: isClicked ? "line-through" : "none" }}
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        {props.customValue}
      </li>
      <div>
        <input
          onClick={handleClick}
          type="checkbox"
          className="checkBox"
        ></input>
      </div>
    </div>
  );
}

/*
  Code functionality wise, perfectly good
  My only comments would be regarding some naming conventions.
  An unspoken rule generally used with useState is that you have 
  XYZ variable name and setXYZ as the state update function.
  
  Its perfectly fine to name them differently, but in large files,
  for others looking at your code, it may get confusing if these
  are named differently.

  I would personally favour the naming for checkbox based booleans as
  const [active, setActive] = useState(false);

  or in this specific case
  const [isCompleted, setIsCompleted] = useState(false);

  As isCompleted is clearer for if we should strikethrough the text or not.

  Otherwise good use of a subcomponent, this is the sort of this I refer
  to when saying how the button code reused in several components could
  be its own component too.

*/