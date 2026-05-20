'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import styles from './Projects.module.css';

const TAGS = ['All', 'E-Commerce', 'Web App', 'Portfolio'];


export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeTag === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeTag);

  return (
    <section className="section" id="projects" ref={sectionRef} aria-label="Projects portfolio">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">🚀 Portfolio</div>
          <h2 className="section-title font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of work that showcases our range — from sleek marketing sites to complex SaaS products.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filters} role="tablist" aria-label="Project categories">
          {TAGS.map((tag) => (
            <button
              key={tag}
              role="tab"
              aria-selected={activeTag === tag}
              id={`filter-${tag.replace(/\s/g, '-').toLowerCase()}`}
              className={`${styles.filterBtn} ${activeTag === tag ? styles.active : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              id={`project-${project.id}`}
              className={`${styles.card} ${project.featured ? styles.featured : ''} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              aria-label={`${project.title} - View Details`}
            >
              {/* Preview panel */}
              <div className={styles.preview} style={{ background: project.gradient }}>
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className={styles.projectImg} />
                ) : (
                  <span className={styles.previewEmoji} aria-hidden="true">{project.emoji}</span>
                )}
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
              </div>

              {/* Card body */}
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.category}>{project.category}</span>
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.techList}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <span className={styles.btnLive} id={`project-${project.id}-details`}>
                    View Details
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.moreCta}>
          <a href="#contact" className="btn btn-outline btn-lg" id="projects-more-btn">
            Want something like this? Let's build it
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
