import React from 'react';
import Image from 'next/image';
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
  return (
    <a href={href} className={clsx(styles.button, className)} style={{ width, height }}>
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
    </a>
  );
};

export default GradientButton;
