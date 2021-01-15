import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Juan",
    age: 25,
    message: "Good look!",
  });

  const setMessage = () => {
    setPerson({ ...person, message: "New Message" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button type="button" className="btn" onClick={() => setMessage()}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
