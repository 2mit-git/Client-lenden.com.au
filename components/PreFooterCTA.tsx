import Link from 'next/link';
import Image from 'next/image';
import styles from './PreFooterCTA.module.css';

export default function PreFooterCTA() {
  return (
    <section className={styles.section}>
      {/* Background image */}
      <Image
        src="/hero_bg.png"
        alt="Lenden store background"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority={false}
      />
      {/* Dark overlay */}
      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>Experience Premium Quality Food</h2>
        <p className={styles.subtitle}>
          Visit our specialized shops today to explore our full selection of premium quality meat and
          seafood products. Discover why Lenden is the preferred choice for food enthusiasts.
        </p>
        <div className={styles.buttons}>
          <Link id="cta-find-stores" href="/#locations" className={styles.btnOutline}>
            <span className={styles.btnIcon}>📍</span>
            Find Our Stores
          </Link>
          <Link id="cta-contact-us" href="/#contact" className={styles.btnOutline}>
            <span className={styles.btnIcon}>📞</span>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
