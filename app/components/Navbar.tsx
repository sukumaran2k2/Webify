"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pathname = usePathname();

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setActiveLink(href);
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link
          href="/"
          className={styles.logo}
          aria-label="vibecods – Home"
          onClick={handleLogoClick}
        >
          <Image
            src="/VibecodsLogo.svg"
            alt="Vibecods Logo"
            width={180}
            height={46}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`${styles.link} ${activeLink === href ? styles.active : ""}`}
                onClick={(event) => handleNavClick(event, href)}
              >
                {label}
                <span className={styles.linkUnderline} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary" id="nav-hire-btn">
            Hire Us
          </a>

          {/* Mobile hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            id="nav-menu-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.mobileLink}
                onClick={(event) => handleNavClick(event, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={`btn btn-primary ${styles.mobileCta}`}
              onClick={() => setMenuOpen(false)}
            >
              Hire Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
