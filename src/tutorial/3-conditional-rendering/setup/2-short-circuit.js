import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "First value";
  const secondValue = text && "Second Value";

  return (
    <>
      <h2>{text || "First Value validation"}</h2>
      {!text && <h2>#hello</h2>}
      {isError && <h4>There is an error...</h4>}
      {isError ? (
        <h3>There is an error my friend</h3>
      ) : (
        <div>
          <h3>Without Error</h3>
        </div>
      )}
      <button
        className="btn"
        type="button"
        onClick={() => setIsError(!isError)}
      >
        Toogle Text
      </button>
    </>
  );
};

export default ShortCircuit;
