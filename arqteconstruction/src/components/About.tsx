"use client";
export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg)",
        padding: "clamp(var(--space-16), 10vw, var(--space-24)) clamp(1.5rem, 5vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        right: 0, top: "20%", bottom: "20%",
        width: "3px",
        background: "linear-gradient(to bottom, transparent, var(--green), transparent)",
      }} />

      <div style={{
        maxWidth: "var(--content)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(var(--space-12), 8vw, var(--space-24))",
        alignItems: "center",
      }}
      className="about-grid"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
            <span style={{ display: "block", width: "32px", height: "2px", background: "var(--red)" }} />
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>About Us</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "var(--space-6)",
            lineHeight: 1.05,
          }}>Built on Trust,<br /><span style={{ color: "var(--red)" }}>Delivered</span> with Precision</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "var(--space-6)", fontSize: "var(--text-base)" }}>
            ArTeq Construction is a Miami-based general contractor specializing in high-quality residential and commercial construction. With over 15 years of experience across South Florida, we bring the same level of precision to a bathroom renovation as we do to a full commercial build-out.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "var(--space-8)", fontSize: "var(--text-base)" }}>
            Our team of licensed professionals handles every phase — from architectural coordination and permitting to final punch-list — so you have a single point of accountability from day one to ribbon-cutting.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            {["Licensed General Contractor", "Miami-Dade Certified", "Fully Insured"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                <span style={{ color: "var(--green-light)", fontWeight: 700 }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-8)",
            marginBottom: "var(--space-4)",
          }}>
            <div style={{ fontSize: "var(--text-3xl)", fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--red)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "var(--space-2)" }}>15+</div>
            <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Years serving South Florida</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
              <div style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--green-light)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "var(--space-2)" }}>500+</div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Projects completed</div>
            </div>
            <div style={{ background: "var(--surface-3)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: "var(--space-2)" }}>
              <svg width="32" height="32" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="90" stroke="#8C1A1A" strokeWidth="4"/>
                <line x1="100" y1="0" x2="100" y2="40" stroke="#8C1A1A" strokeWidth="4"/>
                <line x1="100" y1="160" x2="100" y2="200" stroke="#8C1A1A" strokeWidth="4"/>
                <line x1="0" y1="100" x2="40" y2="100" stroke="#8C1A1A" strokeWidth="4"/>
                <line x1="160" y1="100" x2="200" y2="100" stroke="#8C1A1A" strokeWidth="4"/>
                <circle cx="100" cy="100" r="8" fill="#8C1A1A"/>
              </svg>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Miami-Dade<br/>Certified</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
