'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedGraphic from './AnimatedGraphic';
import styles from './Hero.module.css';

const TYPED_WORDS = [
  'Vibe Coders',
  'AI-Powered Developers',
  'Digital Craftsmen',
  'Next-Gen Engineers',
];

export default function Hero() {
  const [wordIndex,   setWordIndex]   = useState(0);
  const [displayed,  setDisplayed]   = useState('');
  const [isDeleting, setIsDeleting]  = useState(false);
  const [isPaused,   setIsPaused]    = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const current = TYPED_WORDS[wordIndex];
    if (isPaused) {
      timeoutRef.current = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 1800);
      return;
    }
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, isPaused, wordIndex]);

  return (
    <section className={styles.hero} id="hero" aria-label="Hero section">
      <div className={styles.bgMesh} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Left – Text */}
        <div className={styles.textSide}>

          <h1 className={`font-display ${styles.heading}`}>
            We Are <span className={styles.highlight}>Vibe<span  className={`font-display ${styles.heading}`}>cods</span></span>
            <br />
            Crafting <span className="text-gradient">Interfaces</span>
            <br />
            That Wow
          </h1>

          <div className={styles.typeRow} aria-live="polite" aria-label={`Role: ${displayed}`}>
            <span className={styles.typePrefix}>We are</span>
            <span className={styles.typedText}>{displayed}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </div>

          <p className={styles.subtext}>
            We are a collective of next-gen developers specializing in <strong>AI-assisted Vibe Coding</strong>, <strong>React</strong>, and <strong>Next.js</strong>. We blend human creativity with artificial intelligence to turn ideas into pixel-perfect, performant web applications at unprecedented speeds.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#projects" className="btn btn-primary btn-lg" id="hero-view-work-btn">
              View Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#contact" className="btn btn-outline btn-lg" id="hero-contact-btn">
              Hire Us
            </a>
          </div>

          <div className={styles.stats}>
            {[
              { value: '10x', label: 'Faster Delivery' },
              { value: '100%', label: 'Vibe Match' },
              { value: 'AI', label: 'Powered Workflow' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statVal}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right – Visual */}
        <div className={styles.visualSide}>
          <div className={`section-tag ${styles.heroSectionTag}`}>
            <span className={styles.statusDot} aria-hidden="true" />
            Open to Opportunities
          </div>
          <div className={styles.avatarWrapper} aria-hidden="true">
            <div className={styles.avatarRing} />
            <div className={styles.avatarRing2} />
            <div className={styles.avatar}>
              <div className={styles.avatarInner}>
                <div className={styles.avatarSvgWrapper}>
                  <AnimatedGraphic />
                </div>
                <div className={styles.codeSnippet}>
                  <div className={styles.codeLine}><span style={{color:'#d97706'}}>const</span> <span style={{color:'#b45309'}}>agency</span> <span style={{color:'#9a3412'}}>=</span> <span style={{color:'#16a34a'}}>{'"Vibecods"'}</span>;</div>
                  <div className={styles.codeLine}><span style={{color:'#d97706'}}>const</span> <span style={{color:'#b45309'}}>workflow</span> <span style={{color:'#9a3412'}}>=</span> <span style={{color:'#16a34a'}}>{'"AI+Vibe"'}</span>;</div>
                  <div className={styles.codeLine}><span style={{color:'#7c3aed'}}>export</span> <span style={{color:'#2563eb'}}>default</span> <span style={{color:'#10b981'}}>BuildFast</span>;</div>
                </div>
              </div>
            </div>

            <div className={`${styles.badge} ${styles.badge1}`}>
              <span>🤖</span> AI Agents
            </div>
            <div className={`${styles.badge} ${styles.badge2}`}>
              <span>⚡</span> Vibe Coding
            </div>
            <div className={`${styles.badge} ${styles.badge3}`}>
              <span>🚀</span> Next.js
            </div>
            <div className={`${styles.badge} ${styles.badge4}`}>
              <span>🎨</span> Tailwind
            </div>
          </div>
        </div>
      </div>

      {/* <a href="#about" className={styles.scrollIndicator} aria-label="Scroll to About section">
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll</span>
      </a> */}
    </section>
  );
}
