import React, { useState } from "react";

const ERROR = "Please enter all the fields";

export default function Area() {
  const [area, setArea] = useState("");
  const [error, setError] = useState("");

  let [sideOne, setSideOne] = useState("");
  let [sideTwo, setSideTwo] = useState("");
  let [sideThree, setSideThree] = useState("");

  const isValid = sideOne && sideTwo && sideThree;

  const clickHandler = () => {
    setError(ERROR);
    if (!isValid) return;

    const semiPerimeter = (sideOne + sideTwo + sideThree) / 2;
    const areaOfTriangle = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - sideOne) *
        (semiPerimeter - sideTwo) *
        (semiPerimeter - sideThree)
    );
    setError("");
    setArea(areaOfTriangle.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Calculate Area of Triangle</h1>

      <label htmlFor="side1">Enter first side</label>
      <input
        type="number"
        id="side1"
        value={sideOne}
        onChange={({ target }) => setSideOne(parseInt(target.value))}
      />

      <label htmlFor="side2">Enter second side</label>
      <input
        type="number"
        id="side2"
        value={sideTwo}
        onChange={({ target }) => setSideTwo(parseInt(target.value))}
      />

      <label htmlFor="side3">Enter third side</label>
      <input
        type="number"
        id="side3"
        value={sideThree}
        onChange={({ target }) => setSideThree(parseInt(target.value))}
      />

      <button onClick={clickHandler}>Calculate</button>

      <p style={{ display: area ? "block" : "none" }}>
        Area of a triangle using Heron's formula is {area} square units.
      </p>

      <p className="error">{error}</p>
    </div>
  );
}
