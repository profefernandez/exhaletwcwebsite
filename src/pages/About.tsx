import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const values = [
  {
    title: 'Cultural Affirmation',
    description: 'We center the full humanity of Black and Brown clients, honoring the richness of your cultural identity as a source of strength.',
  },
  {
    title: 'Radical Compassion',
    description: 'Judgment has no place here. You will be met with warmth, curiosity, and unconditional positive regard in every session.',
  },
  {
    title: 'Whole-Person Healing',
    description: 'We attend to mind, body, and spirit — recognizing that true wellness cannot be reduced to symptoms alone.',
  },
  {
    title: 'Evidence-Based Practice',
    description: 'Our work is anchored in clinical research and proven therapeutic modalities, thoughtfully adapted to fit your lived experience.',
  },
];

const modalities = [
  'Cognitive Behavioral Therapy (CBT)',
  'Somatic Awareness',
  'Mindfulness-Based Approaches',
  'Trauma-Informed Care',
  'Person-Centered Therapy',
  'Narrative Therapy',
];

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About — Exhale TWC</title>
        <meta name="description" content="Learn about Exhale TWC's holistic, culturally affirming approach to therapy for Black and Brown communities." />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <section
        className="relative pt-44 pb-28 overflow-hidden"
        aria-labelledby="about-hero-heading"
        style={{ background: 'linear-gradient(150deg, #1C0A3A 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
      >
        <img
          src="/images/ocean-calm.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span
            className="badge-pill mb-6 inline-flex"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.4)' }}
          >
            Our Story
          </span>
          <h1
            id="about-hero-heading"
            className="font-light text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            A practice built on<br /><em style={{ color: '#EDD2FF' }}>deep healing.</em>
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#E8E0F0', fontSize: '1.125rem' }}
          >
            Exhale TWC was founded on the belief that every person — regardless of background — deserves access to transformative, culturally affirming mental health care.
          </p>
        </div>
      </section>

      {/* ── THERAPIST SECTION ── */}
      <section className="py-28 bg-white" aria-labelledby="therapist-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/therapist-headshot.png"
                  alt="Exhale TWC licensed therapist — a warm, professional Black woman therapist specializing in culturally affirming care"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5"
                style={{ border: '2px solid #EDD2FF', maxWidth: '230px' }}
                aria-label="Therapist credentials"
              >
                <p
                  className="font-bold text-[#0F0A1A]"
                  style={{ fontSize: '1rem' }}
                >
                  Licensed Therapist
                </p>
                <p
                  className="text-[#4A3D5C] mt-1 leading-snug"
                  style={{ fontSize: '0.9375rem' }}
                >
                  Specializing in trauma, anxiety, depression &amp; life transitions
                </p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="badge-pill mb-5">Meet Your Therapist</span>
              <h2
                id="therapist-heading"
                className="font-light mb-6 text-[#0F0A1A]"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Shaped by experience.<br /><em>Driven by care.</em>
              </h2>
              <span className="divider-gold" />
              <p className="text-[#2D2040] leading-relaxed mb-5" style={{ fontSize: '1.0625rem' }}>
                With over a decade of clinical experience, our therapist brings both professional expertise and personal understanding to every session. Having navigated the complexities of identity, community, and healing firsthand, she is uniquely positioned to walk alongside clients from Black and Brown communities.
              </p>
              <p className="text-[#2D2040] leading-relaxed mb-5" style={{ fontSize: '1.0625rem' }}>
                She holds advanced training in trauma-informed care, somatic approaches, and mindfulness-based therapies. Her work is guided by a deep respect for the whole person — your history, your culture, your body, and your future.
              </p>
              <p className="text-[#2D2040] leading-relaxed mb-8" style={{ fontSize: '1.0625rem' }}>
                At Exhale TWC, you will never be reduced to a diagnosis. You will be seen, honored, and supported in becoming the fullest version of yourself.
              </p>
              <Link
                to="/schedule"
                className="btn-primary"
                aria-label="Book a consultation with our therapist"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-28" style={{ background: '#F7EEFF' }} aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-5">What We Stand For</span>
            <h2
              id="values-heading"
              className="font-light text-[#0F0A1A]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Our core values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <article
                key={i}
                className="card-hover bg-white rounded-3xl p-8"
                style={{ boxShadow: '0 4px 24px rgba(74,26,122,0.08)' }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold"
                    style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)', fontSize: '0.9375rem' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="font-medium text-[#0F0A1A] mb-3"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-[#2D2040] leading-relaxed" style={{ fontSize: '1rem' }}>
                      {v.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEALING BOWLS QUOTE BREAK ── */}
      <section
        className="relative py-24 overflow-hidden"
        aria-label="Practice philosophy quote"
      >
        <img
          src="/images/healing-bowls-hero.jpg"
          alt="Crystal and Tibetan singing bowls arranged with candles — representing holistic healing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(28,10,58,0.82)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <blockquote>
            <p
              className="font-light text-white leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              &ldquo;A space where your whole self is welcome.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── MODALITIES ── */}
      <section className="py-28 bg-white" aria-labelledby="modalities-heading">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <span className="badge-pill mb-5">Our Approach</span>
          <h2
            id="modalities-heading"
            className="font-light text-[#0F0A1A] mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Evidence-based. Culturally informed.
          </h2>
          <span className="divider-gold mx-auto" />
          <p
            className="text-[#2D2040] leading-relaxed mb-12 max-w-2xl mx-auto mt-2"
            style={{ fontSize: '1.0625rem' }}
          >
            We integrate a range of proven therapeutic modalities, always adapting them to honor your cultural context, personal history, and healing goals.
          </p>
          <ul
            className="flex flex-wrap justify-center gap-3 list-none"
            aria-label="Therapeutic modalities we use"
          >
            {modalities.map((m, i) => (
              <li key={i}>
                <span
                  className="inline-block px-5 py-3 rounded-full font-semibold text-[#3A0F6A]"
                  style={{ background: '#F7EEFF', border: '2px solid #EDD2FF', fontSize: '1rem' }}
                >
                  {m}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Link
              to="/schedule"
              className="btn-primary"
              aria-label="Start your healing journey with Exhale TWC"
            >
              Start Your Wellness Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
