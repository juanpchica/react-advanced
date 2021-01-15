import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handlerClick = () => {
    title = "title changed";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handlerClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
