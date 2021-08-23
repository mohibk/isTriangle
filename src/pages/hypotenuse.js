import { useState } from "react";

const ERROR = "Please enter both fields";

export default function Hypotenuse() {
  let [base, setBase] = useState("");
  let [height, setHeight] = useState("");
  const [hypotenuse, setHypotenuse] = useState("");
  const [error, setError] = useState("");

  const clickHandler = () => {
    setHypotenuse("");
    setError(ERROR);
    if (!(base && height)) return;

    let result = Math.sqrt(base ** 2 + height ** 2);
    setHypotenuse(result.toFixed(2));
    setError("");
  };

  return (
    <div className="container">
      <h1>Hypotenuse of a Triangle</h1>
      <label htmlFor="base">Enter Base</label>
      <input
        type="number"
        id="base"
        value={base}
        onChange={({ target }) => setBase(parseInt(target.value))}
      />
      <label htmlFor="perpendicular">Enter Perpendicular</label>
      <input
        type="number"
        id="perpendicular"
        value={height}
        onChange={({ target }) => setHeight(parseInt(target.value))}
      />
      <button onClick={clickHandler}>Calculate Hypotenuse</button>
      <p style={{ display: hypotenuse ? "block" : "none" }}>
        The hypotenuse is: {hypotenuse}
      </p>

      <p className="error">{error}</p>
    </div>
  );
}
