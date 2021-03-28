import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const counterIncreament = function () {
    const value = counter + 1;
    setCounter(value);
  };
  const counterDecreament = function () {
    if (counter === 0) {
      return;
    }
    const value = counter - 1;
    setCounter(value);
  };
  return (
    <div>
      <p>{`Your counter is at ${counter}`}</p>
      <button onClick={counterIncreament}>Increament</button>

      <button onClick={counterDecreament}>Decreament</button>
    </div>
  );
}
