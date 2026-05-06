"use client";
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';

export default function ContactUs() {
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
          <span className={styles.badge}>GET IN TOUCH</span>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>Have questions about our products or sourcing? We're here to help.</p>
        </motion.div>
        
        <div className={styles.grid}>
          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3>Drop Us A Message</h3>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email address" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option>Select a subject</option>
                  <option>Product Inquiry</option>
                  <option>Wholesale</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className={styles.submitBtn}>Send Message</button>
            </form>
          </motion.div>
          
          <motion.div 
            className={styles.infoContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.contactInfo}>
              <h3>General Contact Information</h3>
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.icon}>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>contact@lendenepicurean.com</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}>📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>(555) 123-4567</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}>📍</span>
                  <div>
                    <strong>Main Headquarters</strong>
                    <p>123 Epicurean Ave, Culinary District, CA 90210</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className={styles.socialBox}>
              <h3>Follow Us</h3>
              <p>Stay updated with our latest arrivals and seasonal offers.</p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}>IN</a>
                <a href="#" className={styles.socialIcon}>FB</a>
                <a href="#" className={styles.socialIcon}>TW</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
