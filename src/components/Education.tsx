import { portfolioData } from '@/data/portfolio';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <h2 className={styles.title}>Education.</h2>
      <div className={styles.list}>
        {portfolioData.education.map((edu, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.period}>{edu.period}</span>
            <h3 className={styles.school}>{edu.school}</h3>
            <p className={styles.degree}>{edu.degree}</p>
            {edu.gpa && <p className={styles.gpa}>Cumulative GPA: <strong>{edu.gpa}</strong></p>}
            {edu.coursework && (
              <div className={styles.coursework}>
                <span>Selected Coursework:</span> {edu.coursework.join(' / ')}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
