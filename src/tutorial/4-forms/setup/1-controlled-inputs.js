import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const changeName = (e) => {
    setFirstName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const sendForm = (e) => {
    e.preventDefault();
    if (firstName === "" || email === "") {
      alert("Please fill out all fields");
    } else {
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: firstName, email: email },
      ]);
      setEmail("");
      setFirstName("");
    }
  };

  return (
    <>
      <section>
        {firstName}
        <form className="form" onSubmit={sendForm}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={changeName}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name={email}
              value={email}
              onChange={changeEmail}
            />
          </div>
          <button type="submit" className="btn">
            Send form
          </button>
        </form>
        <List people={people}></List>
      </section>
    </>
  );
};

const List = (props) => {
  const people = props.people;
  return (
    <>
      {people.length > 0 && (
        <ul className="list">
          {people.map((person, index) => {
            return (
              <li className="item" key={person.id}>
                {person.name} - {person.email}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ControlledInputs;
