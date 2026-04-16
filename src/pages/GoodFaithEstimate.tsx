import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const GoodFaithEstimate: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Good Faith Estimate — Exhale TWC</title>
        <meta name="description" content="Understand what your therapy sessions will cost before you begin. Exhale TWC provides a written cost estimate before your first appointment — no surprises." />
      </Helmet>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="gfe-heading"
      >
        <img
          src="/images/hero-ocean.jpg"
          alt="Calm ocean — representing clarity and peace of mind"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(150deg, rgba(28,10,58,0.90) 0%, rgba(45,27,78,0.86) 45%, rgba(74,26,122,0.80) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-24 text-center">
          <span
            className="badge-pill mb-6 inline-flex"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}
          >
            Know Before You Begin
          </span>
          <h1
            id="gfe-heading"
            className="text-5xl sm:text-6xl font-light text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            No surprises.<br />
            <em className="text-[#EDD2FF]">Just clarity.</em>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Before your first session, you will receive a written estimate of what your care will cost. You decide if it works for you — no pressure, no obligation.
          </p>
        </div>
      </section>

      {/* ── PLAIN LANGUAGE EXPLAINER ── */}
      <section className="py-24 bg-white" aria-labelledby="what-is-it-heading">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="badge-pill mb-4">What Is This?</span>
            <h2
              id="what-is-it-heading"
              className="text-4xl sm:text-5xl font-light text-[#1C1C2E] mb-5"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Think of it as a<br />
              <em style={{ color: '#7B2FBE' }}>price quote for your care.</em>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A Good Faith Estimate is simply a written document that tells you — in plain numbers — what your therapy sessions are expected to cost before you commit to anything. It is required by federal law, and we provide it to every new client.
            </p>
          </div>

          {/* Visual example — clear before/after */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{ border: '1px solid #EDD2FF', boxShadow: '0 8px 40px rgba(74,26,122,0.08)' }}
            aria-label="Visual example of how a Good Faith Estimate works"
          >
            {/* Header */}
            <div
              className="px-8 py-5 text-center"
              style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
            >
              <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                Here is what it looks like in practice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EDD2FF]">
              {/* Without GFE */}
              <div className="p-8 text-center" style={{ background: '#FFF8F8' }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: '#FEE2E2' }}
                  aria-hidden="true"
                >
                  <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-red-400 mb-3">Without an Estimate</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You attend your first session and receive a bill for <strong className="text-red-500">$250</strong> — an amount you were not expecting and did not agree to.
                </p>
              </div>

              {/* Arrow / divider */}
              <div className="flex items-center justify-center p-6" style={{ background: '#F7EEFF' }}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#4A1A7A]">Your Estimate</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-[140px] mx-auto">Sent to you in writing before your first appointment</p>
                </div>
              </div>

              {/* With GFE */}
              <div className="p-8 text-center" style={{ background: '#F0FFF4' }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: '#D1FAE5' }}
                  aria-hidden="true"
                >
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3">With Your Estimate</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Before your first session, you know your rate is <strong className="text-green-700">$150 per session</strong>. You agree to it. Your bill matches exactly.
                </p>
              </div>
            </div>

            {/* Bottom note */}
            <div
              className="px-8 py-4 text-center text-sm text-gray-500"
              style={{ background: '#F7EEFF', borderTop: '1px solid #EDD2FF' }}
            >
              If your bill ever exceeds your estimate by <strong>$400 or more</strong>, you have the legal right to dispute it. No exceptions.
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section
        className="py-24"
        style={{ background: '#F7EEFF' }}
        aria-labelledby="included-heading"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="badge-pill mb-4">What You Receive</span>
            <h2
              id="included-heading"
              className="text-4xl sm:text-5xl font-light text-[#1C1C2E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Your estimate includes<br />
              <em style={{ color: '#7B2FBE' }}>all of this.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Session rate',
                body: 'The exact dollar amount you will be charged per session — before you ever walk in the door.',
              },
              {
                title: 'Session length',
                body: 'Whether your session is 45 or 50 minutes, the estimate specifies exactly what you are paying for.',
              },
              {
                title: 'Projected annual cost',
                body: 'An honest estimate of what a full year of care would cost at your agreed frequency — weekly, bi-weekly, or flexible.',
              },
              {
                title: 'Your right to ask questions',
                body: 'You can ask for clarification on any line item, negotiate, or walk away — at any point, with no penalty.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 card-hover"
                style={{ border: '1px solid #EDD2FF', boxShadow: '0 4px 24px rgba(123,47,190,0.06)' }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1C1C2E] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPICAL COST RANGES — dark section ── */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(150deg, #1C1C2E 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
        aria-labelledby="cost-heading"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span
              className="badge-pill mb-6 inline-flex"
              style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}
            >
              Typical Costs
            </span>
            <h2
              id="cost-heading"
              className="text-4xl sm:text-5xl font-light text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What does care cost<br />
              <em className="text-[#EDD2FF]">over a year?</em>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto leading-relaxed">
              These are typical ranges based on how often you attend. Your personalized estimate will reflect your specific plan.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { label: 'Bi-weekly sessions', detail: '~26 sessions / year', low: 3900, high: 4550, color: '#9B59D0' },
              { label: 'Weekly sessions', detail: '~52 sessions / year', low: 7800, high: 9100, color: '#7B2FBE' },
              { label: 'Flexible schedule', detail: '~39 sessions / year', low: 5850, high: 6825, color: '#C9A84C' },
            ].map((row, i) => {
              const maxVal = 10000;
              const lowPct = Math.round((row.low / maxVal) * 100);
              const highPct = Math.round((row.high / maxVal) * 100);
              return (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <span className="text-white font-semibold">{row.label}</span>
                      <span className="text-white/40 text-sm ml-2">({row.detail})</span>
                    </div>
                    <span className="font-bold" style={{ color: row.color === '#C9A84C' ? '#F0DFA0' : '#EDD2FF' }}>
                      ${row.low.toLocaleString()} – ${row.high.toLocaleString()}
                    </span>
                  </div>
                  <div
                    className="relative h-3 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                    role="img"
                    aria-label={`${row.label}: $${row.low.toLocaleString()} to $${row.high.toLocaleString()} per year`}
                  >
                    <div
                      className="absolute top-0 h-full rounded-full opacity-25"
                      style={{ left: `${lowPct}%`, width: `${highPct - lowPct}%`, background: row.color }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ width: `${lowPct}%`, background: `linear-gradient(90deg, ${row.color}99, ${row.color})` }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex justify-between text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    <span>$0</span><span>$5,000</span><span>$10,000</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sliding scale note */}
          <div
            className="mt-12 rounded-2xl p-6 flex items-start gap-4"
            style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.25)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)' }}
              aria-hidden="true"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-serif)' }}>Sliding Scale Available</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                A limited number of reduced-rate slots are available for clients who need them. Bring it up during your free consultation — no paperwork, no judgment.
              </p>
            </div>
          </div>

          <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Estimates only. Your written estimate will reflect your individual plan before your first session.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 50%, #9B59D0 100%)' }}
        aria-label="Get your estimate"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2
            className="text-4xl sm:text-5xl font-light text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to see your<br />
            <em className="text-[#EDD2FF]">personalized estimate?</em>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Schedule a free 15-minute consultation. Your written estimate will be sent before your first session — so you can make a fully informed decision.
          </p>
          <Link to="/schedule" className="btn-primary">
            Request My Estimate
          </Link>
        </div>
      </section>
    </>
  );
};
