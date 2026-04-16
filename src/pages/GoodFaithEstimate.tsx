import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const feeItems = [
  { service: 'Initial Clinical Assessment (60 min)', code: '90791', rate: '$175', notes: 'First session — comprehensive evaluation' },
  { service: 'Individual Therapy Session (50 min)', code: '90837', rate: '$150', notes: 'Standard weekly session rate' },
  { service: 'Individual Therapy Session (45 min)', code: '90834', rate: '$130', notes: 'Shorter session option' },
  { service: 'Business / Workspace Consultation (60 min)', code: 'N/A', rate: '$200', notes: 'Organizational wellness consultation' },
  { service: 'Group Therapy Session (90 min)', code: '90853', rate: '$75', notes: 'Coming soon — per-person rate' },
  { service: 'Crisis Support (phone, 15 min)', code: '98966', rate: '$50', notes: 'Between-session urgent support' },
];

const steps = [
  {
    number: '01',
    title: 'You Request Services',
    description: 'You reach out to schedule a consultation or begin therapy. At this point, no costs have been incurred.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Provide a Written Estimate',
    description: 'Before your first session, we provide a written Good Faith Estimate listing expected service codes, session rates, and a projected 12-month cost range.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'You Review & Agree',
    description: 'You review the estimate at no obligation. You may ask questions, negotiate, or choose not to proceed — with no penalty.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Services Begin',
    description: 'Once you are comfortable with the estimate, services begin. You will receive an invoice after each session that matches the agreed rates.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export const GoodFaithEstimate: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Good Faith Estimate — Exhale TWC</title>
        <meta name="description" content="Texas Good Faith Estimate for therapy and consulting services at Exhale TWC. Transparent pricing in compliance with the No Surprises Act." />
      </Helmet>

      {/* ── HERO ── */}
      <section
        className="pt-40 pb-24"
        style={{ background: 'linear-gradient(150deg, #1C1C2E 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
        aria-label="Good Faith Estimate page header"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span className="badge-pill mb-6 inline-flex" style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}>
            Transparency in Care
          </span>
          <h1 className="text-5xl sm:text-6xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Good Faith Estimate<br /><em className="text-[#EDD2FF]">Texas</em>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Under the federal No Surprises Act and Texas state regulations, you have the right to know what your care will cost — before it begins. We believe financial clarity is part of holistic care.
          </p>
        </div>
      </section>

      {/* ── LEGAL NOTICE BANNER ── */}
      <section
        className="py-8"
        style={{ background: 'linear-gradient(135deg, #C9A84C18 0%, #F0DFA010 100%)', borderBottom: '1px solid #C9A84C33' }}
        aria-label="Legal notice"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0DFA0 100%)' }}
            aria-hidden="true"
          >
            <svg className="w-5 h-5 text-[#1C1C2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-[#3D3D5C] leading-relaxed font-medium">
              <strong>Your Rights Under the No Surprises Act (Effective January 1, 2022):</strong> You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees. Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your scheduled service. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. For questions or more information about your right to a Good Faith Estimate, visit <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#7B2FBE' }}>cms.gov/nosurprises</a> or call 1-800-985-3059.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — VISUAL EXPLAINER ── */}
      <section className="py-24 bg-white" aria-label="How the Good Faith Estimate process works">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-4">How It Works</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#1C1C2E] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              What to expect,<br /><em style={{ color: '#7B2FBE' }}>step by step.</em>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              The Good Faith Estimate process is straightforward. Here is exactly what happens from the moment you reach out to the moment your care begins.
            </p>
          </div>

          {/* Visual step flow */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-10 left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-0.5"
              style={{ background: 'linear-gradient(90deg, #4A1A7A, #7B2FBE, #9B59D0, #C9A84C)' }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center relative">
                  {/* Step circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative z-10 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)', color: 'white' }}
                    aria-hidden="true"
                  >
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: '#C9A84C' }}
                  >
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1C1C2E] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual cost range explainer */}
          <div
            className="mt-20 rounded-3xl p-8 md:p-12"
            style={{ background: 'linear-gradient(135deg, #F7EEFF 0%, #EDD2FF33 100%)', border: '1px solid #EDD2FF' }}
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-light text-[#1C1C2E] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                What does a year of care cost?
              </h3>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                The estimate below shows a typical 12-month range based on session frequency. Your actual costs depend on your individual treatment plan.
              </p>
            </div>

            {/* Cost range visual bars */}
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                { label: 'Bi-weekly sessions (26/yr)', low: 3900, high: 4550, color: '#7B2FBE' },
                { label: 'Weekly sessions (52/yr)', low: 7800, high: 9100, color: '#4A1A7A' },
                { label: 'Intensive (weekly + bi-weekly)', low: 5850, high: 6825, color: '#9B59D0' },
              ].map((row, i) => {
                const maxVal = 10000;
                const lowPct = Math.round((row.low / maxVal) * 100);
                const highPct = Math.round((row.high / maxVal) * 100);
                return (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#1C1C2E]">{row.label}</span>
                      <span className="text-sm font-bold" style={{ color: row.color }}>
                        ${row.low.toLocaleString()} – ${row.high.toLocaleString()}
                      </span>
                    </div>
                    <div className="relative h-4 rounded-full bg-white overflow-hidden" style={{ border: '1px solid #EDD2FF' }}>
                      {/* Low bar */}
                      <div
                        className="absolute top-0 left-0 h-full rounded-full opacity-30"
                        style={{ width: `${highPct}%`, background: row.color }}
                        aria-hidden="true"
                      />
                      {/* High bar */}
                      <div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{ width: `${lowPct}%`, background: `linear-gradient(90deg, ${row.color}, ${row.color}cc)` }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>$0</span>
                      <span>$5,000</span>
                      <span>$10,000</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-xs text-gray-400 mt-8 max-w-lg mx-auto">
              * These are estimates only. Actual costs may vary based on session length, frequency, and individual treatment needs. A personalized written estimate will be provided before your first session.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEE SCHEDULE TABLE ── */}
      <section
        className="py-24"
        style={{ background: '#F7EEFF' }}
        aria-label="Fee schedule"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="badge-pill mb-4">Fee Schedule</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>
              Standard rates
            </h2>
            <p className="text-gray-500 mt-4 text-base max-w-lg mx-auto">
              All rates are per session. A personalized Good Faith Estimate will be provided in writing before your first appointment.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: '1px solid #EDD2FF' }}>
            {/* Table header */}
            <div
              className="grid grid-cols-12 gap-4 px-6 py-4 text-xs font-bold tracking-widest uppercase"
              style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)', color: 'white' }}
            >
              <div className="col-span-5">Service</div>
              <div className="col-span-2 text-center">CPT Code</div>
              <div className="col-span-2 text-center">Rate</div>
              <div className="col-span-3">Notes</div>
            </div>
            {/* Table rows */}
            {feeItems.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 px-6 py-5 items-center text-sm"
                style={{
                  background: i % 2 === 0 ? 'white' : '#FAF5FF',
                  borderBottom: i < feeItems.length - 1 ? '1px solid #EDD2FF' : 'none',
                }}
              >
                <div className="col-span-5 font-medium text-[#1C1C2E]">{item.service}</div>
                <div className="col-span-2 text-center text-gray-500 font-mono text-xs">{item.code}</div>
                <div className="col-span-2 text-center font-bold" style={{ color: '#4A1A7A' }}>{item.rate}</div>
                <div className="col-span-3 text-gray-500 text-xs">{item.notes}</div>
              </div>
            ))}
          </div>

          {/* Sliding scale note */}
          <div
            className="mt-8 rounded-2xl p-6 flex items-start gap-4"
            style={{ background: 'white', border: '1px solid #EDD2FF', boxShadow: '0 4px 24px rgba(123,47,190,0.06)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0DFA0 100%)' }}
              aria-hidden="true"
            >
              <svg className="w-5 h-5 text-[#1C1C2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C1C2E] mb-1">Sliding Scale Availability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A limited number of sliding scale slots are available for clients who demonstrate financial need. Please discuss this during your free consultation. We are committed to making care accessible without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUR RIGHTS ── */}
      <section className="py-24 bg-white" aria-label="Your rights as a patient">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="badge-pill mb-4">Know Your Rights</span>
            <h2 className="text-4xl font-light text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>
              You are protected by law.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Right to a Written Estimate', body: 'You have the right to receive a written Good Faith Estimate before your first scheduled appointment, at no cost to you.' },
              { title: 'Right to Dispute Unexpected Bills', body: 'If your final bill exceeds your Good Faith Estimate by $400 or more, you have the right to dispute the bill through the federal dispute resolution process.' },
              { title: 'Right to Ask Questions', body: 'You may ask for an itemized estimate at any time. We will explain every line item clearly and without jargon.' },
              { title: 'Right to Choose Your Provider', body: 'You are never required to continue with a provider. You may seek a second opinion or switch providers at any time without penalty.' },
            ].map((right, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{ background: '#F7EEFF', border: '1px solid #EDD2FF' }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-[#1C1C2E] text-base" style={{ fontFamily: 'var(--font-serif)' }}>{right.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-9">{right.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 50%, #9B59D0 100%)' }}
        aria-label="Request your estimate"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Ready to get your<br />personalized estimate?
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Schedule a free 15-minute consultation and we will provide your written Good Faith Estimate before your first session — no surprises, no pressure.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-[#1C1C2E] transition-all duration-200 hover:opacity-90 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0DFA0 100%)' }}
          >
            Request My Estimate
          </Link>
        </div>
      </section>
    </>
  );
};
