'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GradientButton.module.css';
import clsx from 'clsx';

interface GradientButtonProps {
  href?: string;
  text: string;
  width: string;
  height: string;
  className?: string;
  icon?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const GradientButton: React.FC<GradientButtonProps> = ({ href, text, width, height, className, icon, onClick, type = 'button' }) => {
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

  // If onClick is provided or type is submit/reset, render as button
  if (onClick || type === 'submit' || type === 'reset') {
    return (
      <button 
        type={type}
        onClick={onClick} 
        className={clsx(styles.button, className)} 
        style={{ width, height }}
      >
        {buttonContent}
      </button>
    );
  }

  // Otherwise, render as link
  if (!href) {
    return null;
  }

  // Use Link for internal routes, <a> for external URLs or hash links
  const isExternal = href.startsWith('http') || href.startsWith('https') || href.startsWith('#');

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
