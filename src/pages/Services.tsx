import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    title: 'Individual Therapy',
    subtitle: 'ONE-ON-ONE, DEEPLY PERSONAL',
    description:
      'Private, confidential sessions designed around your unique needs. Whether you are navigating anxiety, depression, grief, trauma, or life transitions, we create a space where your story is honored and your healing is prioritized.',
    highlights: ['50-minute weekly sessions', 'Personalized treatment planning', 'Ongoing progress review', 'Crisis support resources'],
    image: '/images/service-individual.jpg',
    comingSoon: false,
  },
  {
    title: 'Consulting for Business & Workspaces',
    subtitle: 'WELLNESS THAT WORKS FOR YOUR TEAM',
    description:
      'Organizations thrive when their people do. We partner with businesses, nonprofits, and workplace teams to build cultures of psychological safety, reduce burnout, and embed mental wellness into the fabric of your organization — not as an afterthought, but as a foundation.',
    highlights: ['Workplace mental health assessments', 'Staff wellness workshops', 'Leadership coaching & support', 'Culturally responsive DEI integration'],
    image: '/images/service-online.jpg',
    comingSoon: false,
  },
  {
    title: 'Group Therapy',
    subtitle: 'HEALING IN COMMUNITY',
    description:
      'There is profound power in healing alongside others who truly understand your experience. Our upcoming group therapy offerings will provide a structured, therapist-led space for Black and Brown individuals to process, connect, and grow together.',
    highlights: ['Facilitated by a licensed therapist', 'Culturally affirming group dynamics', 'Structured yet flexible format', 'Community and connection'],
    image: '/images/service-trauma.jpg',
    comingSoon: true,
  },
];

const faqs = [
  {
    q: 'How do I know if therapy is right for me?',
    a: 'If you are experiencing persistent stress, emotional pain, relationship difficulties, or simply feel stuck, therapy can provide meaningful support. A free consultation is the best first step.',
  },
  {
    q: 'Do you work with clients who are not in crisis?',
    a: 'Absolutely. Many clients come to therapy for personal growth, self-awareness, and proactive wellness — not only in moments of crisis.',
  },
  {
    q: 'How long does therapy typically last?',
    a: 'Duration varies by individual. Some clients find significant relief in 8–12 sessions; others benefit from longer-term work. We discuss this collaboratively and revisit it regularly.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'We are currently a private-pay practice. We can provide superbills for potential out-of-network reimbursement. Contact us to discuss options.',
  },
  {
    q: 'What is a Good Faith Estimate?',
    a: 'Under the No Surprises Act, you have the right to know expected costs before beginning services. We provide a written estimate before your first session.',
  },
];

export const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services — Exhale TWC</title>
        <meta name="description" content="Holistic wellness therapy services including individual therapy, business consulting, and group therapy for Black and Brown communities." />
      </Helmet>

      {/* ── HERO — Healing bowls photo with purple overlay ── */}
      <section className="relative pt-44 pb-28 overflow-hidden" aria-label="Services page header">
        <img
          src="/images/healing-bowls-hero.jpg"
          alt="Healing bowls and candles representing holistic wellness"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(160deg, rgba(28,10,58,0.82) 0%, rgba(74,26,122,0.78) 60%, rgba(123,47,190,0.72) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full border mb-6"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#FFE9A8', borderColor: 'rgba(201,168,76,0.4)' }}
          >
            What We Offer
          </span>
          <h1
            className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            Services designed<br />
            <em className="font-medium" style={{ color: '#FFE9A8' }}>for your whole self.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every service at Exhale TWC is delivered through a culturally affirming, trauma-informed, and holistic lens — because you are more than a symptom.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST — white background, alternating layout ── */}
      <section className="py-24 bg-white" aria-label="Our services">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col divide-y divide-[#EDD2FF]/40">
          {services.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 first:pt-0"
            >
              {/* Image */}
              <div className={i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  {s.comingSoon && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: 'rgba(74,26,122,0.72)' }}
                    >
                      <div className="text-center px-8">
                        <span
                          className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-3"
                          style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E' }}
                        >
                          Coming Soon
                        </span>
                        <p className="text-white/80 text-sm mt-2">Join the waitlist to be notified when group sessions open.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span
                    className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-1 rounded-full border"
                    style={{ background: '#F7EEFF', color: '#4A1A7A', borderColor: '#EDD2FF' }}
                  >
                    {s.subtitle}
                  </span>
                  {s.comingSoon && (
                    <span
                      className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase"
                      style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E' }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
                <h2
                  className="font-serif text-4xl font-bold text-[#1C1C2E] mb-3 leading-tight"
                >
                  {s.title}
                </h2>
                {/* Gold underline divider */}
                <span
                  className="block w-10 h-[3px] rounded-full mb-5"
                  style={{ background: 'linear-gradient(90deg, #B8860B, #C9A84C)' }}
                />
                <p className="text-[#3D3D5C] leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2.5 mb-8" aria-label={`${s.title} highlights`}>
                  {s.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-[#3D3D5C]">
                      <span
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: 'rgba(74,26,122,0.1)' }}
                        aria-hidden="true"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#4A1A7A" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/schedule"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E', boxShadow: '0 4px 14px rgba(184,134,11,0.22)' }}
                >
                  {s.comingSoon ? 'Join the Waitlist' : 'Book This Service'} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GOOD FAITH ESTIMATE CALLOUT — on-brand ── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #1C0A3A 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
        aria-label="Good Faith Estimate notice"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div
            className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center mx-auto md:mx-0"
            style={{ background: 'rgba(201,168,76,0.18)', border: '1px solid rgba(201,168,76,0.3)' }}
            aria-hidden="true"
          >
            <svg className="w-8 h-8" style={{ color: '#FFE9A8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-2xl font-bold text-white mb-2">
              Transparency in Pricing
            </h2>
            <p className="text-[#E6D8F5] text-sm leading-relaxed">
              Under the No Surprises Act, you have the right to know what to expect before your first session. We provide a written Good Faith Estimate so there are never any surprises.
            </p>
          </div>
          <Link
            to="/good-faith-estimate"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E', boxShadow: '0 4px 14px rgba(184,134,11,0.22)' }}
          >
            View Estimate <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: '#F7EEFF' }} aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full bg-[#EDD2FF] text-[#4A1A7A] mb-4"
            >
              Common Questions
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1C1C2E]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6"
                style={{ boxShadow: '0 2px 12px rgba(74,26,122,0.07)' }}
              >
                <h3 className="font-serif text-lg font-bold text-[#1C1C2E] mb-2">{f.q}</h3>
                <p className="text-[#3D3D5C] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden" aria-label="Schedule a consultation">
        <img
          src="/images/ocean-calm.jpg"
          alt="Serene ocean shoreline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(28,10,58,0.90) 0%, rgba(74,26,122,0.87) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}
          >
            Ready to take the<br /><em className="font-medium" style={{ color: '#FFE9A8' }}>first step?</em>
          </h2>
          <p className="text-lg text-white/80 mb-9 max-w-xl mx-auto leading-relaxed">
            Schedule a complimentary 15-minute consultation. No pressure, no commitment.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold no-underline transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E', boxShadow: '0 6px 18px rgba(184,134,11,0.25)' }}
          >
            Schedule Your Free Consultation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
};
