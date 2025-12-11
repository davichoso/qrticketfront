'use client'
import React, { useState } from 'react';
import styles from './FAQItem.module.css';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container} onClick={toggleOpen}>
      <div className={styles.question}>
        <span>{question}</span>
        <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

export default FAQItem;
