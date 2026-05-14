'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, BrightScale',
    avatar: 'SM',
    color: '#6366f1',
    rating: 5,
    text: 'Working with Webify was a game-changer. They delivered our SaaS platform ahead of schedule with exceptional quality. The code is clean, scalable, and the UI is absolutely stunning.',
  },
  {
    id: 2,
    name: 'James Hartley',
    role: 'Founder, EcoMart',
    avatar: 'JH',
    color: '#22c55e',
    rating: 5,
    text: 'Our e-commerce conversion rate jumped 40% after the redesign. Webify understood our brand perfectly and built exactly what we envisioned — and more. Highly recommend!',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'CTO, FinNext',
    avatar: 'PS',
    color: '#06b6d4',
    rating: 5,
    text: 'Exceptional technical expertise. The API architecture is rock-solid and the documentation is thorough. Communication was perfect throughout the project.',
  },
  {
    id: 4,
    name: 'Alex Torres',
    role: 'Marketing Director, LaunchPad',
    avatar: 'AT',
    color: '#f59e0b',
    rating: 5,
    text: 'The landing page Webify built increased our lead capture by 60%. Blazing fast performance, beautiful animations, and on-point SEO. A true professional!',
  },
  {
    id: 5,
    name: 'Lisa Chen',
    role: 'Product Manager, Streamline',
    avatar: 'LC',
    color: '#ec4899',
    rating: 5,
    text: 'Webify turned our complex requirements into an elegant, intuitive dashboard. The attention to detail is remarkable. We\'ll definitely be working together again.',
  },
  {
    id: 6,
    name: 'Marcus Green',
    role: 'Solo Founder, DevBoard',
    avatar: 'MG',
    color: '#8b5cf6',
    rating: 5,
    text: 'As a first-time founder, I needed someone who could handle everything. Webify built my entire MVP in 3 weeks. The product looks and works phenomenally.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 350 : -350, behavior: 'smooth' });
  };

  return (
    <section className={`section ${styles.testimonials}`} id="testimonials" aria-label="Client testimonials">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">❤️ Testimonials</div>
          <h2 className="section-title font-display">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="section-subtitle">
            Don't take my word for it — hear from the clients who trusted Webify with their vision.
          </p>
        </div>

        <div className={styles.trackWrapper}>
          {/* Scroll buttons */}
          <button
            className={`${styles.scrollBtn} ${styles.scrollLeft} ${!canScrollLeft ? styles.disabled : ''}`}
            onClick={() => scroll('left')}
            aria-label="Scroll testimonials left"
            id="testimonials-scroll-left"
            disabled={!canScrollLeft}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className={styles.track} ref={scrollRef}>
            {TESTIMONIALS.map(({ id, name, role, avatar, color, rating, text }) => (
              <article
                key={id}
                id={`testimonial-${id}`}
                className={styles.card}
                aria-label={`Testimonial from ${name}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.avatarWrap}>
                    <div className={styles.avatar} style={{ background: `${color}22`, borderColor: `${color}44`, color }}>
                      {avatar}
                    </div>
                    <div className={styles.quoteIcon} aria-hidden="true">"</div>
                  </div>
                  <Stars count={rating} />
                </div>
                <blockquote className={styles.text}>"{text}"</blockquote>
                <div className={styles.client}>
                  <div className={styles.clientName}>{name}</div>
                  <div className={styles.clientRole}>{role}</div>
                </div>
              </article>
            ))}
          </div>

          <button
            className={`${styles.scrollBtn} ${styles.scrollRight} ${!canScrollRight ? styles.disabled : ''}`}
            onClick={() => scroll('right')}
            aria-label="Scroll testimonials right"
            id="testimonials-scroll-right"
            disabled={!canScrollRight}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* Rating summary */}
        <div className={styles.ratingBar}>
          <div className={styles.ratingNum}>5.0</div>
          <Stars count={5} />
          <div className={styles.ratingLabel}>Average rating from 30+ clients</div>
        </div>
      </div>
    </section>
  );
}
