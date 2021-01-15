import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const remove = (id = "") => {
    if (id !== "") {
      let newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    } else {
      setPeople([]);
    }
  };
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h3>{person.name}</h3>
            <button
              type="button"
              className="btn"
              onClick={() => remove(person.id)}
            >
              Delete item
            </button>
          </div>
        );
      })}

      <button type="button" className="btn" onClick={() => remove()}>
        Remove all items
      </button>
    </>
  );
};

export default UseStateArray;
