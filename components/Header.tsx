"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MdStore, MdMenu, MdClose } from 'react-icons/md';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
