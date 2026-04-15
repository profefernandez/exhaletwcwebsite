import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="#7B2FBE" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#7B2FBE" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="18" r="5" stroke="#7B2FBE" strokeWidth="2" fill="#EDD2FF"/>
      </svg>
    ),
    title: 'Individual Therapy',
    description:
      'One-on-one sessions tailored to your unique story. We work together to uncover patterns, process pain, and build lasting resilience.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="#7B2FBE" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M14 28a10 10 0 0 1 20 0" stroke="#7B2FBE" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="20" r="4" stroke="#7B2FBE" strokeWidth="2" fill="#EDD2FF"/>
        <circle cx="30" cy="20" r="4" stroke="#7B2FBE" strokeWidth="2" fill="#EDD2FF"/>
      </svg>
    ),
    title: 'Culturally Affirming Care',
    description:
      'Therapy that honors your cultural identity. Our practice centers the lived experiences of Black and Brown communities without apology.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="#7B2FBE" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M24 14v6M24 28v6M14 24h6M28 24h6" stroke="#7B2FBE" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="5" stroke="#7B2FBE" strokeWidth="2" fill="#EDD2FF"/>
      </svg>
    ),
    title: 'Holistic Wellness',
    description:
      'Mind, body, and spirit are interconnected. We integrate somatic awareness, mindfulness, and evidence-based modalities for whole-person healing.',
  },
];

const testimonials = [
  {
    quote: "Working with Exhale TWC changed my relationship with myself. For the first time, I felt truly seen and understood.",
    name: "M.T.",
    detail: "Individual Therapy Client",
  },
  {
    quote: "I was skeptical about therapy, but this practice made me feel safe from the very first session. The cultural competency is real.",
    name: "D.R.",
    detail: "Online Therapy Client",
  },
  {
    quote: "The holistic approach here is unlike anything I've experienced. I leave every session feeling grounded and empowered.",
    name: "A.W.",
    detail: "Ongoing Wellness Client",
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Exhale TWC — Holistic Wellness Therapy</title>
        <meta name="description" content="Premium holistic wellness therapy for Black and Brown communities. Culturally affirming, evidence-based care." />
      </Helmet>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #1C1C2E 0%, #2D1B4E 45%, #4A1A7A 100%)' }}
        aria-label="Welcome to Exhale TWC"
      >
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #9B59D0, transparent)' }} aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-32 pb-24 text-center">
          <span className="badge-pill mb-8 inline-flex" style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}>
            Holistic Wellness Therapy
          </span>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            You deserve to heal<br />
            <em className="font-normal" style={{ color: '#EDD2FF' }}>fully and freely.</em>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Exhale TWC offers premium, culturally affirming therapy for Black and Brown individuals ready to invest in their whole-person wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-[#1C1C2E] transition-all duration-200 hover:opacity-90 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0DFA0 100%)' }}
            >
              Begin Your Journey
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white border border-white/30 transition-all duration-200 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
          <span className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-sans)' }}>Scroll</span>
          <svg className="w-4 h-4 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── INTRO / TRUST SECTION ── */}
      <section className="py-24 bg-white" aria-label="About our approach">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual placeholder — therapist image area */}
            <div className="relative order-2 lg:order-1">
              <div
                className="w-full aspect-[4/5] rounded-3xl overflow-hidden flex items-end justify-center"
                style={{ background: 'linear-gradient(160deg, #EDD2FF 0%, #9B59D0 60%, #4A1A7A 100%)' }}
                aria-label="Therapist portrait"
              >
                <div className="w-full h-3/4 flex items-center justify-center">
                  <svg viewBox="0 0 200 280" fill="none" className="w-48 opacity-40" aria-hidden="true">
                    <ellipse cx="100" cy="80" rx="45" ry="50" fill="white"/>
                    <path d="M30 280 Q30 180 100 160 Q170 180 170 280Z" fill="white"/>
                  </svg>
                </div>
              </div>
              {/* Floating accent card */}
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 max-w-[200px]"
                style={{ border: '1px solid #EDD2FF' }}
              >
                <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)', color: '#7B2FBE' }}>10+</p>
                <p className="text-sm text-gray-500 mt-1">Years of clinical experience in culturally responsive care</p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="badge-pill mb-4">Our Philosophy</span>
              <h2 className="text-4xl sm:text-5xl font-light mb-6 text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>
                A sanctuary built<br /><em>for you.</em>
              </h2>
              <span className="divider-gold mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5 text-base">
                At Exhale TWC, we believe that healing is not a privilege — it is a birthright. Our practice was created as a sanctuary where Black and Brown individuals can arrive exactly as they are: complex, layered, and worthy of profound care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                We draw from evidence-based modalities including Cognitive Behavioral Therapy, somatic approaches, and mindfulness practices — all delivered through a culturally affirming lens that honors your full humanity.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7B2FBE] hover:gap-3 transition-all duration-200"
              >
                Meet Your Therapist
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS / SERVICES PREVIEW ── */}
      <section className="py-24" style={{ background: '#F7EEFF' }} aria-label="Our core offerings">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-4">What We Offer</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>
              Three pillars of healing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-3xl p-8 flex flex-col gap-5"
                style={{ boxShadow: '0 4px 24px rgba(123,47,190,0.07)' }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: '#F7EEFF' }}>
                  {p.icon}
                </div>
                <h3 className="text-2xl font-medium text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>{p.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">{p.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7B2FBE] hover:gap-2.5 transition-all duration-200"
                >
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white" aria-label="Client testimonials">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-4">Voices of Healing</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>
              Stories that matter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-hover rounded-3xl p-8 flex flex-col gap-6"
                style={{ background: 'linear-gradient(135deg, #F7EEFF 0%, #ffffff 100%)', border: '1px solid #EDD2FF' }}
              >
                <svg className="w-8 h-8 opacity-40" style={{ color: '#7B2FBE' }} fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                <p className="text-gray-700 leading-relaxed italic text-base flex-1" style={{ fontFamily: 'var(--font-serif)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1C1C2E] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 50%, #9B59D0 100%)' }}
        aria-label="Call to action"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Your healing begins<br /><em className="text-[#EDD2FF]">with one conversation.</em>
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Schedule a complimentary 15-minute consultation. No pressure, no commitment — just a warm, confidential conversation.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-[#1C1C2E] transition-all duration-200 hover:opacity-90 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0DFA0 100%)' }}
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};
