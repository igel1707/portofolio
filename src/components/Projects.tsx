import { portfolioData } from '@/data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Selected Works.</h2>
      
      <div className={styles.grid}>
        {portfolioData.projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imagePlaceholder}>
              {/* User can insert project <img> here */}
            </div>
            <div className={styles.projectInfo}>
              <span className={styles.projectTagline}>{project.tagline}</span>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
