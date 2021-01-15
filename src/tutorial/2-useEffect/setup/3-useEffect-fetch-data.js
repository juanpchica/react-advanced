import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          //console.log(user);
          return (
            <li key={user.id} className="item">
              <img src={user.avatar_url} alt="" />
              <h4>{user.login}</h4>
              <a href={user.html_url}>See Profile</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
