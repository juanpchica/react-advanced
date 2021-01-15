import React, { useState } from "react";

const UseStateCounter = () => {
  let [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  const counterOne = () => {
    setTimeout(() => {
      setValue((lastValue) => {
        return lastValue + 1;
      });
    }, 2000);
  };

  const infite = () => {
    setInterval(function () {
      setValue(value++);
    }, 1000);
  };

  return (
    <>
      <section>
        <h2>Simple Counter</h2>
        <h3>{value}</h3>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
      </section>

      <section>
        <h2>Complex Counter</h2>
        <h3>{value}</h3>
        <button type="button" className="btn" onClick={() => counterOne()}>
          TimeOut
        </button>
        <button type="button" className="btn" onClick={() => infite()}>
          Infinite
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
