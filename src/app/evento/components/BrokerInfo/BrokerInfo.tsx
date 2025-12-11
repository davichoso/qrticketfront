import React from 'react';
import Image from 'next/image';
import styles from './BrokerInfo.module.css';

interface BrokerInfoProps {
  name: string;
  role: string;
  avatarUrl: string;
}

const BrokerInfo: React.FC<BrokerInfoProps> = ({ name, role, avatarUrl }) => {
  return (
    <div className={styles.container}>
      <Image src={avatarUrl} alt={`${name}'s avatar`} width={46} height={46} className={styles.avatar} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </div>
    </div>
  );
};

export default BrokerInfo;
