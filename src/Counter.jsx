import React, { useState } from 'react';

const Counter = ({ depth = 0, initialCount = -1 }) => {
  const [count, setCount] = useState(-1);
  const [children, setChildren] = useState([]);

  const addChild = () => {
    setCount(count - 1);
    setChildren([...children, <Counter key={children.length} depth={depth + 1} initialCount={children.length === 0 ? -1 : count} />]);
  };

  return (
    <div style={{ paddingLeft: `${depth * 20}px` }}>
      <span>{initialCount}</span>
      <button onClick={addChild}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {children}
    </div>
  );
};

export default function App() {
  return <Counter />;
}
