"use client";

import { useRef, useEffect } from "react";
import styles from "./About.module.css";

const HIGHLIGHTS = [
  {
    emoji: "🤖",
    title: "AI-Powered Workflow",
    desc: "Leveraging cutting-edge AI tools to write code faster, smarter, and with fewer bugs.",
  },
  {
    emoji: "⚡",
    title: "Vibe Coding",
    desc: "We don't post just build software; we orchestrate AI to craft digital experiences that feel right.",
  },
  {
    emoji: "✨",
    title: "Modern Stack",
    desc: "Next.js, React, and TypeScript for blazing fast, SEO-optimized, and scalable web apps.",
  },
  {
    emoji: "🚀",
    title: "Rapid Delivery",
    desc: "Transforming your ideas into production-ready products at unprecedented speeds.",
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
      aria-label="About us"
    >
      <div className="container">
        <div className={styles.grid}>
          {/* Left – Experience Card */}
          <div className={styles.leftSide}>
            <div
              className={`${styles.experienceCard} ${styles.animItem} ${styles.animItem1}`}
            >
              <div className={styles.expBig}>✦</div>
              <div className={styles.expLabel}>The Vibecods Edge</div>
              <div className={styles.expDivider} />
              <div className={styles.expCompany}>
                <strong>Next-Gen Development</strong>
                <span>Powered by AI</span>
                <span className={styles.expDate}>Future-Proof</span>
              </div>
              <div className={styles.expDivider} />
              <div className={styles.expTechStack}>
                {[
                  "AI Automation",
                  "Next.js",
                  "TypeScript",
                  "Vibe Coding",
                  "Modern UI",
                  "Scale",
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
              <div className="section-tag">👋 Who We Are</div>
              <h2 className="section-title font-display">
                Welcome to the Future of
                <br />
                <span className="text-gradient">Vibe Coding</span>
              </h2>
              <p className={styles.bio}>
                At <strong>Vibecods</strong>, we aren&apos;t your typical developers. We are a modern collective focused on <strong>vibe coding</strong>—a philosophy where we blend human creativity with the immense power of <strong>modern AI tools</strong>.
              </p>
              <p className={styles.bio}>
                We ditch the outdated, slow paradigms of traditional development. By leveraging advanced AI assistants, intelligent code generation, and a modern tech stack, we build stunning web applications faster, smarter, and with a distinct vibe that stands out from the crowd.
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
                Start a Project
              </a>
              <a
                href="#projects"
                className="btn btn-outline"
                id="about-projects-btn"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
