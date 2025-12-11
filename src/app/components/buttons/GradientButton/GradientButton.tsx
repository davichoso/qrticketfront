'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GradientButton.module.css';
import clsx from 'clsx';

interface GradientButtonProps {
  href: string;
  text: string;
  width: string;
  height: string;
  className?: string;
  icon?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ href, text, width, height, className, icon }) => {
  // Use Link for internal routes, <a> for external URLs or hash links
  const isExternal = href.startsWith('http') || href.startsWith('https') || href.startsWith('#');
  
  const buttonContent = (
    <>
      {icon && (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className={styles.icon}
        />
      )}
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

export default GradientButton;
