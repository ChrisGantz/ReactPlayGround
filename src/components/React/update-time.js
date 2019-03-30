import React, { useState, useEffect } from 'react';
import '../../css-components/first-hook.css'

const UpdateTime = () => {
  const [date, setDate] = useState('');
  const [count, setCount] = useState(0);
  // replaces compnentDidUpdate willUpdate 
  useEffect(() => {
    setInterval(() => {
      setDate(String(new Date()))
    }, 1000);
  })

  const handleCountUpdate = () => {
    setCount(count + 1);
  }
  const handleCountReset = () => {
    setCount(0);
  }
  return (
    <div className="center-item">
      <h1>Todays Date: {date}</h1>
      <p>will eventually calculate clicks per minute: {count}</p>
      {/* you can also set count here onClick={() => setCount(count+1)} */}
      <button onClick={() => handleCountUpdate()}>Click it</button>
      <button onClick={() => handleCountReset()}>Reset</button>
    </div>
  );
};

export default UpdateTime;