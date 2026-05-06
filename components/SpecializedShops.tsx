"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './SpecializedShops.module.css';

const shops = [
  { id: 1, name: 'Lenden Poultry', desc: 'Premium, free-range poultry.', img: '/shop_card.png' },
  { id: 2, name: 'Seafood/Meats Factory', desc: 'Fresh from the ocean and farm.', img: '/shop_card.png' },
  { id: 3, name: 'Lenden Roasted/Smoked', desc: 'Artisanal smoked delicacies.', img: '/shop_card.png' },
  { id: 4, name: 'Lenden Epicurean', desc: 'The finest gourmet selections.', img: '/shop_card.png' },
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

export default function SpecializedShops() {
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
          <span className={styles.badge}>EXPLORE LENDEN</span>
          <h2 className={styles.title}>Our Specialized Shops</h2>
          <p className={styles.subtitle}>Explore our premium selection across our specialized counters.</p>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {shops.map(shop => (
            <motion.div key={shop.id} className={styles.card} variants={cardVariants}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageFallback}></div>
                <Image src={shop.img} alt={shop.name} fill style={{objectFit: "cover"}} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{shop.name}</h3>
                <p className={styles.cardDesc}>{shop.desc}</p>
                <div className={styles.features}>
                  <span className={styles.feature}><span className={styles.check}>✓</span> Fresh Daily</span>
                  <span className={styles.feature}><span className={styles.check}>✓</span> Quality Assured</span>
                </div>
                <button className={styles.btn}>Visit Shop</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.ctaBox}>
            <h3>Visit Our Specialized Shops</h3>
            <p>Visit our specialized shops to explore our complete range of premium products.</p>
            <button className={styles.ctaBtn}>Shop All Products</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
