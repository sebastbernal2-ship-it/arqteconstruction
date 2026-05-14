"use client";
export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(var(--space-16), 10vw, var(--space-24)) clamp(1.5rem, 5vw, 3rem)',
      }}
    >
      <div style={{
        maxWidth: 'var(--content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(var(--space-12), 8vw, var(--space-20))',
        alignItems: 'center',
      }} className="about-grid">

        {/* Left: image */}
        <div style={{ position: 'relative', paddingBottom: '24px', paddingRight: '24px' }}>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '4/5',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
              alt="ArTeq construction team at work"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            background: 'var(--charcoal)',
            color: '#fff',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6) var(--space-8)',
            boxShadow: 'var(--shadow-lg)',
            minWidth: '160px',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 'var(--space-1)' }}>15+</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.50)', textTransform: 'uppercase', letterSpacing: '0.09em' }}>Years Experience</div>
          </div>
        </div>

        {/* Right: copy */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--green)' }} />
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>About Us</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 'var(--space-6)',
            color: 'var(--text)',
          }}>
            Miami&apos;s Trusted<br />
            <span style={{ color: 'var(--green)' }}>General Contractor</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.78, marginBottom: 'var(--space-5)', fontSize: 'var(--text-base)' }}>
            ArTeq Construction is a Miami-based general contractor with over 15 years
            of experience across South Florida. We handle residential and commercial projects
            with equal precision &mdash; from a single-family home remodel to a full commercial build-out.
          </p>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.78, marginBottom: 'var(--space-8)', fontSize: 'var(--text-base)' }}>
            Every project gets a dedicated point of contact, transparent scheduling, and
            a team that shows up. We are licensed, fully insured, and Miami-Dade certified &mdash;
            because our clients&apos; investments deserve nothing less.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
            {['Licensed GC', 'Miami-Dade Certified', 'Fully Insured', 'Bonded'].map(item => (
              <span key={item} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: '0.4rem 1rem',
                background: 'var(--green-light)',
                color: 'var(--green-hover)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                letterSpacing: '0.04em',
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </span>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4)',
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--divider)',
          }}>
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 'var(--space-1)' }}>{s.value}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
