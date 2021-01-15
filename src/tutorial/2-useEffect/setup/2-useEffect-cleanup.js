import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth);
  const checkSize = () => {
    setValue(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h2>Window Width</h2>
      <h3>{value}</h3>
    </>
  );
};

export default UseEffectCleanup;
