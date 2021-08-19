import { useState } from "react";

const IS_A_TRIANGLE = "Yo, the angles form a triangle";
const NOT_A_TRIANGLE = "Uh oh, that ain't no triangle, yo";
const ERROR_MSG = "Please, enter valid angles, yo";

export default function IsTriangle() {
  let [angleOne, setAngleOne] = useState("");
  let [angleTwo, setAngleTwo] = useState("");
  let [angleThree, setAngleThree] = useState("");
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    angleOne = Number(angleOne);
    angleTwo = Number(angleTwo);
    angleThree = Number(angleThree);

    if (angleOne && angleThree && angleTwo) {
      const sumOfAngles = angleOne + angleTwo + angleThree;
      let msg = sumOfAngles === 180 ? IS_A_TRIANGLE : NOT_A_TRIANGLE;
      setMessage(msg);
    } else {
      setMessage(ERROR_MSG);
    }
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
        onChange={({ target }) => setAngleOne(target.value)}
      />

      <label htmlFor="angle-2">Angle 2 (in degrees)</label>
      <input
        type="number"
        id="angle-2"
        value={angleTwo}
        onChange={({ target }) => setAngleTwo(target.value)}
      />

      <label htmlFor="angle-3">Angle 3 (in degrees)</label>
      <input
        type="number"
        id="angle-3"
        value={angleThree}
        onChange={({ target }) => setAngleThree(target.value)}
      />

      <button onClick={handleCheck}>Check</button>

      <p>{message}</p>
    </div>
  );
}
