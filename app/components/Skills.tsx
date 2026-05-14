'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Skills.module.css';

const SKILL_CATEGORIES = [
  {
    label: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React / Next.js',   level: 95, color: '#06b6d4' },
      { name: 'TypeScript',        level: 90, color: '#6366f1' },
      { name: 'CSS / Animations',  level: 88, color: '#8b5cf6' },
      { name: 'HTML5 / Semantics', level: 96, color: '#f59e0b' },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 87, color: '#22c55e' },
      { name: 'REST & GraphQL',    level: 85, color: '#06b6d4' },
      { name: 'PostgreSQL',        level: 82, color: '#6366f1' },
      { name: 'MongoDB',           level: 80, color: '#f59e0b' },
    ],
  },
  {
    label: 'Tools & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Git / GitHub',      level: 95, color: '#f43f5e' },
      { name: 'Docker',            level: 78, color: '#06b6d4' },
      { name: 'Vercel / AWS',      level: 83, color: '#8b5cf6' },
      { name: 'Figma',             level: 88, color: '#ec4899' },
    ],
  },
];

const TOOLS = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Docker', 'AWS', 'Figma', 'Git', 'Tailwind', 'Prisma', 'Redis'];

function SkillBar({ name, level, color, visible }: { name: string; level: number; color: string; visible: boolean }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel} style={{ color }}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={styles.skillFill}
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            boxShadow: visible ? `0 0 10px ${color}55` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.skills}`} id="skills" ref={sectionRef} aria-label="Skills">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">💡 My Toolkit</div>
          <h2 className="section-title font-display">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A continuously evolving skill set built through real-world projects and constant learning.
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {SKILL_CATEGORIES.map(({ label, icon, skills }) => (
            <div key={label} className={`${styles.categoryCard} ${visible ? styles.visible : ''}`}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon} role="img" aria-hidden="true">{icon}</span>
                <h3 className={styles.categoryLabel}>{label}</h3>
              </div>
              <div className={styles.skillsList}>
                {skills.map((s) => (
                  <SkillBar key={s.name} {...s} visible={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools marquee */}
        <div className={styles.toolsSection} aria-label="Technologies used">
          <p className={styles.toolsHeading}>Also working with</p>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marquee}>
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <span key={`${t}-${i}`} className={styles.toolChip}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
