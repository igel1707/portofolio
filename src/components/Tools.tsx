'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import styles from './Tools.module.css';
import { X, Wrench, ArrowRight } from 'lucide-react';

export default function Tools() {
  const [activeTool, setActiveTool] = useState<any>(null);

  const toolsGroup = portfolioData.skills.find(s => s.category === "Tools");
  if (!toolsGroup) return null;

  return (
    <section className={styles.tools} id="tools">
      <h2 className={styles.title}>Toolkit.</h2>

      <div className={styles.grid}>
        {toolsGroup.items.map((tool: any, index: number) => (
          <div key={index} className={styles.toolCard} onClick={() => setActiveTool(tool)}>
            <div className={styles.iconWrapper}>
              <Wrench size={32} />
            </div>
            <h3 className={styles.toolName}>{tool.name}</h3>
            <span className={styles.actionHint}>See Usage <ArrowRight size={14} inline-block /></span>
          </div>
        ))}
      </div>

      {activeTool && (
        <div className="modalOverlay" onClick={() => setActiveTool(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setActiveTool(null)}>
              <X size={28} />
            </button>
            <h3 className={styles.modalTitle}>{activeTool.name}</h3>
            <div className={styles.usageBox}>
              <span className={styles.usageLabel}>Primary Execution</span>
              <p className={styles.usageContent}>{activeTool.use}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
