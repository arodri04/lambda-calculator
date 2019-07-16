import React from "react";
import { tsPropertySignature } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <button key={props.op.toString()}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.op}
    </button>
  );
};

export default OperatorButton;