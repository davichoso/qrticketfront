'use client'
import React from 'react';
import Image from 'next/image';
import styles from './PaymentModal.module.css';

interface PaymentModalProps {
  total: number;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ total, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>PAGO</div>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.content}>
          <p className={styles.message}>
            Ahora puedes pagar con tu pasarela de banco favorita
          </p>
          <div className={styles.qrContainer}>
            <Image 
              src="/qr.jpeg" 
              alt="QR Code para pago" 
              width={300} 
              height={300}
              className={styles.qrImage}
            />
          </div>
          <p className={styles.waitingMessage}>Esperando el pago...</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

