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
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #1C1C2E 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
        aria-label="About page header"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/images/therapist-headshot.png)', backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'blur(40px)' }} aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span className="badge-pill mb-6 inline-flex" style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}>
            Our Story
          </span>
          <h1 className="text-5xl sm:text-6xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            A practice built on<br /><em className="text-[#EDD2FF]">deep healing.</em>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Exhale TWC was founded on the belief that every person — regardless of background — deserves access to transformative, culturally affirming mental health care.
          </p>
        </div>
      </section>

      {/* ── THERAPIST SECTION ── */}
      <section className="py-24 bg-white" aria-label="Meet your therapist">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="relative">
              <div
                className="w-full aspect-[4/5] rounded-3xl overflow-hidden"
                aria-label="Therapist portrait"
              >
                <img
                  src="/images/therapist-headshot.png"
                  alt="Exhale TWC therapist"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5"
                style={{ border: '1px solid #EDD2FF', maxWidth: '220px' }}
              >
                <p className="text-sm font-semibold text-[#1C1C2E]">Licensed Therapist</p>
                <p className="text-xs text-gray-400 mt-1">Specializing in trauma, anxiety, depression &amp; life transitions</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="badge-pill mb-4">Meet Your Therapist</span>
              <h2 className="text-4xl sm:text-5xl font-light mb-6 text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>
                Shaped by experience.<br /><em>Driven by care.</em>
              </h2>
              <span className="divider-gold mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                With over a decade of clinical experience, our therapist brings both professional expertise and personal understanding to every session. Having navigated the complexities of identity, community, and healing firsthand, she is uniquely positioned to walk alongside clients from Black and Brown communities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                She holds advanced training in trauma-informed care, somatic approaches, and mindfulness-based therapies. Her work is guided by a deep respect for the whole person — your history, your culture, your body, and your future.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Exhale TWC, you will never be reduced to a diagnosis. You will be seen, honored, and supported in becoming the fullest version of yourself.
              </p>
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24" style={{ background: '#F7EEFF' }} aria-label="Our core values">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-4">What We Stand For</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#1C1C2E]" style={{ fontFamily: 'var(--font-serif)' }}>
              Our core values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-3xl p-8"
                style={{ boxShadow: '0 4px 24px rgba(123,47,190,0.07)' }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
                    aria-hidden="true"
                  >{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-xl font-medium text-[#1C1C2E] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SANCTUARY IMAGE BREAK ── */}
      <section className="relative h-80 overflow-hidden" aria-hidden="true">
        <img
          src="/images/about-sanctuary.jpg"
          alt="Exhale TWC therapy sanctuary"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,28,46,0.3), rgba(28,28,46,0.6))' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl sm:text-3xl font-light text-center px-6" style={{ fontFamily: 'var(--font-serif)' }}>
            "A space where your whole self is welcome."
          </p>
        </div>
      </section>

      {/* ── MODALITIES ── */}
      <section className="py-24 bg-white" aria-label="Therapeutic modalities">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <span className="badge-pill mb-4">Our Approach</span>
          <h2 className="text-4xl sm:text-5xl font-light text-[#1C1C2E] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Evidence-based. Culturally informed.
          </h2>
          <span className="divider-gold mx-auto mb-10" />
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            We integrate a range of proven therapeutic modalities, always adapting them to honor your cultural context, personal history, and healing goals.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {modalities.map((m, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-[#7B2FBE]"
                style={{ background: '#F7EEFF', border: '1px solid #EDD2FF' }}
              >{m}</span>
            ))}
          </div>
          <div className="mt-14">
            <Link
              to="/schedule"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
            >
              Start Your Wellness Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
