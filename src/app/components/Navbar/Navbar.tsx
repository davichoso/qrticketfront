'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import NavButton from '../buttons/NavButton/NavButton';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image 
          src="/logo/qrticket-logo-dark-theme.svg" 
          alt="QRTicket Logo"
          width={128} 
          height={32.25} 
        />
      </Link>
      <div className={styles.menu}>
        <NavButton href="/evento" text="EVENTOS" color="#fff" />
      </div>

      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
      </div>
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <NavButton href="/evento" text="EVENTOS" color="#fff" />
        </div>
      )}

    </nav>
  );
};

export default Navbar;
