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
        height: '88px',
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.09)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      }}>
        <div style={{
          width: '100%',
          padding: '0 clamp(1.5rem, 4vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Brand: logo tight to title */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none', flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="ArTeq Construction logo"
              width={76}
              height={76}
              style={{ objectFit: 'contain', flexShrink: 0 }}
            />
            <Image
              src="/title.png"
              alt="ArTeq Construction"
              width={240}
              height={58}
              style={{ objectFit: 'contain', flexShrink: 0 }}
            />
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#3a3a3a',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 180ms ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3a3a3a')}
              >{link.label}</a>
            ))}
            <a href="#contact" style={{
              padding: '0.6rem 1.4rem',
              background: 'var(--charcoal)',
              color: '#fff',
              fontSize: '0.78rem',
              fontWeight: 700,
              borderRadius: '6px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'background 180ms ease',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
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
            style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3a3a3a', transition: '180ms ease', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3a3a3a', transition: '180ms ease', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3a3a3a', transition: '180ms ease', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '88px', left: 0, right: 0, bottom: 0,
          background: '#ffffff',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem clamp(1.5rem, 4vw, 3rem)',
          gap: '1.5rem',
          borderTop: '1px solid rgba(0,0,0,0.08)',
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}
            >{link.label}</a>
          ))}
          <a href="#contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: '1rem',
              padding: '1rem 2rem',
              background: 'var(--charcoal)',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '6px',
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
