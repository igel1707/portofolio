'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight, Play } from 'lucide-react';
import styles from './page.module.css';

// framer-motion 12 Variants type is overly strict; cast as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stagger: any = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const tools = [
  'Figma', 'Jira', 'GitLab', 'Swagger', 'Notion',
  'Miro', 'Bizagi', 'NotebookLM', 'Postman', 'Maze',
];

function formatPeriod(period: string): string {
  const parts = period.split('–').map((p) => p.trim());
  if (parts.length === 1) return parts[0].match(/\d{4}/)?.[0] ?? period;
  const startYear = parts[0].match(/\d{4}/)?.[0];
  const end = parts[1];
  if (/present/i.test(end)) return `${startYear} – Now`;
  const endYear = end.match(/\d{4}/)?.[0];
  if (startYear === endYear) return startYear ?? period;
  return `${startYear} – ${endYear}`;
}

const projectColors = [
  '#1e2535', '#1e1e2e', '#2a1e1e', '#1a2434', '#1a2a1e',
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* ── HERO (dark) ──────────────────────────────────────────────── */}
      <section className={styles.heroSection} id="hero">
        <div className={styles.heroInner}>

          {/* LEFT — text content */}
          <div className={styles.heroLeft}>
            <motion.div
              className={styles.availableBadge}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.greenDot} />
              Available for work
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <h1 className={styles.heroGreeting}>Hi, I&apos;m Prigel.</h1>
              <h1 className={styles.heroRole}>Project Manager.</h1>
            </motion.div>

            <motion.p
              className={styles.heroDesc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
            >
              Delivering structured, scalable digital solutions refined by a keen sense of human-centered design and creative innovation.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <a href="mailto:prigelkusumawardani@gmail.com" className={styles.heroBtnPrimary}>
                Let&apos;s Connect <ArrowUpRight size={15} />
              </a>
              <a href="#" className={styles.heroBtnSecondary}>
                📄 PDF Portfolio
              </a>
            </motion.div>

            <motion.a
              href="#portfolio"
              className={styles.heroExplore}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Explore my selected works →
            </motion.a>
          </div>

          {/* RIGHT — single photo */}
          <motion.div
            className={styles.heroPhoto}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image src="/prigel-photo.png" alt="Prigel Kusumawardani" width={340} height={453} style={{ objectFit: 'cover', width: '100%', height: '100%' }} priority />
          </motion.div>

        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────── */}
      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...tools, ...tools, ...tools].map((t, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot}>◆</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section className={styles.section} id="about">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className={styles.sectionLabel}>
            About Me
          </motion.div>

          <div className={styles.aboutTop}>
            <motion.h2 variants={fadeUp} className={styles.aboutHeading}>
              Design has always been more than just a job – it&apos;s my passion.
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.aboutDesc}>
              Design is not just a job for me, it&apos;s a passion that drives me.{' '}
              {portfolioData.summary.slice(0, 120)}...
            </motion.p>
          </div>

          <div className={styles.aboutBottom}>
            <motion.div variants={fadeUp} className={styles.aboutPhoto}>
              <div className={styles.playBtn}>
                <Play size={22} fill="white" strokeWidth={0} />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className={styles.aboutStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3.98</span>
                <span className={styles.statLabel}>
                  GPA score out of 4.00 at Universitas Brawijaya – top of class.
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>+5</span>
                <span className={styles.statLabel}>
                  Projects designed and delivered end-to-end across various domains.
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── SKILLS / SERVICES ────────────────────────────────────────── */}
      <section className={styles.section} id="skills">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className={styles.sectionLabel}>
            Services
          </motion.div>

          <div className={styles.servicesGrid}>
            <motion.div variants={fadeUp} className={styles.servicesLeft}>
              <h2 className={styles.servicesHeading}>
                A Comprehensive look at what I offer and how I deliver
              </h2>
              <p className={styles.servicesDesc}>
                A comprehensive look at my services and how I approach them.
              </p>
              <a
                href="mailto:prigelkusumawardani@gmail.com"
                className={styles.signInBtn}
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.servicesCards}>
              <div className={styles.serviceCard}>
                <div className={styles.cardBody}>
                  <h3>Project Management</h3>
                  <p>Agile leadership, sprint planning, and cross-functional team coordination to hit every milestone.</p>
                </div>
                <ArrowUpRight size={18} className={styles.cardArrow} />
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.cardBody}>
                  <h3>Search Engineer</h3>
                  <p>Requirement engineering, BPMN, UML modeling, and AI-powered gap analysis using NotebookLM.</p>
                </div>
                <ArrowUpRight size={18} className={styles.cardArrow} />
              </div>

              <div className={`${styles.serviceCard} ${styles.serviceCardDark}`}>
                <div className={styles.cardBody}>
                  <h3>UI/UX Design</h3>
                  <p>
                    We create end-to-end flows — from user research to high-fidelity Figma prototypes validated with Maze.
                  </p>
                </div>
                <div className={styles.cardArrowDark}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.cardBody}>
                  <h3>Tools & Stack</h3>
                  <p>Proficient in Jira, GitLab, Swagger, Figma, and Postman to ship production-ready digital products.</p>
                </div>
                <ArrowUpRight size={18} className={styles.cardArrow} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section className={styles.section} id="experience">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className={styles.sectionLabel}>
            Experience
          </motion.div>

          <div className={styles.expHeader}>
            <motion.h2 variants={fadeUp} className={styles.expHeading}>
              A Yearly snapshot of my creative growth
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.expSubDesc}>
              An annual summary that summarizes my creative journey and development throughout the years.
            </motion.p>
          </div>

          <div className={styles.expList}>
            {portfolioData.experience.map((exp, i) => (
              <motion.div key={i} variants={fadeUp} className={styles.expRow}>
                <div className={styles.expInfo}>
                  <h3 className={styles.expRole}>{exp.role}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.6rem' }}>
                    {('logo' in exp && exp.logo) && (
                      <Image src={exp.logo as string} alt={exp.company} width={106} height={38} style={{ objectFit: 'contain' }} />
                    )}
                    <p className={styles.expCompany} style={{ marginBottom: 0 }}>{exp.company}</p>
                  </div>
                  <p className={styles.expDesc}>
                    {('description' in exp ? exp.description : undefined) ??
                      ('points' in exp && Array.isArray((exp as { points?: string[] }).points)
                        ? (exp as { points: string[] }).points[0]
                        : '')}
                  </p>
                </div>
                <div className={styles.expYear}>{formatPeriod(exp.period)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────────────────── */}
      <section className={styles.section} id="portfolio">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className={styles.sectionLabel}>
            Portfolio
          </motion.div>

          <div className={styles.portfolioHeader}>
            <motion.h2 variants={fadeUp} className={styles.portfolioHeading}>
              Explore my portfolio of creative solutions
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.portfolioDesc}>
              Explore my portfolio full of creative solutions.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className={styles.portfolioGrid}>
            {portfolioData.projects.map((proj, i) => (
              <div
                key={i}
                className={styles.portfolioCard}
                style={{ background: projectColors[i % projectColors.length] }}
              >
                <div className={styles.portfolioCardContent}>
                  <p className={styles.portfolioTagline}>{proj.tagline}</p>
                  <h3 className={styles.portfolioName}>{proj.name}</h3>
                </div>
                <div className={styles.portfolioArrow}>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── TESTIMONIAL / ACHIEVEMENT ────────────────────────────────── */}
      <section className={styles.testimonialSection}>
        <motion.div
          className={styles.testimonialInner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.quoteIcon}>&ldquo;</div>
          <p className={styles.quote}>
            Without strong design principles, we would never have been able to implement
            this level of user experience. Being a small team we don&apos;t have enough hours
            in the day — but disciplined research and prototyping gave us the leverage we needed.
          </p>
          <p className={styles.quoteAchievement}>
            2nd Place Winner, GIDHUB 2025 National UI/UX Competition — and maintaining a consistent
            GPA of 3.98/4.00 throughout.
          </p>
          <div className={styles.quoteAuthor}>
            <div className={styles.quoteAvatar}>
              <Image src="/prigel-photo.png" alt="Prigel Kusumawardani" width={44} height={44} style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div>
              <span className={styles.quoteName}>Prigel Kusumawardani</span>
              <span className={styles.quoteRole}>Informatics Engineering, Universitas Brawijaya</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────────── */}
      <section className={styles.footerCta}>
        <div className={styles.footerCtaInner}>
          <motion.h2
            className={styles.footerCtaTitle}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let&apos;s Connect<br />There
          </motion.h2>
          <motion.a
            href="mailto:prigelkusumawardani@gmail.com"
            className={styles.footerCtaBtn}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className={styles.footerCtaBtnArrow}>&rsaquo;&rsaquo;</span>
            Hire Me Now!
          </motion.a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <span className={styles.footerLogoMark}>◆</span> Prigel.
              </div>
              <p className={styles.footerTagline}>
                Associate Project Manager. Informatics Engineering at Universitas Brawijaya.
              </p>
              <div className={styles.footerSocials}>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  in
                </a>
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
                  gh
                </a>
              </div>
            </div>

            <div className={styles.footerCol}>
              <h4>Address</h4>
              <p>{portfolioData.contact.location}</p>
            </div>

            <div className={styles.footerCol}>
              <h4>Email Address</h4>
              <p>{portfolioData.contact.email}</p>
            </div>

            <div className={styles.footerCol}>
              <h4>Phone Number</h4>
              <p>{portfolioData.contact.phone}</p>
            </div>

            <div className={styles.footerCol}>
              <h4>About Us</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#about">Personal</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>All rights reserved © Prigel Kusumawardani</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
