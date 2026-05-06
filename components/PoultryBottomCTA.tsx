"use client";
import { motion } from 'framer-motion';
import styles from './PoultryBottomCTA.module.css';

export default function PoultryBottomCTA() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.title}>Experience the difference quality makes</h2>
          <p className={styles.subtitle}>Discover our wide range of premium meats. We provide the highest quality products for your culinary needs.</p>
        </motion.div>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className={styles.primaryBtn}>Find Our Shops</button>
          <button className={styles.secondaryBtn}>Contact Us</button>
        </motion.div>
      </motion.div>
      
      {/* Decorative background image area at the very bottom */}
      <div className={styles.bgWrapper}>
        <div className={styles.bgFallback}></div>
        <div className={styles.overlay}>
          <div className="container">
            <h2 className={styles.bgTitle}>Experience the Finest Premium Meats</h2>
            <p className={styles.bgSubtitle}>You will definitely notice the difference in quality and flavor when you choose our premium products. Available at our specialized shops for your convenience.</p>
            <div className={styles.bgActions}>
              <button className={styles.primaryBtn}>Find Our Shops</button>
              <button className={styles.secondaryBtnBg}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
