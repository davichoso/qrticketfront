import React from 'react';
import Image from 'next/image';
import styles from './EventDetails.module.css';
import ShareButton from '@/app/components/buttons/ShareButton/ShareButton';
import BrokerInfo from '../BrokerInfo/BrokerInfo';
import SectionInfo from '../SectionInfo/SectionInfo';

const EventDetails = ({ brokerInfo = true, imageSrc = '/image-card-event-example.png' }) => {
    const sectionItems = [
        { icon: '/icons/info/age-icon.svg', text: 'Mayores de 18 años' },
        { icon: '/icons/info/id-icon.svg', text: 'Ingreso con carnet de identidad' },
        { icon: '/icons/info/dress-code-icon.svg', text: 'Code dress: Semiformal' },
        { icon: '/icons/info/time-icon.svg', text: 'Ingreso gratuito hasta las 20:00 hrs' }
      ];

    const paymentItems = [
        { icon: '/icons/info/coin-icon.svg', text: 'Paga con QR o tarjeta de débito/crédito' },
        { icon: '/icons/info/phone-icon.svg', text: 'Recibe las entradas en tu correo y la aplicación' },
    ];

  return (
    <div className={styles.container}>
      
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt="Event" width={330} height={300} className={styles.image} />
        <ShareButton href="#" text="COMPARTIR EVENTO" width="100%" height="auto" className={styles.shareButton} />
        
        {
          brokerInfo && (
            <BrokerInfo
                name='Raúl Bastaflor'
                role='Relacionador'
                avatarUrl='/avatar-example.png'
            />
          )
        }
      </div>
      
      <div className={styles.separator}></div>

      <h3 className={styles.title}>A tomar en cuenta:</h3>
      <SectionInfo items={sectionItems} />
      
      <div className={styles.separator}></div>
      
      <SectionInfo items={paymentItems} />

    </div>
  );
};

export default EventDetails;
