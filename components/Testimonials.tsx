import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: `"The Best Fish and Chips on the North Shore"\n\nLaden Seafood was tasked with supplying battered prawns, fish, and chips for a large office function of over 70 people with only an hour's notice. Despite the challenge and the approaching lunchtime rush, they accepted the order with a smile and delivered an exceptional spread.\n\nHaving visited several times, I've noticed their commitment to quality, such as frequently changing the cooking oil to ensure the seafood and chips remain crispy and fresh. Each serving is decent size and consistently delicious. Everyone in the office agreed it was the best seafood they've ever had.\n\nIf you have the opportunity to visit North Sydney, I highly recommend stopping by Laden Seafood!`,
    author: 'Brook Lee',
    location: 'North Sydney',
    avatar: null,
    initial: 'B',
    accentColor: 'seafood',
  },
  {
    id: 2,
    text: `They do have the best farmed poultry and red meats. Been coming here for years and the Bangladesh butcher is friendly and helpful when not too busy as they need to attend to everyone all at the same time.\n\nReady made lunch meals are also very tasty, there's always a big crowd because their foods are TASTY and GREAT QUALITY.\n\nThe girl with contact lense, stranger danger is NOT a real thing when working in customer service.`,
    author: 'Julie J',
    location: 'Sydney, NSW',
    avatar: '/julie_j.png',
    initial: 'J',
    accentColor: 'meat',
  },
  {
    id: 3,
    text: `We get the bbq chicken, chips and salads for our work staff meetings. Great sizes, good pricing and amazingly delicious. Staff are friendly as well.\nWould definitely recommend trying them!`,
    author: 'Paul Shalhoub',
    location: 'Sydney, NSW',
    avatar: '/paul.png',
    initial: 'P',
    accentColor: 'meat',
  },
];

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.subtitle}>Read reviews from our satisfied customers</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={`${styles.quoteIcon} ${styles[`quote--${item.accentColor}`]}`}>&ldquo;</div>
              <div className={styles.textWrap}>
                <p className={styles.text}>{item.text}</p>
              </div>
              <div className={styles.authorBox}>
                {item.avatar ? (
                  <div className={`${styles.avatarImg} ${styles[`ring--${item.accentColor}`]}`}>
                    <Image src={item.avatar} alt={item.author} width={64} height={64} style={{ objectFit: 'cover', borderRadius: '50%' }} />
                  </div>
                ) : (
                  <div className={`${styles.avatar} ${styles[`avatar--${item.accentColor}`]}`}>
                    {item.initial}
                  </div>
                )}
                <div>
                  <span className={styles.author}>{item.author}</span>
                  <span className={styles.location}>{item.location}</span>
                  <div className={styles.stars}>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
