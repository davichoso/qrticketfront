import React from 'react';
import styles from './CartItem.module.css';

interface CartItemProps {
  title: string;
  description: string;
  price: string;
  quantity: number;
  onDelete: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ title, description, price, quantity, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div className={styles.quantity}>
        <input type="number" value={quantity} readOnly />
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>🗑️</button>
    </div>
  );
};

export default CartItem;
