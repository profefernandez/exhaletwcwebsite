import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    number: '01',
    title: 'Individual Therapy',
    subtitle: 'One-on-one, deeply personal',
    description:
      'Private, confidential sessions designed around your unique needs. Whether you are navigating anxiety, depression, grief, trauma, or life transitions, we create a space where your story is honored and your healing is prioritized.',
    highlights: ['50-minute weekly sessions', 'Personalized treatment planning', 'Ongoing progress review', 'Crisis support resources'],
    color: '#7B2FBE',
    image: '/images/service-individual.jpg',
    comingSoon: false,
  },
  {
    number: '02',
    title: 'Consulting for Business & Workspaces',
    subtitle: 'Wellness that works for your team',
    description:
      'Organizations thrive when their people do. We partner with businesses, nonprofits, and workplace teams to build cultures of psychological safety, reduce burnout, and embed mental wellness into the fabric of your organization — not as an afterthought, but as a foundation.',
    highlights: ['Workplace mental health assessments', 'Staff wellness workshops', 'Leadership coaching & support', 'Culturally responsive DEI integration'],
    color: '#4A1A7A',
    image: '/images/service-online.jpg',
    comingSoon: false,
  },
  {
    number: '03',
    title: 'Group Therapy',
    subtitle: 'Healing in community',
    description:
      'There is profound power in healing alongside others who truly understand your experience. Our upcoming group therapy offerings will provide a structured, therapist-led space for Black and Brown individuals to process, connect, and grow together.',
    highlights: ['Facilitated by a licensed therapist', 'Culturally affirming group dynamics', 'Structured yet flexible format', 'Community and connection'],
    color: '#9B59D0',
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
    a: 'As required by Texas law and federal No Surprises Act regulations, we provide a Good Faith Estimate of expected costs before your first session. This helps you understand your financial commitment with full transparency.',
  },
];

export const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services — Exhale TWC</title>
        <meta name="description" content="Holistic wellness therapy services including individual therapy, business consulting, and group therapy for Black and Brown communities." />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <section
        className="pt-40 pb-24"
        style={{ background: 'linear-gradient(150deg, #1C1C2E 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
        aria-label="Services page header"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span className="badge-pill mb-6 inline-flex" style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}>
            What We Offer
          </span>
          <h1 className="text-5xl sm:text-6xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Services designed<br /><em className="text-[#EDD2FF]">for your whole self.</em>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Every service at Exhale TWC is delivered through a culturally affirming, trauma-informed, and holistic lens — because you are more than a symptom.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="py-24 bg-white" aria-label="Our services">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-20">
          {services.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Visual block */}
              <div className={i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  {s.comingSoon && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: 'rgba(74,26,122,0.72)', backdropFilter: 'blur(2px)' }}
                    >
                      <div className="text-center px-8">
                        <span
                          className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-3"
                          style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0DFA0 100%)', color: '#1C1C2E' }}
                        >
                          Coming Soon
                        </span>
                        <p className="text-white/80 text-sm mt-2">Join the waitlist to be notified when group sessions open.</p>
                        <Link
                          to="/schedule"
                          className="mt-4 inline-block text-xs font-semibold underline"
                          style={{ color: '#EDD2FF' }}
                        >
                          Join the waitlist →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge-pill">{s.subtitle}</span>
                  {s.comingSoon && (
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                      style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0DFA0 100%)', color: '#1C1C2E' }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
                <h2 className="text-4xl font-light text-[#1C1C2E] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>{s.title}</h2>
                <span className="divider-gold mb-6" />
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2.5 mb-8" aria-label={`${s.title} highlights`}>
                  {s.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                      <span
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: `${s.color}18` }}
                        aria-hidden="true"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke={s.color} strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                {!s.comingSoon ? (
                  <Link
                    to="/schedule"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                    style={{ color: s.color }}
                  >
                    Book this service
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    to="/schedule"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                    style={{ color: s.color }}
                  >
                    Join the waitlist
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GOOD FAITH ESTIMATE CALLOUT ── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #F7EEFF 0%, #EDD2FF22 100%)', borderTop: '1px solid #EDD2FF', borderBottom: '1px solid #EDD2FF' }}
        aria-label="Good Faith Estimate notice"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center gap-8">
          <div
            className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
            aria-hidden="true"
          >
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#1C1C2E] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Good Faith Estimate — Texas
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Under the No Surprises Act and Texas state law, you have the right to receive a Good Faith Estimate of expected costs before beginning services. We are committed to full transparency about fees so you can make informed decisions about your care.
            </p>
          </div>
          <Link
            to="/good-faith-estimate"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white no-underline transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
          >
            View Estimate
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: '#F7EEFF' }} aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="badge-pill mb-4">FAQ</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>
              Common questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7"
                style={{ boxShadow: '0 4px 24px rgba(123,47,190,0.06)', border: '1px solid #EDD2FF' }}
              >
                <h3 className="text-lg font-medium text-[#1C1C2E] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 50%, #9B59D0 100%)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Ready to begin?
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Schedule a complimentary 15-minute consultation and let us find the right path forward together.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-[#1C1C2E] transition-all duration-200 hover:opacity-90 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0DFA0 100%)' }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};
