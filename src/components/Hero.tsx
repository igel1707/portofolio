import { portfolioData } from '@/data/portfolio';
import styles from './Hero.module.css';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.top}>
        <span className={styles.badge}>Associate Project Manager / System Analyst</span>
      </div>
      
      <h1 className={styles.name}>
        Prigel<br />Kusumawardani.
      </h1>

      <div className={styles.bottom}>
        <div className={styles.imageArea}>
          <div className={styles.photoPlaceholder}>
            {/* Image Placeholder */}
          </div>
        </div>
        
        <div className={styles.description}>
          <p className={styles.summary}>
            Bridging technical engineering with strategic management 
            to build impactful digital solutions that scale.
          </p>
          
          <div className={styles.ctaArea}>
            <button className="btn-outline">Download Resume</button>
            <a href="#contact" style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Let's Talk <ArrowDown size={14} style={{ display: 'inline' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
