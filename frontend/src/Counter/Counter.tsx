import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>

      <span>count: {count}</span>
    </div>
  );
};

export default Counter;
