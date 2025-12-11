import React from 'react';
import Image from 'next/image';
import styles from './BenefitCard.module.css';

interface BenefitCardProps {
  imageSrc: string;
  benefit: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ imageSrc, benefit, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={benefit} width={64} height={64} />
      </div>
      <h3 className={styles.benefit}>{benefit}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BenefitCard;
