'use client';

import { useEffect, useRef, useState } from 'react';
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

function formatPeriod(period: string) {
  const parts = period.split('–').map((p) => p.trim());
  
  if (parts.length === 1) {
    const month = parts[0].match(/[a-zA-Z]+/)?.[0] ?? '';
    const year = parts[0].match(/\d{4}/)?.[0] ?? parts[0];
    return { startMonth: month, startYear: year, isRange: false };
  }

  const startMonth = parts[0].match(/[a-zA-Z]+/)?.[0] ?? '';
  const startYear = parts[0].match(/\d{4}/)?.[0] ?? '';
  
  const end = parts[1];
  if (/present/i.test(end)) {
    return { startMonth, startYear, endMonth: 'Now', endYear: '', isRange: true };
  }

  const endMonth = end.match(/[a-zA-Z]+/)?.[0] ?? '';
  const endYear = end.match(/\d{4}/)?.[0] ?? '';

  return { startMonth, startYear, endMonth, endYear, isRange: true };
}

const projectColors = [
  '#1e2535', '#1e1e2e', '#2a1e1e', '#1a2434', '#1a2a1e',
];

const pmTools = [
  { src: 'https://jira.atlassian.com/favicon.ico', alt: 'Jira' },
  { src: 'https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png', alt: 'GitLab' },
  { src: 'https://www.microsoft.com/favicon.ico', alt: 'Excel' },
  { src: 'https://www.notion.so/images/favicon.ico', alt: 'Notion' },
  { src: '/tool-logos/trello.png', alt: 'Trello' },
  { src: '/tool-logos/slack.png', alt: 'Slack' },
  { src: 'https://workspace.google.com/favicon.ico', alt: 'Google Workspace' },
];

const analysisTools = [
  { src: 'https://voyager.postman.com/logo/postman-logo-orange-stacked.svg', alt: 'Postman' },
  { src: 'https://www.drawio.com/favicon.ico', alt: 'Draw.io' },
  { src: '/tool-logos/lucidchart.png', alt: 'Lucidchart' },
  { src: '/tool-logos/confluence.png', alt: 'Confluence' },
  { src: '/tool-logos/sql.png', alt: 'SQL' },
  { src: '/tool-logos/notebooklm.svg', alt: 'NotebookLM' },
  { src: 'https://resources.bizagi.com/images/ico/favicon.ico', alt: 'Bizagi' },
];

const designTools = [
  { src: 'https://static.figma.com/app/icon/1/favicon.ico', alt: 'Figma' },
  { src: '/tool-logos/sketch.png', alt: 'Sketch' },
  { src: '/tool-logos/zeplin.png', alt: 'Zeplin' },
  { src: '/tool-logos/framer.png', alt: 'Framer' },
  { src: 'https://miro.com/favicon.ico', alt: 'Miro' },
  { src: '/tool-logos/maze.png', alt: 'Maze' },
  { src: '/tool-logos/stitch.png', alt: 'Stitch-AI' },
];

export default function Home() {
  const roles = ['Project Manager', 'Product Manager', 'System Analyst'];
  const [index, setIndex] = useState(0);
  const aboutText = `I work at the intersection of project delivery, system analysis, and user experience. ${portfolioData.summary}`;
  const [typedAbout, setTypedAbout] = useState('');
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const isTypingComplete = typedAbout.length >= aboutText.length;
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (hasStartedTyping) return;

    const node = aboutSectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasStartedTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStartedTyping]);

  useEffect(() => {
    if (!hasStartedTyping) return;

    let current = 0;
    const typingId = window.setInterval(() => {
      current += 1;
      setTypedAbout(aboutText.slice(0, current));
      if (current >= aboutText.length) {
        window.clearInterval(typingId);
      }
    }, 2);

    return () => window.clearInterval(typingId);
  }, [aboutText, hasStartedTyping]);

  const renderPeriod = (period: string) => {
    const { startMonth, startYear, endMonth, endYear, isRange } = formatPeriod(period);
    if (!isRange) {
      return (
        <div className={styles.yearItem}>
          <span className={styles.yearMonth}>{startMonth}</span>
          <span className={styles.yearValue}>{startYear}</span>
        </div>
      );
    }
    return (
      <div className={styles.yearRange}>
        <div className={styles.yearItem}>
          <span className={styles.yearMonth}>{startMonth}</span>
          <span className={styles.yearValue}>{startYear}</span>
        </div>
        <span className={styles.yearSeparator}>–</span>
        <div className={styles.yearItem}>
          <span className={styles.yearMonth}>{endMonth}</span>
          <span className={styles.yearValue}>{endYear}</span>
        </div>
      </div>
    );
  };

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
              <h1 className={styles.heroRole}><span className={styles.role} key={index}>{roles[index]}.</span></h1>
            </motion.div>

            <motion.p
              className={styles.heroDesc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
            >
              Bridging people, processes, and technology to deliver structured digital solutions that create real impact.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <a href="https://www.linkedin.com/in/prigel-kusumawardani/" className={styles.heroBtnPrimary}>
                Let&apos;s Connect <ArrowUpRight size={15} />
              </a>
              <a href="https://drive.google.com/file/d/1Be7oKqY4zKcl1FQ269vvowQ1R_CBweXZ/view" className={styles.heroBtnSecondary}>
                📄 Portfolio Deck
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
      <section ref={aboutSectionRef} className={styles.section} id="about">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className={styles.sectionLabel}>
            About Me
          </motion.div>

          <motion.div
            layout
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`${styles.aboutTop} ${styles.aboutTopExpanded}`}
          >
            <motion.h2 variants={fadeUp} className={styles.aboutHeading}>
              Building useful digital products is where strategy meets empathy.
            </motion.h2>
            <motion.div variants={fadeUp}>
              <div className={styles.aboutTypingWrap}>
                <p className={`${styles.aboutDesc} ${styles.aboutDescGhost}`} aria-hidden="true">
                  {aboutText}
                </p>
                <motion.p
                  className={`${styles.aboutDesc} ${styles.aboutDescTyped}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  {typedAbout}
                  {hasStartedTyping && !isTypingComplete && (
                    <span className={styles.typeCursor} aria-hidden="true">|</span>
                  )}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

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
                  Personal projects built during university across various domains.
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>+4</span>
                <span className={styles.statLabel}>
                  Real project experiences with cross-functional product and delivery teams.
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
            Core Strengths
          </motion.div>

          <div className={styles.servicesGrid}>
            <motion.div variants={fadeUp} className={styles.servicesLeft}>
              <h2 className={styles.servicesHeading}>
                What I do and how I contribute across product teams
              </h2>
              <p className={styles.servicesDesc}>
                A snapshot of the capabilities I apply in real project environments.
              </p>
              <a
                href="mailto:prigelkusumawardani@gmail.com"
                className={styles.signInBtn}
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.servicesCards}>
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`${styles.serviceCard} ${styles.serviceCardFeatured}`}
              >
                <div className={styles.cardBody}>
                  <h3>Project Management</h3>
                  <p>Leading end-to-end delivery of concurrent technology projects with a focus on Agile orchestration, stakeholder transparency, and operational excellence.</p>
                  
                  <motion.div 
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.cardHighlights}
                  >
                    {["Agile Leadership", "SDLC Governance", "Risk Assessment", "Stakeholder Management", "Synergy Alignment"].map((item, i) => (
                      <motion.span 
                        key={i}
                        variants={fadeUp}
                        whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                        className={styles.highlightItem}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.cardStats}
                  >
                    {[
                      { val: "~95%", label: "On-Time Delivery" },
                      { val: "30%", label: "Rework Reduction" },
                      { val: "4+", label: "Concurrent Projects" },
                      { val: "10+", label: "Technical Members" }
                    ].map((stat, i) => (
                      <motion.div key={i} variants={fadeUp} className={styles.statItem}>
                        <span className={styles.statValue}>{stat.val}</span>
                        <span className={styles.statDesc}>{stat.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className={styles.cardFocusCompact}>
                    <h4>Strategic Focus</h4>
                    <div className={styles.focusGrid}>
                      <span>SDLC Governance</span>
                      <span>Team Synergy</span>
                      <span>Risk Mitigation</span>
                      <span>Data Reporting</span>
                    </div>
                  </div>

                  <div className={styles.cardLogoRow}>
                    {pmTools.map((tool) => (
                      <div key={tool.alt} className={styles.toolIconWrapper}>
                        <motion.img 
                          src={tool.src} 
                          alt={tool.alt} 
                          className={styles.cardLogo} 
                          loading="lazy" 
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        />
                        <span className={styles.tooltip}>{tool.alt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="#experience" className={styles.cardArrow} aria-label="Go to experience section">
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={styles.serviceCard}
              >
                <div className={styles.cardBody}>
                  <h3>System Analysis</h3>
                  <p>Transforming complex, ambiguous requirements into precise technical blueprints and optimized system logic using AI-assisted analysis.</p>
                  <div className={styles.cardHighlights}>
                    {["BPMN", "UML Design", "Gap Analysis", "Flow Charts"].map((item, i) => (
                      <motion.span key={i} whileHover={{ scale: 1.05 }} className={styles.highlightItem}>{item}</motion.span>
                    ))}
                  </div>
                  <div className={styles.cardLogoRow}>
                    {analysisTools.map((tool) => (
                      <div key={tool.alt} className={styles.toolIconWrapper}>
                        <motion.img src={tool.src} alt={tool.alt} className={styles.cardLogo} loading="lazy" whileHover={{ scale: 1.2 }} />
                        <span className={styles.tooltip}>{tool.alt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="#experience" className={styles.cardArrow} aria-label="Go to experience section">
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={styles.serviceCard}
              >
                <div className={styles.cardBody}>
                  <h3>UI/UX Design</h3>
                  <p>Crafting human-centered digital experiences through rigorous research, design thinking, and high-fidelity interactive prototyping.</p>
                  <div className={styles.cardHighlights}>
                    {["User Research", "Prototyping", "Testing", "Wireframing"].map((item, i) => (
                      <motion.span key={i} whileHover={{ scale: 1.05 }} className={styles.highlightItem}>{item}</motion.span>
                    ))}
                  </div>
                  <div className={styles.cardLogoRow}>
                    {designTools.map((tool) => (
                      <div key={tool.alt} className={styles.toolIconWrapper}>
                        <motion.img key={tool.alt} src={tool.src} alt={tool.alt} className={styles.cardLogo} loading="lazy" whileHover={{ scale: 1.2 }} />
                        <span className={styles.tooltip}>{tool.alt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="#portfolio" className={styles.cardArrow} aria-label="Go to portfolio section">
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>
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
              A timeline of my academic and professional growth
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.expSubDesc}>
              From campus leadership to internship delivery, each role strengthened my product and execution skills.
            </motion.p>
          </div>

          <div className={styles.expList}>
            {portfolioData.experience.map((exp, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className={`${styles.expRow} ${expandedExp === i ? styles.expRowExpanded : ''}`}
                onClick={() => setExpandedExp(expandedExp === i ? null : i)}
              >
                <div className={styles.expInfo}>
                  <div className={styles.expMain}>
                    <div className={styles.expRoleGroup}>
                      <h3 className={styles.expRole}>{exp.role}</h3>
                      <div className={styles.expCompanyGroup}>
                        {('logo' in exp && exp.logo) && (
                          <img src={exp.logo as string} alt={exp.company} className={styles.expLogo} />
                        )}
                        <p className={styles.expCompany}>{exp.company}</p>
                      </div>
                    </div>
                    <div className={styles.expYearMobile}>{renderPeriod(exp.period)}</div>
                  </div>

                  <p className={styles.expShortDesc}>
                    {('description' in exp ? exp.description : undefined) ??
                      ('points' in exp && Array.isArray((exp as { points?: string[] }).points)
                        ? (exp as { points: string[] }).points[0]
                        : '')}
                  </p>

                  <motion.div 
                    initial={false}
                    animate={{ height: expandedExp === i ? 'auto' : 0, opacity: expandedExp === i ? 1 : 0 }}
                    className={styles.expDetails}
                  >
                    {expandedExp === i && (
                      <div className={styles.expDetailsContent}>
                        {('highlights' in exp && Array.isArray(exp.highlights)) ? (
                          <div className={styles.expHighlights}>
                            {(exp.highlights as any[]).map((h, idx) => (
                              <div key={idx} className={styles.highlightGroup}>
                                <h4>{h.title}</h4>
                                <ul>
                                  {h.points.map((p: string, pIdx: number) => (
                                    <li key={pIdx}>{p}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className={styles.expPoints}>
                            {('points' in exp && Array.isArray(exp.points)) && (
                              (exp.points as string[]).map((p, idx) => (
                                <li key={idx}>{p}</li>
                              ))
                            )}
                          </ul>
                        )}
                      </div>
                    )}
                  </motion.div>
                  
                  <div className={styles.expTrigger}>
                    <span>{expandedExp === i ? 'Show Less' : 'View Details'}</span>
                    <motion.div 
                      animate={{ rotate: expandedExp === i ? 180 : 0 }}
                      className={styles.expArrowIcon}
                    >
                      ↓
                    </motion.div>
                  </div>
                </div>
                <div className={styles.expYear}>
                  {(() => {
                    const { startMonth, startYear, endMonth, endYear, isRange } = formatPeriod(exp.period);
                    if (!isRange) {
                      return (
                        <div className={styles.yearItem}>
                          <span className={styles.yearMonth}>{startMonth}</span>
                          <span className={styles.yearValue}>{startYear}</span>
                        </div>
                      );
                    }
                    return (
                      <div className={styles.yearRange}>
                        <div className={styles.yearItem}>
                          <span className={styles.yearMonth}>{startMonth}</span>
                          <span className={styles.yearValue}>{startYear}</span>
                        </div>
                        <span className={styles.yearSeparator}>–</span>
                        <div className={styles.yearItem}>
                          <span className={styles.yearMonth}>{endMonth}</span>
                          <span className={styles.yearValue}>{endYear}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
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
              Selected projects I have designed and delivered
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.portfolioDesc}>
              Case highlights across system design, product thinking, and user experience.
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
            I enjoy turning ambiguous requirements into clear plans, then aligning teams to deliver
            meaningful outcomes. My approach combines structured analysis, practical execution,
            and user-centered design to keep both business goals and user needs in balance.
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
            Let&apos;s Build Something<br />Meaningful
          </motion.h2>
          <motion.a
            href="https://www.linkedin.com/in/prigel-kusumawardani/"
            className={styles.footerCtaBtn}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className={styles.footerCtaBtnArrow}>&rsaquo;&rsaquo;</span>
            Let&apos;s Collaborate
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
              <h4>Navigate</h4>
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
