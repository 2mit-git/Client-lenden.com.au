"use client";
import { motion } from 'framer-motion';
import styles from './QualityAssurance.module.css';

const features = [
  { id: 1, title: 'Freshness', desc: 'We source daily to ensure the highest quality produce reaches your table.', icon: '🍃' },
  { id: 2, title: 'Sustainability', desc: 'Working with ethical farms committed to environmental stewardship.', icon: '♻️' },
  { id: 3, title: 'Expertise', desc: 'Our master butchers and fishmongers bring decades of experience.', icon: '👨‍🍳' },
  { id: 4, title: 'Traceability', desc: 'Know exactly where your food comes from with our transparent sourcing.', icon: '📍' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
};

export default function QualityAssurance() {
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
          <span className={styles.badge}>OUR COMMITMENT</span>
          <h2 className={styles.title}>Quality Assurance</h2>
          <p className={styles.subtitle}>Our commitment to excellence ensures only the best food products.</p>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map(feature => (
            <motion.div key={feature.id} className={styles.card} variants={cardVariants}>
              <div className={styles.iconBox}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
