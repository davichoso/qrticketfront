'use client'
import React, { useState } from 'react';
import styles from './QuantityControl.module.css';

const QuantityControl: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleDecrement}>-</button>
      <div className={styles.input}>{count}</div>
      <button className={styles.button} onClick={handleIncrement}>+</button>
    </div>
  );
};

export default QuantityControl;
