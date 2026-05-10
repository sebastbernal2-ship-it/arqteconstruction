"use client";
import { useActionState } from "react";
import { createRequest, CreateRequestState } from "@/app/actions/request-actions";

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "NEW_CONSTRUCTION", label: "New Construction" },
  { value: "REMODELING", label: "Remodeling" },
  { value: "EXTERIOR_ENVELOPE", label: "Exterior Envelope" },
  { value: "WINDOWS_DOORS_RAILINGS", label: "Windows, Doors & Railings" },
  { value: "INTERIOR_GLASS", label: "Interior Glass" },
  { value: "SERVICE_MAINTENANCE", label: "Service & Maintenance" },
  { value: "PRODUCTS", label: "Products" },
];

const initial: CreateRequestState = { success: false };

export default function QuoteForm() {
  const [state, formAction, pending] = useActionState(createRequest, initial);

  const inputStyle = {
    width: "100%",
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",
    padding: "0.75rem 1rem",
    fontSize: "var(--text-sm)",
    color: "var(--text)",
    outline: "none",
    transition: "border-color var(--transition)",
  };

  const labelStyle = {
    display: "block",
    fontSize: "var(--text-xs)",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: "var(--text-muted)",
    marginBottom: "var(--space-2)",
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--surface)",
        padding: "clamp(var(--space-16), 10vw, var(--space-24)) clamp(1.5rem, 5vw, 3rem)",
      }}
    >
      <div style={{ maxWidth: "var(--content-narrow)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "var(--space-12)", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--red)" }} />
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Free Consultation
            </span>
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--red)" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "var(--space-4)",
          }}>
            Request a Quote
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "var(--text-base)", margin: "0 auto" }}>
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {state.success ? (
          <div style={{
            textAlign: "center",
            padding: "var(--space-16) var(--space-8)",
            background: "var(--surface-2)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(26, 77, 46, 0.3)",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "var(--space-4)" }}>✓</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--green-light)", marginBottom: "var(--space-3)" }}>
              Request Received!
            </h3>
            <p style={{ color: "var(--text-muted)" }}>
              Thank you for reaching out. We&apos;ll contact you within 24 hours to discuss your project.
            </p>
          </div>
        ) : (
          <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {/* Row 1: Name + Email */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }} className="form-row">
              <div>
                <label style={labelStyle} htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" required placeholder="John Smith" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required placeholder="john@example.com" style={inputStyle} />
              </div>
            </div>

            {/* Row 2: Phone + Company */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }} className="form-row">
              <div>
                <label style={labelStyle} htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="(786) 000-0000" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="company">Company</label>
                <input id="company" name="company" type="text" placeholder="Optional" style={inputStyle} />
              </div>
            </div>

            {/* Row 3: Service + Address */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }} className="form-row">
              <div>
                <label style={labelStyle} htmlFor="serviceType">Service Type *</label>
                <select id="serviceType" name="serviceType" required style={{ ...inputStyle, appearance: "none" as const }}>
                  {SERVICE_OPTIONS.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle} htmlFor="projectAddress">Project Address</label>
                <input id="projectAddress" name="projectAddress" type="text" placeholder="Miami, FL" style={inputStyle} />
              </div>
            </div>

            {/* Description */}
            <div>
              <label style={labelStyle} htmlFor="description">Project Description *</label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                placeholder="Describe your project — scope, timeline, any specific requirements..."
                style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
              />
            </div>

            {state.error && (
              <div style={{
                padding: "var(--space-3) var(--space-4)",
                background: "rgba(140,26,26,0.15)",
                border: "1px solid rgba(140,26,26,0.3)",
                borderRadius: "var(--radius-md)",
                fontSize: "var(--text-sm)",
                color: "#f87171",
              }}>
                {state.error}
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              style={{
                padding: "1rem 2.5rem",
                background: pending ? "var(--steel)" : "var(--red)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "var(--text-sm)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                borderRadius: "var(--radius-md)",
                border: "none",
                cursor: pending ? "not-allowed" : "pointer",
                transition: "background var(--transition)",
                alignSelf: "flex-start",
              }}
            >
              {pending ? "Submitting…" : "Submit Request"}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus, select:focus {
          border-color: var(--red) !important;
        }
        select option { background: var(--surface-2); color: var(--text); }
      `}</style>
    </section>
  );
}
