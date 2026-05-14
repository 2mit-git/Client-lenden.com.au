"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  MdShoppingCart, MdLocationOn, MdPhone, MdEmail, MdAccessTime,
  MdFavoriteBorder, MdStar, MdArrowForward, MdStore,
} from 'react-icons/md';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
  FaFish, FaLeaf, FaCut, FaUtensils, FaAward,
} from 'react-icons/fa';
import { IoWaterOutline } from 'react-icons/io5';
import styles from './seafood.module.css';

/* ── colour tokens (seafood palette) ───────────────────────── */
// primary: #1a365d  (deep navy)
// secondary: #4299e1 (bright blue)
// accent: #63b3ed   (light blue)
// dark: #0f2440     (darkest navy)

/* ── Product data ──────────────────────────────────────────── */
const products = [
  { id: 1, name: 'Australian Salmon', desc: 'Fresh, sustainably caught Australian Salmon, perfect for grilling or pan-searing.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_Australian+Salmon.jpg', tag: 'Premium Grade' },
  { id: 2, name: 'King Salmon', desc: 'Premium King Salmon, perfect for sushi, sashimi, or gourmet cooking.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_King+Salmon.jpg', tag: 'Sashimi Grade' },
  { id: 3, name: 'Barramundi', desc: 'Fresh Australian Barramundi, known for its delicate flavor and firm white flesh.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_Barammundi.jpg', tag: 'Fresh Catch' },
  { id: 4, name: 'Blue Finn Cod', desc: 'Premium Blue Finn Cod, perfect for fish and chips or gourmet seafood dishes.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_Blue+Finn+Cod.jpg', tag: 'Premium Grade' },
  { id: 5, name: 'Tuna Steak', desc: 'Premium quality tuna steak, perfect for searing or sushi preparation.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_Tuna+Steak.jpg', tag: 'Sashimi Grade' },
  { id: 6, name: 'Raw Prawns', desc: 'Fresh Australian prawns, perfect for grilling, stir-frying, or seafood pasta.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_Raw+Prawns.jpg', tag: 'Fresh Catch' },
  { id: 7, name: 'Cooked Prawns', desc: 'Perfectly cooked Australian prawns, ready to serve or use in your favorite dishes.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_Cooked+Prawns.jpg', tag: 'Ready to Eat' },
  { id: 8, name: 'Australian Lobster', desc: 'Premium Australian Lobster, perfect for special occasions and gourmet dining.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_Lobster.jpg', tag: 'Premium Grade' },
  { id: 9, name: 'Oysters', desc: 'Fresh Australian oysters, shucked to order for the ultimate seafood experience.', img: 'https://lenden.com.au/static/images/Lenden+Seafood_Oyster.jpg', tag: 'Fresh Daily' },
];

/* ── "Why Choose Us" features ──────────────────────────────── */
const features = [
  { id: 1, title: 'Ocean Fresh', desc: 'Our seafood is delivered daily, ensuring you get the freshest catch possible with optimal flavor and quality.', Icon: IoWaterOutline },
  { id: 2, title: 'Sustainably Sourced', desc: 'We partner with fisheries committed to sustainable practices that protect our marine ecosystems for future generations.', Icon: FaLeaf },
  { id: 3, title: 'Expert Selection', desc: 'Our expert fishmongers select only the finest quality seafood, ensuring each product meets our high standards.', Icon: FaFish },
  { id: 4, title: 'Custom Preparation', desc: 'We can fillet, scale, debone, or prepare your seafood exactly how you want it for your convenience.', Icon: FaCut },
  { id: 5, title: 'Local Sourcing', desc: 'We prioritize Australian seafood to support local fishing communities and reduce our carbon footprint.', Icon: MdLocationOn },
  { id: 6, title: 'Cooking Advice', desc: 'Our team offers expert cooking tips and recipe suggestions to help you make the most of your seafood.', Icon: FaUtensils },
];

/* ── Framer variants ───────────────────────────────────────── */
const fadeUp: any = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger: any = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn: any = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } } };

export default function SeafoodPage() {
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
            <Link href="/seafood" className={styles.navActive}>Seafood North Sydney</Link>
            <Link href="/premium">Seafood Northbridge</Link>
            <Link href="/rotisserie">
              Lenden Rotisserie <span className={styles.openBadge}>NOW OPEN</span>
            </Link>
            <Link href="/" className={styles.homeBtn}>
              ← Back to Home
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
              src="https://lenden.com.au/static/images/seafood-banner.jpeg"
              alt=""
              className={styles.heroBgImg}
              aria-hidden="true"
            />
            <div className={styles.heroOverlay} />
            {/* wave divider */}
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
              <FaAward size={14} /> Premium Seafood
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              Ocean&apos;s Finest<br />
              <span className={styles.heroGradient}>Delivered Fresh</span>
            </motion.h1>

            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover ocean-fresh seafood, sustainably sourced and delivered daily
              to ensure exceptional quality and taste
            </motion.p>

            <motion.div
              className={styles.heroBtns}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#seafood-products" className={styles.btnPrimary}>
                <FaFish size={16} /> Explore Our Products
              </a>
              <a href="/#locations" className={styles.btnGhost}>
                <MdLocationOn size={18} /> Find Our Store
              </a>
            </motion.div>
          </div>
        </section>

        {/* ════════════════  PRODUCTS  ═════════════════════════ */}
        <section id="seafood-products" className={styles.productsSection}>
          {/* decorative blobs */}
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
                <FaAward size={12} /> Premium Quality
              </span>
              <h2 className={styles.sectionTitle}>Our Seafood Selection</h2>
              <p className={styles.sectionSub}>
                Embark on an extraordinary culinary adventure with our exclusive seafood selections,
                renowned for their unmatched freshness and commitment to sustainability.
              </p>
            </motion.div>

            {/* grid */}
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

            {/* CTA card */}
            <motion.div
              className={styles.ctaCard}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3>Experience Premium Seafood</h3>
              <p>Visit our store to discover our complete range of fresh seafood, delivered daily from Australia&apos;s pristine waters.</p>
              <a href="/#locations" className={styles.ctaBtn}>
                <MdLocationOn size={18} /> Visit Our Store
              </a>
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
                <MdStar size={14} /> Why Choose Us
              </span>
              <h2 className={`${styles.sectionTitle} ${styles.titleWhite}`}>
                Premium Quality<br />
                <span className={styles.heroGradient}>Unmatched Experience</span>
              </h2>
              <p className={`${styles.sectionSub} ${styles.subWhite}`}>
                We take pride in offering the finest quality seafood with uncompromising
                standards for freshness and sustainable sourcing.
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
              <h3>Experience the Difference Quality Makes</h3>
              <p>Visit our store today and discover why we&apos;re the preferred choice for seafood enthusiasts.</p>
              <div className={styles.qualityBtns}>
                <a href="/#locations" className={styles.btnPrimary}>
                  <MdStore size={18} /> Visit Our Store
                </a>
                <a href="/#contact" className={styles.btnOutlineWhite}>
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
              src="https://lenden.com.au/static/images/seafood-banner.jpeg"
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
            <h2>Experience the Ocean&apos;s Finest Treasures</h2>
            <p>Visit our seafood store today to explore our full selection of premium quality seafood and discover why Lenden is the preferred choice for seafood enthusiasts.</p>
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
            <p>Join our community for recipes, tips, and updates on seasonal seafood availability.</p>
          </div>

          {/* Col 2 — Products */}
          <div className={styles.footerCard}>
            <h3><MdStore size={18} /> Our Products</h3>
            <div className={styles.footerBar} />
            <ul>
              <li><Link href="/poultry">› Meat Shop</Link></li>
              <li><Link href="/seafood">› Seafood North Sydney</Link></li>
              <li><Link href="/seafood-meats">› Seafood Northbridge</Link></li>
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
              <li><MdLocationOn className={styles.infoIcon} /> <span>Greenwood Plaza, 1/36 Blue St, North Sydney NSW 2060</span></li>
              <li><MdPhone className={styles.infoIcon} /> <span>+61 466 273 623</span></li>
              <li><MdEmail className={styles.infoIcon} /> <span>lendenptyltd@gmail.com</span></li>
              <li><MdAccessTime className={styles.infoIcon} /> <span>Mon–Fri: 7am–7pm · Sat: 8am–3pm · Sun: Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
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
