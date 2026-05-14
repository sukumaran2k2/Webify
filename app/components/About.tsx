"use client";

import { useRef, useEffect } from "react";
import styles from "./About.module.css";

const HIGHLIGHTS = [
  {
    emoji: "🎯",
    title: "Detail-Oriented",
    desc: "Pixel-perfect UIs with clean, maintainable code and a strong eye for design.",
  },
  {
    emoji: "⚡",
    title: "Fast Learner",
    desc: "Adapted Agile workflows and real-world team practices during my internship.",
  },
  {
    emoji: "🔒",
    title: "Clean Code",
    desc: "TypeScript-first development with reusable component patterns and best practices.",
  },
  {
    emoji: "🌐",
    title: "Frontend Focus",
    desc: "React, Next.js, Redux, and REST APIs — building the full client-side experience.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section ${styles.about}`}
      id="about"
      ref={sectionRef}
      aria-label="About me"
    >
      <div className="container">
        <div className={styles.grid}>
          {/* Left – Experience Card */}
          <div className={styles.leftSide}>
            <div
              className={`${styles.experienceCard} ${styles.animItem} ${styles.animItem1}`}
            >
              <div className={styles.expBig}>✦</div>
              <div className={styles.expLabel}>Internship Experience</div>
              <div className={styles.expDivider} />
              <div className={styles.expCompany}>
                <strong>Web Developer Intern</strong>
                <span>Floretta India</span>
                <span className={styles.expDate}>Oct 2025 – Jan 2026</span>
              </div>
              <div className={styles.expDivider} />
              <div className={styles.expTechStack}>
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Redux",
                  "Tailwind",
                  "Git",
                ].map((t) => (
                  <span key={t} className={styles.techPill}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.glowCircle} aria-hidden="true" />
          </div>

          {/* Right – Content */}
          <div className={styles.rightSide}>
            <div
              className={`${styles.fadeUp} ${styles.animItem} ${styles.animItem2}`}
            >
              <div className="section-tag">👋 About Me</div>
              <h2 className="section-title font-display">
                Turning Code Into
                <br />
                <span className="text-gradient">Real Products</span>
              </h2>
              <p className={styles.bio}>
                Hey! I'm <strong>Sukumaran</strong>, a passionate fullStack
                developer with a <strong>B.Sc in Computer Science</strong> and
                an <strong>MBA</strong>. I specialise in building modern web
                applications using <strong>React</strong>,{" "}
                <strong>Next.js</strong>, <strong>TypeScript</strong> ,
                <strong>Node.js</strong>, <strong>Express.js</strong> and{" "}
                <strong>MongoDB</strong>.
              </p>
              <p className={styles.bio}>
                During my internship at <strong>Floretta India</strong>, I built
                pixel-perfect UIs, contributed to modular component libraries,
                and worked within an Agile team — giving me real-world
                experience beyond tutorials and courses.
              </p>
            </div>

            <div
              className={`${styles.highlights} ${styles.animItem} ${styles.animItem3}`}
            >
              {HIGHLIGHTS.map(({ emoji, title, desc }) => (
                <div key={title} className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>{emoji}</div>
                  <div>
                    <h3 className={styles.highlightTitle}>{title}</h3>
                    <p className={styles.highlightDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`${styles.ctaRow} ${styles.animItem} ${styles.animItem4}`}
            >
              <a
                href="#contact"
                className="btn btn-primary"
                id="about-hire-btn"
              >
                Hire Me Now
              </a>
              <a
                href="/Sukumaran-Resume.pdf"
                className="btn btn-outline"
                id="about-resume-btn"
                download="Sukumaran-Resume.pdf"
              >
                Download CV
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
