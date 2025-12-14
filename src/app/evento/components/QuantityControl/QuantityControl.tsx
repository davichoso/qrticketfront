'use client'
import React from 'react';
import styles from './QuantityControl.module.css';

interface QuantityControlProps {
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ 
  quantity = 0, 
  onQuantityChange 
}) => {
  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 0 && onQuantityChange) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button 
        type="button"
        className={styles.button} 
        onClick={handleDecrement}
        aria-label="Decrementar cantidad"
      >
        -
      </button>
      <div className={styles.input}>{quantity}</div>
      <button 
        type="button"
        className={styles.button} 
        onClick={handleIncrement}
        aria-label="Incrementar cantidad"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
