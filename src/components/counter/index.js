import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 data-testid="counterCounterTestId">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <button onClick={() => setCount(count - 1)}>Count Down</button>
    </div>
  );
}

export default Counter;
