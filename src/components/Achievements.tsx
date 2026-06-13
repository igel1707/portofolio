import { portfolioData } from '@/data/portfolio';
import styles from './Achievements.module.css';
import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section className={styles.achievements} id="achievements">
      <h2 className={styles.title}>Achievements.</h2>
      <div className={styles.list}>
        {portfolioData.achievements.map((achievement, index) => (
          <div key={index} className={styles.item}>
            <Award size={24} className={styles.icon} />
            <p className={styles.text}>{achievement}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
