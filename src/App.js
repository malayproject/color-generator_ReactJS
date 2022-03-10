import "./App.css";
import React, { useState } from "react";

import Title from "./components/Title";
import Input from "./components/Input";
import Shades from "./components/Shades";
import Values from "values.js";

function App() {
  const [data, setData] = useState(new Values("#f4f"));
  const [error, setError] = useState("");
  let values = null;
  const submitHandler = (ipVal) => {
    console.log(ipVal);
    try {
      let temp = new Values(ipVal);
      console.log(temp);
      setError("");
      setData(temp);
    } catch (err) {
      console.log(err);
      setError("error");
    }
  };
  return (
    <main className="main">
      <Title />
      <Input submitHandler={submitHandler} error={error} />
      <Shades data={data} />
    </main>
  );
}

export default App;
