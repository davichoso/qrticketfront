import React from 'react';
import styles from './ReservationSection.module.css';
import GradientButton from '@/app/components/buttons/GradientButton/GradientButton';

const ReservationSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>¿Deseas hacer una reservación especial o tienes una consulta?</div>
      <div className={styles.text}>
        Si tienes una solicitud especial para tu fiesta, ¡contáctanos! 
        <br />
        Estaremos complacidos de ofrecerte la mejor experiencia para ti y tus amigos.
      </div>
      <div className={styles.buttonContainer}>
        <GradientButton 
          href="#"
          text="HABLAR CON UN ENCARGADO"
          width="auto"
          height="48px"
        />
      </div>
    </div>
  );
};

export default ReservationSection;
