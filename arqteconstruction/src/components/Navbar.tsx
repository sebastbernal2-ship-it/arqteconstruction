"use client";
import { useState } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: '96px',
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}>
        <div style={{
          maxWidth: 'var(--content)',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 4vw, 3rem)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Brand: logo + title image */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <Image
              src="/logo.png"
              alt="ArTeq Construction logo"
              width={80}
              height={80}
              style={{ objectFit: 'contain', flexShrink: 0 }}
            />
            <Image
              src="/title.png"
              alt="ArTeq Construction"
              width={260}
              height={62}
              style={{ objectFit: 'contain', flexShrink: 0 }}
            />
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: '#3a3a3a',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'color var(--transition)',
                textDecoration: 'none',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3a3a3a')}
              >{link.label}</a>
            ))}
            <a href="#contact" style={{
              padding: '0.65rem 1.6rem',
              background: 'var(--charcoal)',
              color: '#fff',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              borderRadius: 'var(--radius-md)',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              transition: 'background var(--transition)',
              textDecoration: 'none',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--green)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--charcoal)')}
            >Get a Quote</a>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: 'var(--space-2)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3a3a3a', transition: 'var(--transition)', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3a3a3a', transition: 'var(--transition)', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3a3a3a', transition: 'var(--transition)', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '96px', left: 0, right: 0, bottom: 0,
          background: '#ffffff',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--space-8) clamp(1.5rem, 4vw, 3rem)',
          gap: 'var(--space-6)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}
            >{link.label}</a>
          ))}
          <a href="#contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 'var(--space-4)',
              padding: '1rem 2rem',
              background: 'var(--charcoal)',
              color: '#fff',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >Get a Quote</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
