import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';

const values = [
  {
    icon: '❤️',
    title: 'Compassion',
    description: 'We approach every client with warmth, empathy, and genuine care.',
  },
  {
    icon: '🔒',
    title: 'Confidentiality',
    description: 'Your privacy and trust are paramount. Everything stays between us.',
  },
  {
    icon: '🌱',
    title: 'Growth',
    description: 'We believe in your capacity to heal, grow, and thrive.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Therapy is a partnership — we work together toward your goals.',
  },
];

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Exhale TWC</title>
        <meta
          name="description"
          content="Learn about Exhale TWC, our therapist, our approach to therapy, and the values that guide our practice."
        />
      </Helmet>

      {/* Page Header */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #953fcf 0%, #8b54d7 100%)' }}
        aria-label="About page header"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Exhale TWC</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Dedicated to helping you find balance, healing, and renewed hope.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20 bg-white" aria-label="About our practice">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="w-full h-80 rounded-2xl flex items-center justify-center text-8xl"
                style={{ background: 'linear-gradient(135deg, #edd2ff 0%, #6dd2ff 100%)' }}
                aria-hidden="true"
              >
                🌿
              </div>
            </div>
            <div>
              <span className="text-[#953fcf] font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                A Practice Built on Healing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Exhale TWC was founded with a simple but powerful belief: everyone deserves access to
                compassionate, high-quality mental health care. We created this practice to be a
                welcoming space where clients can explore their inner world, process difficult emotions,
                and build the skills needed to live a more fulfilling life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our therapist brings years of clinical experience and a genuine passion for helping
                people navigate life's most challenging moments. We specialize in anxiety, depression,
                trauma, life transitions, and relationship issues — drawing from evidence-based
                modalities including Cognitive Behavioral Therapy (CBT), mindfulness-based approaches,
                and person-centered therapy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Exhale TWC, you won't be judged. You'll be heard, supported, and empowered to
                move forward — at your own pace, on your own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-[#edd2ff]/20" aria-label="Our values">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every interaction and session at Exhale TWC.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 sm:py-20 bg-white" aria-label="Our therapeutic approach">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We integrate evidence-based practices with a deeply human, relational approach. This means
            we stay current with the latest clinical research while never losing sight of what matters
            most: the unique person sitting across from us.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Sessions are collaborative and goal-oriented, while remaining flexible enough to honor
            whatever comes up in the moment. Whether you're seeking short-term support or long-term
            personal growth, we'll shape the work to fit your needs.
          </p>
          <Link to="/schedule">
            <Button size="lg">Start Your Journey</Button>
          </Link>
        </div>
      </section>
    </>
  );
};
