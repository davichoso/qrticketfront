import React from 'react';
import styles from './Footer.module.css';
import SocialInfo from '../../../sections/Footer/SocialInfo/SocialInfo';
import DownloadInfo from '../../../sections/Footer/DownloadInfo/DownloadInfo';
import MoreInfo from '@/sections/Footer/MoreInfo/MoreInfo';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <SocialInfo />
      <DownloadInfo />
      <MoreInfo />
    </footer>
  );
};

export default Footer;
