import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BOOKING_URL = 'https://calendly.com/exhaletwc/free-15-minute-consultation?month=2026-04';
const CONTACT_EMAIL = 'tamara@exhaletwc.com';
const CONTACT_PHONE_DISPLAY = '(281) 884-3865';
const CONTACT_PHONE_TEL = '+12818843865';

const faqs = [
  {
    q: 'What happens in a 15-minute consultation?',
    a: 'A relaxed conversation. You share what brought you here, I share how I work, and we see if it feels like a fit. There is no pressure and no commitment — this call is completely free.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Exhale TWC is a private-pay practice. A superbill can be provided for out-of-network reimbursement through your insurance. See the Good Faith Estimate page for fee details.',
  },
  {
    q: 'Is therapy confidential?',
    a: 'Yes. Your privacy is protected under HIPAA. Limited exceptions (safety concerns, court orders) are reviewed with you before therapy begins.',
  },
  {
    q: 'How long is each session?',
    a: 'Individual sessions are 50 minutes. Extended sessions are available by request for EMDR intensives and specialized work.',
  },
];

export const Schedule: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Schedule a Consultation | Exhale Therapy, Wellness & Consulting</title>
        <meta
          name="description"
          content="Book your free 15-minute consultation with Exhale TWC. Warm, confidential, and culturally affirming therapy in Texas."
        />
      </Helmet>

      <div className="pt-[120px]">
        {/* HERO */}
        <section
          className="relative overflow-hidden text-white"
          style={{
            background: 'linear-gradient(160deg, #1C0A3A 0%, #2D1B4E 50%, #4A1A7A 100%)',
          }}
        >
          <img
            src="/images/hero-ocean.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 65% at 50% 42%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0) 85%)' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-24 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full border border-[#FFE9A8]/45 bg-[#F0DFA0]/15 text-[#FFE9A8] mb-6">
              Begin Your Journey
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.02] tracking-tight mb-5" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.85), 0 6px 28px rgba(0,0,0,0.75)' }}>
              Your healing begins with <em className="text-[#FFE9A8] font-medium">one conversation.</em>
            </h1>
            <p className="text-lg md:text-xl text-[#E6D8F5] max-w-2xl mx-auto">
              A warm, confidential 15-minute consultation. No pressure, no commitment.
            </p>
          </div>
        </section>

        {/* BOOKING CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <div
              className="rounded-3xl p-10 md:p-14"
              style={{
                background: 'linear-gradient(135deg, #F7EEFF 0%, #ffffff 100%)',
                border: '1px solid rgba(123,47,190,0.12)',
                boxShadow: '0 22px 60px rgba(74,26,122,0.1)',
              }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C2E] mb-4">
                Book your <em className="text-[#4A1A7A] font-medium">free 15-minute consultation</em>
              </h2>
              <p className="text-[#3D3D5C] text-lg mb-8 max-w-xl mx-auto">
                Choose a time that works for you. You'll receive a confirmation email with everything you need before we meet.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold no-underline transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)',
                  color: '#1C1C2E',
                  boxShadow: '0 6px 18px rgba(184,134,11,0.25)',
                }}
              >
                Open Booking Calendar <span aria-hidden="true">→</span>
              </a>
              <p className="mt-5 text-sm text-[#6B7280]">
                Prefer to reach out first? Contact options below.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FALLBACKS */}
        <section className="py-16" style={{ background: '#F7EEFF' }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full bg-[#EDD2FF] text-[#4A1A7A] mb-4">
                Other ways to connect
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C2E]">
                Get in touch directly
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 p-5 rounded-xl bg-white border border-[#EDD2FF] no-underline text-[#1C1C2E] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <span className="w-10 h-10 rounded-full bg-[#F7EEFF] grid place-items-center text-[#4A1A7A] flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#6B7280] mb-0.5">Email</div>
                  <div className="font-semibold text-sm truncate">{CONTACT_EMAIL}</div>
                </div>
              </a>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="flex items-center gap-3 p-5 rounded-xl bg-white border border-[#EDD2FF] no-underline text-[#1C1C2E] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <span className="w-10 h-10 rounded-full bg-[#F7EEFF] grid place-items-center text-[#4A1A7A] flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#6B7280] mb-0.5">Phone</div>
                  <div className="font-semibold text-sm">{CONTACT_PHONE_DISPLAY}</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full bg-[#F7EEFF] text-[#4A1A7A] mb-4">
                Frequently Asked
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C2E]">
                What you might be wondering
              </h2>
              <span className="block mx-auto mt-5 w-12 h-[3px] rounded-full" style={{ background: 'linear-gradient(90deg, #B8860B, #C9A84C)' }} />
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group p-5 rounded-xl bg-white border border-[#EDD2FF] hover:border-[#C9A84C] transition-colors"
                >
                  <summary className="cursor-pointer font-serif text-xl text-[#1C1C2E] font-medium list-none flex justify-between items-center gap-4">
                    <span>{f.q}</span>
                    <span className="text-[#4A1A7A] transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-[#3D3D5C] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-[#3D3D5C] mb-4">Still have questions?</p>
              <Link
                to="/good-faith-estimate"
                className="inline-flex items-center gap-2 text-[#4A1A7A] font-bold no-underline hover:text-[#7B2FBE]"
              >
                See the Good Faith Estimate <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

