import React from 'react';
import styles from './CartModal.module.css';
import CartItem from '../CartItem/CartItem';


interface CartModalProps {
  items: Array<{
    title: string;
    description: string;
    price: string;
    quantity: number;
    id: number;
  }>;
  total: string;
  onClose: () => void;
  onDelete: (id: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({ items, total, onClose, onDelete }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>TU CARRITO</div>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.cartItems}>
          {items.map(item => (
            <CartItem
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              onDelete={() => onDelete(item.id)}
            />
          ))}
        </div>
        <div className={styles.total}>
          <span>TOTAL</span>
          <span>{total}</span>
        </div>
        <button className={styles.payButton}>PAGAR ({total})</button>
      </div>
    </div>
  );
};

export default CartModal;
