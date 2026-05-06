"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './PoultryHero.module.css';

export default function PoultryHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className={styles.hero} ref={ref}>
      <motion.div 
        className={styles.bgImage}
        style={{ y: yBg, scale: scaleBg }}
      >
        <div className={styles.bgFallback}></div>
      </motion.div>
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <motion.span 
          className={styles.preTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PREMIUM BUTCHERY
        </motion.span>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
        >
          Premium Cuts<br />
          <span className={styles.highlight}>Expertly Crafted</span>
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Experience the finest selections from our local, organic, and ethically raised farm partners.
        </motion.p>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button 
            className={styles.primaryBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0px 0px 0px rgba(196,155,59,0)", "0px 0px 20px rgba(196,155,59,0.5)", "0px 0px 0px rgba(196,155,59,0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Explore Our Products
          </motion.button>
          <motion.button 
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Find Our Shops
          </motion.button>
        </motion.div>
      </div>

      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--cream-surface)"></path>
        </svg>
      </div>
    </section>
  );
}
