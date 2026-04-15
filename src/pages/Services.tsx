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
  },
  {
    number: '02',
    title: 'Online Therapy',
    subtitle: 'Healing from wherever you are',
    description:
      'Access the same quality of care from the comfort and privacy of your own space. Our secure, HIPAA-aware telehealth sessions make it possible to prioritize your mental health without geographic or logistical barriers.',
    highlights: ['Secure video sessions', 'Flexible scheduling', 'Same evidence-based approach', 'Available across licensed states'],
    color: '#9B59D0',
    image: '/images/service-online.jpg',
  },
  {
    number: '03',
    title: 'Trauma-Informed Care',
    subtitle: 'Healing the wounds beneath the surface',
    description:
      'Trauma does not always announce itself. Our trauma-informed approach recognizes how past experiences live in the body and mind, and guides you gently toward integration, safety, and reclaimed wholeness.',
    highlights: ['Somatic awareness techniques', 'Nervous system regulation', 'Safe, paced processing', 'Culturally sensitive framework'],
    color: '#4A1A7A',
    image: '/images/service-trauma.jpg',
  },
  {
    number: '04',
    title: 'Life Transitions Support',
    subtitle: 'Navigating change with clarity',
    description:
      'Major life changes — career shifts, relationship changes, loss, identity exploration — can feel destabilizing. We help you move through transitions with intention, self-compassion, and a clear sense of your own values.',
    highlights: ['Identity and purpose work', 'Grief and loss processing', 'Relationship dynamics', 'Career and life direction'],
    color: '#8B6FD4',
    image: '/images/service-transitions.jpg',
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
];

export const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services — Exhale TWC</title>
        <meta name="description" content="Holistic wellness therapy services including individual therapy, online therapy, trauma-informed care, and life transitions support." />
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
              {/* Image block */}
              <div className={i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <span className="badge-pill mb-3">{s.subtitle}</span>
                <h2 className="text-4xl font-light text-[#1C1C2E] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>{s.title}</h2>
                <span className="divider-gold mb-6" />
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2.5 mb-8">
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
              </div>
            </div>
          ))}
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
        className="relative py-24 overflow-hidden"
        aria-label="Book a consultation"
      >
        <img
          src="/images/cta-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(74,26,122,0.9) 0%, rgba(123,47,190,0.87) 50%, rgba(155,89,208,0.85) 100%)' }} aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
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
