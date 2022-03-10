import React, { useState } from "react";

const Input = ({ submitHandler, error }) => {
  const [ipVal, setIpVal] = useState("");
  return (
    <div className="inputCon">
      <input
        type="text"
        className={`input ${error}`}
        placeholder=" eg. rgb(255, 255, 255)"
        value={ipVal}
        onChange={(e) => setIpVal(e.target.value)}
      ></input>
      <button className="submitBtn" onClick={() => submitHandler(ipVal)}>
        Submit
      </button>
    </div>
  );
};

export default Input;
