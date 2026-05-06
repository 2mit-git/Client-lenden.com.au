"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={`container ${styles.container}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.brand}>
          <h2 className={styles.logo}>
            <Image src="/logo.png" alt="Lenden Logo" width={40} height={40} />Lenden
          </h2>
          <p className={styles.desc}>
            Experience premium-quality food products sourced with care and expertise.
            Delivering excellence since 1994.
          </p>
          <div className={styles.newsletter}>
            <h4>Subscribe to our newsletter</h4>
            <form className={styles.form}>
              <input type="email" placeholder="Email Address" className={styles.input} />
              <button type="button" className={styles.btn}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h3>Explore</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/poultry">Poultry</Link></li>
            <li><Link href="/seafood-meats">Seafood/Meats</Link></li>
            <li><Link href="/locations">Locations</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h3>Information</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/quality">Quality Assurance</Link></li>
            <li><Link href="/sustainability">Sustainability</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h3>Legal</h3>
          <ul>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/cookies">Cookie Policy</Link></li>
            <li><Link href="/returns">Return Policy</Link></li>
          </ul>
        </div>
      </motion.div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Lenden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
