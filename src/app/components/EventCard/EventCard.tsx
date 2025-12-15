import React from 'react';
import Image from 'next/image';
import GradientButton from '../buttons/GradientButton/GradientButton';
import WhatsAppButton from '../buttons/WhatsAppButton/WhatsAppButton';
import styles from './EventCard.module.css';

interface EventCardProps {
  imageSrc: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  buttonHref: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  title,
  date,
  time,
  venue,
  buttonHref,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.dateTime}>{date} | {time}</p>
        <p className={styles.venue}>{venue}</p>
        <div className={styles.buttonContainer}>
          <GradientButton
            href={`/registro?redirect=${encodeURIComponent(buttonHref)}`}
            text="Comprar online (Web)"
            width="100%"
            height="48px"
            icon="/icons/ticket-icon.svg"
            className={styles.button}
          />
          <WhatsAppButton
            eventName={title}
            width="100%"
            height="48px"
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
