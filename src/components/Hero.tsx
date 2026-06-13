"use client";

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const roles = ['Project Manager', 'Product Manager', 'System Analyst'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero} id="about">
      <div className={styles.top}>
        <span className={styles.badge}><span className={styles.role} key={index}>{roles[index]}</span></span>
      </div>

      <h1 className={styles.name}>
        Prigel<br />Kusumawardani.
      </h1>

      <div className={styles.bottom}>
        <div className={styles.imageArea}>
          <div className={styles.photoWrapper}>
            <Image
              src="/prigel-photo.png"
              alt="Prigel Kusumawardani"
              fill
              className={styles.photo}
              style={{ objectFit: 'cover' }}
              priority
            />
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
