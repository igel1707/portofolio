import { portfolioData } from '@/data/portfolio';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin, ExternalLink, CodeXml } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>Let's work<br />together.</h2>
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Email</span>
              <a href={`mailto:${portfolioData.contact.email}`} className={styles.value}>
                {portfolioData.contact.email}
              </a>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Phone</span>
              <span className={styles.value}>{portfolioData.contact.phone}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Based In</span>
              <span className={styles.value}>{portfolioData.contact.location}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Prigel Kusumawardani. All Rights Reserved.</p>
          <div className={styles.socials}>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
