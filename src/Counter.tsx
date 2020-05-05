import React, { useState, FC } from "react";

interface Counter {
  initialValue: number;
  step: number;
}

const Counter: FC<Counter> = ({ initialValue, step }) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(initialValue);

  return (
    <div
      style={{
        background: "white",
        borderRadius: 4,
        boxShadow: "0 0 3px #000",
        display: "inline-block",
        marginTop: 16,
        padding: "8px 32px",
      }}
    >
      <h1>Count by {step}</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
