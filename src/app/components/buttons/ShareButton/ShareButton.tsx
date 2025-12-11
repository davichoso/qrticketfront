'use client'
import React from 'react';
import Link from 'next/link';
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
  // Use Link for internal routes, <a> for external URLs or hash links
  const isExternal = href.startsWith('http') || href.startsWith('https') || href.startsWith('#');
  
  const buttonContent = (
    <>
      {icon ? 
      <span className={styles.icon}>
        <img src={icon} alt="Share Icon" />
      </span> : null
      }
      {text}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={clsx(styles.button, className)} style={{ width, height }}>
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href} className={clsx(styles.button, className)} style={{ width, height }}>
      {buttonContent}
    </Link>
  );
};

export default ShareButton;
