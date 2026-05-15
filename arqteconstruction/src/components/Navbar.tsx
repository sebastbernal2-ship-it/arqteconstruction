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
        background: 'var(--charcoal)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
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
          {/* Logo + title image */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            {/* White circle behind logo so it pops off the dark bar */}
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              padding: '4px',
            }}>
              <Image
                src="/logo.png"
                alt="ArTeq Construction logo"
                width={60}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <Image
              src="/title.png"
              alt="ArTeq Construction"
              width={220}
              height={52}
              style={{ objectFit: 'contain', flexShrink: 0 }}
            />
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'color var(--transition)',
                textDecoration: 'none',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >{link.label}</a>
            ))}
            <a href="#contact" style={{
              padding: '0.6rem 1.5rem',
              background: 'var(--green)',
              color: '#fff',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              borderRadius: 'var(--radius-md)',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              transition: 'background var(--transition)',
              textDecoration: 'none',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1e3d2a')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--green)')}
            >Get a Quote</a>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: 'var(--space-2)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'var(--transition)', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'var(--transition)', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'var(--transition)', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '88px', left: 0, right: 0, bottom: 0,
          background: 'var(--charcoal)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--space-8) clamp(1.5rem, 4vw, 3rem)',
          gap: 'var(--space-6)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', textDecoration: 'none' }}
            >{link.label}</a>
          ))}
          <a href="#contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 'var(--space-4)',
              padding: '1rem 2rem',
              background: 'var(--green)',
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
