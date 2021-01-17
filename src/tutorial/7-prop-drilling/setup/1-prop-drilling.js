import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id != id);
    });
  };
  return (
    <section>
      <h3>Prop drilling </h3> <List people={people} removeItem={removeItem} />
    </section>
  );
};

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} removeItem={removeItem} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removeItem }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="btn" type="button" onClick={() => removeItem(id)}>
        Delete item
      </button>
    </div>
  );
};

export default PropDrilling;
