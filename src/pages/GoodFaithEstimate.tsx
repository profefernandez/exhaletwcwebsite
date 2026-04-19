import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const GoodFaithEstimate: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Good Faith Estimate — Exhale TWC</title>
        <meta name="description" content="Under federal law, you have the right to know what your therapy will cost before you begin. Learn about your Good Faith Estimate at Exhale TWC." />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: "linear-gradient(to bottom, rgba(28,10,58,0.88) 0%, rgba(45,27,78,0.82) 100%), url('/images/healing-bowls-hero.jpg') center/cover no-repeat",
          padding: '8rem 1.5rem 5rem',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            border: '1px solid rgba(201,168,76,0.5)',
            borderRadius: '9999px',
            padding: '0.375rem 1rem',
            marginBottom: '1.75rem',
          }}>
            Transparency
          </span>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            margin: 0,
          }}>
            Good Faith
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#C9A84C',
            lineHeight: 1.1,
            margin: '0 0 1.5rem',
          }}>
            Estimate.
          </h1>
          <p style={{ color: '#E6D8F5', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '500px', margin: '0 auto' }}>
            Under federal law, you have the right to know what your care will cost — before your first session.
          </p>
        </div>
      </section>

      {/* SECTION 1 — WHAT IT IS (white) */}
      <section style={{ background: '#ffffff', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#7B2FBE',
            border: '1px solid #EDD2FF',
            borderRadius: '9999px',
            padding: '0.375rem 1rem',
            marginBottom: '1.75rem',
          }}>
            What This Means for You
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: '#1C1C2E',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
          }}>
            No surprises.{' '}
            <em style={{ color: '#7B2FBE', fontStyle: 'italic' }}>Just clarity.</em>
          </h2>
          <p style={{ color: '#3D3D5C', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            A Good Faith Estimate is a written document that tells you exactly what your therapy sessions are expected to cost — before you begin. Think of it as a price quote for your care.
          </p>
          <p style={{ color: '#3D3D5C', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '3rem' }}>
            This applies to you if you are paying out of pocket, do not have insurance, or choose not to use your insurance for therapy.
          </p>

          {/* Law citation — inline divider style, no card */}
          <div style={{ borderTop: '1px solid #EDD2FF', borderBottom: '1px solid #EDD2FF', padding: '2rem 0' }}>
            <p style={{ color: '#7B2FBE', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Federal Law
            </p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: '#1C1C2E', marginBottom: '0.5rem' }}>
              The No Surprises Act
            </p>
            <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Consolidated Appropriations Act, 2021 &mdash; Pub. L. 116-260 &mdash; 42 U.S.C. § 300gg-136
            </p>
            <p style={{ color: '#3D3D5C', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              All licensed healthcare providers — including therapists — must provide a Good Faith Estimate to any client who is uninsured or not using insurance.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer"
                style={{ color: '#7B2FBE', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>
                cms.gov/nosurprises ↗
              </a>
              <a href="https://www.tdi.texas.gov/consumer/surprise-billing.html" target="_blank" rel="noopener noreferrer"
                style={{ color: '#7B2FBE', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>
                Texas TDI Resource ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE EXAMPLE (dark purple) */}
      <section style={{
        background: 'linear-gradient(135deg, #1C0A3A 0%, #2D1B4E 100%)',
        padding: '6rem 1.5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.5)',
              borderRadius: '9999px',
              padding: '0.375rem 1rem',
              marginBottom: '1.75rem',
            }}>
              See the Difference
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
            }}>
              What it looks like{' '}
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>in practice.</em>
            </h2>
          </div>

          {/* Two column comparison — no cards, just a bordered container split in two */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            <div style={{ padding: '2.5rem', borderRight: '1px solid rgba(201,168,76,0.15)', background: 'rgba(255,255,255,0.02)' }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(230,216,245,0.45)',
                marginBottom: '1.25rem',
              }}>
                Without an Estimate
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: '#E6D8F5', lineHeight: 1.4, marginBottom: '1rem' }}>
                You finish your first session. A bill arrives for $250.
              </p>
              <p style={{ color: 'rgba(230,216,245,0.65)', fontSize: '0.9375rem', lineHeight: 1.75 }}>
                You had no idea it would be that much. You feel blindsided — and trust is broken before the work has even begun.
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: 'rgba(201,168,76,0.06)' }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '1.25rem',
              }}>
                With Your Estimate
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.4, marginBottom: '1rem' }}>
                Before your first session, you know your rate is $150 per session.
              </p>
              <p style={{ color: '#E6D8F5', fontSize: '0.9375rem', lineHeight: 1.75 }}>
                Your bill matches exactly. You arrive ready to focus on your healing — not your bill.
              </p>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'rgba(230,216,245,0.4)', fontSize: '0.8125rem', marginTop: '1.5rem' }}>
            Federal law requires this estimate in writing at least 1 business day before your appointment.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHAT YOUR ESTIMATE INCLUDES (white) */}
      <section style={{ background: '#ffffff', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#7B2FBE',
              border: '1px solid #EDD2FF',
              borderRadius: '9999px',
              padding: '0.375rem 1rem',
              marginBottom: '1.75rem',
            }}>
              Example Estimate
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#1C1C2E',
              lineHeight: 1.15,
            }}>
              What your estimate{' '}
              <em style={{ color: '#7B2FBE', fontStyle: 'italic' }}>will include.</em>
            </h2>
            <p style={{ color: '#6B7280', fontSize: '1rem', marginTop: '1rem' }}>
              Before your first session, you will receive a written document that includes the following.
            </p>
          </div>

          {[
            { label: 'Provider', value: 'Exhale TWC — Therapy, Wellness & Consulting' },
            { label: 'Service', value: 'Individual Therapy (50-minute session)' },
            { label: 'CPT Code', value: '90837 — Psychotherapy, 60 min  ·  90834 — Psychotherapy, 45 min' },
            { label: 'Rate Per Session', value: '$150' },
            { label: 'Estimated Sessions', value: 'Approximately 24 sessions over 12 months (bi-weekly)' },
            { label: 'Estimated 12-Month Total', value: '$3,600 – $3,900' },
            { label: 'Valid For', value: '12 months from date of issue' },
          ].map((row, i, arr) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: '1.25rem',
              padding: '1.25rem 0',
              borderBottom: i < arr.length - 1 ? '1px solid #F7EEFF' : 'none',
              alignItems: 'start',
            }}>
              <p style={{ color: '#7B2FBE', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', paddingTop: '3px' }}>
                {row.label}
              </p>
              <p style={{ color: '#1C1C2E', fontSize: '1rem', lineHeight: 1.65 }}>
                {row.value}
              </p>
            </div>
          ))}

          <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginTop: '2rem', lineHeight: 1.7 }}>
            Actual session frequency and total will be discussed and agreed upon with your therapist. If your final bill is $400 or more above this estimate, you have the right to dispute the charge.
          </p>
        </div>
      </section>

      {/* SECTION 4 — YOUR RIGHTS (dark purple) */}
      <section style={{
        background: 'linear-gradient(135deg, #1C0A3A 0%, #2D1B4E 100%)',
        padding: '6rem 1.5rem',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.5)',
              borderRadius: '9999px',
              padding: '0.375rem 1rem',
              marginBottom: '1.75rem',
            }}>
              Know Your Rights
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}>
              You are protected{' '}
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>by federal law.</em>
            </h2>
            <p style={{ color: '#E6D8F5', fontSize: '1rem', lineHeight: 1.75 }}>
              Under the No Surprises Act (42 U.S.C. § 300gg-136), every client who pays out of pocket has the following rights.
            </p>
          </div>

          {[
            'Know your expected costs before services begin.',
            'Receive your estimate in writing at least 1 business day before your appointment.',
            'Dispute a bill that is $400 or more above your estimate.',
            'Keep a copy of your estimate for your records.',
            'Ask questions about your estimate at any time — no special language required.',
            'Proceed with services — or not — with no obligation.',
          ].map((right, i, arr) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '2.5rem 1fr',
              gap: '1.25rem',
              padding: '1.5rem 0',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(201,168,76,0.12)' : 'none',
              alignItems: 'start',
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'rgba(201,168,76,0.45)',
                lineHeight: 1,
                paddingTop: '4px',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p style={{ color: '#E6D8F5', fontSize: '1rem', lineHeight: 1.75 }}>
                {right}
              </p>
            </div>
          ))}

          <div style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(201,168,76,0.18)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}>
            <div>
              <p style={{ color: '#C9A84C', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Federal Resource
              </p>
              <p style={{ color: '#E6D8F5', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>Dept. of Health &amp; Human Services</p>
              <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer"
                style={{ color: '#C9A84C', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>
                cms.gov/nosurprises ↗
              </a>
              <p style={{ color: 'rgba(230,216,245,0.45)', fontSize: '0.875rem', marginTop: '0.25rem' }}>1-877-696-6775</p>
            </div>
            <div>
              <p style={{ color: '#C9A84C', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Texas Resource
              </p>
              <p style={{ color: '#E6D8F5', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>Texas Dept. of Insurance</p>
              <a href="https://www.tdi.texas.gov/consumer/surprise-billing.html" target="_blank" rel="noopener noreferrer"
                style={{ color: '#C9A84C', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>
                tdi.texas.gov ↗
              </a>
              <p style={{ color: 'rgba(230,216,245,0.45)', fontSize: '0.875rem', marginTop: '0.25rem' }}>1-800-252-3439</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(to bottom, rgba(28,10,58,0.82) 0%, rgba(45,27,78,0.76) 100%), url('/images/ocean-calm.jpg') center/cover no-repeat",
        padding: '7rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            border: '1px solid rgba(201,168,76,0.5)',
            borderRadius: '9999px',
            padding: '0.375rem 1rem',
            marginBottom: '1.75rem',
          }}>
            Begin Your Journey
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            Questions about cost?{' '}
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Let&rsquo;s talk first.</em>
          </h2>
          <p style={{ color: '#E6D8F5', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.25rem' }}>
            Your free 15-minute consultation is the perfect time to ask about rates, your estimate, and what to expect. No pressure, no commitment.
          </p>
          <Link to="/schedule" className="btn-primary-gold">
            Book a Free Consultation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
};

export default GoodFaithEstimate;
