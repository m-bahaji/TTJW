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
