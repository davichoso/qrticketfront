import React from 'react';
import styles from './EventDescription.module.css';

interface EventDescriptionProps {
  title: string;
  description: string[];
}

const EventDescription: React.FC<EventDescriptionProps> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default EventDescription;
