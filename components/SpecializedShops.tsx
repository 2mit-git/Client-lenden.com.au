"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdStorefront, MdLocationOn, MdArrowForward, MdCheck } from 'react-icons/md';
import styles from './SpecializedShops.module.css';

type Shop = {
  id: number;
  name: string;
  desc: string;
  img: string;
  href: string;
  btnLabel: string;
  badge?: string;
  badgeStyle?: 'maroon' | 'gold' | 'navy' | 'green';
  tagLabel: string;
  accentColor: 'maroon' | 'navy' | 'gold';
  features: string[];
};

const shops: Shop[] = [
  {
    id: 1,
    name: 'Lenden Poultry',
    desc: 'Our meat shop offers premium beef, chicken, and lamb products. All ethically sourced and expertly prepared.',
    img: '/shop_card.png',
    href: '/poultry',
    btnLabel: 'Visit Poultry Shop',
    tagLabel: 'Meat Products',
    accentColor: 'maroon',
    features: ['Premium Beef', 'Quality Chicken', 'Tender Lamb', 'Special Cuts'],
  },
  {
    id: 2,
    name: 'Seafood North Sydney',
    desc: 'Our seafood market offers fresh fish and shellfish caught daily. Sustainably sourced from local waters.',
    img: '/featured_meat.png',
    href: '/seafood',
    btnLabel: 'Visit North Sydney Shop',
    tagLabel: 'Seafood Products',
    accentColor: 'navy',
    features: ['Fresh Fish', 'Premium Shellfish', 'Live Crustaceans', 'Prepared Items'],
  },
  {
    id: 3,
    name: 'Lenden Seafood Northbridge',
    desc: 'Our premium seafood collection features the finest selection of luxury seafood. Exclusively sourced and expertly curated.',
    img: '/shop_card.png',
    href: '/premium',
    btnLabel: 'Visit Northbridge Shop',
    badge: 'NEW',
    badgeStyle: 'navy',
    tagLabel: 'Luxury Seafood',
    accentColor: 'navy',
    features: ['Premium Abalone', 'Live Lobster', 'Wild Prawns', 'Premium Fish'],
  },
  {
    id: 4,
    name: 'Lenden Rotisserie',
    desc: 'Our premium rotisserie concept featuring perfectly roasted chicken, gourmet sides, and specialty items. Now open in Sydney!',
    img: '/hero_bg.png',
    href: '/rotisserie',
    btnLabel: 'Visit Now',
    badge: 'NOW OPEN',
    badgeStyle: 'gold',
    tagLabel: 'Rotisserie',
    accentColor: 'gold',
    features: ['Rotisserie Chicken', 'Specialty Items', 'Gourmet Sides', 'Now Open'],
  },
];

const containerVariants: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function SpecializedShops() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">

        {/* ── Header ──────────────────────────────────────────── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            OUR SELECTION
          </span>
          <h2 className={styles.title}>Our Specialized Shops</h2>
          <p className={styles.subtitle}>
            Explore our premium selection available at our specialized meat and seafood shops
          </p>
        </motion.div>

        {/* ── Cards grid ──────────────────────────────────────── */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {shops.map((shop) => (
            <motion.div
              key={shop.id}
              variants={cardVariants}
              className={styles.cardMotion}
            >
              <div className={`${styles.card} ${styles[`card--${shop.accentColor}`]}`}>

                {/* ── Image area ───────────────────────────── */}
                <div className={styles.imageArea}>
                  {/* skeleton */}
                  <div className={styles.skeleton} />

                  {/* photo */}
                  <Image
                    src={shop.img}
                    alt={shop.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    className={styles.photo}
                  />

                  {/* hover gradient overlay */}
                  <div className={`${styles.overlay} ${styles[`overlay--${shop.accentColor}`]}`} aria-hidden />

                  {/* top-right tag — slides in on hover */}
                  <span className={`${styles.hoverTag} ${styles[`hoverTag--${shop.accentColor}`]}`}>
                    {shop.tagLabel}
                  </span>

                  {/* optional badge (NEW / NOW OPEN) */}
                  {shop.badge && (
                    <span className={`${styles.cornerBadge} ${styles[`cornerBadge--${shop.badgeStyle}`]}`}>
                      {shop.badge}
                    </span>
                  )}
                </div>

                {/* ── Body ─────────────────────────────────── */}
                <div className={styles.body}>
                  <h3 className={`${styles.shopName} ${styles[`shopName--${shop.accentColor}`]}`}>
                    {shop.name}
                  </h3>
                  <p className={styles.shopDesc}>{shop.desc}</p>

                  {/* 2-col feature grid */}
                  <div className={styles.featureGrid}>
                    {shop.features.map((f) => (
                      <div key={f} className={styles.featureItem}>
                        <span className={`${styles.checkCircle} ${styles[`checkCircle--${shop.accentColor}`]}`}>
                          <MdCheck />
                        </span>
                        <span className={styles.featureLabel}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom row: button + arrow */}
                  <div className={styles.footer}>
                    <a
                      href={shop.href}
                      className={`${styles.visitBtn} ${styles[`visitBtn--${shop.accentColor}`]}`}
                      aria-label={`Visit ${shop.name}`}
                    >
                      <MdStorefront size={18} /> {shop.btnLabel}
                    </a>
                    <a
                      href={shop.href}
                      className={`${styles.arrowBtn} ${styles[`arrowBtn--${shop.accentColor}`]}`}
                      aria-label={`Go to ${shop.name}`}
                    >
                      <MdArrowForward size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ───────────────────────────────────── */}
        <motion.div
          className={styles.ctaCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.ctaTitle}>Visit Our Specialized Shops</h3>
          <p className={styles.ctaDesc}>
            Visit our specialized shops including our upcoming rotisserie to explore our
            complete range of premium products, get expert advice, and enjoy exclusive in-store offers
          </p>
          <a href="#locations" className={styles.ctaBtn}>
            <MdLocationOn size={20} /> Find Our Locations
          </a>
        </motion.div>

      </div>
    </section>
  );
}
