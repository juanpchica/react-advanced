import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <React.Fragment>
      <h2>show/hide</h2>
      {isShow && <Item />}
      <button className="btn" type="button" onClick={() => setIsShow(!isShow)}>
        Show/Hide
      </button>
    </React.Fragment>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checksize = function () {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => {
      window.removeEventListener("resize", checksize);
    };
  }, []);

  return (
    <>
      <h2>Window Width</h2>
      <h2>{size} px</h2>
    </>
  );
};

export default ShowHide;
