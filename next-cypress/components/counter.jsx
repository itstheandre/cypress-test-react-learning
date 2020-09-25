import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello </h1>
      <button className="increase" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
      <button className="decrease" onClick={() => setCount((c) => c - 1)}>
        -
      </button>

      <div className="val">{count}</div>
    </div>
  );
};

export default Counter;
