import styles from './Footer.module.css';
import Link from 'next/link';

const LINKS = {
  'Navigate': [
    { label: 'About',        href: '#about' },
    { label: 'Services',     href: '#services' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact',      href: '#contact' },
  ],
  'Services': [
    { label: 'Web Development',   href: '#services' },
    { label: 'UI/UX Design',      href: '#services' },
    { label: 'E-Commerce',        href: '#services' },
    { label: 'SEO Optimization',  href: '#services' },
    { label: 'API Development',   href: '#services' },
  ],
};

const SOCIALS = [
  { label: 'GitHub',   href: '#', icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  { label: 'LinkedIn', href: '#', icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: 'Twitter',  href: '#', icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: 'Dribbble', href: '#', icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.374 0 0 5.374 0 12c0 6.627 5.374 12 12 12s12-5.373 12-12c0-6.626-5.373-12-12-12zm7.969 5.918a10.02 10.02 0 0 1 2.343 5.539c-.343-.071-3.786-.769-7.249-.333-.103-.232-.198-.471-.304-.71-.28-.661-.594-1.322-.927-1.967 3.977-1.617 5.791-3.942 6.137-4.529zM12 2.014c2.706 0 5.183.999 7.067 2.641-.33.558-2.01 2.717-5.85 4.148-1.828-3.356-3.857-6.11-4.187-6.551C9.744 2.09 10.86 2.014 12 2.014zm-4.432.686c.324.426 2.321 3.186 4.171 6.483C7.28 10.298 3.406 10.22 2.98 10.22a10.051 10.051 0 0 1 4.588-7.52zm-5.545 9.319c0-.085.002-.17.003-.254.418.008 5.003.158 9.407-1.302.263.515.512 1.034.741 1.558-.126.035-.252.071-.376.111-4.562 1.477-6.982 5.513-7.188 5.882A10.021 10.021 0 0 1 2.023 12c0-.657.07-1.297.196-1.917-.066.001-.13.023-.196.023zm9.977 9.987a10.02 10.02 0 0 1-6.192-2.131c.168-.345 2.033-3.928 7.088-5.695.024-.009.047-.013.07-.023a35.87 35.87 0 0 1 1.817 6.451 9.985 9.985 0 0 1-2.783.398zm4.594-1.379a37.77 37.77 0 0 0-1.688-6.033c3.226-.519 6.063.33 6.426.44a10.034 10.034 0 0 1-4.738 5.593z"/></svg> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Top CTA bar */}
      <div className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={`font-display ${styles.ctaTitle}`}>
                Ready to launch your{' '}
                <span style={{textDecoration:'underline', textDecorationColor:'rgba(255,255,255,0.5)', textUnderlineOffset:'4px'}}>next project?</span>
              </h2>
              <p className={styles.ctaText}>Let's turn your idea into a world-class product.</p>
            </div>
            <a href="#contact" className={styles.ctaBtn} id="footer-cta-btn">
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <div className={styles.logoIcon} aria-hidden="true">W</div>
                <span className={styles.logoText}>web<span className={styles.logoAccent}>ify</span></span>
              </div>
              <p className={styles.tagline}>
                Building exceptional digital experiences for forward-thinking businesses.
              </p>
              <div className={styles.socials} role="list" aria-label="Social media links">
                {SOCIALS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.socialLink}
                    id={`footer-social-${label.toLowerCase()}`}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="listitem"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(LINKS).map(([group, items]) => (
              <div key={group} className={styles.linkGroup}>
                <h3 className={styles.groupTitle}>{group}</h3>
                <ul>
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className={styles.link}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {year} <strong>Webify</strong>. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.link} id="footer-privacy">Privacy Policy</a>
              <a href="#" className={styles.link} id="footer-terms">Terms of Service</a>
            </div>
            <p className={styles.madeWith}>
              Made with <span aria-label="love">❤️</span> & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
