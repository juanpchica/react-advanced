import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 1) {
      document.title = `Title ${value}`;
    }
    console.log("render with", value);
  }, [value]);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  console.log("First");

  return (
    <>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
