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

      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
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
            className="text-5xl sm:text-6xl font-light text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            A practice built on<br /><em style={{ color: '#EDD2FF' }}>deep healing.</em>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Exhale TWC was founded on the belief that every person — regardless of background — deserves access to transformative, culturally affirming mental health care.
          </p>
        </div>
      </section>

      {/* ── THERAPIST SECTION ── */}
      <section className="py-24 bg-white" aria-labelledby="therapist-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/therapist-headshot.png"
                  alt="Exhale TWC licensed therapist — a warm, professional therapist specializing in culturally affirming care for Black and Brown communities"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 max-w-[210px]"
                style={{ border: '1px solid #EDD2FF' }}
              >
                <p className="text-sm font-bold text-[#1C1C2E]">Licensed Therapist</p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">Specializing in trauma, anxiety, depression &amp; life transitions</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="badge-pill mb-4">Meet Your Therapist</span>
              <h2
                id="therapist-heading"
                className="text-4xl sm:text-5xl font-light text-[#1C1C2E] mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Shaped by experience.<br /><em>Driven by care.</em>
              </h2>
              <span className="divider-gold" />
              <p className="text-gray-600 leading-relaxed mb-4">
                With over a decade of clinical experience, our therapist brings both professional expertise and personal understanding to every session. Having navigated the complexities of identity, community, and healing firsthand, she is uniquely positioned to walk alongside clients from Black and Brown communities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                She holds advanced training in trauma-informed care, somatic approaches, and mindfulness-based therapies. Her work is guided by a deep respect for the whole person — your history, your culture, your body, and your future.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Exhale TWC, you will never be reduced to a diagnosis. You will be seen, honored, and supported in becoming the fullest version of yourself.
              </p>
              <Link
                to="/schedule"
                className="btn-primary"
                aria-label="Book a consultation"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24" style={{ background: '#F7EEFF' }} aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="badge-pill mb-4">What We Stand For</span>
            <h2
              id="values-heading"
              className="text-4xl sm:text-5xl font-light text-[#1C1C2E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our core values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {values.map((v, i) => (
              <article
                key={i}
                className="card-hover bg-white rounded-3xl p-7"
                style={{ boxShadow: '0 4px 24px rgba(123,47,190,0.07)' }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-[#1C1C2E] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEALING BOWLS QUOTE BREAK ── */}
      <section className="relative py-20 overflow-hidden" aria-label="Practice philosophy">
        <img
          src="/images/healing-bowls-hero.jpg"
          alt="Crystal and Tibetan singing bowls with candles — representing holistic healing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(28,10,58,0.82)' }} aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <blockquote>
            <p
              className="text-3xl sm:text-4xl font-light text-white leading-relaxed"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              &ldquo;A space where your whole self is welcome.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── MODALITIES ── */}
      <section className="py-24 bg-white" aria-labelledby="modalities-heading">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <span className="badge-pill mb-4">Our Approach</span>
          <h2
            id="modalities-heading"
            className="text-4xl sm:text-5xl font-light text-[#1C1C2E] mb-5"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Evidence-based. Culturally informed.
          </h2>
          <span className="divider-gold mx-auto" />
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto mt-1">
            We integrate a range of proven therapeutic modalities, always adapting them to honor your cultural context, personal history, and healing goals.
          </p>
          <ul className="flex flex-wrap justify-center gap-3 list-none" aria-label="Therapeutic modalities">
            {modalities.map((m, i) => (
              <li key={i}>
                <span
                  className="inline-block px-5 py-2.5 rounded-full text-sm font-medium text-[#4A1A7A]"
                  style={{ background: '#F7EEFF', border: '1px solid #EDD2FF' }}
                >
                  {m}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link to="/schedule" className="btn-primary" aria-label="Start your wellness journey">
              Start Your Wellness Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
