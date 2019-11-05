import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";
import "../../.././Components.css";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numState, setNumState] = useState(numbers);
  const changeNumber = () => {
    setNumState(numState)
  }
  return (
    <div className='divNumbers'>
      {numState.map((number, index) => (
        <NumberButton key={index} number={number} setNumber={props.number}/>
      ))}
    </div>
  );
};

export default Numbers