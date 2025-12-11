import React from 'react';
import Image from 'next/image';
import styles from './DownloadInfo.module.css';

const DownloadInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.downloadText}>Descarga la aplicación:</p>
      <div className={styles.buttons}>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/stores/app-store.svg" alt="App Store" width={150} height={50} />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/stores/play-store.svg" alt="Google Play" width={150} height={50} />
        </a>
      </div>
    </div>
  );
};

export default DownloadInfo;
