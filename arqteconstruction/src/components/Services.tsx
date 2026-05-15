"use client";
const SERVICES = [
  { id: 'new-construction', title: 'New Construction', description: 'Ground-up residential and commercial builds, delivered on schedule with full permit management.' },
  { id: 'remodeling', title: 'Remodeling', description: 'Kitchens, bathrooms, full gut renovations transformed to your exact specifications.' },
  { id: 'exterior-envelope', title: 'Exterior Envelope', description: 'Impact-rated facades, cladding systems, and waterproofing built for South Florida climate.' },
  { id: 'windows-doors', title: 'Windows, Doors & Railings', description: 'Miami-Dade certified impact windows, custom doors, and architectural aluminum railings.' },
  { id: 'interior-glass', title: 'Interior Glass', description: 'Frameless shower enclosures, glass partitions, railings, and mirrors cut and installed precisely.' },
  { id: 'service-maintenance', title: 'Service & Maintenance', description: 'Scheduled maintenance, warranty repairs, and emergency response year-round.' },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '680px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        /* The section itself sits on a dark base so the top/bottom fades
           blend naturally with both the hero above and About below */
        background: '#0e0c0a',
      }}
    >
      {/* Background photo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Dark overlay for text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,9,8,0.50) 0%, rgba(10,9,8,0.75) 60%, rgba(10,9,8,0.92) 100%)',
      }} />

      {/*
        Top transition: Hero ends at solid #0e0c0a. Services background is #0e0c0a.
        Fade the photo IN from that same dark so it emerges seamlessly — no seam at all.
      */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '200px',
        background: 'linear-gradient(to bottom, #0e0c0a 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      {/*
        Bottom transition: Services dark (#0a0908 at 92%) → About warm bg (#f5f3ef).
        We fade the section's own background to the About color over a tall band.
      */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '200px',
        background: 'linear-gradient(to bottom, transparent 0%, #f5f3ef 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 3,
        width: '100%',
        maxWidth: 'var(--content)',
        margin: '0 auto',
        padding: 'var(--space-24) clamp(1.5rem, 5vw, 3rem)',
        /* Extra top padding so content clears the top fade */
        paddingTop: 'calc(var(--space-24) + 60px)',
        /* Extra bottom padding so content clears the bottom fade */
        paddingBottom: 'calc(var(--space-24) + 80px)',
      }}>
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--green)', filter: 'brightness(1.8)' }} />
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>What We Build</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>Our Services</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px,100%), 1fr))',
          gap: 'var(--space-3)',
        }} className="services-grid">
          {SERVICES.map(service => (
            <div
              key={service.id}
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.11)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-6)',
                transition: 'background var(--transition), border-color var(--transition), transform var(--transition)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(45,90,61,0.65)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.11)';
                (e.currentTarget as HTMLDivElement).style.transform = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--green)', filter: 'brightness(1.8)', flexShrink: 0 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>{service.title}</h3>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, paddingLeft: 'calc(18px + var(--space-3))' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
