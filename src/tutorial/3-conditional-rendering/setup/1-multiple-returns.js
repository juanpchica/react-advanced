import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
let data = [];
const MultipleReturns = () => {
  const [loading, setloading] = useState(true);
  const getData = async () => {
    const response = await fetch(url);
    data = await response.json();
    setloading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="item">
        <img src={data.avatar_url} alt="" />
        <h2>{data.name}</h2>
      </div>
    </>
  );
};

export default MultipleReturns;
