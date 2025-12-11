import React from 'react';
import styles from './TicketItem.module.css';
import QuantityControl from '../QuantityControl/QuantityControl';
import GradientButton from '@/app/components/buttons/GradientButton/GradientButton';

interface TicketItemProps {
  name: string;
  description: string;
  price: string;
  soldOut?: boolean;
  chooseSeats?: boolean;
}

const TicketItem: React.FC<TicketItemProps> = ({ name, description, price, soldOut, chooseSeats }) => {
  return (
    <div className={`${styles.ticketItem} ${soldOut ? styles.ticketItemSoldOut : ''}`}>
      <div className={styles.ticketInfo}>
        <div className={styles.ticketInfoHeader}>
          <div>{name}</div>
          {soldOut && <span className={styles.soldOutLabel}>Agotado</span>}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      {soldOut ? (
        <div className={styles.ticketPrice}>{price}</div>
      ) : (
        <div className={styles.ticketPriceContainer}>
          <div className={styles.ticketPrice}>{price}</div>
          {chooseSeats ? (
            <GradientButton href="#" text="Elegir butacas" width="150px" height="40px" />
          ) : (
            <QuantityControl />
          )}
        </div>
      )}
    </div>
  );
};

export default TicketItem;
