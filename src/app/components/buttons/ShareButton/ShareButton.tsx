import React from 'react';
import styles from './ShareButton.module.css';
import clsx from 'clsx';

interface ShareButtonProps {
  href: string;
  text: string;
  width: string;
  height: string;
  className?: string;
  icon?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ href, text, width, height, className, icon }) => {
  return (
    <a href={href} className={clsx(styles.button, className)} style={{ width, height }}>
      {icon ? 
      <span className={styles.icon}>
        <img src={icon} alt="Share Icon" />
      </span> : null
      }
      {text}
    </a>
  );
};

export default ShareButton;
