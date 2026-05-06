"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>TOP RATED</span>
          <h2 className={styles.title}>Featured Products</h2>
          <p className={styles.subtitle}>Our most popular, selected directly from the source.</p>
        </motion.div>
        
        <div className={styles.productCard}>
          <motion.div 
            className={styles.imageCol}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageFallback}></div>
              <Image src="/featured_meat.png" alt="Fresh Raw Meat" fill style={{objectFit: "cover"}} />
              <span className={styles.newBadge}>NEW ARRIVAL</span>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.contentCol}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.category}>PREMIUM CUT</span>
            <h3 className={styles.productTitle}>Fresh Raw Meat</h3>
            <div className={styles.reviews}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.reviewCount}>(45 reviews)</span>
            </div>
            <p className={styles.description}>
              Premium A-grade beef, fresh cut.
            </p>
            <ul className={styles.featuresList}>
              <li>✓ Sourced from local organic farms</li>
              <li>✓ Rich marbling for extra flavor</li>
              <li>✓ Vacuum sealed for freshness</li>
            </ul>
            <button className={styles.btn}>Add to Cart</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
