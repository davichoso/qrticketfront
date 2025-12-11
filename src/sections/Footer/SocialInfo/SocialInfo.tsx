import React from 'react';
import Image from 'next/image';
import styles from './SocialInfo.module.css';

const SocialInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/logo/qrticket-logo-dark-theme.svg" alt="QRTicket Logo" width={150} height={75} />
      </div>
      <p className={styles.followUs}>Síguenos en:</p>
      <div className={styles.icons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/facebook-icon.svg" alt="Facebook" width={40} height={40} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/instagram-icon.svg" alt="Instagram" width={40} height={40} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/tiktok-icon.svg" alt="TikTok" width={40} height={40} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/youtube-icon.svg" alt="YouTube" width={40} height={40} />
        </a>
      </div>
    </div>
  );
};

export default SocialInfo;
