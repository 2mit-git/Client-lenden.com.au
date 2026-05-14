"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MdStore, MdMenu, MdClose, MdExpandMore, MdCheck } from 'react-icons/md';
import { useTheme, themes, ThemeKey } from '../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { activeTheme, setTheme } = useTheme();
  const themeDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleThemeDropdown = () => {
    setIsThemeOpen(!isThemeOpen);
  };

  const handleThemeSelect = (key: ThemeKey) => {
    setTheme(key);
    setIsThemeOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Lenden Logo" width={32} height={32} />Lenden
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${styles.desktopNav}`}>
          <Link href="/" className={styles.active}>Home</Link>
          <Link href="/#products">Products</Link>
          <Link href="/poultry">Poultry Shop</Link>
          <Link href="/seafood">Seafood North Sydney</Link>
          <Link href="/premium" className={styles.highlight}>
            Seafood Northbridge <span className={styles.newBadge}>NEW</span>
          </Link>
          <Link href="/rotisserie" className={styles.highlight}>
            Lenden Rotisserie <span className={styles.popularBadge}>NOW OPEN</span>
          </Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#quality">Quality</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className={`${styles.actions} ${styles.desktopActions}`}>
          <Link href="/#locations" className={styles.loginBtn}>
            <MdStore size={16} /> Visit Our Stores
          </Link>

          <div className={styles.themeSelector} ref={themeDropdownRef}>
            <button className={styles.themeBtn} onClick={toggleThemeDropdown}>
              🎨 <MdExpandMore size={14} className={isThemeOpen ? styles.rotateIcon : ''} />
            </button>

            <AnimatePresence>
              {isThemeOpen && (
                <motion.div
                  className={styles.themeDropdown}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {Object.entries(themes).map(([key, theme]) => (
                    <button
                      key={key}
                      className={`${styles.themeOption} ${activeTheme === key ? styles.activeThemeOption : ''}`}
                      onClick={() => handleThemeSelect(key as ThemeKey)}
                    >
                      <span className={styles.themeEmoji}>{theme.emoji}</span>
                      <span className={styles.themeName}>{theme.name}</span>
                      {activeTheme === key && <MdCheck size={16} className={styles.checkIcon} />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileNavContainer}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              <Link href="/" onClick={toggleMobileMenu}>Home</Link>
              <Link href="/#products" onClick={toggleMobileMenu}>Products</Link>
              <Link href="/poultry" onClick={toggleMobileMenu}>Poultry Shop</Link>
              <Link href="/seafood" onClick={toggleMobileMenu}>Seafood North Sydney</Link>
              <Link href="/premium" className={styles.highlight} onClick={toggleMobileMenu}>
                Seafood Northbridge <span className={styles.newBadge}>NEW</span>
              </Link>
              <Link href="/rotisserie" className={styles.highlight} onClick={toggleMobileMenu}>
                Lenden Rotisserie <span className={styles.popularBadge}>NOW OPEN</span>
              </Link>
              <Link href="/#about" onClick={toggleMobileMenu}>About Us</Link>
              <Link href="/#quality" onClick={toggleMobileMenu}>Quality</Link>
              <Link href="/#contact" onClick={toggleMobileMenu}>Contact</Link>
              
              <div className={styles.mobileThemeSection}>
                <div className={styles.mobileThemeHeader}>🎨 Select Theme</div>
                <div className={styles.mobileThemeGrid}>
                  {Object.entries(themes).map(([key, theme]) => (
                    <button 
                      key={key} 
                      className={`${styles.mobileThemeOption} ${activeTheme === key ? styles.activeMobileThemeOption : ''}`}
                      onClick={() => handleThemeSelect(key as ThemeKey)}
                    >
                      <span className={styles.themeEmoji}>{theme.emoji}</span>
                      <span className={styles.themeName}>{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Link href="/#locations" className={styles.loginBtn} onClick={toggleMobileMenu}>
                <MdStore size={16} /> Visit Our Stores
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
