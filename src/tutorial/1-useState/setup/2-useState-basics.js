import React, { useState } from "react";

const UseStateBasics = () => {
  //console.log(useState("Hello World"));

  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("HELLO");

  function handlerClick() {
    if (text === "New Title") {
      setText("HELLO");
    } else {
      setText("New Title");
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handlerClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
