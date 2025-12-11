import React from 'react';
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
          />
        ))}
        <GradientButton 
          href='#'
          text='AGREGAR AL CARRITO'
          width='100%'
          height='48px'
          className={styles.gradientButton}
        />
      </div>
    </div>
  );
};

export default TicketForm;
