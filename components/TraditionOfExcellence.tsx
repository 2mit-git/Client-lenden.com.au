"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TraditionOfExcellence.module.css';

export default function TraditionOfExcellence() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.contentCol}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>OUR STORY</span>
          <h2 className={styles.title}>A Tradition of Excellence</h2>
          <p className={styles.description}>
            Welcome to Lenden, where we serve the finest premium meats and products. For
            over 30 years, our dedicated butchers have been providing our community with the
            best quality.
          </p>
          <p className={styles.description}>
            We believe in honest, transparent sourcing. We partner with local farmers and
            suppliers to ensure that everything you purchase from us meets the highest
            standards of quality and ethical practices.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.icon}>✓</span> Premium Quality
            </div>
            <div className={styles.featureItem}>
              <span className={styles.icon}>✓</span> Expert Butchers
            </div>
            <div className={styles.featureItem}>
              <span className={styles.icon}>✓</span> Local Farms
            </div>
          </div>
          
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Our Story</button>
            <button className={styles.secondaryBtn}>Explore Shop</button>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.imageCol}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <Image src="/chef_portrait.png" alt="Our Master Butcher" fill style={{objectFit: "cover"}} />
            <div className={styles.imageCaption}>
              <h4>30 Years of Excellence</h4>
              <p>Bringing premium culinary experiences to our community.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
