"use client";
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <motion.div 
        className={`container ${styles.content}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className={styles.preTitle}>WELCOME TO</span>
        <h1 className={styles.title}>
          Premium Food<br />
          <span className={styles.highlight}>Products</span>
        </h1>
        <p className={styles.subtitle}>
          Experience the finest in quality, taste, and sourcing. Available at our specialized shops.
        </p>
      </motion.div>
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--cream-surface)"></path>
        </svg>
      </div>
    </section>
  );
}
