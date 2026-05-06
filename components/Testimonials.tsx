"use client";
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "The fresh meat from Lenden is fantastic! I have been purchasing here for a year and I never get disappointed. Highly recommended for premium quality.",
    author: "Alice G.",
    rating: 5,
  },
  {
    id: 2,
    text: "Absolutely top-tier quality. The staff is knowledgeable and helps me pick the best cuts every single time. It's an experience, not just shopping.",
    author: "Mark T.",
    rating: 5,
  },
  {
    id: 3,
    text: "Lenden Epicurean's selection is unparalleled. I always find something new and exciting to try for my weekend dinners. The best in town.",
    author: "Sarah L.",
    rating: 5,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Testimonials() {
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
          <span className={styles.badge}>OUR REVIEWS</span>
          <h2 className={styles.title}>What Our Customers Say</h2>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map(item => (
            <motion.div key={item.id} className={styles.card} variants={cardVariants}>
              <div className={styles.stars}>{"★".repeat(item.rating)}</div>
              <p className={styles.text}>"{item.text}"</p>
              <div className={styles.authorBox}>
                <div className={styles.avatar}>{item.author.charAt(0)}</div>
                <span className={styles.author}>{item.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
