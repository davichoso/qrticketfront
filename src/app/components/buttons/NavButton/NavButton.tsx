import React from 'react';
import styles from './NavButton.module.css';

interface NavButtonProps {
  href: string;
  text: string;
  color: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, text, color }) => {
  return (
    <a href={href} className={styles.navButton} style={{ color }}>
      {text}
    </a>
  );
};

export default NavButton;
