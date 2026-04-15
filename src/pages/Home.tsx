import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="22" stroke="#4A1A7A" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#4A1A7A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="18" r="5" stroke="#4A1A7A" strokeWidth="2" fill="#EDD2FF"/>
      </svg>
    ),
    title: 'Individual Therapy',
    description:
      'One-on-one sessions tailored to your unique story. We work together to uncover patterns, process pain, and build lasting resilience.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="22" stroke="#4A1A7A" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M14 28a10 10 0 0 1 20 0" stroke="#4A1A7A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="20" r="4" stroke="#4A1A7A" strokeWidth="2" fill="#EDD2FF"/>
        <circle cx="30" cy="20" r="4" stroke="#4A1A7A" strokeWidth="2" fill="#EDD2FF"/>
      </svg>
    ),
    title: 'Culturally Affirming Care',
    description:
      'Therapy that honors your cultural identity. Our practice centers the lived experiences of Black and Brown communities without apology.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="22" stroke="#4A1A7A" strokeWidth="2" fill="#F7EEFF"/>
        <path d="M24 14v6M24 28v6M14 24h6M28 24h6" stroke="#4A1A7A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="5" stroke="#4A1A7A" strokeWidth="2" fill="#EDD2FF"/>
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
    quote: "The holistic approach here is unlike anything I've experienced. I leave every session feeling centered and empowered.",
    name: "A.W.",
    detail: "Ongoing Wellness Client",
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Exhale TWC — Holistic Wellness Therapy</title>
        <meta name="description" content="Premium holistic wellness therapy for Black and Brown communities. Culturally affirming, evidence-based care by a licensed therapist." />
      </Helmet>

      {/* ── HERO — Ocean background ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <img
          src="/images/hero-ocean.jpg"
          alt="Calm ocean at golden hour — a symbol of peace and renewal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for AAA text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(150deg, rgba(28,10,58,0.88) 0%, rgba(45,27,78,0.85) 45%, rgba(74,26,122,0.80) 100%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #9B59D0, transparent)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-40 pb-28 text-center">
          <span
            className="badge-pill mb-8 inline-flex"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.4)', fontSize: '0.875rem' }}
          >
            Holistic Wellness Therapy
          </span>
          <h1
            id="hero-heading"
            className="font-light text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 7vw, 5rem)' }}
          >
            You deserve to heal<br />
            <em className="font-normal" style={{ color: '#EDD2FF' }}>fully and freely.</em>
          </h1>
          <p
            className="text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.125rem, 2vw, 1.3125rem)' }}
          >
            Exhale TWC offers premium, culturally affirming therapy for Black and Brown individuals ready to invest in their whole-person wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule"
              className="btn-primary"
              aria-label="Begin your healing journey — schedule a consultation"
            >
              Begin Your Journey
            </Link>
            <Link
              to="/services"
              className="btn-outline"
              aria-label="Explore our therapy services"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60" aria-hidden="true">
          <span className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-sans)' }}>Scroll</span>
          <svg className="w-4 h-4 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── INTRO / TRUST SECTION ── */}
      <section className="py-28 bg-white" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Therapist portrait */}
            <div className="relative order-2 lg:order-1">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/therapist-headshot.png"
                  alt="Exhale TWC licensed therapist smiling warmly in professional attire"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[210px]"
                style={{ border: '2px solid #EDD2FF' }}
                aria-label="10 plus years of clinical experience"
              >
                <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)', color: '#4A1A7A' }}>10+</p>
                <p className="text-sm text-[#2D2040] mt-1 leading-snug font-medium">Years of clinical experience in culturally responsive care</p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="badge-pill mb-5">Our Philosophy</span>
              <h2
                id="philosophy-heading"
                className="font-light mb-6 text-[#0F0A1A]"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                A sanctuary built<br /><em>for you.</em>
              </h2>
              <span className="divider-gold" />
              <p className="text-[#2D2040] leading-relaxed mb-5" style={{ fontSize: '1.0625rem' }}>
                At Exhale TWC, we believe that healing is not a privilege — it is a necessity. Our practice was created as a sanctuary where Black and Brown individuals can arrive exactly as they are: complex, layered, and worthy of profound care.
              </p>
              <p className="text-[#2D2040] leading-relaxed mb-8" style={{ fontSize: '1.0625rem' }}>
                We draw from evidence-based modalities including Cognitive Behavioral Therapy, somatic approaches, and mindfulness practices — all delivered through a culturally affirming lens that honors your full humanity.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold text-[#4A1A7A] hover:gap-3 transition-all duration-200 no-underline hover:underline"
                style={{ fontSize: '1rem' }}
                aria-label="Learn more about our therapist"
              >
                Meet Your Therapist
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALING BOWLS FEATURE SECTION ── */}
      <section
        className="relative py-28 overflow-hidden"
        aria-labelledby="bowls-heading"
        style={{ background: 'linear-gradient(135deg, #1C0A3A 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-pill mb-5" style={{ background: 'rgba(201,168,76,0.15)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.35)' }}>
                Holistic Modalities
              </span>
              <h2
                id="bowls-heading"
                className="font-light text-white mb-6"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Healing that honors<br /><em style={{ color: '#EDD2FF' }}>the whole person.</em>
              </h2>
              <span className="divider-gold" />
              <p className="leading-relaxed mb-5" style={{ color: '#E8E0F0', fontSize: '1.0625rem' }}>
                Our approach weaves together evidence-based clinical therapy with holistic wellness practices — because true healing is not confined to the mind alone. We honor the wisdom of the body and the depth of the spirit.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#E8E0F0', fontSize: '1.0625rem' }}>
                From somatic awareness to mindfulness-based practices, every tool we use is chosen with intention — and adapted to honor your cultural context and personal history.
              </p>
              <Link
                to="/services"
                className="btn-primary"
                aria-label="Explore our holistic wellness services"
              >
                Explore Our Approach
              </Link>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/healing-bowls-hero.jpg"
                  alt="Crystal and Tibetan singing bowls arranged with candles and lavender — representing holistic healing practices"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
                <img
                  src="/images/healing-bowls-section.jpg"
                  alt="Therapist's hands with a crystal singing bowl during a wellness session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS / SERVICES PREVIEW ── */}
      <section className="py-28" style={{ background: '#F7EEFF' }} aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-5">What We Offer</span>
            <h2
              id="pillars-heading"
              className="font-light text-[#0F0A1A]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Three pillars of healing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {pillars.map((p, i) => (
              <article
                key={i}
                className="card-hover bg-white rounded-3xl p-8 flex flex-col gap-5"
                style={{ boxShadow: '0 4px 24px rgba(74,26,122,0.08)' }}
                role="listitem"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: '#F7EEFF' }}
                  aria-hidden="true"
                >
                  {p.icon}
                </div>
                <h3
                  className="font-medium text-[#0F0A1A]"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 2vw, 1.75rem)' }}
                >
                  {p.title}
                </h3>
                <p className="text-[#2D2040] leading-relaxed flex-1" style={{ fontSize: '1rem' }}>
                  {p.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 font-bold text-[#4A1A7A] hover:gap-2.5 transition-all duration-200 no-underline hover:underline"
                  style={{ fontSize: '0.9375rem' }}
                  aria-label={`Learn more about ${p.title}`}
                >
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-5">Voices of Healing</span>
            <h2
              id="testimonials-heading"
              className="font-light text-[#0F0A1A]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Stories that matter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="card-hover rounded-3xl p-8 flex flex-col gap-6"
                style={{ background: 'linear-gradient(135deg, #F7EEFF 0%, #ffffff 100%)', border: '1px solid #EDD2FF' }}
              >
                <svg
                  className="w-8 h-8 opacity-50"
                  style={{ color: '#4A1A7A' }}
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                <p
                  className="text-[#2D2040] leading-relaxed flex-1"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <p className="font-bold text-[#0F0A1A]" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <p className="text-[#4A3D5C]" style={{ fontSize: '0.9375rem' }}>{t.detail}</p>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── OCEAN CALM CTA ── */}
      <section
        className="relative py-32 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <img
          src="/images/ocean-calm.jpg"
          alt="Serene ocean shoreline at dawn with a stone cairn — representing peace and balance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(28,10,58,0.90) 0%, rgba(74,26,122,0.88) 50%, rgba(123,47,190,0.85) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2
            id="cta-heading"
            className="font-light text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Your healing begins<br /><em style={{ color: '#EDD2FF' }}>with one conversation.</em>
          </h2>
          <p
            className="mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: '#E8E0F0', fontSize: '1.125rem' }}
          >
            Schedule a complimentary 15-minute consultation. No pressure, no commitment — just a warm, confidential conversation.
          </p>
          <Link
            to="/schedule"
            className="btn-primary"
            aria-label="Schedule your free 15-minute consultation with Exhale TWC"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};
