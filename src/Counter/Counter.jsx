import './style.css';
import React, { useState } from 'react';

const Counter = ({ initialCount = -1, isFirst = true }) => {
    const [count, setCount] = useState(-1);
    const [children, setChildren] = useState([]);
    const [showCounter, setShowCounter] = useState(true);

    const addChild = () => {
        setCount(count - 1);
        setChildren([...children, <Counter initialCount={children.length === 0 ? -1 : count} isFirst={false} />]);
    };

    const remove = () => {
      if(!isFirst) {
        setShowCounter(false);
      }
    };

    if (showCounter)
        return (
            <div>
                <span>{initialCount}</span>
                <button onClick={addChild}>+</button>
                <button onClick={remove}>-</button>
                {children}
            </div>
        );

    return;
};

export default Counter;
