import { useState } from "react";

const IS_A_TRIANGLE = "Yay, the angles form a triangle 😊";
const NOT_A_TRIANGLE = "Uh oh, that ain't no triangle 😔";
const ERROR_MSG = "Please, enter valid angles 😐";

export default function IsTriangle() {
  let [angleOne, setAngleOne] = useState("");
  let [angleTwo, setAngleTwo] = useState("");
  let [angleThree, setAngleThree] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isValid = angleOne && angleThree && angleTwo;

  const handleCheck = () => {
    setMessage("");
    setError(ERROR_MSG);
    if (!isValid) return;

    const sumOfAngles = angleOne + angleTwo + angleThree;
    let msg = sumOfAngles === 180 ? IS_A_TRIANGLE : NOT_A_TRIANGLE;
    setError("");
    setMessage(msg);
  };

  return (
    <div className="container">
      <h1>Is Triangle?</h1>

      <label htmlFor="angle-1">Angle 1 (in degrees)</label>
      <input
        type="number"
        id="angle-1"
        autoFocus
        value={angleOne}
        onChange={({ target }) => setAngleOne(parseInt(target.value))}
      />

      <label htmlFor="angle-2">Angle 2 (in degrees)</label>
      <input
        type="number"
        id="angle-2"
        value={angleTwo}
        onChange={({ target }) => setAngleTwo(parseInt(target.value))}
      />

      <label htmlFor="angle-3">Angle 3 (in degrees)</label>
      <input
        type="number"
        id="angle-3"
        value={angleThree}
        onChange={({ target }) => setAngleThree(parseInt(target.value))}
      />

      <button onClick={handleCheck}>Check</button>

      <p>{message}</p>

      <p className="error">{error}</p>
    </div>
  );
}
