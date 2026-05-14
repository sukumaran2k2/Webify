'use client';

import { useRef, useEffect } from 'react';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'web-dev',
    icon: '💻',
    title: 'Web Development',
    desc: 'Full-stack web apps built with Next.js, React, and Node.js. Fast, scalable, and production-ready.',
    features: ['Next.js / React', 'REST & GraphQL APIs', 'PostgreSQL / MongoDB', 'CI/CD Pipeline'],
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))',
    color: '#6366f1',
  },
  {
    id: 'ui-ux',
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Pixel-perfect interfaces that delight users. From wireframes to interactive prototypes.',
    features: ['Figma Design', 'Design Systems', 'Responsive Layouts', 'Motion Design'],
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(14,165,233,0.08))',
    color: '#06b6d4',
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-Commerce',
    desc: 'High-converting e-commerce stores with seamless checkout, inventory management, and analytics.',
    features: ['Shopify / WooCommerce', 'Payment Gateways', 'Cart & Checkout', 'SEO Optimized'],
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.08))',
    color: '#22c55e',
  },
  {
    id: 'seo',
    icon: '🔍',
    title: 'SEO Optimization',
    desc: 'Boost your search rankings with technical SEO, Core Web Vitals optimization, and content strategy.',
    features: ['Core Web Vitals', 'Schema Markup', 'Meta Optimization', 'Site Speed'],
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(251,146,60,0.08))',
    color: '#f59e0b',
  },
  {
    id: 'api',
    icon: '🔌',
    title: 'API Development',
    desc: 'Robust REST and GraphQL APIs with authentication, rate limiting, and comprehensive documentation.',
    features: ['REST & GraphQL', 'JWT Auth', 'Rate Limiting', 'API Docs'],
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(244,63,94,0.08))',
    color: '#ec4899',
  },
  {
    id: 'maintenance',
    icon: '🛡️',
    title: 'Maintenance & Support',
    desc: 'Ongoing care for your product – updates, bug fixes, monitoring, and performance improvements.',
    features: ['24/7 Monitoring', 'Security Patches', 'Performance Tuning', 'Regular Updates'],
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(167,139,250,0.08))',
    color: '#8b5cf6',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.05 }
    );
    const cards = sectionRef.current?.querySelectorAll('[data-card]');
    cards?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="services" ref={sectionRef} aria-label="Services">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">🛠️ What I Do</div>
          <h2 className="section-title font-display">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital services tailored to grow your business and
            bring your vision to life.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(({ id, icon, title, desc, features, gradient, color }, i) => (
            <article
              key={id}
              id={`service-${id}`}
              className={styles.card}
              data-card
              style={{ transitionDelay: `${i * 0.08}s` }}
              aria-label={title}
            >
              <div className={styles.cardBg} style={{ background: gradient }} />
              <div className={styles.iconWrap} style={{ color, borderColor: `${color}30`, background: `${color}18` }}>
                <span role="img" aria-hidden="true">{icon}</span>
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
              <ul className={styles.features}>
                {features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureDot} style={{ background: color }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <a href="#contact" className={styles.learnMore} style={{'--accent': color} as React.CSSProperties}>
                  Get Started →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
