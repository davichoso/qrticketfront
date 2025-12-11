import React from 'react';
import styles from './EventsSection.module.css';
import EventCard from '@/app/components/EventCard/EventCard';

const EventsSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Eventos</h2>
      <div className={styles.grid}>
        <EventCard
          imageSrc="/image-card-event-example-01.png"
          title="BRESH"
          date="Mar. 30 de abril"
          time="22:00 hrs"
          venue="Alice Park"
          buttonHref="https://example.com"
        />
        <EventCard
          imageSrc="/image-card-event-example-02.jpg"
          title="EL INFIERNO - CAP. 6"
          date="Sab. 11 de mayo"
          time="21:00 hrs"
          venue="Alice Park"
          buttonHref="http://localhost:3000/butaca"
        />
        <EventCard
          imageSrc="/image-card-event-example-03.jpg"
          title="SÁBADO STOLI"
          date="Sab. 11 de mayo"
          time="21:00 hrs"
          venue="Awra"
          buttonHref="https://example.com"
        />
        <EventCard
          imageSrc="/image-card-event-example-04.jpg"
          title="I AM EPIC"
          date="Sab. 18 de mayo"
          time="22:00 hrs"
          venue="Awra"
          buttonHref="https://example.com"
        />
      </div>
    </div>
  );
};

export default EventsSection;
