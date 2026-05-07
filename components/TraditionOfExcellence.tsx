import Image from 'next/image';
import Link from 'next/link';
import { MdWorkspacePremium, MdHandshake, MdPeople, MdRestaurantMenu, MdSetMeal } from 'react-icons/md';
import styles from './TraditionOfExcellence.module.css';

export default function TraditionOfExcellence() {
  return (
    <section className={`section-padding ${styles.section}`} id="about">
      <div className={`container ${styles.container}`}>
        <div className={styles.contentCol}>
          <span className={styles.badge}>OUR STORY</span>
          <h2 className={styles.title}>A Tradition of Excellence</h2>
          <p className={styles.description}>
            Welcome to Lenden, where our passion for premium food products meets exceptional service.
            For over 25 years, we've been committed to providing our community with the finest
            quality meat and seafood products.
          </p>
          <p className={styles.description}>
            What started as a small family butcher shop has grown into two specialized stores,
            each dedicated to bringing you the very best in their respective categories. Our meat shop,
            Lenden Poultry & Butchery, offers premium cuts of beef, chicken, and lamb, while our
            seafood shop, Lenden Seafood, provides the freshest catch daily.
          </p>
          <p className={styles.description}>
            Despite our growth, we've never compromised on our core values: exceptional quality,
            ethical sourcing, and personalized service. Every product in our shops is carefully
            selected to ensure you receive only the best.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.icon}><MdWorkspacePremium size={20} /></span> Premium Quality
            </div>
            <div className={styles.featureItem}>
              <span className={styles.icon}><MdHandshake size={20} /></span> Ethical Sourcing
            </div>
            <div className={styles.featureItem}>
              <span className={styles.icon}><MdPeople size={20} /></span> Community First
            </div>
          </div>
          
          <div className={styles.actions}>
            <Link href="/poultry" className={styles.primaryBtn}><MdRestaurantMenu size={20} /> Poultry Shop</Link>
            <Link href="/seafood" className={styles.secondaryBtn}><MdSetMeal size={20} /> Seafood Shop</Link>
          </div>
        </div>
        
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image src="/chef_portrait.png" alt="Lenden - Premium Meat and Seafood Shops" fill style={{objectFit: "cover"}} />
            <div className={styles.imageCaption}>
              <h4>25+ Years of Excellence</h4>
              <p>Serving the community with premium quality meat and seafood products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
