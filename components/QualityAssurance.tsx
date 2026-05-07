"use client";
import { motion } from 'framer-motion';
import { MdLocalFlorist, MdRecycling, MdOutlineVerified, MdOutlineTrackChanges } from 'react-icons/md';
import styles from './QualityAssurance.module.css';

const features = [
  { id: 1, title: 'Freshness',      desc: 'We source daily to ensure the highest quality produce reaches your table.',      Icon: MdLocalFlorist },
  { id: 2, title: 'Sustainability', desc: 'Working with ethical farms committed to environmental stewardship.',              Icon: MdRecycling },
  { id: 3, title: 'Expertise',      desc: 'Our master butchers and fishmongers bring decades of experience.',               Icon: MdOutlineVerified },
  { id: 4, title: 'Traceability',   desc: 'Know exactly where your food comes from with our transparent sourcing.',         Icon: MdOutlineTrackChanges },
];

/* ── Variants ─────────────────────────────────────────────── */

const headerVariants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

// each card: slides up + fades in
const cardVariants = {
  hidden:   { opacity: 0, y: 50, scale: 0.94 },
  visible:  {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// icon: bounces in after card
const iconVariants = {
  hidden:   { scale: 0, rotate: -20 },
  visible:  {
    scale: 1, rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18, delay: 0.15 },
  },
};

export default function QualityAssurance() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          className={styles.header}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className={styles.badge}>OUR COMMITMENT</span>
          <h2 className={styles.title}>Quality Assurance</h2>
          <p className={styles.subtitle}>
            Our commitment to excellence ensures only the best food products.
          </p>
        </motion.div>

        {/* ── Cards grid ─────────────────────────────────────── */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={styles.card}
              variants={cardVariants}

              /* hover: lift + slight scale */
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}

              /* tap: press-down micro-interaction */
              whileTap={{ scale: 0.97 }}
            >
              {/* Icon — spring bounce on scroll-in */}
              <motion.div
                className={styles.iconBox}
                variants={iconVariants}

                /* extra pulse on card hover */
                whileHover={{
                  scale: 1.18,
                  rotate: [0, -8, 8, -4, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <feature.Icon className={styles.iconSvg} />
              </motion.div>

              {/* Underline accent — expands on scroll-in */}
              <motion.div
                className={styles.accentLine}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + feature.id * 0.1, ease: 'easeOut' }}
              />

              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
