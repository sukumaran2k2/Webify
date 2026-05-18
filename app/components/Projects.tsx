'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Projects.module.css';

const TAGS = ['All', 'E-Commerce', 'Web App', 'Portfolio'];

const PROJECTS = [
  {
    id: 'luke-fashion',
    title: 'Luke Fashion',
    category: 'E-Commerce',
    desc: 'A fully responsive e-commerce frontend with product listings, cart management, and state managed via Redux. Built with TypeScript for type safety across every component.',
    tech: ['React.js', 'Redux', 'TypeScript', 'CSS Modules'],
    emoji: '👗',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'Urban Nest',
    title: 'Urban Nest',
    category: 'Web App',
    desc: 'A real estate platform for buying, selling, and renting properties. Features advanced search filters, property listings, and a modern, responsive interface.',
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'LocalStorage'],
    emoji: '🏠',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: 'https://real-estate-landing-page-peach.vercel.app/',
    github: 'https://github.com/sukus-dev/Urban-Nest',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    category: 'Web App',
    desc: 'Real-time weather application using the OpenWeatherMap API and browser Geolocation. Displays temperature, humidity, wind speed, and a 5-day forecast with dynamic icons.',
    tech: ['React.js', 'OpenWeatherMap API', 'Geolocation', 'CSS3'],
    emoji: '🌤️',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 'webify',
    title: 'Webify – This Site',
    category: 'Portfolio',
    desc: 'My personal freelancer portfolio — built with Next.js 16, React 19, and TypeScript using App Router. Features animations, SEO metadata, a contact form, and a white + yellow design system.',
    tech: ['Next.js 16', 'TypeScript', 'CSS Modules', 'React 19'],
    emoji: '🌐',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #92400e 100%)',
    link: '/',
    github: '#',
    featured: false,
  },
];


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
            A selection of work that showcases my range — from sleek marketing sites to complex SaaS products.
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
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`${styles.card} ${project.featured ? styles.featured : ''} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              aria-label={project.title}
            >
              {/* Preview panel */}
              <div className={styles.preview} style={{ background: project.gradient }}>
                <span className={styles.previewEmoji} aria-hidden="true">{project.emoji}</span>
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
                  <a href={project.link} className={styles.btnLive} id={`project-${project.id}-live`} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <a href={project.github} className={styles.btnGithub} id={`project-${project.id}-github`} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Code
                  </a>
                </div>
              </div>
            </article>
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
