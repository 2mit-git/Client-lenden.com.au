"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MdShoppingBag, MdChevronLeft, MdChevronRight, MdStar, MdStarBorder, MdCheck, MdArrowForward } from 'react-icons/md';
import styles from './FeaturedProducts.module.css';

/* ── Slide data ──────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    img: '/featured_meat.png',
    imgAlt: 'Premium Scotch Fillet Steak',
    imageBadge: 'BEST SELLER',
    imageBadgeTheme: 'maroon',
    tag1: 'PREMIUM CUT',
    tag2: 'GRASS-FED',
    tag2Style: 'outline-maroon',
    title: 'Scotch Fillet Steak',
    stars: 5,
    reviews: 124,
    subtitle: 'Premium Scotch Fillet Steak',
    subtitleColor: 'maroon',
    features: [
      'Rich marbling and buttery texture',
      'Sourced from top-grade Scotch Fillet Steak',
      'Unmatched tenderness and flavor',
    ],
    btnTheme: 'maroon',
    href: '/#locations',
  },
  {
    id: 2,
    img: '/shop_card.png',
    imgAlt: 'Fresh Ocean King Salmon',
    imageBadge: 'OCEAN FRESH',
    imageBadgeTheme: 'navy',
    tag1: 'SUSTAINABLY CAUGHT',
    tag2: 'WILD',
    tag2Style: 'outline-navy',
    title: 'King Salmon',
    stars: 5,
    reviews: 98,
    subtitle: 'Ocean Fresh King Salmon',
    subtitleColor: 'navy',
    features: [
      'Beautiful color and rich omega-3 content',
      'Perfect for grilling, baking, or pan-searing',
      'Never frozen, always fresh King Salmon delivery',
    ],
    btnTheme: 'navy',
    href: '/#locations',
  },
  {
    id: 3,
    img: '/hero_bg.png',
    imgAlt: 'Lenden Rotisserie Chicken',
    imageBadge: 'NOW OPEN',
    imageBadgeTheme: 'gold',
    tag1: 'SIGNATURE DISH',
    tag2: 'HOUSE RECIPE',
    tag2Style: 'outline-gold',
    title: 'Rotisserie Chicken',
    stars: 5,
    reviews: 76,
    subtitle: 'Lenden Signature Rotisserie',
    subtitleColor: 'gold',
    features: [
      'Slow-roasted to golden perfection',
      'Seasoned with our signature house blend',
      'Juicy, tender, and crispy-skinned',
    ],
    btnTheme: 'gold',
    href: '/#locations',
  },
];

/* ── Framer variants ─────────────────────────────────────── */
const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:  (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.3 } }),
};

/* ── Stars helper ────────────────────────────────────────── */
function Stars({ count, theme }: { count: number; theme: string }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) stars.push(<MdStar key={i} />);
    else stars.push(<MdStarBorder key={i} />);
  }
  return (
    <span className={`${styles.stars} ${styles[`stars--${theme}`]}`} style={{ display: 'flex', alignItems: 'center' }}>
      {stars}
    </span>
  );
}

/* ── Component ───────────────────────────────────────────── */
export default function FeaturedProducts() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent((next + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">

        {/* ── Header ────────────────────────────────────────── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.badge}>CUSTOMER FAVORITES</span>
          <h2 className={styles.title}>Featured Products</h2>
          <p className={styles.subtitle}>
            Our most popular selections loved by chefs and home cooks alike
          </p>
        </motion.div>

        {/* ── Carousel wrapper ──────────────────────────────── */}
        <div className={styles.carouselOuter}>

          {/* ── Prev / Next buttons ──────────────────────────── */}
          <button
            id="carousel-prev"
            className={styles.navBtn}
            onClick={() => go(current - 1)}
            aria-label="Previous slide"
          >
            <MdChevronLeft size={24} />
          </button>
          <button
            id="carousel-next"
            className={styles.navBtn}
            onClick={() => go(current + 1)}
            aria-label="Next slide"
          >
            <MdChevronRight size={24} />
          </button>

          {/* ── Slide ─────────────────────────────────────────── */}
          <div className={styles.carouselTrack}>
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={slide.id}
                className={styles.slide}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Left — image */}
                <div className={styles.imageCol}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={slide.img}
                      alt={slide.imgAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                    {/* bottom gradient (mobile) */}
                    <div className={styles.imgGradient} aria-hidden />
                    {/* image badge */}
                    <span className={`${styles.imageBadge} ${styles[`imageBadge--${slide.imageBadgeTheme}`]}`}>
                      {slide.imageBadge}
                    </span>
                  </div>
                </div>

                {/* Right — content */}
                <div className={styles.contentCol}>
                  {/* Tags row */}
                  <div className={styles.tagsRow}>
                    <span className={`${styles.tag} ${styles[`tag--${slide.imageBadgeTheme}`]}`}>
                      {slide.tag1}
                    </span>
                    <span className={`${styles.tagOutline} ${styles[`tagOutline--${slide.imageBadgeTheme}`]}`}>
                      {slide.tag2}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={styles.productTitle}>{slide.title}</h3>

                  {/* Stars */}
                  <div className={styles.reviewRow}>
                    <Stars count={slide.stars} theme={slide.imageBadgeTheme} />
                    <span className={styles.reviewCount}>({slide.reviews} reviews)</span>
                  </div>

                  {/* Subtitle */}
                  <p className={`${styles.productSubtitle} ${styles[`productSubtitle--${slide.subtitleColor}`]}`}>
                    {slide.subtitle}
                  </p>

                  {/* Feature list */}
                  <ul className={styles.featureList}>
                    {slide.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <span className={`${styles.checkMark} ${styles[`checkMark--${slide.imageBadgeTheme}`]}`}><MdCheck size={16} /></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={slide.href}
                    className={`${styles.visitBtn} ${styles[`visitBtn--${slide.btnTheme}`]}`}
                  >
                    <MdShoppingBag size={16} />
                    Visit Our Store
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Dot indicators ────────────────────────────────── */}
          <div className={styles.dots}>
            {slides.map((s, i) => (
              <button
                key={s.id}
                id={`carousel-dot-${i}`}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ────────────────────────────────────── */}
        <div className={styles.bottomCta}>
          <a href="/#products" className={styles.allProductsBtn} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            View All Products In Store <MdArrowForward size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
