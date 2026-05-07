"use client";
import { motion } from 'framer-motion';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background image */}
      <div className={styles.bgWrapper}>
        <img
          src="/hero_bg.png"
          alt=""
          className={styles.bgImg}
          aria-hidden="true"
        />
        <div className={styles.overlay} />
        <div className={styles.patternOverlay} />
        {/* decorative blobs */}
        <div className={styles.blobTR} />
        <div className={styles.blobBL} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.badgeWrap}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>Premium Quality</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          Premium Food<br />
          <span className={styles.highlight}>Products</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Experience the finest in quality meat and seafood, available at our specialized shops
        </motion.p>
      </div>

      {/* Wave SVG divider */}
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="var(--cream-surface)">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <a href="#products">
          <span className={styles.scrollText}>Scroll to explore</span>
          <span className={styles.scrollArrow}><MdKeyboardArrowDown /></span>
        </a>
      </div>
    </section>
  );
}
