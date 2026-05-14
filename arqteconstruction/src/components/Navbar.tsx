"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease',
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
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Image src="/logo.png" alt="ArTeq Construction" width={44} height={44} style={{ objectFit: 'contain' }} />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-lg)',
              letterSpacing: '-0.01em',
              color: 'var(--text)',
            }}>
              ArTeq
              <span style={{ color: 'var(--gold)', marginLeft: '2px' }}>.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: 'var(--text-muted)',
                letterSpacing: '0.01em',
                transition: 'color var(--transition)',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >{link.label}</a>
            ))}
            <a href="#contact" style={{
              padding: '0.6rem 1.5rem',
              background: 'var(--charcoal)',
              color: '#fff',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              borderRadius: 'var(--radius-md)',
              letterSpacing: '0.02em',
              transition: 'background var(--transition)',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--charcoal)'}
            >Get a Quote</a>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: 'var(--space-2)' }}
          >
            <span style={{ display:'block', width:'22px', height:'2px', background:'var(--text)', transition:'var(--transition)', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display:'block', width:'22px', height:'2px', background:'var(--text)', transition:'var(--transition)', opacity: open ? 0 : 1 }} />
            <span style={{ display:'block', width:'22px', height:'2px', background:'var(--text)', transition:'var(--transition)', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0,
          background: 'var(--surface)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--space-8) clamp(1.5rem, 4vw, 3rem)',
          gap: 'var(--space-6)',
          borderTop: '1px solid var(--border)',
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)' }}
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
              fontWeight: 500,
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
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
