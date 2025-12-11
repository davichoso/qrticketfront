'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './CartButton.module.css';
import CartModal from '../../CartModal/CartModal';

interface CartButtonProps {
  href: string;
  text: string;
  color: string;
  className?: string;
}

const CartButton: React.FC<CartButtonProps> = ({ href, text, color, className }) => {

  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'EL INFIERNO CAP. 6', description: 'Lounge VIP', price: '800 Bs', quantity: 1 },
    { id: 2, title: 'EL INFIERNO CAP. 6', description: 'VIP', price: '80 Bs', quantity: 2 },
    { id: 3, title: 'EL INFIERNO CAP. 6', description: 'General', price: '60 Bs', quantity: 1 },
  ]);

  const handleDelete = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + parseInt(item.price) * item.quantity, 0) + ' Bs';

  return (
    <>
    <a href={href} className={clsx(styles.cartButton, className)} style={{ color }} onClick={() => setCartOpen(true)}>
      <Image 
        src="/icons/cart-icon.svg"
        alt="Cart Icon"
        width={14}
        height={14}
        className={styles.icon}
      />
      {text}
      {isCartOpen && (
        <CartModal
          items={cartItems}
          total={total}
          onClose={() => setCartOpen(false)}
          onDelete={handleDelete}
        />
      )}
    </a>
    </>
  );
};

export default CartButton;
