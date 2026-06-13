'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoMark}>◆</span> Prigel.
        </a>
        <ul className={styles.links}>
          <li><a href="#about">Personal</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
        <a href="mailto:prigelkusumawardani@gmail.com" className={styles.cta}>
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
