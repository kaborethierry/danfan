'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartIcon from '@/components/cart/CartIcon';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Gestion du scroll pour l'effet sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu quand la route change - Utilisation de useEffect avec condition
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/boutique', label: 'Boutique' },
    { href: '/collections', label: 'Collections' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            DanFaniment
          </Link>

          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <CartIcon />
            <Link href="/boutique" className={styles.orderBtn}>
              Commander
            </Link>
          </div>

          <button
            className={styles.menuBtn}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div 
        className={`${styles.mobileOverlay} ${isMenuOpen ? styles.open : ''}`} 
        onClick={closeMenu}
      />
      
      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavHeader}>
          <span className={styles.mobileLogo}>DanFaniment</span>
          <button 
            className={styles.mobileCloseBtn} 
            onClick={closeMenu}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.mobileActions}>
          <div className={styles.mobileCartWrapper}>
            <CartIcon />
            <span>Mon panier</span>
          </div>
          <Link href="/boutique" className={styles.mobileOrderBtn} onClick={closeMenu}>
            Commander
          </Link>
        </div>
      </div>
    </>
  );
}