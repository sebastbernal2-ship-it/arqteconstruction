"use client";
const SERVICES = [
  {
    id: "NEW_CONSTRUCTION",
    title: "New Construction",
    description: "Ground-up residential and commercial builds delivered with precision scheduling, quality materials, and full code compliance.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: "REMODELING",
    title: "Remodeling",
    description: "Transform existing spaces with expert remodeling — kitchens, bathrooms, full gut renovations, and everything in between.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    id: "EXTERIOR_ENVELOPE",
    title: "Exterior Envelope",
    description: "Weatherproof facades, cladding systems, waterproofing, and impact-rated enclosures built for South Florida's demanding climate.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
      </svg>
    ),
  },
  {
    id: "WINDOWS_DOORS_RAILINGS",
    title: "Windows, Doors & Railings",
    description: "Impact-rated windows and doors, custom aluminum railings, and architectural hardware installed to the highest Miami-Dade standards.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="18" rx="1"/>
        <rect x="13" y="3" width="8" height="18" rx="1"/>
        <path d="M11 12h2"/>
      </svg>
    ),
  },
  {
    id: "INTERIOR_GLASS",
    title: "Interior Glass",
    description: "Frameless glass partitions, shower enclosures, glass railings, and custom mirrors — precision-cut and professionally installed.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    id: "SERVICE_MAINTENANCE",
    title: "Service & Maintenance",
    description: "Scheduled maintenance, repairs, and emergency service to keep your building performing at its best year-round.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--surface)",
        padding: "clamp(var(--space-16), 10vw, var(--space-24)) clamp(1.5rem, 5vw, 3rem)",
      }}
    >
      <div style={{ maxWidth: "var(--content)", margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
            <span style={{ display: "block", width: "32px", height: "2px", background: "var(--green)" }} />
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>What We Do</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            maxWidth: "20ch",
          }}>Comprehensive Construction Services</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}>
          {SERVICES.map((service) => (
            <div
              key={service.id}
              style={{ background: "var(--surface)", padding: "var(--space-8)", transition: "background var(--transition)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--surface-2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--surface)")}
            >
              <div style={{ color: "var(--green-light)", marginBottom: "var(--space-4)", opacity: 0.9 }}>{service.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-lg)",
                fontWeight: 700,
                marginBottom: "var(--space-3)",
                letterSpacing: "-0.02em",
              }}>{service.title}</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.65 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
