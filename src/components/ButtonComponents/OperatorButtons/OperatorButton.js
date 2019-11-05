import React from "react";

const OperatorButton = (props) => {
  return (
    <span className='operators'>
      {props.operators.char}
    </span>
  );
};

export default OperatorButton
