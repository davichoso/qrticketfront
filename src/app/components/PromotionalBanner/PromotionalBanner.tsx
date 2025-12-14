import React from 'react';
import styles from './PromotionalBanner.module.css';
import GradientButton from '../buttons/GradientButton/GradientButton';
import WhatsAppButton from '../buttons/WhatsAppButton/WhatsAppButton';

interface PromotionalBannerProps {
  backgroundImage: string;
  title: string;
  date: string;
  venue: string;
  textColor: 'white' | 'black';
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  backgroundImage,
  title,
  date,
  venue,
  textColor,
}) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content} style={{ color: textColor }}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.details}>{date} | {venue}</p>
        <div className={styles.buttonContainer}>
          <GradientButton
            href="/evento"
            text="Comprar online (Web)"
            width="280px"
            height="48px"
            icon="/icons/ticket-icon.svg"
          />
          <WhatsAppButton
            eventName={title}
            width="280px"
            height="48px"
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
