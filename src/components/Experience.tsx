'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import styles from './Experience.module.css';
import { X, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const [activeExp, setActiveExp] = useState<any>(null);

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.titleArea}>
        <span className={styles.label}>Career Path</span>
        <h2 className={styles.title}>Professional History.</h2>
      </div>
      
      <div className={styles.list}>
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className={styles.item} onClick={() => setActiveExp(exp)}>
            <span className={styles.period}>{exp.period}</span>
            <div className={styles.mainInfo}>
              <h3 className={styles.role}>{exp.role}</h3>
              <span className={styles.company}>{exp.company}</span>
            </div>
            <div className={styles.viewIcon}>
              <ArrowUpRight size={24} />
            </div>
          </div>
        ))}
      </div>

      {activeExp && (
        <div className="modalOverlay" onClick={() => setActiveExp(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setActiveExp(null)}>
              <X size={24} />
            </button>
            
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-warm)', textTransform: 'uppercase' }}>{activeExp.period}</span>
              <h3 style={{ fontSize: '3rem', lineHeight: 1, margin: '1rem 0' }}>{activeExp.role}</h3>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--muted)', fontWeight: 500 }}>{activeExp.company}</h4>
            </div>

            {activeExp.description && (
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--fg)', fontStyle: 'italic' }}>{activeExp.description}</p>
              </div>
            )}

            <div className={styles.modalDetails}>
              {activeExp.highlights ? (
                activeExp.highlights.map((h: any, i: number) => (
                  <div key={i} style={{ marginBottom: '2.5rem' }}>
                    <h5 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>{h.title}</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {h.points.map((p: string, j: number) => (
                        <li key={j} style={{ marginBottom: '0.75rem', fontSize: '1.1rem', color: 'var(--muted)', paddingLeft: '1.5rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent-warm)' }}>→</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {activeExp.points.map((p: string, i: number) => (
                    <li key={i} style={{ marginBottom: '0.75rem', fontSize: '1.1rem', color: 'var(--muted)', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-warm)' }}>→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
