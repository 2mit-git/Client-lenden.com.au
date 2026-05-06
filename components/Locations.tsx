"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Locations.module.css';

export default function Locations() {
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
          <span className={styles.badge}>FIND US</span>
          <h2 className={styles.title}>Our Locations</h2>
          <p className={styles.subtitle}>Visit our specialized shops to experience our products in person.</p>
        </motion.div>
        
        <div className={styles.grid}>
          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Simple map placeholder */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.pin}>📍</div>
              <span>Interactive Map View</span>
            </div>
          </motion.div>
          <motion.div 
            className={styles.detailsContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <Image src="/shop_card.png" alt="Lenden Poultry" fill style={{objectFit: "cover"}} />
            </div>
            <div className={styles.info}>
              <h3>Lenden Poultry</h3>
              <p className={styles.address}>📍 123 Epicurean Ave, Culinary District, CA 90210</p>
              <p className={styles.phone}>📞 (555) 123-4567</p>
              
              <div className={styles.hours}>
                <h4>Opening Hours:</h4>
                <ul>
                  <li>Mon-Fri: 8:00 AM - 7:00 PM</li>
                  <li>Saturday: 8:00 AM - 5:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <button className={styles.btn}>Get Directions</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
