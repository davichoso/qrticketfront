'use client'
import React, { useState, useMemo } from 'react';
import styles from './TicketForm.module.css';
import TicketItem from '../TicketItem/TicketItem';
import GradientButton from '@/app/components/buttons/GradientButton/GradientButton';

interface Ticket {
  name: string;
  description: string;
  price: string;
  soldOut?: boolean;
  chooseSeats?: boolean;
}

interface TicketFormProps {
  tickets: Ticket[];
}

const TicketForm: React.FC<TicketFormProps> = ({ tickets }) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleQuantityChange = (ticketName: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [ticketName]: quantity
    }));
  };

  const totalTickets = useMemo(() => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  }, [quantities]);

  const totalPrice = useMemo(() => {
    let total = 0;
    
    tickets.forEach((ticket) => {
      // Skip sold out tickets
      if (ticket.soldOut) return;
      
      const quantity = quantities[ticket.name] || 0;
      // Skip if no quantity selected
      if (quantity === 0) return;
      
      // Extract price number from string (e.g., "80 Bs" -> 80, "40 Bs" -> 40)
      // Remove all non-digit characters and parse
      const priceStr = ticket.price.replace(/[^\d]/g, '');
      const price = parseInt(priceStr, 10) || 0;
      
      total += price * quantity;
    });
    
    return total;
  }, [tickets, quantities]);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>Compra de entradas</div>
      </div>
      <div className={styles.subHeader}>Elige el tipo de entrada y la cantidad</div>
      <div className={styles.content}>
        {tickets?.map((ticket, index) => (
          <TicketItem
            key={ticket.name}
            name={ticket.name}
            description={ticket.description}
            price={ticket.price}
            soldOut={ticket.soldOut}
            chooseSeats={ticket.chooseSeats}
            quantity={quantities[ticket.name] || 0}
            onQuantityChange={(qty) => handleQuantityChange(ticket.name, qty)}
          />
        ))}
        {totalTickets > 0 && totalPrice > 0 && (
          <div className={styles.totalSection}>
            <div className={styles.totalLabel}>TOTAL</div>
            <div className={styles.totalAmount}>{totalPrice} Bs</div>
          </div>
        )}
        <GradientButton 
          href='#'
          text='COMPRAR'
          width='100%'
          height='48px'
          className={styles.gradientButton}
        />
      </div>
    </div>
  );
};

export default TicketForm;
