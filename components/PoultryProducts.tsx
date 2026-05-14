"use client";
import { motion } from 'framer-motion';
import styles from './PoultryProducts.module.css';

const products = [
  { id: 1, name: 'Wagyu Scotch Fillet', desc: 'Australian Wagyu Scotch Fillet, renowned for its marbling and tenderness, ideal for grilling or pan-frying.' },
  { id: 2, name: 'Scotch Fillet Steak', desc: 'Local and dry-aged premium beef steak, boasting a rich flavor profile for your culinary.' },
  { id: 3, name: 'Lamb Chop', desc: 'Local and free-range lamb cut, tender and juicy, perfect for grilling or pan-frying.' },
  { id: 4, name: 'Free-Range Chicken Thigh', desc: 'Free-range and hormone-free chicken, naturally succulent and rich in flavor.' },
  { id: 5, name: 'Chicken Schnitzel', desc: 'Our famous chicken schnitzel, hand-crumbed and ready to cook.' },
  { id: 6, name: 'Marinated Whole Chicken', desc: 'Marinated whole chicken with our special blend of herbs and spices.' },
  { id: 7, name: 'Meat and Vegetable Skewer', point: true, desc: 'Freshly cut grill skewers with premium meat and fresh vegetables.' },
  { id: 8, name: 'Marinated Lamb Chop', desc: 'Tender lamb chops marinated in a classic herbs and garlic.' },
  { id: 9, name: 'Whole BBQ Chicken', desc: 'Our freshly roasted BBQ chicken, available to take home.' },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

export default function PoultryProducts() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>OUR SELECTION</span>
          <h2 className={styles.title}>Premium Meat Selection</h2>
          <p className={styles.subtitle}>Discover our wide range of premium meats, carefully selected to ensure the best quality for your culinary needs.</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product) => (
            <motion.div key={product.id} className={styles.card} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageFallback}>
                  {/* Decorative placeholder */}
                  <div className={styles.placeholderIcon}>🥩</div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <p className={styles.cardDesc}>{product.desc}</p>
                <div className={styles.actions}>
                  <button className={styles.buyBtn}>🛒 Buy Now</button>
                  <button className={styles.favBtn}>♡</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
