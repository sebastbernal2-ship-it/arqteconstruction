"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(1.5rem, 5vw, 3rem)",
          background: scrolled
            ? "rgba(13,13,13,0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          transition: "background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="ArTeq Construction"
            width={48}
            height={48}
            style={{ objectFit: "contain" }}
            priority
          />
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "var(--text-lg)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}>
            <span style={{ color: "var(--red)" }}>Ar</span>
            <span style={{ color: "var(--text)" }}>T</span>
            <span style={{ color: "var(--green)" }}>eq</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
          <ul style={{ display: "flex", gap: "var(--space-8)", listStyle: "none", margin: 0, padding: 0 }}
            className="desktop-nav"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "color var(--transition)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="desktop-nav"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              background: "var(--red)",
              color: "#fff",
              borderRadius: "var(--radius-md)",
              letterSpacing: "0.02em",
              transition: "background var(--transition)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--red-dark)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--red)")}
          >
            Get a Quote
          </a>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "var(--space-2)",
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text)",
                borderRadius: "2px",
                transition: "transform 200ms ease, opacity 200ms ease",
                transform:
                  menuOpen && i === 0 ? "translateY(7px) rotate(45deg)" :
                  menuOpen && i === 1 ? "scaleX(0)" :
                  menuOpen && i === 2 ? "translateY(-7px) rotate(-45deg)" :
                  "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "72px",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(13,13,13,0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          padding: "var(--space-6) clamp(1.5rem, 5vw, 3rem)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: 600,
                color: "var(--text)",
                padding: "var(--space-2) 0",
                borderBottom: "1px solid var(--divider)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "var(--space-2)",
              fontSize: "var(--text-base)",
              fontWeight: 600,
              padding: "0.75rem 1.5rem",
              background: "var(--red)",
              color: "#fff",
              borderRadius: "var(--radius-md)",
              textAlign: "center",
            }}
          >
            Get a Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
