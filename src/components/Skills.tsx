'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const competencies = portfolioData.skills.filter(s => s.category !== "Tools");

  return (
    <section className={styles.competencies} id="skills">
      <div className={styles.titleArea}>
        <span className={styles.label}>Expertise</span>
        <h2 className={styles.title}>Core Competencies.</h2>
      </div>
      
      <div className={styles.list}>
        {competencies.map((group, index) => (
          <div 
            key={index} 
            className={styles.group}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <h3 className={styles.categoryName}>{group.category}</h3>
            <div className={styles.details}>
              {group.items.map((item, i) => (
                <span key={i} className={styles.skillItem}>
                  {typeof item === 'string' ? item : (item as any).name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
