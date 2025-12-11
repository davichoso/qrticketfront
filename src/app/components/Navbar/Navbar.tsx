'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Avatar from '../Avatar/Avatar';
import NavButton from '../buttons/NavButton/NavButton';
import CartButton from '../buttons/CartButton/CartButton';

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
        <NavButton href="/" text="MIS TICKETS" color="#fff" />
        <Avatar 
          src="/avatar-example.png"
          alt="User Avatar"
        />
      </div>

      <CartButton text="CARRITO" color="#fff" className={styles.cartButton} />

      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
      </div>
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <NavButton href="/evento" text="EVENTOS" color="#fff" />
          <NavButton href="/" text="MIS TICKETS" color="#fff" />
          <div style={{display: 'flex', justifyContent: 'center', width: '140px'}}>
            <Avatar 
              src="/avatar-example.png"
              alt="User Avatar"
            />
          </div>          
        </div>
      )}

    </nav>
  );
};

export default Navbar;
