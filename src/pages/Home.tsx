import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="#4A1A7A" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#4A1A7A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="18" r="5" stroke="#4A1A7A" strokeWidth="2" fill="#EDD2FF"/>
      </svg>
    ),
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique story.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="#4A1A7A" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M14 28a10 10 0 0 1 20 0" stroke="#4A1A7A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="20" r="4" stroke="#4A1A7A" strokeWidth="2" fill="#EDD2FF"/>
        <circle cx="30" cy="20" r="4" stroke="#4A1A7A" strokeWidth="2" fill="#EDD2FF"/>
      </svg>
    ),
    title: 'Culturally Affirming Care',
    description: 'Therapy that honors your cultural identity, without apology.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="#4A1A7A" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M24 14v6M24 28v6M14 24h6M28 24h6" stroke="#4A1A7A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="5" stroke="#4A1A7A" strokeWidth="2" fill="#EDD2FF"/>
      </svg>
    ),
    title: 'Holistic Wellness',
    description: 'Mind, body, and spirit — integrated through somatic awareness, mindfulness, and evidence-based care.',
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Exhale TWC — Holistic Wellness Therapy</title>
        <meta name="description" content="Premium holistic wellness therapy for Black and Brown communities. Culturally affirming, evidence-based care by a licensed therapist." />
      </Helmet>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <img
          src="/images/hero-ocean.jpg"
          alt="Calm ocean at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(150deg, rgba(28,10,58,0.88) 0%, rgba(45,27,78,0.84) 45%, rgba(74,26,122,0.78) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-36 pb-24 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full border mb-7"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#FFE9A8', borderColor: 'rgba(201,168,76,0.4)' }}
          >
            Holistic Wellness Therapy
          </span>
          <h1
            id="hero-heading"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 6px 28px rgba(0,0,0,0.6)' }}
          >
            You deserve to heal<br />
            <em className="font-medium" style={{ color: '#FFE9A8' }}>fully and freely.</em>
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Exhale TWC offers premium, culturally affirming therapy for Black and Brown individuals ready to invest in their whole-person wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold no-underline transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E', boxShadow: '0 6px 18px rgba(184,134,11,0.25)' }}
            >
              Begin Your Journey <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold no-underline border-2 border-white/50 text-white hover:bg-white/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50" aria-hidden="true">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── PHILOSOPHY / THERAPIST INTRO ── */}
      <section className="py-24 bg-white" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait — no floating badge */}
            <div className="relative order-2 lg:order-1">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/therapist-headshot.png"
                  alt="Exhale TWC licensed therapist — warm, professional, specializing in culturally affirming care"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full bg-[#F7EEFF] text-[#4A1A7A] mb-4"
              >
                Our Philosophy
              </span>
              <h2
                id="philosophy-heading"
                className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1C2E] mb-4 leading-tight"
              >
                A sanctuary built<br /><em className="font-medium text-[#4A1A7A]">for you.</em>
              </h2>
              <span className="block w-12 h-[3px] rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #B8860B, #C9A84C)' }} />
              <p className="text-[#3D3D5C] leading-relaxed mb-4">
                At Exhale TWC, we believe that healing is a necessity. Our practice was created as a sanctuary where Black and Brown individuals can arrive exactly as they are: complex, layered, and worthy of profound care.
              </p>
              <p className="text-[#3D3D5C] leading-relaxed mb-7">
                EMDR, CBT, ACT, DBT, Mindfulness, CPT, and Perinatal Mental Health — delivered through a trauma-informed, culturally affirming lens.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold no-underline transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E', boxShadow: '0 6px 18px rgba(184,134,11,0.25)' }}
              >
                Meet Your Therapist <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALING BOWLS SECTION ── */}
      <section
        className="relative py-24 overflow-hidden"
        aria-labelledby="bowls-heading"
        style={{ background: 'linear-gradient(135deg, #1C0A3A 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full border mb-5"
                style={{ background: 'rgba(201,168,76,0.15)', color: '#FFE9A8', borderColor: 'rgba(201,168,76,0.4)' }}
              >
                Holistic Modalities
              </span>
              <h2
                id="bowls-heading"
                className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
              >
                Healing that honors<br /><em className="font-medium" style={{ color: '#FFE9A8' }}>the whole person.</em>
              </h2>
              <span className="block w-12 h-[3px] rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #B8860B, #C9A84C)' }} />
              <p className="text-[#E6D8F5] leading-relaxed mb-4">
                Our approach weaves together evidence-based clinical therapy with holistic wellness practices — because true healing is not confined to the mind alone.
              </p>
              <p className="text-[#E6D8F5] leading-relaxed mb-8">
                From somatic awareness to mindfulness-based practices, every tool we use is chosen with intention — and adapted to honor your cultural context and personal history.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold no-underline transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E', boxShadow: '0 6px 18px rgba(184,134,11,0.25)' }}
              >
                Explore Our Approach <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/healing-bowls-hero.jpg"
                  alt="Crystal and Tibetan singing bowls with candles and lavender"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
                <img
                  src="/images/healing-bowls-section.jpg"
                  alt="Crystal singing bowl during a wellness session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-24" style={{ background: '#F7EEFF' }} aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full bg-[#EDD2FF] text-[#4A1A7A] mb-4">
              What We Offer
            </span>
            <h2
              className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1C2E]"
              id="pillars-heading"
            >
              Three pillars of healing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {pillars.map((p, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl p-7 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ boxShadow: '0 4px 24px rgba(74,26,122,0.07)' }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: '#F7EEFF' }} aria-hidden="true">
                  {p.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1C2E]">{p.title}</h3>
                <p className="text-[#3D3D5C] text-sm leading-relaxed flex-1">{p.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4A1A7A] hover:gap-2.5 transition-all no-underline hover:underline"
                  aria-label={`Learn more about ${p.title}`}
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="cta-heading">
        <img
          src="/images/ocean-calm.jpg"
          alt="Serene ocean shoreline at dawn"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(28,10,58,0.90) 0%, rgba(74,26,122,0.87) 50%, rgba(123,47,190,0.84) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2
            id="cta-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}
          >
            Your healing begins <em className="font-medium" style={{ color: '#FFE9A8' }}>with one conversation.</em>
          </h2>
          <p className="text-lg text-white/80 mb-9 max-w-xl mx-auto leading-relaxed">
            A warm, confidential 15-minute conversation. No pressure, no commitment.
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
