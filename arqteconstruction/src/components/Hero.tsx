export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Background grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }} />

      {/* Red accent line — left edge */}
      <div style={{
        position: "absolute",
        left: 0,
        top: "15%",
        bottom: "15%",
        width: "3px",
        background: "linear-gradient(to bottom, transparent, var(--red), transparent)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "var(--content)",
        margin: "0 auto",
        padding: "120px clamp(1.5rem, 5vw, 3rem) var(--space-24)",
        width: "100%",
      }}>
        {/* Eyebrow */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-3)",
          marginBottom: "var(--space-6)",
        }}>
          <span style={{
            display: "block",
            width: "32px",
            height: "2px",
            background: "var(--red)",
          }} />
          <span style={{
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}>
            Miami, Florida
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-3xl)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          marginBottom: "var(--space-6)",
          maxWidth: "14ch",
        }}>
          <span style={{ color: "var(--text)" }}>Precision</span>
          <br />
          <span style={{ color: "var(--text)" }}>Built.</span>{" "}
          <span style={{ color: "var(--red)" }}>Miami</span>
          <br />
          <span style={{ color: "var(--text)" }}>Proven.</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: "var(--text-lg)",
          color: "var(--text-muted)",
          maxWidth: "52ch",
          lineHeight: 1.6,
          marginBottom: "var(--space-10)",
        }}>
          From new construction to precision glass work, ArTeq delivers
          craftsmanship that stands the test of time — on schedule,
          on budget, and built to last.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "0.875rem 2rem",
              background: "var(--red)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "var(--text-sm)",
              borderRadius: "var(--radius-md)",
              letterSpacing: "0.02em",
              transition: "background var(--transition), transform var(--transition)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--red-dark)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.transform = "none"; }}
          >
            Request a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "0.875rem 2rem",
              background: "transparent",
              color: "var(--text-muted)",
              fontWeight: 500,
              fontSize: "var(--text-sm)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              letterSpacing: "0.02em",
              transition: "border-color var(--transition), color var(--transition)",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            Our Services
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          marginTop: "var(--space-20)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "var(--space-8)",
          paddingTop: "var(--space-8)",
          borderTop: "1px solid var(--divider)",
          maxWidth: "600px",
        }}>
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "100%", label: "Licensed & Insured" },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-xl)",
                fontWeight: 800,
                color: "var(--red)",
                lineHeight: 1,
                marginBottom: "var(--space-1)",
              }}>{stat.value}</div>
              <div style={{
                fontSize: "var(--text-xs)",
                color: "var(--text-faint)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Crosshair decoration — right side, echoes the logo */}
      <div style={{
        position: "absolute",
        right: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "clamp(200px, 30vw, 420px)",
        aspectRatio: "1",
        opacity: 0.06,
        pointerEvents: "none",
      }}>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1.5"/>
          <line x1="100" y1="0" x2="100" y2="40" stroke="white" strokeWidth="1.5"/>
          <line x1="100" y1="160" x2="100" y2="200" stroke="white" strokeWidth="1.5"/>
          <line x1="0" y1="100" x2="40" y2="100" stroke="white" strokeWidth="1.5"/>
          <line x1="160" y1="100" x2="200" y2="100" stroke="white" strokeWidth="1.5"/>
          <circle cx="100" cy="100" r="4" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
