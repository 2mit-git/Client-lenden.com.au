"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MdShoppingCart, MdLocationOn, MdPhone, MdEmail, MdAccessTime,
  MdFavoriteBorder, MdStar, MdArrowForward, MdStore,
} from 'react-icons/md';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
  FaCrown, FaAward, FaCut, FaFish, FaUtensils, FaUserTie, FaGem,
} from 'react-icons/fa';
import styles from './premium.module.css';

/* ── Product data ──────────────────────────────────────────── */
const products = [
  { id: 1, name: 'Premium Oyster', desc: 'Fresh wild-caught oysters, prized for their delicate flavor and briny essence.', img: 'https://lenden.com.au/static/images/shop3/abalone.jpg', tag: 'Wild Caught' },
  { id: 2, name: 'Local Lobster', desc: 'Fresh live lobsters sourced daily, guaranteed freshness and quality.', img: 'https://lenden.com.au/static/images/shop3/lobster.jpg', tag: 'Live Fresh' },
  { id: 3, name: 'Australian Wild Prawns', desc: 'Wild-caught Australian prawns with exceptional flavor and sweetness.', img: 'https://lenden.com.au/static/images/shop3/australian_wild_prawn.jpg', tag: 'Australian Wild' },
  { id: 4, name: 'Premium Salmon', desc: 'Fresh Atlantic salmon cuts, perfect for special occasions.', img: 'https://lenden.com.au/static/images/shop3/salmon.jpg', tag: 'Premium Cuts' },
  { id: 5, name: 'Red Snapper', desc: 'Carefully selected premium fish varieties, sustainably sourced.', img: 'https://lenden.com.au/static/images/shop3/fish.jpg', tag: 'Sustainable' },
  { id: 6, name: 'Premium Tuna Steak', desc: 'Premium tuna steaks, sourced from the best suppliers.', img: 'https://lenden.com.au/static/images/shop3/tuna_steak.jpg', tag: 'Sashimi Grade' },
];

/* ── Features data ─────────────────────────────────────────── */
const features = [
  { id: 1, title: 'Luxury Quality', desc: 'We source only the most exclusive premium seafood from trusted suppliers who share our commitment to luxury.', Icon: FaCrown },
  { id: 2, title: 'Expert Curation', desc: 'Our expert fishmongers select only the finest quality seafood, ensuring each product meets our exceptional standards.', Icon: FaAward },
  { id: 3, title: 'Custom Preparation', desc: 'We can prepare your premium seafood exactly how you want it with our expert preparation services.', Icon: FaCut },
  { id: 4, title: 'Personal Service', desc: 'Our expert staff provides personalized consultation and preparation advice for your luxury dining experience.', Icon: FaUserTie },
  { id: 5, title: 'Sustainable Luxury', desc: 'We prioritize sustainably sourced premium seafood to support marine conservation and ethical practices.', Icon: FaFish },
  { id: 6, title: 'Culinary Expertise', desc: 'Our team offers expert cooking tips and gourmet recipe suggestions to elevate your culinary experience.', Icon: FaUtensils },
];

/* ── Framer variants ───────────────────────────────────────── */
const fadeUp: any = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger: any = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn: any = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } } };

export default function PremiumPage() {
  return (
    <>
      {/* ════════════════  HEADER  ════════════════════════════ */}
      <motion.header
        className={styles.header}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={`container ${styles.headerInner}`}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Lenden Logo" width={32} height={32} />
            Lenden
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/poultry">Poultry Shop</Link>
            <Link href="/seafood">Seafood North Sydney</Link>
            <Link href="/premium" className={styles.navActive}>Seafood Northbridge</Link>
            <Link href="/rotisserie">
              Lenden Rotisserie <span className={styles.openBadge}>NOW OPEN</span>
            </Link>
            <Link href="/" className={styles.homeBtn}>← Back to Home</Link>
          </nav>
        </div>
      </motion.header>

      <main>
        {/* ════════════════  HERO  ═════════════════════════════ */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <img
              src="https://lenden.com.au/static/images/shop3/front_shop.jpg"
              alt=""
              className={styles.heroBgImg}
              aria-hidden="true"
            />
            <div className={styles.heroOverlay} />
            <svg className={styles.heroWave} viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z" />
            </svg>
          </div>

          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              NEW PREMIUM COLLECTION
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              Lenden Seafood<br />
              <span className={styles.heroGradient}>Northbridge</span>
            </motion.h1>

            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover our exclusive collection of the finest luxury seafood,
              carefully curated for the most discerning palates
            </motion.p>

            <motion.div
              className={styles.heroBtns}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#premium-products" className={styles.btnPrimary}>
                <FaCrown size={14} /> Explore Our Products
              </a>
              <a href="/#locations" className={styles.btnGhost}>
                <MdLocationOn size={18} /> Find Our Store
              </a>
            </motion.div>
          </div>
        </section>

        {/* ════════════════  PRODUCTS  ═════════════════════════ */}
        <section id="premium-products" className={styles.productsSection}>
          <div className={styles.blob1} />
          <div className={styles.blob2} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <span className={styles.sectionBadge}>
                <FaCrown size={12} /> Premium Quality
              </span>
              <h2 className={styles.sectionTitle}>Our Premium Selection</h2>
              <p className={styles.sectionSub}>
                Embark on an extraordinary culinary adventure with our exclusive premium seafood selections,
                renowned for their unmatched quality and luxury.
              </p>
            </motion.div>

            <motion.div
              className={styles.productsGrid}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {products.map((p) => (
                <motion.div key={p.id} variants={fadeUp} className={styles.productCard}>
                  <div className={styles.productImgWrap}>
                    <img
                      src={p.img}
                      alt={p.name}
                      className={styles.productImg}
                      loading="lazy"
                      width={400}
                      height={400}
                    />
                    <div className={styles.productOverlay} />
                    <span className={styles.productTag}>{p.tag}</span>
                  </div>
                  <div className={styles.productBody}>
                    <h3 className={styles.productName}>{p.name}</h3>
                    <p className={styles.productDesc}>{p.desc}</p>
                    <div className={styles.productFooter}>
                      <a href="/#locations" className={styles.orderBtn}>
                        <MdShoppingCart size={16} /> Order Now
                      </a>
                      <button className={styles.heartBtn} aria-label={`Favorite ${p.name}`}>
                        <MdFavoriteBorder size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════  WHY CHOOSE US  ════════════════════ */}
        <section className={styles.whySection}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <span className={`${styles.sectionBadge} ${styles.badgeLight}`}>
                <FaGem size={12} /> Premium Excellence
              </span>
              <h2 className={`${styles.sectionTitle} ${styles.titleWhite}`}>
                Premium Quality<br />
                <span className={styles.heroGradient}>Unmatched Luxury</span>
              </h2>
              <p className={`${styles.sectionSub} ${styles.subWhite}`}>
                We take pride in offering the most exclusive seafood selections with uncompromising
                standards for luxury and ethical sourcing.
              </p>
            </motion.div>

            <motion.div
              className={styles.featuresGrid}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {features.map((f) => (
                <motion.div key={f.id} variants={fadeUp} className={styles.featureCard}>
                  <div className={styles.featureIconWrap}>
                    <f.Icon size={24} />
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <div className={styles.featureBar} />
                  <p className={styles.featureDesc}>{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* quality CTA */}
            <motion.div
              className={styles.qualityCta}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3>Experience the Ultimate in Premium Seafood</h3>
              <p>Visit our premium store today and discover why we&apos;re the preferred choice for luxury seafood enthusiasts.</p>
              <div className={styles.qualityBtns}>
                <a href="/#locations" className={styles.btnPrimary}>
                  <MdStore size={18} /> Visit Our Store
                </a>
                <a href="/#contact" className={styles.btnOutline}>
                  <MdEmail size={16} /> Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════  PARALLAX CTA  ═════════════════════ */}
        <section className={styles.parallaxCta}>
          <div className={styles.parallaxBg}>
            <img
              src="https://lenden.com.au/static/images/shop3/front_shop.jpg"
              alt=""
              className={styles.parallaxImg}
              aria-hidden="true"
            />
            <div className={styles.parallaxOverlay} />
          </div>
          <motion.div
            className={`container ${styles.parallaxContent}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Experience the Ocean&apos;s Most Exclusive Treasures</h2>
            <p>Visit our premium seafood store today to explore our full selection of luxury quality seafood and discover why Lenden Seafood Northbridge is the preferred choice for the most discerning seafood enthusiasts.</p>
            <div className={styles.parallaxBtns}>
              <a href="/#locations" className={styles.btnPrimary}>
                <MdLocationOn size={18} /> Find Our Store
              </a>
              <a href="/#contact" className={styles.btnGhost}>
                <MdPhone size={16} /> Contact Us
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ════════════════  FOOTER  ═════════════════════════════ */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Col 1 — Social */}
          <div className={styles.footerCard}>
            <h3><MdArrowForward size={18} /> Follow Us</h3>
            <div className={styles.footerBar} />
            <div className={styles.socials}>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
            </div>
            <p>Join our community for recipes, tips, and updates on premium seafood availability.</p>
          </div>

          {/* Col 2 — Products */}
          <div className={styles.footerCard}>
            <h3><MdStore size={18} /> Our Products</h3>
            <div className={styles.footerBar} />
            <ul>
              <li><Link href="/poultry">› Poultry Shop</Link></li>
              <li><Link href="/seafood">› Seafood North Sydney</Link></li>
              <li><Link href="/premium">› Seafood Northbridge</Link></li>
              <li><Link href="/lenden-epicurean">› Lenden Rotisserie</Link></li>
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div className={styles.footerCard}>
            <h3><MdArrowForward size={18} /> Quick Links</h3>
            <div className={styles.footerBar} />
            <ul>
              <li><Link href="/#quality">› About Us</Link></li>
              <li><Link href="/#quality">› Our Quality</Link></li>
              <li><Link href="/#contact">› Contact Us</Link></li>
              <li><Link href="/#locations">› Store Locations</Link></li>
            </ul>
          </div>

          {/* Col 4 — Info */}
          <div className={styles.footerCard}>
            <h3><MdStore size={18} /> Shop Information</h3>
            <div className={styles.footerBar} />
            <ul className={styles.infoList}>
              <li><MdLocationOn className={styles.infoIcon} /> <span>Shop 29/79/113 Sailors Bay Rd, Northbridge NSW 2063</span></li>
              <li><MdPhone className={styles.infoIcon} /> <span>+61 2 9958 0974</span></li>
              <li><MdEmail className={styles.infoIcon} /> <span>lendenptyltd@gmail.com</span></li>
              <li><MdAccessTime className={styles.infoIcon} /> <span>Mon–Sun: 7am–6:30pm</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 Lenden. All rights reserved.</p>
          <div className={styles.footerPolicy}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Shipping Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
