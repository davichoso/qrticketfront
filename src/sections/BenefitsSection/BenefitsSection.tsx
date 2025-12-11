import React from 'react';
import styles from './BenefitsSection.module.css';
import BenefitCard from '@/app/components/BenefitCard/BenefitCard';

const BenefitsSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}> <span style={{color: '#12B9EE'}}>Ventajas</span> de comprar con QR Ticket</h2>
      <div className={styles.grid}>
        <BenefitCard
          imageSrc="/icons/security-icon.svg"
          benefit="SEGURIDAD"
          description="Evita falsificaciones, extravíos o malas experiencias, compra tu entrada de forma segura"
        />
        <BenefitCard
          imageSrc="/icons/ease-icon.svg"
          benefit="FACILIDAD"
          description="Olvida las complicaciones, compra en pocos pasos, ten tus entradas siempre contigo y disfruta del evento."
        />
        <BenefitCard
          imageSrc="/icons/flexibility-icon.svg"
          benefit="FLEXIBILIDAD"
          description="Compra tus entradas desde cualquier lugar, a cualquier hora, paga con transferencia QR o tarjeta."
        />
      </div>
    </div>
  );
};

export default BenefitsSection;
