'use client';

import { useState, useRef } from 'react';
import styles from './Contact.module.css';

const SERVICES_OPTIONS = [
  'Web Development',
  'UI/UX Design',
  'E-Commerce',
  'SEO Optimization',
  'API Development',
  'Maintenance & Support',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("sent");

      formRef.current?.reset();

      setForm({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const CONTACT_ITEMS = [
    { icon: '📧', label: 'Email',    value: 'vibecods@vibecods.com',    href: 'mailto:vibecods@vibecods.com' },
    { icon: '💬', label: 'Telegram', value: '@vibecods',          href: 'https://t.me/webifydev' },
    { icon: '🌐', label: 'LinkedIn', value: 'linkedin.com/in/vibecods', href: '#' },
  ];

  return (
    <section className="section" id="contact" aria-label="Contact form">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">📩 Get In Touch</div>
          <h2 className="section-title font-display">
            Let's Build Something <span className="text-gradient">Great</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? I'm currently available for freelance work. Let's make it happen.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left – Info */}
          <aside className={styles.infoSide} aria-label="Contact information">
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Ready to start?</h3>
              <p className={styles.infoText}>
                I typically respond within <strong>24 hours</strong>. Tell me about your project
                and let's figure out how I can help.
              </p>

              <div className={styles.contactItems}>
                {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                  <a key={label} href={href} className={styles.contactItem} id={`contact-${label.toLowerCase()}`}>
                    <div className={styles.contactIcon}>{icon}</div>
                    <div>
                      <div className={styles.contactLabel}>{label}</div>
                      <div className={styles.contactValue}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.availability}>
                <div className={styles.availDot} aria-hidden="true" />
                <span>Available for new projects</span>
              </div>
            </div>
          </aside>

          {/* Right – Form */}
          <div className={styles.formSide}>
            {status === 'sent' ? (
              <div className={styles.successMsg} role="alert">
                <div className={styles.successIcon}>🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')} id="contact-send-another">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                className={styles.form}
                onSubmit={handleSubmit}
                aria-label="Contact form"
                noValidate
              >
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={styles.label}>Your Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email" className={styles.label}>Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-service" className={styles.label}>Service Needed</label>
                    <select
                      id="contact-service"
                      name="service"
                      className={styles.input}
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-budget" className={styles.label}>Budget Range</label>
                    <select
                      id="contact-budget"
                      name="budget"
                      className={styles.input}
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget…</option>
                      <option value="<1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 – $5,000</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>Project Details *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell me about your project — goals, timeline, and any key requirements…"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                  id="contact-submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className={styles.sendingDots} aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
