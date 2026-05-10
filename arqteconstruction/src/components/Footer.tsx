"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "1px solid var(--divider)",
      padding: "var(--space-12) clamp(1.5rem, 5vw, 3rem)",
    }}>
      <div style={{
        maxWidth: "var(--content)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "var(--space-10)",
        marginBottom: "var(--space-10)",
      }}
      className="footer-grid"
      >
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-lg)", letterSpacing: "-0.02em", marginBottom: "var(--space-3)" }}>
            <span style={{ color: "var(--red)" }}>Ar</span>
            <span style={{ color: "var(--text)" }}>T</span>
            <span style={{ color: "var(--green)" }}>eq</span>
            <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "var(--text-sm)" }}> Construction</span>
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-faint)", lineHeight: 1.6, maxWidth: "28ch" }}>
            Precision-built. Miami-proven. Licensed general contractor serving South Florida since 2010.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "var(--space-4)" }}>Services</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {["New Construction", "Remodeling", "Exterior Envelope", "Windows & Doors", "Interior Glass"].map(s => (
              <li key={s}>
                <a href="#services"
                  style={{ fontSize: "var(--text-sm)", color: "var(--text-faint)", transition: "color var(--transition)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-faint)")}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "var(--space-4)" }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <a href="tel:7863259406"
              style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--text-faint)", transition: "color var(--transition)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-faint)")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15.44"/></svg>
              (786) 325-9406
            </a>
            <a href="mailto:lorta@arqteconstruction.com"
              style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--text-faint)", transition: "color var(--transition)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-faint)")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
              lorta@arqteconstruction.com
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--text-faint)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Miami, FL
            </div>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: "var(--content)",
        margin: "0 auto",
        paddingTop: "var(--space-6)",
        borderTop: "1px solid var(--divider)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "var(--space-3)",
      }}>
        <p style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>© {year} ArTeq Construction. All rights reserved.</p>
        <p style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>Licensed General Contractor · Miami-Dade County</p>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
