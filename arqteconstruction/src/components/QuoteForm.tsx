"use client";
import { useState } from 'react';
import { createRequest } from '@/app/actions/request-actions';

const SERVICE_OPTIONS = [
  { value: 'NEW_CONSTRUCTION',      label: 'New Construction' },
  { value: 'REMODELING',            label: 'Remodeling' },
  { value: 'EXTERIOR_ENVELOPE',     label: 'Exterior Envelope' },
  { value: 'WINDOWS_DOORS_RAILINGS',label: 'Windows, Doors & Railings' },
  { value: 'INTERIOR_GLASS',        label: 'Interior Glass' },
  { value: 'SERVICE_MAINTENANCE',   label: 'Service & Maintenance' },
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
  const [errorMsg, setErrorMsg] = useState('');

  const focusStyle: React.CSSProperties = {
    borderColor: 'var(--green)',
    boxShadow: '0 0 0 3px rgba(45,90,61,0.12)',
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    const result = await createRequest({ success: false }, data);
    if (result.success) {
      setStatus('success');
    } else {
      setErrorMsg(result.error ?? 'Something went wrong.');
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(var(--space-16), 10vw, var(--space-24)) clamp(1.5rem, 5vw, 3rem)',
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--green)', filter: 'brightness(1.6)' }} />
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Free Estimate</span>
            <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--green)', filter: 'brightness(1.6)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 'var(--space-4)' }}>Let&apos;s Talk About Your Project</h2>
          <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: 'var(--text-base)', lineHeight: 1.65 }}>Tell us what you are building. We will follow up within one business day.</p>
        </div>

        {status === 'success' ? (
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(45,90,61,0.4)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-12)', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)', color: 'var(--green)', filter: 'brightness(1.8)' }}>&#10003;</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: '#fff', marginBottom: 'var(--space-3)' }}>Request Received</h3>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: 'var(--text-sm)' }}>We will be in touch within one business day.</p>
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
            {/* Name */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }} className="form-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Full Name</label>
                <input name="name" required
                  style={{ ...inputStyle, ...(focused === 'name' ? focusStyle : {}) }}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                  placeholder="John Smith"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Company (optional)</label>
                <input name="company"
                  style={{ ...inputStyle, ...(focused === 'company' ? focusStyle : {}) }}
                  onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            {/* Email / Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }} className="form-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Email</label>
                <input type="email" name="email" required
                  style={{ ...inputStyle, ...(focused === 'email' ? focusStyle : {}) }}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  placeholder="john@example.com"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Phone</label>
                <input type="tel" name="phone"
                  style={{ ...inputStyle, ...(focused === 'phone' ? focusStyle : {}) }}
                  onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                  placeholder="(786) 000-0000"
                />
              </div>
            </div>

            {/* Service + Address */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }} className="form-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Service Needed</label>
                <select name="serviceType" required
                  style={{ ...inputStyle, ...(focused === 'serviceType' ? focusStyle : {}), appearance: 'none' }}
                  onFocus={() => setFocused('serviceType')} onBlur={() => setFocused(null)}
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Project Address (optional)</label>
                <input name="projectAddress"
                  style={{ ...inputStyle, ...(focused === 'projectAddress' ? focusStyle : {}) }}
                  onFocus={() => setFocused('projectAddress')} onBlur={() => setFocused(null)}
                  placeholder="123 Main St, Miami, FL"
                />
              </div>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Project Details</label>
              <textarea name="description" rows={4} required
                style={{ ...inputStyle, resize: 'vertical', minHeight: '110px', ...(focused === 'description' ? focusStyle : {}) }}
                onFocus={() => setFocused('description')} onBlur={() => setFocused(null)}
                placeholder="Tell us about the project - location, size, timeline..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                padding: '1rem 2.5rem',
                background: 'var(--green)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 'var(--text-sm)',
                borderRadius: 'var(--radius-md)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'background var(--transition)',
                alignSelf: 'flex-start',
                opacity: status === 'loading' ? 0.65 : 1,
              }}
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = 'var(--green-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; }}
            >
              {status === 'loading' ? 'Sending...' : 'Submit Request'}
            </button>

            {status === 'error' && (
              <p style={{ color: '#f87171', fontSize: 'var(--text-sm)' }}>{errorMsg || 'Something went wrong. Please try again or call us directly.'}</p>
            )}
          </form>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-10)', marginTop: 'var(--space-10)', flexWrap: 'wrap' }}>
          {[
            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.44"/></svg>, label: '(786) 325-9406', href: 'tel:7863259406' },
            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>, label: 'lorta@arqteconstruction.com', href: 'mailto:lorta@arqteconstruction.com' },
            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Miami, FL', href: '#' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.42)', transition: 'color var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.42)'}
            >
              {item.icon}{item.label}
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
