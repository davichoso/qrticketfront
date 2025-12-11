import React from 'react';
import styles from './MoreInfo.module.css';

const MoreInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Información:</p>
      <ul className={styles.links}>
        <li><a href="/terms" className={styles.link}>Términos y condiciones</a></li>
        <li><a href="/faq" className={styles.link}>Preguntas frecuentes</a></li>
        <li><a href="/contact" className={styles.link}>Contáctanos</a></li>
      </ul>
    </div>
  );
};

export default MoreInfo;
