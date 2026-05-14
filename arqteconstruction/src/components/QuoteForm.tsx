"use client";
import { useState } from 'react';
import { submitQuoteRequest } from '@/app/actions/quote';

const SERVICE_OPTIONS = [
  'New Construction',
  'Remodeling',
  'Exterior Envelope',
  'Windows, Doors & Railings',
  'Interior Glass',
  'Service & Maintenance',
  'Other',
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.875rem 1rem',
  border: '1px solid rgba(0,0,0,0.14)',
  borderRadius: 'var(--radius-md)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text)',
  background: '#fff',
  outline: 'none',
  transition: 'border-color var(--transition), box-shadow var(--transition)',
  fontFamily: 'var(--font-body)',
};

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const data = new FormData(e.currentTarget);
    try {
      await submitQuoteRequest({
        firstName: data.get('firstName') as string,
        lastName:  data.get('lastName')  as string,
        email:     data.get('email')     as string,
        phone:     data.get('phone')     as string,
        service:   data.get('service')   as string,
        message:   data.get('message')   as string,
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const focusStyle: React.CSSProperties = {
    borderColor: 'var(--gold)',
    boxShadow: '0 0 0 3px rgba(160,130,58,0.12)',
  };

  return (
    <section
      id="contact"
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(var(--space-16), 10vw, var(--space-24)) clamp(1.5rem, 5vw, 3rem)',
      }}
    >
      <div style={{
        maxWidth: '820px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--gold)' }} />
            <span style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}>Free Estimate</span>
            <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--gold)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 'var(--space-4)',
          }}>Let's Talk About Your Project</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-base)', lineHeight: 1.65 }}>
            Tell us what you're building. We'll follow up within one business day.
          </p>
        </div>

        {status === 'success' ? (
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(160,130,58,0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-12)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)' }}>✓</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: '#fff', marginBottom: 'var(--space-3)' }}>Request Received</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)' }}>We'll be in touch within one business day.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(var(--space-8), 5vw, var(--space-12))',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-5)',
            }}
          >
            {/* Name row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }} className="form-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>First Name</label>
                <input
                  name="firstName" required
                  style={{ ...inputStyle, ...(focused === 'firstName' ? focusStyle : {}) }}
                  onFocus={() => setFocused('firstName')}
                  onBlur={() => setFocused(null)}
                  placeholder="John"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Last Name</label>
                <input
                  name="lastName" required
                  style={{ ...inputStyle, ...(focused === 'lastName' ? focusStyle : {}) }}
                  onFocus={() => setFocused('lastName')}
                  onBlur={() => setFocused(null)}
                  placeholder="Smith"
                />
              </div>
            </div>

            {/* Email / Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }} className="form-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Email</label>
                <input
                  type="email" name="email" required
                  style={{ ...inputStyle, ...(focused === 'email' ? focusStyle : {}) }}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="john@example.com"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Phone</label>
                <input
                  type="tel" name="phone"
                  style={{ ...inputStyle, ...(focused === 'phone' ? focusStyle : {}) }}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  placeholder="(786) 000-0000"
                />
              </div>
            </div>

            {/* Service */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Service Needed</label>
              <select
                name="service" required
                style={{ ...inputStyle, ...(focused === 'service' ? focusStyle : {}), appearance: 'none' }}
                onFocus={() => setFocused('service')}
                onBlur={() => setFocused(null)}
              >
                <option value="">Select a service...</option>
                {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Project Details</label>
              <textarea
                name="message" rows={4}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '110px', ...(focused === 'message' ? focusStyle : {}) }}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                placeholder="Tell us about the project — location, size, timeline..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                padding: '1rem 2.5rem',
                background: 'var(--gold)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 'var(--text-sm)',
                borderRadius: 'var(--radius-md)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'background var(--transition), transform var(--transition)',
                alignSelf: 'flex-start',
                opacity: status === 'loading' ? 0.65 : 1,
              }}
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = 'var(--gold-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; }}
            >
              {status === 'loading' ? 'Sending…' : 'Submit Request'}
            </button>

            {status === 'error' && (
              <p style={{ color: '#f87171', fontSize: 'var(--text-sm)' }}>Something went wrong. Please try again or call us directly.</p>
            )}
          </form>
        )}

        {/* Contact info below form */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-10)',
          marginTop: 'var(--space-10)',
          flexWrap: 'wrap',
        }}>
          {[
            { icon: '📞', label: '(786) 325-9406', href: 'tel:7863259406' },
            { icon: '✉️', label: 'lorta@arqteconstruction.com', href: 'mailto:lorta@arqteconstruction.com' },
            { icon: '📍', label: 'Miami, FL', href: '#' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--text-sm)',
              color: 'rgba(255,255,255,0.45)',
              transition: 'color var(--transition)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
