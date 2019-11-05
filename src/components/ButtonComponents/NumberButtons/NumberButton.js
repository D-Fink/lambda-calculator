import React from "react";
import "../../.././Components.css";

const NumberButton = (props) => {
  return (
    <span className={props.number === '0' ? "zero":"number"} onClick={() => props.setNumber(props.number)}>
      {props.number}
    </span>
  );
};

export default NumberButton;