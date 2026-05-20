'use client';

import { useRef, useEffect, type CSSProperties } from 'react';
import Link from 'next/link';
import styles from './Services.module.css';
import { SERVICES } from '@/lib/data';

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
          <div className="section-tag">🛠️ What We Do</div>
          <h2 className="section-title font-display">
            Services We <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital services tailored to grow your business and
            bring your vision to life.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(({ id, icon, title, desc, features, gradient, color }, i) => (
            <Link
              key={id}
              href={`/services/${id}`}
              id={`service-${id}`}
              className={styles.card}
              data-card
              style={{ transitionDelay: `${i * 0.08}s` }}
              aria-label={`View details for ${title}`}
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
                <span className={styles.learnMore} style={{ '--accent': color } as CSSProperties}>
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
