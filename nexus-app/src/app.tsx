import React, { useState } from "react";

interface CounterProps {
  initial?: number;
  step?: number;
}

/**
 * 计数器组件：演示 React + TypeScript
 * 按 + 按钮计数，按 - 按钮减一
 */
export default function Counter({ initial = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initial);
  return (
    <div className="counter">
      <h1>计数: {count}</h1>
      <button onClick={() => setCount(count - step)}>−</button>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  );
}
