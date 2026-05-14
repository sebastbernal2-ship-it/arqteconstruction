"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: 'var(--charcoal-2)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: 'var(--space-12) clamp(1.5rem, 5vw, 3rem)',
    }}>
      <div style={{
        maxWidth: 'var(--content)',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 'var(--space-10)',
          marginBottom: 'var(--space-10)',
          paddingBottom: 'var(--space-10)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'var(--text-lg)',
              letterSpacing: '-0.01em',
              color: '#fff',
              marginBottom: 'var(--space-3)',
            }}>
              ArTeq<span style={{ color: 'var(--gold)' }}>.</span>
            </div>
            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'rgba(255,255,255,0.38)',
              lineHeight: 1.7,
              maxWidth: '30ch',
              marginBottom: 'var(--space-5)',
            }}>
              Licensed general contractor delivering precision construction across Miami and South Florida.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexDirection: 'column' }}>
              <a href="tel:7863259406"
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.45)', transition: 'color var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.44"/></svg>
                (786) 325-9406
              </a>
              <a href="mailto:lorta@arqteconstruction.com"
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.45)', transition: 'color var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
                lorta@arqteconstruction.com
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.38)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Miami, FL
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 'var(--space-4)' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {['New Construction', 'Remodeling', 'Exterior Envelope', 'Windows & Doors', 'Interior Glass', 'Maintenance'].map(s => (
                <li key={s}>
                  <a href="#services"
                    style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.38)', transition: 'color var(--transition)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 'var(--space-4)' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[['About', '#about'], ['Services', '#services'], ['Get a Quote', '#contact']].map(([label, href]) => (
                <li key={href}>
                  <a href={href}
                    style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.38)', transition: 'color var(--transition)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
        }}>
          <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.25)' }}>© {year} ArTeq Construction LLC. All rights reserved.</p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.25)' }}>Licensed General Contractor · Miami-Dade County</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
