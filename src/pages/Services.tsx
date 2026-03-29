import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';

const services = [
  {
    id: 'individual',
    icon: '💬',
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs',
    details: [
      'Personalized treatment plans built around your goals',
      'Evidence-based modalities including CBT, mindfulness, and more',
      'A safe, judgment-free space to explore your thoughts and feelings',
      'Flexible scheduling to fit your life',
      'In-person and telehealth options available',
    ],
    cta: 'Book Individual Therapy',
    ctaLink: '/schedule',
    highlight: true,
  },
  {
    id: 'online',
    icon: '🏠',
    title: 'Online Therapy',
    description: 'Convenient, confidential therapy from the comfort of your home',
    details: [
      'Secure, HIPAA-compliant video sessions',
      'Access therapy from anywhere in the state',
      'Same high-quality care as in-person sessions',
      'Flexible scheduling including evenings and weekends',
      'No commute, no waiting room — just connection',
    ],
    cta: 'Book Online Therapy',
    ctaLink: '/schedule',
    highlight: false,
  },
  {
    id: 'resources',
    icon: '📚',
    title: 'Resources',
    description: 'Coming Soon — Explore our resource library',
    details: [
      'Curated articles on mental health topics',
      'Worksheets and self-help tools',
      'Guided mindfulness exercises',
      'Recommendations for books and podcasts',
      'Community-focused mental health content',
    ],
    cta: 'Visit Resources (Coming Soon)',
    ctaLink: 'https://resources.exhaletwc.com',
    external: true,
    comingSoon: true,
  },
];

export const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services | Exhale TWC</title>
        <meta
          name="description"
          content="Explore Exhale TWC's therapy services: Individual Therapy, Online Therapy, and our upcoming Resources library."
        />
      </Helmet>

      {/* Page Header */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #953fcf 0%, #787ee7 100%)' }}
        aria-label="Services page header"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive, compassionate care designed to meet you where you are.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-white" aria-label="Available services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col ${
                  service.highlight
                    ? 'ring-2 ring-[#953fcf]'
                    : ''
                } ${service.comingSoon ? 'opacity-90' : ''}`}
              >
                {service.highlight && (
                  <div className="bg-[#953fcf] text-white text-center text-xs font-semibold py-2 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                {service.comingSoon && (
                  <div className="bg-[#787ee7] text-white text-center text-xs font-semibold py-2 uppercase tracking-wider">
                    Coming Soon
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-5xl mb-4" aria-hidden="true">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                  <p className="text-[#953fcf] font-medium mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow" aria-label={`${service.title} features`}>
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                        <span className="text-[#953fcf] mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div>
                    {service.external ? (
                      <a
                        href={service.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${service.cta} - opens in new tab`}
                      >
                        <Button
                          variant={service.highlight ? 'primary' : 'outline'}
                          className="w-full"
                          disabled={service.comingSoon}
                        >
                          {service.cta}
                        </Button>
                      </a>
                    ) : (
                      <Link to={service.ctaLink}>
                        <Button
                          variant={service.highlight ? 'primary' : 'outline'}
                          className="w-full"
                        >
                          {service.cta}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Info Section */}
      <section className="py-16 sm:py-20 bg-[#edd2ff]/20" aria-label="What to expect">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-10">
            <div>
              <div className="text-4xl font-bold text-[#953fcf] mb-2">1</div>
              <h3 className="font-semibold text-gray-900 mb-1">Free Consultation</h3>
              <p className="text-gray-600 text-sm">
                A brief 15-minute call to discuss your needs and see if we're a good fit.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#953fcf] mb-2">2</div>
              <h3 className="font-semibold text-gray-900 mb-1">Intake Session</h3>
              <p className="text-gray-600 text-sm">
                An in-depth first session to understand your background, goals, and needs.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#953fcf] mb-2">3</div>
              <h3 className="font-semibold text-gray-900 mb-1">Ongoing Therapy</h3>
              <p className="text-gray-600 text-sm">
                Regular sessions tailored to your progress and evolving goals.
              </p>
            </div>
          </div>
          <Link to="/schedule">
            <Button size="lg">Schedule a Free Consultation</Button>
          </Link>
        </div>
      </section>
    </>
  );
};
