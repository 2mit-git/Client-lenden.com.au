import Link from 'next/link';
import styles from './Footer.module.css';

const socialLinks = [
  { id: 'fb',  href: '#', label: 'Facebook',  svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )},
  { id: 'ig',  href: '#', label: 'Instagram', svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )},
  { id: 'tw',  href: '#', label: 'Twitter',   svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  )},
  { id: 'yt',  href: '#', label: 'YouTube',   svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )},
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.columnsWrapper}>
          {/* Column 1 — Follow Us */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>
              <span className={styles.colIcon}>🔗</span> Follow Us
            </h3>
            <div className={styles.underline} />

            <div className={styles.socials}>
              {socialLinks.map((s) => (
                <a key={s.id} id={`footer-social-${s.id}`} href={s.href} aria-label={s.label} className={styles.socialIcon}>
                  {s.svg}
                </a>
              ))}
            </div>

            <div className={styles.brandTag}>
              <span className={styles.keyIcon}>🔑</span>
              <span className={styles.dotIcon}>🔵</span>
              <span className={styles.brandName}>LENDEN</span>
            </div>

            <p className={styles.brandDesc}>
              Join our community for recipes, tips, and updates on seasonal product availability.
            </p>
          </div>

          {/* Column 2 — Our Products */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>
              <span className={styles.colIcon}>🛒</span> Our Products
            </h3>
            <div className={styles.underline} />
            <ul className={styles.linkList}>
              <li><Link id="footer-link-poultry"     href="/poultry">Poultry Shop</Link></li>
              <li><Link id="footer-link-nsydney"     href="/seafood-meats">Seafood North Sydney</Link></li>
              <li><Link id="footer-link-northbridge" href="/seafood-meats">Seafood Northbridge</Link></li>
              <li><Link id="footer-link-rotisserie"  href="/lenden-epicurean">Lenden Rotisserie</Link></li>
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>
              <span className={styles.colIcon}>🔗</span> Quick Links
            </h3>
            <div className={styles.underline} />
            <ul className={styles.linkList}>
              <li><Link id="footer-link-about"     href="/#quality">About Us</Link></li>
              <li><Link id="footer-link-quality"   href="/#quality">Our Quality</Link></li>
              <li><Link id="footer-link-contact"   href="/#contact">Contact Us</Link></li>
              <li><Link id="footer-link-locations" href="/#locations">Store Locations</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Lenden. All rights reserved.
          </p>
          <div className={styles.policies}>
            <Link id="footer-privacy"  href="#">Privacy Policy</Link>
            <Link id="footer-terms"    href="#">Terms of Service</Link>
            <Link id="footer-shipping" href="#">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
