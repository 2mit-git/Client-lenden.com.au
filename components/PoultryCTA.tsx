"use client";
import { motion } from 'framer-motion';
import styles from './PoultryCTA.module.css';

export default function PoultryCTA() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <h2 className={styles.title}>Experience Premium Meats</h2>
        <p className={styles.subtitle}>Visit our store to discover a new level of culinary excellence. Our expert butchers are ready to help you select the perfect cuts for your next meal.</p>
        <button className={styles.btn}>Visit Our Store</button>
      </motion.div>
    </section>
  );
}
