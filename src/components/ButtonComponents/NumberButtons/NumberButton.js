import React from "react";

const NumberButton = (props) => {
  return (
    <button key={props.num.toString()}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.num}
    </button>
  );
};

export default NumberButton;
