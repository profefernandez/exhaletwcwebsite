import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const GoodFaithEstimate: React.FC = () => {
  const [openRight, setOpenRight] = useState<number | null>(null);

  const rights = [
    {
      title: 'Know your costs before you begin',
      body: 'You have the right to receive a written Good Faith Estimate before your first session — or at any time upon request. It must be provided at least 1 business day before your appointment.',
    },
    {
      title: 'Dispute a bill that exceeds your estimate',
      body: 'If your final bill is $400 or more above what was listed in your Good Faith Estimate, you have the right to dispute that charge through the federal dispute resolution process.',
    },
    {
      title: 'Keep a copy for your records',
      body: 'Always save a copy of your Good Faith Estimate. It is your legal documentation of what was agreed upon before services began.',
    },
    {
      title: 'Ask questions — any time',
      body: 'Any conversation about cost counts as a request for a Good Faith Estimate. You do not need to use specific legal language. Simply asking "how much will this cost?" is enough.',
    },
    {
      title: 'No obligation to proceed',
      body: 'Receiving a Good Faith Estimate does not commit you to receiving services. It is information — not a contract.',
    },
    {
      title: 'Protection from balance billing',
      body: 'Providers cannot charge you more than your estimate without your written consent. State laws in Texas may provide additional protections beyond federal requirements.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Good Faith Estimate — Exhale TWC</title>
        <meta name="description" content="Understand your right to a Good Faith Estimate under the No Surprises Act. Exhale TWC is committed to full pricing transparency before your first session." />
      </Helmet>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="gfe-hero-heading"
      >
        <img
          src="/images/healing-bowls-hero.jpg"
          alt="Crystal and Tibetan singing bowls with candles"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(160deg, rgba(28,10,58,0.92) 0%, rgba(45,27,78,0.88) 50%, rgba(74,26,122,0.82) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pt-36 pb-24 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full border mb-7"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#FFE9A8', borderColor: 'rgba(201,168,76,0.4)' }}
          >
            Transparency
          </span>
          <h1
            id="gfe-hero-heading"
            className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            Good Faith<br />
            <em className="font-medium" style={{ color: '#FFE9A8' }}>Estimate.</em>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Under the No Surprises Act, you have the right to know what your care will cost — before you ever walk through the door.
          </p>
        </div>
      </section>

      {/* ── SECTION 1: WHAT IT MEANS FOR YOU ── */}
      <section className="py-24 bg-white" aria-labelledby="gfe-what-heading">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#F7EEFF', color: '#4A1A7A' }}
            >
              What This Means for You
            </span>
            <h2
              id="gfe-what-heading"
              className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1C2E] mb-4 leading-tight"
            >
              No surprises.<br />
              <em className="font-medium" style={{ color: '#4A1A7A' }}>Just clarity.</em>
            </h2>
            <span
              className="block w-12 h-[3px] rounded-full mx-auto mb-8"
              style={{ background: 'linear-gradient(90deg, #B8860B, #C9A84C)' }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: plain language + law citation */}
            <div>
              <p className="text-[#3D3D5C] text-lg leading-relaxed mb-5">
                A <strong className="text-[#1C1C2E]">Good Faith Estimate</strong> is a written document that tells you — in plain language — how much your therapy sessions are expected to cost before you begin.
              </p>
              <p className="text-[#3D3D5C] leading-relaxed mb-5">
                Think of it as a price quote for your care. You receive it before your first session so you can make an informed decision — with no unexpected bills later.
              </p>
              <p className="text-[#3D3D5C] leading-relaxed mb-8">
                This applies to you if you are paying out of pocket, do not have insurance, or choose not to use your insurance for therapy services.
              </p>

              {/* Law citation card */}
              <div
                className="rounded-2xl p-6 border-l-4"
                style={{ background: '#F7EEFF', borderLeftColor: '#4A1A7A' }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
                  style={{ color: '#4A1A7A' }}
                >
                  Federal Law
                </p>
                <p className="font-serif text-lg font-bold text-[#1C1C2E] mb-2">The No Surprises Act</p>
                <p className="text-[#3D3D5C] text-sm leading-relaxed mb-3">
                  Enacted as part of the <strong>Consolidated Appropriations Act, 2021 (Pub. L. 116-260)</strong>, effective January 1, 2022. Codified at <strong>42 U.S.C. § 300gg-136</strong>.
                </p>
                <p className="text-[#3D3D5C] text-sm leading-relaxed mb-4">
                  All licensed healthcare providers — including therapists — must provide a Good Faith Estimate to any client who is uninsured or not using insurance for services.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 text-sm">
                  <a
                    href="https://www.cms.gov/nosurprises"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold hover:underline"
                    style={{ color: '#4A1A7A', textDecoration: 'none' }}
                    aria-label="Visit CMS No Surprises Act website (opens in new tab)"
                  >
                    cms.gov/nosurprises ↗
                  </a>
                  <span className="hidden sm:inline" style={{ color: '#9B59D0' }}>·</span>
                  <a
                    href="https://www.tdi.texas.gov/medical-billing/surprise-balance-billing.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold hover:underline"
                    style={{ color: '#4A1A7A', textDecoration: 'none' }}
                    aria-label="Visit Texas Department of Insurance surprise billing page (opens in new tab)"
                  >
                    Texas TDI Resource ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right: visual before/after */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.14em] mb-4"
                style={{ color: '#4A1A7A' }}
              >
                See the Difference
              </p>

              <div
                className="rounded-2xl p-6 mb-4 border"
                style={{ background: '#FFF5F5', borderColor: '#FECACA' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: '#DC2626' }}
                    aria-hidden="true"
                  >
                    ✕
                  </div>
                  <p className="font-bold text-[#1C1C2E]">Without a Good Faith Estimate</p>
                </div>
                <p className="text-[#3D3D5C] text-sm leading-relaxed">
                  You complete your first session. A week later, a bill arrives for <strong>$250</strong>. You had no idea it would be that much. You feel blindsided — and trust is broken before the work has even begun.
                </p>
              </div>

              <div
                className="rounded-2xl p-6 border"
                style={{ background: '#F0FDF4', borderColor: '#86EFAC' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: '#16A34A' }}
                    aria-hidden="true"
                  >
                    ✓
                  </div>
                  <p className="font-bold text-[#1C1C2E]">With your Good Faith Estimate</p>
                </div>
                <p className="text-[#3D3D5C] text-sm leading-relaxed">
                  Before your first session, you receive a written estimate. Your rate is <strong>$150 per session</strong>, billed monthly. You know exactly what to expect. You arrive ready to focus on your healing — not your bill.
                </p>
              </div>

              <p className="text-xs text-center mt-4 leading-relaxed" style={{ color: '#6B7280' }}>
                Federal law requires this estimate in writing at least 1 business day before your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TEMPLATE EXAMPLE ── */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #1C0A3A 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
        aria-labelledby="gfe-template-heading"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full border mb-5"
              style={{ background: 'rgba(201,168,76,0.15)', color: '#FFE9A8', borderColor: 'rgba(201,168,76,0.4)' }}
            >
              Example Estimate
            </span>
            <h2
              id="gfe-template-heading"
              className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
            >
              What your estimate<br />
              <em className="font-medium" style={{ color: '#FFE9A8' }}>will look like.</em>
            </h2>
            <span
              className="block w-12 h-[3px] rounded-full mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, #B8860B, #C9A84C)' }}
            />
            <p className="max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(230,216,245,0.85)' }}>
              Below is a sample of the Good Faith Estimate you will receive from Exhale TWC before your first session.
            </p>
          </div>

          {/* Template card */}
          <div
            className="bg-white rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
          >
            {/* Card header */}
            <div
              className="px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              style={{ background: 'linear-gradient(135deg, #1C0A3A 0%, #4A1A7A 100%)' }}
            >
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.14em] mb-1"
                  style={{ color: '#FFE9A8' }}
                >
                  Good Faith Estimate
                </p>
                <p className="font-serif text-2xl font-bold text-white">Exhale TWC</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>Therapy, Wellness & Consulting</p>
              </div>
              <div className="text-right">
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Valid for</p>
                <p className="font-bold text-white text-lg">12 months</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>from date of issue</p>
              </div>
            </div>

            <div className="px-8 py-8">
              {/* Provider + Client info */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pb-8"
                style={{ borderBottom: '1px solid #F7EEFF' }}
              >
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.14em] mb-3"
                    style={{ color: '#4A1A7A' }}
                  >
                    Provider Information
                  </p>
                  <p className="text-[#1C1C2E] font-semibold">Exhale TWC</p>
                  <p className="text-[#3D3D5C] text-sm">Licensed Professional Counselor</p>
                  <p className="text-[#3D3D5C] text-sm">NPI: [On file]</p>
                  <p className="text-[#3D3D5C] text-sm">tamara@exhaletwc.com</p>
                  <p className="text-[#3D3D5C] text-sm">(281) 884-3865</p>
                  <p className="text-[#3D3D5C] text-sm">Texas</p>
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.14em] mb-3"
                    style={{ color: '#4A1A7A' }}
                  >
                    Client Information
                  </p>
                  <p className="text-[#1C1C2E] font-semibold">[Client Name]</p>
                  <p className="text-[#3D3D5C] text-sm">Date of Birth: [DOB]</p>
                  <p className="text-[#3D3D5C] text-sm">Date Issued: [Date]</p>
                  <p className="text-[#3D3D5C] text-sm">Payment: Self-Pay / Uninsured</p>
                </div>
              </div>

              {/* Services table */}
              <div className="mb-8">
                <p
                  className="text-xs font-bold uppercase tracking-[0.14em] mb-4"
                  style={{ color: '#4A1A7A' }}
                >
                  Itemized Services
                </p>
                <div
                  className="overflow-x-auto rounded-xl"
                  style={{ border: '1px solid #F7EEFF' }}
                >
                  <table
                    className="w-full text-sm"
                    role="table"
                    aria-label="Itemized services and estimated costs"
                  >
                    <thead>
                      <tr
                        style={{ background: 'linear-gradient(135deg, #1C0A3A 0%, #4A1A7A 100%)' }}
                      >
                        <th className="text-left px-5 py-3 text-white font-bold text-xs uppercase tracking-wider">Service</th>
                        <th className="text-left px-5 py-3 text-white font-bold text-xs uppercase tracking-wider">CPT Code</th>
                        <th className="text-right px-5 py-3 text-white font-bold text-xs uppercase tracking-wider">Per Session</th>
                        <th className="text-right px-5 py-3 text-white font-bold text-xs uppercase tracking-wider">Est. Sessions</th>
                        <th className="text-right px-5 py-3 text-white font-bold text-xs uppercase tracking-wider">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: '#FAFAFA', borderBottom: '1px solid #F7EEFF' }}>
                        <td className="px-5 py-4 text-[#1C1C2E] font-medium">Initial Evaluation</td>
                        <td className="px-5 py-4 text-[#3D3D5C]">90791</td>
                        <td className="px-5 py-4 text-right text-[#1C1C2E] font-semibold">$150</td>
                        <td className="px-5 py-4 text-right text-[#3D3D5C]">1</td>
                        <td className="px-5 py-4 text-right text-[#1C1C2E] font-semibold">$150</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #F7EEFF' }}>
                        <td className="px-5 py-4 text-[#1C1C2E] font-medium">Individual Therapy (60 min)</td>
                        <td className="px-5 py-4 text-[#3D3D5C]">90837</td>
                        <td className="px-5 py-4 text-right text-[#1C1C2E] font-semibold">$150</td>
                        <td className="px-5 py-4 text-right text-[#3D3D5C]">~24</td>
                        <td className="px-5 py-4 text-right text-[#1C1C2E] font-semibold">$3,600</td>
                      </tr>
                      <tr style={{ background: '#FAFAFA', borderBottom: '1px solid #F7EEFF' }}>
                        <td className="px-5 py-4 text-[#1C1C2E] font-medium">Individual Therapy (45 min)</td>
                        <td className="px-5 py-4 text-[#3D3D5C]">90834</td>
                        <td className="px-5 py-4 text-right text-[#1C1C2E] font-semibold">$125</td>
                        <td className="px-5 py-4 text-right text-[#3D3D5C]">—</td>
                        <td className="px-5 py-4 text-right text-[#3D3D5C] italic">if applicable</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr style={{ background: '#F7EEFF' }}>
                        <td
                          colSpan={4}
                          className="px-5 py-4 font-bold text-[#1C1C2E] text-right"
                        >
                          Estimated 12-Month Total
                        </td>
                        <td
                          className="px-5 py-4 text-right font-bold text-lg"
                          style={{ color: '#4A1A7A' }}
                        >
                          $3,750
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <p className="text-xs mt-3 leading-relaxed" style={{ color: '#6B7280' }}>
                  * Based on approximately bi-weekly sessions. Actual frequency and total will be discussed and agreed upon with your therapist.
                </p>
              </div>

              {/* Cost scenarios */}
              <div className="mb-8">
                <p
                  className="text-xs font-bold uppercase tracking-[0.14em] mb-4"
                  style={{ color: '#4A1A7A' }}
                >
                  Common Session Frequencies
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Every other week', sessions: '~26 sessions', total: '~$3,900', highlight: true, note: 'Most common' },
                    { label: 'Once a week', sessions: '~52 sessions', total: '~$7,800', highlight: false, note: 'Intensive support' },
                    { label: 'Once a month', sessions: '~12 sessions', total: '~$1,800', highlight: false, note: 'Maintenance' },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 text-center"
                      style={{
                        background: s.highlight
                          ? 'linear-gradient(135deg, #1C0A3A, #4A1A7A)'
                          : '#F7EEFF',
                      }}
                    >
                      <span
                        className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2"
                        style={
                          s.highlight
                            ? { background: 'rgba(201,168,76,0.25)', color: '#FFE9A8' }
                            : { background: '#EDD2FF', color: '#4A1A7A' }
                        }
                      >
                        {s.note}
                      </span>
                      <p
                        className="font-semibold text-sm mb-1"
                        style={{ color: s.highlight ? '#E6D8F5' : '#3D3D5C' }}
                      >
                        {s.label}
                      </p>
                      <p
                        className="text-xs mb-2"
                        style={{ color: s.highlight ? 'rgba(230,216,245,0.65)' : '#6B7280' }}
                      >
                        {s.sessions} / year
                      </p>
                      <p
                        className="font-serif text-2xl font-bold"
                        style={{ color: s.highlight ? '#FFE9A8' : '#4A1A7A' }}
                      >
                        {s.total}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div
                className="rounded-xl p-5 border"
                style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
                  style={{ color: '#92400E' }}
                >
                  Important Notice
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#78350F' }}>
                  This estimate is not a contract and does not require you to obtain services from Exhale TWC. Actual services, session frequency, and charges may differ based on your individual treatment needs. If your actual bill is <strong>$400 or more above</strong> this estimate, you have the right to dispute the charge. This estimate is valid for 12 months from the date of issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: YOUR RIGHTS ── */}
      <section className="py-24 bg-white" aria-labelledby="gfe-rights-heading">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#F7EEFF', color: '#4A1A7A' }}
            >
              Know Your Rights
            </span>
            <h2
              id="gfe-rights-heading"
              className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1C2E] mb-4 leading-tight"
            >
              You are protected<br />
              <em className="font-medium" style={{ color: '#4A1A7A' }}>by federal law.</em>
            </h2>
            <span
              className="block w-12 h-[3px] rounded-full mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, #B8860B, #C9A84C)' }}
            />
            <p className="text-[#3D3D5C] max-w-xl mx-auto leading-relaxed">
              Under the No Surprises Act (42 U.S.C. § 300gg-136), every client who pays out of pocket has the following rights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {rights.map((r, i) => (
              <button
                key={i}
                onClick={() => setOpenRight(openRight === i ? null : i)}
                className="text-left rounded-2xl p-6 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: openRight === i
                    ? 'linear-gradient(135deg, #1C0A3A 0%, #4A1A7A 100%)'
                    : '#F7EEFF',
                  boxShadow: openRight === i
                    ? '0 12px 32px rgba(74,26,122,0.3)'
                    : '0 4px 16px rgba(74,26,122,0.06)',
                  outline: 'none',
                }}
                aria-expanded={openRight === i}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className="font-serif text-3xl font-bold leading-none"
                    style={{ color: openRight === i ? 'rgba(255,233,168,0.4)' : 'rgba(74,26,122,0.18)' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-xl font-bold leading-none mt-1"
                    style={{ color: openRight === i ? '#FFE9A8' : '#4A1A7A' }}
                    aria-hidden="true"
                  >
                    {openRight === i ? '−' : '+'}
                  </span>
                </div>
                <h3
                  className="font-serif text-lg font-bold leading-snug"
                  style={{ color: openRight === i ? '#ffffff' : '#1C1C2E' }}
                >
                  {r.title}
                </h3>
                {openRight === i && (
                  <p
                    className="text-sm leading-relaxed mt-3"
                    style={{ color: 'rgba(230,216,245,0.9)' }}
                  >
                    {r.body}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Contact resources */}
          <div
            className="rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            style={{ background: '#F7EEFF' }}
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
                style={{ color: '#4A1A7A' }}
              >
                Federal Resource
              </p>
              <p className="font-serif text-lg font-bold text-[#1C1C2E] mb-1">
                Dept. of Health & Human Services
              </p>
              <a
                href="https://www.cms.gov/nosurprises"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm block mb-0.5 hover:underline"
                style={{ color: '#4A1A7A', textDecoration: 'none' }}
              >
                cms.gov/nosurprises ↗
              </a>
              <a
                href="tel:8776966775"
                className="text-sm hover:underline"
                style={{ color: '#3D3D5C', textDecoration: 'none' }}
              >
                1-877-696-6775
              </a>
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
                style={{ color: '#4A1A7A' }}
              >
                Texas Resource
              </p>
              <p className="font-serif text-lg font-bold text-[#1C1C2E] mb-1">
                Texas Dept. of Insurance
              </p>
              <a
                href="https://www.tdi.texas.gov/medical-billing/surprise-balance-billing.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm block mb-0.5 hover:underline"
                style={{ color: '#4A1A7A', textDecoration: 'none' }}
              >
                tdi.texas.gov ↗
              </a>
              <a
                href="tel:8002523439"
                className="text-sm hover:underline"
                style={{ color: '#3D3D5C', textDecoration: 'none' }}
              >
                1-800-252-3439
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-24 overflow-hidden"
        aria-labelledby="gfe-cta-heading"
      >
        <img
          src="/images/ocean-calm.jpg"
          alt="Serene ocean shoreline at dawn"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(28,10,58,0.92) 0%, rgba(74,26,122,0.88) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <h2
            id="gfe-cta-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}
          >
            Questions about cost?<br />
            <em className="font-medium" style={{ color: '#FFE9A8' }}>Let's talk first.</em>
          </h2>
          <p
            className="text-lg mb-9 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Your free 15-minute consultation is the perfect time to ask about rates, your estimate, and what to expect. No pressure, no commitment.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)',
              color: '#1C1C2E',
              boxShadow: '0 6px 18px rgba(184,134,11,0.25)',
              textDecoration: 'none',
            }}
          >
            Book a Free Consultation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
};
