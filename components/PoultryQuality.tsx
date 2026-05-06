"use client";
import { motion } from 'framer-motion';
import styles from './PoultryQuality.module.css';

const qualities = [
  { id: 1, title: 'Premium Quality', desc: 'We source only the highest quality meats from trusted local farms.', icon: '🥩' },
  { id: 2, title: 'Ethically Sourced', desc: 'Partnering with farms that prioritize animal welfare and sustainability.', icon: '🌱' },
  { id: 3, title: 'Expert Butchery', desc: 'Our master butchers ensure perfect cuts tailored to your needs.', icon: '🔪' },
  { id: 4, title: 'Freshness Guaranteed', desc: 'Delivered fresh daily to maintain optimum flavor and texture.', icon: '✨' },
  { id: 5, title: 'Local Community', desc: 'Supporting our local economy by working closely with regional suppliers.', icon: '🤝' },
  { id: 6, title: 'Quality Assurance', desc: 'Rigorous quality checks at every step, ensuring you only get the best.', icon: '🛡️' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.8 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    scale: 1, 
    transition: { type: "spring", damping: 15, stiffness: 100 } 
  }
};

export default function PoultryQuality() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>WHY CHOOSE US</span>
          <h2 className={styles.title}>Premium Quality<br/>Unmatched Experience</h2>
          <p className={styles.subtitle}>We are dedicated to bringing the finest quality meats with a commitment to sustainable and ethical farming.</p>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {qualities.map(item => (
            <motion.div key={item.id} className={styles.card} variants={cardVariants} whileHover={{ scale: 1.05 }}>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
