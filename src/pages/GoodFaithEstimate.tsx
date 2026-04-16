import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const GoodFaithEstimate: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Good Faith Estimate — Exhale TWC</title>
        <meta name="description" content="Before your first session, you'll know exactly what it costs. No surprises, no hidden fees." />
      </Helmet>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="gfe-heading"
      >
        <img
          src="/images/hero-ocean.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(150deg, rgba(28,10,58,0.92) 0%, rgba(74,26,122,0.82) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pt-40 pb-20 text-center">
          <span
            className="badge-pill mb-6 inline-flex"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}
          >
            Know Before You Begin
          </span>
          <h1
            id="gfe-heading"
            className="text-5xl sm:text-6xl font-light text-white mb-5"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            No surprises.<br />
            <em className="text-[#EDD2FF]">Just clarity.</em>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Before your first session, you will know exactly what it costs. That is it.
          </p>
        </div>
      </section>

      {/* ── VISUAL EXAMPLE — first thing after hero ── */}
      <section className="py-20 bg-white" aria-labelledby="example-heading">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              id="example-heading"
              className="text-3xl sm:text-4xl font-light text-[#1C1C2E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Here is what it means<br />
              <em style={{ color: '#7B2FBE' }}>in real life.</em>
            </h2>
          </div>

          {/* The visual — two scenarios, side by side */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{ border: '1px solid #EDD2FF', boxShadow: '0 8px 40px rgba(74,26,122,0.10)' }}
          >
            {/* Label bar */}
            <div
              className="px-8 py-4 text-center text-sm font-semibold tracking-widest uppercase"
              style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)', color: 'rgba(255,255,255,0.85)' }}
            >
              Before vs. After Your Estimate
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Without estimate */}
              <div
                className="p-8 flex flex-col items-center text-center gap-4"
                style={{ background: '#FFF5F5', borderRight: '1px solid #EDD2FF' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: '#FEE2E2' }}
                  aria-hidden="true"
                >
                  <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9.303 3.376c.866 1.5-.217 3.374-1.948 3.374H4.645c-1.73 0-2.813-1.874-1.948-3.374l5.304-9.168A2.25 2.25 0 0112 4.5c.9 0 1.718.478 2.165 1.26l5.304 9.168zM12 15.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-red-400">Without an Estimate</p>
                <p className="text-gray-600 leading-relaxed">
                  You finish your first session and receive a bill for <strong className="text-red-500 text-lg">$250.</strong><br />
                  You had no idea it would be that much.
                </p>
              </div>

              {/* With estimate */}
              <div
                className="p-8 flex flex-col items-center text-center gap-4"
                style={{ background: '#F0FFF6' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: '#D1FAE5' }}
                  aria-hidden="true"
                >
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-green-600">With Your Estimate</p>
                <p className="text-gray-600 leading-relaxed">
                  Before you ever walk in, you know your rate is <strong className="text-green-700 text-lg">$150 per session.</strong><br />
                  Your bill matches. No surprises.
                </p>
              </div>
            </div>

            {/* Bottom note */}
            <div
              className="px-8 py-4 text-center text-sm"
              style={{ background: '#F7EEFF', color: '#4A1A7A', borderTop: '1px solid #EDD2FF' }}
            >
              Federal law requires us to give you this estimate before your first appointment. It is your right.
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT — dark brand section ── */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(150deg, #1C0A3A 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
        aria-labelledby="expect-heading"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span
              className="badge-pill mb-5 inline-flex"
              style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}
            >
              Typical Costs in Texas
            </span>
            <h2
              id="expect-heading"
              className="text-4xl sm:text-5xl font-light text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What can I expect<br />
              <em className="text-[#EDD2FF]">to pay?</em>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto">
              These are typical ranges. Your personal estimate will reflect your exact plan.
            </p>
          </div>

          {/* Simple cost bars */}
          <div className="space-y-7">
            {[
              { label: 'Every other week', sub: '~26 sessions / year', low: 3900, high: 4550 },
              { label: 'Once a week', sub: '~52 sessions / year', low: 7800, high: 9100 },
              { label: 'As needed', sub: '~1–2 times / month', low: 1800, high: 3600 },
            ].map((row, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div>
                    <span className="text-white font-semibold">{row.label}</span>
                    <span className="text-white/40 text-sm ml-2">({row.sub})</span>
                  </div>
                  <span className="font-bold text-[#EDD2FF]">
                    ${row.low.toLocaleString()} – ${row.high.toLocaleString()} / year
                  </span>
                </div>
                <div
                  className="h-2.5 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                  role="img"
                  aria-label={`${row.label}: $${row.low.toLocaleString()} to $${row.high.toLocaleString()} per year`}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.round((row.high / 10000) * 100)}%`,
                      background: 'linear-gradient(90deg, rgba(155,89,208,0.5), #9B59D0)',
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Sliding scale */}
          <div
            className="mt-10 rounded-2xl p-6 flex items-start gap-4"
            style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.25)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
              style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)' }}
              aria-hidden="true"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                Sliding scale available
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                A limited number of reduced-rate slots are available. Just mention it during your free consultation — no paperwork, no judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUR RIGHTS — lavender section ── */}
      <section className="py-20" style={{ background: '#F7EEFF' }} aria-labelledby="rights-heading">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="badge-pill mb-4">Your Rights</span>
            <h2
              id="rights-heading"
              className="text-3xl sm:text-4xl font-light text-[#1C1C2E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              You are always in control.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: '📄', title: 'Written before you start', body: 'You receive your estimate in writing before your first session — not after.' },
              { icon: '💬', title: 'Ask anything', body: 'You can ask questions, negotiate, or walk away at any point. No penalty, ever.' },
              { icon: '⚖️', title: 'Dispute if needed', body: 'If your final bill is $400 or more over your estimate, you have the legal right to dispute it.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center card-hover"
                style={{ border: '1px solid #EDD2FF', boxShadow: '0 4px 20px rgba(74,26,122,0.06)' }}
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-semibold text-[#1C1C2E] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 50%, #9B59D0 100%)' }}
        aria-label="Schedule a consultation"
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <h2
            className="text-4xl sm:text-5xl font-light text-white mb-5"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to get<br />
            <em className="text-[#EDD2FF]">your estimate?</em>
          </h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            Schedule a free 15-minute consultation. Your written estimate will be sent before your first session.
          </p>
          <Link to="/schedule" className="btn-primary">
            Schedule My Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};
