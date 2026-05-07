import styles from './ContactUs.module.css';
import { MdEmail, MdPhone, MdAccessTime } from 'react-icons/md';

export default function ContactUs() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>GET IN TOUCH</span>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>Have questions about our products or services? We're here to help!</p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.formContainer}>
            <h3>Send Us a Message</h3>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option>Select a subject</option>
                  <option>Product Inquiry</option>
                  <option>Order Status</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Your message"></textarea>
              </div>
              <button type="button" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
          
          <div className={styles.infoContainer}>
            <div className={styles.contactInfo}>
              <h3>General Contact Information</h3>
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.icon}><MdEmail /></span>
                  <div>
                    <strong>Email:</strong>
                    <p>lendenptyltd@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}><MdPhone /></span>
                  <div>
                    <strong>Main Phone:</strong>
                    <p>+61 2 9959 4508</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}><MdAccessTime /></span>
                  <div>
                    <strong>Customer Support Hours:</strong>
                    <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className={styles.socialBox}>
              <h3>Follow Us</h3>
              <p>Connect with us on social media for news, recipes, and special offers</p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}>FB</a>
                <a href="#" className={styles.socialIcon}>IG</a>
                <a href="#" className={styles.socialIcon}>TW</a>
                <a href="#" className={styles.socialIcon}>YT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
