"use client";
export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }} />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(14,12,10,0.85) 0%, rgba(14,12,10,0.40) 55%, rgba(14,12,10,0.15) 100%)',
      }} />

      {/*
        Transition out: the bottom of the hero fades from the dark overlay color
        (#0e0c0a at ~85% opacity) smoothly into the warm bg of the Services section
        which also starts dark. We dissolve the image itself by fading to the exact
        near-black (#0e0c0a) so there is no abrupt cut.
      */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '220px',
        background: 'linear-gradient(to bottom, transparent 0%, #0e0c0a 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Left accent line */}
      <div style={{
        position: 'absolute',
        left: 0, top: '18%', bottom: '18%',
        width: '3px',
        background: 'linear-gradient(to bottom, transparent, #2D5A3D, transparent)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: 'var(--content)',
        margin: '0 auto',
        padding: 'var(--space-24) clamp(1.5rem, 5vw, 3rem)',
        paddingTop: '120px',
        paddingBottom: 'calc(var(--space-24) + 60px)',
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
          <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--green)' }} />
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.60)' }}>Licensed General Contractor &middot; Miami, FL</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-3xl)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          marginBottom: 'var(--space-6)',
          maxWidth: '16ch',
        }}>
          Built to Last.<br />
          <span style={{ color: 'var(--green)', filter: 'brightness(1.6)' }}>Finished</span> on Time.
        </h1>

        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'rgba(255,255,255,0.70)',
          maxWidth: '50ch',
          lineHeight: 1.65,
          marginBottom: 'var(--space-10)',
          fontWeight: 300,
        }}>
          ArTeq Construction delivers precision craftsmanship across South Florida &mdash;
          from full commercial builds to custom glass and exterior envelopes.
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '0.875rem 2.25rem',
              background: 'var(--green)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
              borderRadius: 'var(--radius-md)',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              transition: 'background var(--transition), transform var(--transition)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--green-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'none'; }}
          >
            Request a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '0.875rem 2rem',
              color: 'rgba(255,255,255,0.75)',
              fontWeight: 500,
              fontSize: 'var(--text-sm)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255,255,255,0.28)',
              letterSpacing: '0.02em',
              transition: 'border-color var(--transition), color var(--transition)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
          >
            Our Services
          </a>
        </div>

        <div style={{
          display: 'flex', gap: 'var(--space-10)', flexWrap: 'wrap',
          marginTop: 'var(--space-16)',
          paddingTop: 'var(--space-8)',
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}>
          {[
            { value: '15+', label: 'Years in Business' },
            { value: '500+', label: 'Projects Completed' },
            { value: '100%', label: 'Licensed & Insured' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: '#ffffff', lineHeight: 1, marginBottom: 'var(--space-1)' }}>{stat.value}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.48)', textTransform: 'uppercase', letterSpacing: '0.09em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
