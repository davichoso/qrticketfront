'use client'
import React from 'react';
import Link from 'next/link';
import styles from './NavButton.module.css';

interface NavButtonProps {
  href: string;
  text: string;
  color: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, text, color }) => {
  // Handle hash links (for same-page navigation)
  if (href.startsWith('#')) {
    return (
      <a href={href} className={styles.navButton} style={{ color }}>
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className={styles.navButton} style={{ color }}>
      {text}
    </Link>
  );
};

export default NavButton;
