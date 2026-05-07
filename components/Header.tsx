"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdStore } from 'react-icons/md';
import styles from './Header.module.css';

export default function Header() {
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
        <nav className={styles.nav}>
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
        <div className={styles.actions}>
          <Link href="/#locations" className={styles.loginBtn}>
            <MdStore size={16} /> Visit Our Stores
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
