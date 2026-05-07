"use client";
import Image from 'next/image';
import { useState } from 'react';
import { MdRestaurantMenu, MdSetMeal, MdDiamond, MdLocationOn, MdPhone, MdAccessTime, MdWaterDrop, MdEmojiEvents, MdPeople, MdLocalOffer } from 'react-icons/md';
import styles from './Locations.module.css';

const locations = [
  {
    id: 'poultry',
    tabLabel: 'Poultry Shop',
    badge: 'MEAT SHOP',
    badgeColor: '#601A24',
    shopName: 'Lenden Poultry',
    address: 'Greenwood Plaza, 1/36 Blue St, North Sydney, NSW 2060',
    phone: '+61 2 9959 4508',
    specialty: 'Premium beef, chicken, and lamb products',
    specialtyIcon: <MdRestaurantMenu />,
    hours: [
      { days: 'Mon-Fri:', time: '7:00 AM - 7:00 PM' },
      { days: 'Saturday:', time: '8:00 AM - 3:00 PM' },
      { days: 'Sunday:', time: 'Closed' },
    ],
    image: '/shop_card.png',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.266537012329!2d151.20512017596404!3d-33.84037637254654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aef301875975%3A0xb310db3dd13d117f!2sLenden%20Poultry!5e0!3m2!1sen!2sau!4v1711951000000!5m2!1sen!2sau',
    linkLabel: 'Visit Lenden Poultry for premium meat products',
    isOpen: false,
  },
  {
    id: 'nsydney',
    tabLabel: 'N. Sydney',
    badge: 'SEAFOOD NORTH SYDNEY',
    badgeColor: '#1A4A6E',
    shopName: 'Seafood North Sydney',
    address: 'Greenwood Plaza, 1/36 Blue St, North Sydney, NSW 2060',
    phone: '+61 466 273 623',
    specialty: 'Fresh seafood and premium fish products',
    specialtyIcon: <MdSetMeal />,
    hours: [
      { days: 'Mon-Fri:', time: '7:00 AM - 7:00 PM' },
      { days: 'Saturday:', time: '8:00 AM - 3:00 PM' },
      { days: 'Sunday:', time: 'Closed' },
    ],
    image: '/featured_meat.png',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.247258767373!2d151.2046335!3d-33.8399038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afb0c584b443%3A0xd805675fc042cddd!2sLenden%20Seafood!5e0!3m2!1sen!2sau!4v1711952000000!5m2!1sen!2sau',
    linkLabel: 'Visit Seafood North Sydney for fresh seafood products',
    isOpen: false,
  },
  {
    id: 'northbridge',
    tabLabel: 'Northbridge',
    badge: 'SEAFOOD NORTHBRIDGE',
    badgeColor: '#1A4A6E',
    shopName: 'Lenden Seafood Northbridge',
    address: 'Shop 29/79/113 Sailors Bay Rd, Northbridge NSW 2063, Australia',
    phone: '+61 2 9958 0974',
    specialty: 'Premium seafood and luxury marine delicacies',
    specialtyIcon: <MdDiamond />,
    hours: [{ days: 'Monday - Sunday:', time: '7:00 AM - 6:30 PM' }],
    image: '/shop_card.png',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.1234567!2d151.2064871!3d-33.8099494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aeca6f520f99%3A0x3ef8db61459e6bf4!2sLenden%20seafood%20Northbridge!5e0!3m2!1sen!2sau!4v1711953000000!5m2!1sen!2sau',
    linkLabel: 'Visit Lenden Seafood Northbridge for luxury seafood selection',
    isOpen: false,
  },
  {
    id: 'rotisserie',
    tabLabel: 'Rotisserie',
    badge: 'ROTISSERIE',
    badgeColor: '#C49B3B',
    shopName: 'Lenden Rotisserie',
    address: 'Greenwood Plaza, North Sydney NSW 2060, Australia',
    phone: '+61 2 9959 4508',
    specialty: 'Freshly rotisserie-roasted chicken & gourmet sides',
    specialtyIcon: <MdRestaurantMenu />,
    hours: [
      { days: 'Mon-Fri:', time: '10:00 AM - 7:00 PM' },
      { days: 'Saturday:', time: '9:00 AM - 5:00 PM' },
      { days: 'Sunday:', time: '10:00 AM - 4:00 PM' },
    ],
    image: '/hero_bg.png',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.266537012329!2d151.20512017596404!3d-33.84037637254654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aef301875975%3A0xb310db3dd13d117f!2sLenden%20Poultry!5e0!3m2!1sen!2sau!4v1711951000000!5m2!1sen!2sau',
    linkLabel: 'Visit Lenden Rotisserie for freshly roasted chicken',
    isOpen: true,
  },
];

export default function Locations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = locations[activeIndex];

  return (
    <section className={`section-padding ${styles.section}`} id="locations">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>FIND US</span>
          <h2 className={styles.title}>Our Locations</h2>
          <p className={styles.subtitle}>
            Visit our specialized shops for{' '}
            <em>premium meat and seafood products</em>
          </p>
        </div>

        {/* Tab Bar */}
        <div className={styles.tabBar}>
          {locations.map((loc, i) => (
            <button
              key={loc.id}
              id={`location-tab-${loc.id}`}
              className={`${styles.tab} ${activeIndex === i ? styles.tabActive : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              {loc.tabLabel}
              {loc.isOpen && <span className={styles.openBadge}>Open</span>}
            </button>
          ))}
        </div>

        {/* Main content grid */}
        <div key={active.id} className={styles.grid}>
          {/* Left: Map + shop links */}
          <div className={styles.leftPanel}>
            <div className={styles.mapWrapper}>
              <iframe
                src={active.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map - ${active.shopName}`}
              />
            </div>

            <ul className={styles.shopLinks}>
              {locations.map((loc, i) => (
                <li key={loc.id}>
                  <button
                    id={`shop-link-${loc.id}`}
                    className={`${styles.shopLink} ${activeIndex === i ? styles.shopLinkActive : ''}`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <span className={styles.shopLinkIcon}>
                      {i === 0 ? <MdRestaurantMenu /> : i === 1 ? <MdSetMeal /> : i === 2 ? <MdDiamond /> : <MdRestaurantMenu />}
                    </span>
                    <span>{loc.linkLabel}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Shop details card */}
          <div className={styles.detailsCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={active.image}
                alt={active.shopName}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
              <span
                className={styles.shopBadge}
                style={{ backgroundColor: active.badgeColor }}
              >
                {active.badge}
              </span>
            </div>

            <div className={styles.infoBody}>
              <h3 className={styles.shopName}>{active.shopName}</h3>

              <p className={styles.infoRow}>
                <span className={styles.infoIcon}><MdLocationOn size={18} /></span>
                {active.address}
              </p>
              <p className={styles.infoRow}>
                <span className={styles.infoIcon}><MdPhone size={18} /></span>
                {active.phone}
              </p>
              <p className={styles.infoRow}>
                <span className={styles.infoIcon}>{active.specialtyIcon}</span>
                {active.specialty}
              </p>

              <div className={styles.hoursBlock}>
                <p className={styles.hoursLabel}>
                  <span className={styles.infoIcon}><MdAccessTime size={18} /></span>
                  Business Hours:
                </p>
                <ul className={styles.hoursList}>
                  {active.hours.map((h) => (
                    <li key={h.days}>
                      <strong>{h.days}</strong> {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Visit Section */}
        <div className={styles.whyVisit}>
          <h3 className={styles.whyVisitTitle}>Why Visit Our Stores?</h3>
          <div className={styles.whyVisitGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><MdEmojiEvents /></div>
              <h4 className={styles.whyTitle}>Premium Selection</h4>
              <p className={styles.whyDesc}>Hand-picked premium cuts not available at regular supermarkets</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><MdPeople /></div>
              <h4 className={styles.whyTitle}>Expert Advice</h4>
              <p className={styles.whyDesc}>Our skilled butchers can provide custom cuts to your specifications</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><MdLocalOffer /></div>
              <h4 className={styles.whyTitle}>Special Offers</h4>
              <p className={styles.whyDesc}>In-store exclusive deals and seasonal specials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
