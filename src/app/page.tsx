'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight, X, Wrench, GraduationCap, Award } from 'lucide-react';
import Header from '@/components/Header';
import styles from './page.module.css';

export default function Home() {
  const [modalContent, setModalContent] = useState<any>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  } as const;

  return (
    <main className={styles.main}>
      <Header />
      
      <motion.div 
        className="bentoGrid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* HERO BLOCK - LARGE */}
        <motion.div variants={itemAnim} className={`${styles.heroBlock} bentoItem`}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Associate Project Manager</span>
            <h1 className={styles.name}>Prigel<br />Kusumawardani.</h1>
            <div className={styles.heroPhoto}>
               {/* Placeholder for actual image */}
               <span>IMAGE</span>
            </div>
          </div>
        </motion.div>

        {/* SUMMARY BLOCK */}
        <motion.div variants={itemAnim} className={`${styles.summaryBlock} bentoItem`}>
          <p className={styles.summaryText}>
            Translating complex chaos into structured digital excellence. 
            Bridging engineering with strategic design.
          </p>
          <div className={styles.cta}>
             <button className={styles.contactBtn}>Get in Touch</button>
          </div>
        </motion.div>

        {/* GPA HIGHLIGHT */}
        <motion.div variants={itemAnim} className={`${styles.gpaBlock} bentoItem`}>
          <span className={styles.gpaValue}>3.98</span>
          <span className={styles.gpaLabel}>Consistency / GPA</span>
        </motion.div>

        {/* EXPERIENCE BLOCK - TALL */}
        <motion.div variants={itemAnim} className={`${styles.expBlock} bentoItem`}>
          <div className={styles.blockHeader}>
            <h3>Experience</h3>
            <ArrowUpRight size={20} />
          </div>
          <div className={styles.expList}>
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className={styles.expMiniItem} onClick={() => setModalContent({ type: 'exp', data: exp })}>
                <span className={styles.expRole}>{exp.role}</span>
                <span className={styles.expCompany}>{exp.company}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TOOLS BLOCK */}
        <motion.div variants={itemAnim} className={`${styles.toolsBlock} bentoItem`}>
          <div className={styles.blockHeader}>
             <h3>Toolkit</h3>
          </div>
          <div className={styles.toolsGrid}>
            {(portfolioData.skills.find(s => s.category === "Tools")?.items as any[]).slice(0, 6).map((tool, i) => (
              <div key={i} className={styles.toolIcon} onClick={() => setModalContent({ type: 'tool', data: tool })}>
                <Wrench size={20} />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* COMPETENCIES BLOCK */}
        <motion.div variants={itemAnim} className={`${styles.compBlock} bentoItem`}>
           <h3>Competencies</h3>
           <div className={styles.compTags}>
              {portfolioData.skills.filter(s => s.category !== "Tools").map((group, i) => (
                <span key={i} className={styles.compTag}>{group.category}</span>
              ))}
           </div>
        </motion.div>

        {/* EDUCATION BLOCK */}
        <motion.div variants={itemAnim} className={`${styles.eduBlock} bentoItem`}>
          <GraduationCap size={32} color="var(--earth)" />
          <h3 className={styles.eduSchool}>Universitas Brawijaya</h3>
        </motion.div>

        {/* ACHIEVEMENTS BLOCK */}
        <motion.div variants={itemAnim} className={`${styles.achBlock} bentoItem`}>
           <Award size={32} color="var(--accent)" />
           <h3>National UI/UX Winner</h3>
        </motion.div>

      </motion.div>

      {/* MODAL SYSTEM */}
      {modalContent && (
        <div className="modalOverlay" onClick={() => setModalContent(null)}>
          <motion.div 
            className="modalContent" 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="closeBtn" onClick={() => setModalContent(null)}><X /></button>
            
            {modalContent.type === 'exp' && (
              <div className={styles.modalBody}>
                <span className={styles.modalMeta}>{modalContent.data.period}</span>
                <h2 className={styles.modalTitle}>{modalContent.data.role}</h2>
                <h3 className={styles.modalSubtitle}>{modalContent.data.company}</h3>
                <div className={styles.modalContentText}>
                  {modalContent.data.highlights ? (
                    modalContent.data.highlights.map((h: any, i: number) => (
                      <div key={i} className={styles.modalSection}>
                        <h4>{h.title}</h4>
                        <ul>{h.points.map((p: string, j: number) => <li key={j}>{p}</li>)}</ul>
                      </div>
                    ))
                  ) : (
                    <ul>{modalContent.data.points.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul>
                  )}
                </div>
              </div>
            )}

            {modalContent.type === 'tool' && (
              <div className={styles.modalBody}>
                <h2 className={styles.modalTitle}>{modalContent.data.name}</h2>
                <div className={styles.usageBox}>
                   <span>Primary Execution</span>
                   <p>{modalContent.data.use}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </main>
  );
}
