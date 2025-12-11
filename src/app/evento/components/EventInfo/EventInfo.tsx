import React from 'react';
import styles from './EventInfo.module.css';

interface EventInfoProps {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  dateIcon: string;
  locationIcon: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ title, date, time, location, address, dateIcon, locationIcon }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.infoItem}>
        <img src={dateIcon} alt="Date Icon" className={styles.icon} />
        <div>
          <div className={styles.primaryText}>{date}</div>
          <div className={styles.secondaryText}>{time}</div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <img src={locationIcon} alt="Location Icon" className={styles.icon} />
        <div>
          <div className={styles.primaryText}>{location}</div>
          <div className={styles.secondaryText}>{address}</div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
