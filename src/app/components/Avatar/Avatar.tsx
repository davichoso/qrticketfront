import React from 'react';
import Image from 'next/image';
import styles from './Avatar.module.css';

interface AvatarProps {
    src: string;
    alt: string;
}

const Avatar:React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className={styles.avatar}>
      <Image 
        src={src} 
        alt={alt}
        width={44}
        height={44}
        className={styles.image}
      />
    </div>
  );
};

export default Avatar;
