"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  MdLocationOn, MdPhone, MdEmail, MdArrowBack,
  MdStore, MdStar, MdRestaurantMenu,
} from 'react-icons/md';
import {
  FaFacebookF, FaInstagram,
  FaFire, FaLeaf, FaAward, FaDrumstickBite,
  FaSeedling, FaHeart,
} from 'react-icons/fa';
import styles from './rotisserie.module.css';

/* ── Framer variants ───────────────────────────────────────── */
const fadeUp: any = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } };
const stagger: any = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn: any = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } } };

export default function RotisseriePage() {
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
            <Link href="/premium">Seafood Northbridge</Link>
            <Link href="/rotisserie" className={styles.navActive}>
              Lenden Rotisserie <span className={styles.openBadge}>Now Open</span>
            </Link>
          </nav>
        </div>
      </motion.header>

      <main>
        {/* ════════════════  HERO  ═════════════════════════════ */}
        <section className={styles.hero}>
          {/* bg image */}
          <div className={styles.heroBg}>
            <img
              src="/hero_bg.png"
              alt=""
              className={styles.heroBgImg}
              aria-hidden="true"
            />
            <div className={styles.heroOverlay} />
            {/* decorative blobs */}
            <div className={styles.blobTR} />
            <div className={styles.blobBL} />
            <div className={styles.blobFloat1} />
            <div className={styles.blobFloat2} />
            {/* wave divider */}
            <svg className={styles.heroWave} viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z" />
            </svg>
          </div>

          <div className={styles.heroContent}>
            {/* Badge */}
            <motion.div
              className={styles.heroBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MdStore size={16} /> Now Open
            </motion.div>

            {/* Title */}
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              Lenden<br />
              <span className={styles.heroGradient}>Rotisserie</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Premium rotisserie chicken, gourmet sides, and specialty items
            </motion.p>

            {/* Info Card */}
            <motion.div
              className={styles.heroInfoCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2>Now Open in Sydney</h2>
              <p>
                Experience our exceptional rotisserie featuring premium-quality chicken,
                perfectly seasoned and slow-roasted to perfection, alongside our signature
                gourmet sides and specialty items.
              </p>
              <div className={styles.heroInfoGrid}>
                <div className={styles.heroInfoItem}>
                  <FaDrumstickBite size={28} />
                  <p>Premium Chicken</p>
                </div>
                <div className={styles.heroInfoItem}>
                  <FaSeedling size={28} />
                  <p>Fresh Sides</p>
                </div>
                <div className={styles.heroInfoItem}>
                  <MdStar size={28} />
                  <p>Specialty Items</p>
                </div>
                <div className={styles.heroInfoItem}>
                  <FaHeart size={28} />
                  <p>Made with Love</p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className={styles.heroBtns}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href="/" className={styles.btnPrimary}>
                <MdArrowBack size={18} /> Back to Home
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ════════════════  WHAT TO EXPECT  ══════════════════ */}
        <section className={styles.infoSection}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <span className={styles.sectionBadge}>
                <MdRestaurantMenu size={14} /> Our Concept
              </span>
              <h2 className={styles.sectionTitle}>What to Expect</h2>
              <p className={styles.sectionSub}>
                Experience the Lenden difference with our rotisserie concept
              </p>
            </motion.div>

            <motion.div
              className={styles.infoGrid}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {/* Card 1 */}
              <motion.div variants={fadeUp} className={styles.infoCard}>
                <div className={`${styles.infoIconWrap} ${styles['infoIconWrap--primary']}`}>
                  <FaFire size={32} />
                </div>
                <h3 className={`${styles.infoTitle} ${styles['infoTitle--primary']}`}>Perfect Roasting</h3>
                <p className={styles.infoDesc}>
                  Our rotisserie chicken will be slow-roasted to perfection, ensuring juicy,
                  flavorful meat with crispy, golden skin every time.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeUp} className={styles.infoCard}>
                <div className={`${styles.infoIconWrap} ${styles['infoIconWrap--secondary']}`}>
                  <FaLeaf size={32} />
                </div>
                <h3 className={`${styles.infoTitle} ${styles['infoTitle--secondary']}`}>Fresh Ingredients</h3>
                <p className={styles.infoDesc}>
                  Only the finest, locally-sourced ingredients will go into our chickens and
                  signature sides, maintaining the Lenden standard of quality.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeUp} className={styles.infoCard}>
                <div className={`${styles.infoIconWrap} ${styles['infoIconWrap--gold']}`}>
                  <FaAward size={32} />
                </div>
                <h3 className={`${styles.infoTitle} ${styles['infoTitle--gold']}`}>Premium Quality</h3>
                <p className={styles.infoDesc}>
                  Continuing the Lenden tradition of excellence with premium-quality products
                  and exceptional customer service.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ════════════════  FOOTER  ═════════════════════════════ */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Col 1 — Brand */}
          <div className={styles.footerCard}>
            <h3>
              <Image src="/logo.png" alt="Lenden Logo" width={24} height={24} />
              Lenden
            </h3>
            <div className={styles.footerBar} />
            <p>
              Premium meat, seafood, and rotisserie products in Sydney. Experience quality
              and freshness at our specialized shops.
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Col 2 — Our Shops */}
          <div className={styles.footerCard}>
            <h3><MdStore size={18} /> Our Shops</h3>
            <div className={styles.footerBar} />
            <ul>
              <li><Link href="/poultry">Poultry Shop</Link></li>
              <li><Link href="/seafood">Seafood North Sydney</Link></li>
              <li><Link href="/premium">Seafood Northbridge</Link></li>
              <li>
                <span className={styles.rotisserieFooterBadge}>Lenden Rotisserie</span>
                <span className={styles.rotisserieFooterTag}>Now Open</span>
              </li>
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className={styles.footerCard}>
            <h3><MdEmail size={18} /> Contact</h3>
            <div className={styles.footerBar} />
            <ul className={styles.infoList}>
              <li><MdEmail className={styles.infoIcon} /> <span>lendenptyltd@gmail.com</span></li>
              <li><MdPhone className={styles.infoIcon} /> <span>+61 2 9959 4508</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Lenden. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
