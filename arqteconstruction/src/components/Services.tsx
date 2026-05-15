"use client";
const SERVICES = [
  {
    id: 'new-construction',
    title: 'New Construction',
    description: 'Ground-up residential and commercial builds, delivered on schedule with full permit management.',
  },
  {
    id: 'remodeling',
    title: 'Remodeling',
    description: 'Kitchens, bathrooms, full gut renovations transformed to your exact specifications.',
  },
  {
    id: 'exterior-envelope',
    title: 'Exterior Envelope',
    description: 'Impact-rated facades, cladding systems, and waterproofing built for South Florida climate.',
  },
  {
    id: 'windows-doors',
    title: 'Windows, Doors & Railings',
    description: 'Miami-Dade certified impact windows, custom doors, and architectural aluminum railings.',
  },
  {
    id: 'interior-glass',
    title: 'Interior Glass',
    description: 'Frameless shower enclosures, glass partitions, railings, and mirrors cut and installed precisely.',
  },
  {
    id: 'service-maintenance',
    title: 'Service & Maintenance',
    description: 'Scheduled maintenance, warranty repairs, and emergency response year-round.',
  },
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
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,9,8,0.45) 0%, rgba(10,9,8,0.72) 60%, rgba(10,9,8,0.90) 100%)',
      }} />

      {/* Top fade: white (from hero/about) → transparent so image shows */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '140px',
        background: 'linear-gradient(to bottom, #f7f6f2 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Bottom fade: dark → white (into About section) */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '140px',
        background: 'linear-gradient(to bottom, transparent 0%, #f7f6f2 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: 'var(--content)',
        margin: '0 auto',
        padding: 'var(--space-24) clamp(1.5rem, 5vw, 3rem)',
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
