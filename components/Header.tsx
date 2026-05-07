"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
          <Link href="/#home" className={styles.active}>Home</Link>
          <Link href="/#products">Shop</Link>
          <Link href="/poultry">Poultry</Link>
          <Link href="/seafood">Seafood/Meats</Link>
          <Link href="/lenden-epicurean" className={styles.highlight}>Lenden Epicurean <span className={styles.newBadge}>NEW</span></Link>
          <Link href="/#locations">Locations <span className={styles.popularBadge}>POPULAR</span></Link>
          <Link href="/events">Events</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className={styles.actions}>
          <button className={styles.loginBtn}>Back to Home</button>
        </div>
      </div>
    </motion.header>
  );
}
