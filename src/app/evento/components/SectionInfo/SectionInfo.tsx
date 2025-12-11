import React from 'react';
import styles from './SectionInfo.module.css';

interface SectionInfoProps {
  items: { icon: string; text: string }[];
}

const SectionInfo: React.FC<SectionInfoProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <img src={item.icon} alt="" className={styles.icon} />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionInfo;
