import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const features = [
  {
    icon: '💬',
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs in a safe, supportive environment.',
  },
  {
    icon: '🏠',
    title: 'Online Therapy',
    description: 'Convenient, confidential therapy from the comfort of your home.',
  },
  {
    icon: '📚',
    title: 'Resources',
    description: 'Coming Soon — Explore our growing library of mental health resources.',
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Exhale TWC - Your Journey to Healing Starts Here</title>
        <meta
          name="description"
          content="Exhale TWC offers compassionate, professional therapy services including individual and online therapy. Begin your healing journey today."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #953fcf 0%, #8b54d7 40%, #787ee7 100%)',
        }}
        aria-label="Hero section"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#6dd2ff] blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Welcome to Exhale TWC
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your journey to healing
            <br />
            <span className="text-[#edd2ff]">starts here.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            At Exhale TWC, we provide compassionate, evidence-based therapy to help you navigate
            life's challenges and discover a path toward balance and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule">
              <Button
                size="lg"
                className="bg-white text-[#953fcf] hover:bg-[#edd2ff] shadow-xl border-0 focus:ring-white"
              >
                Book a Free Consult
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 focus:ring-white"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 bg-white" aria-label="About Exhale TWC">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            A Safe Space for Growth
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Life can feel overwhelming — and you don't have to face it alone. At Exhale TWC, we believe
            that healing is possible for everyone. Our approach is warm, collaborative, and tailored
            to meet you exactly where you are.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're working through anxiety, depression, relationship challenges, or simply
            seeking greater self-awareness, we're here to walk alongside you.
          </p>
          <div className="mt-8">
            <Link to="/about">
              <Button variant="outline" size="md">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-[#edd2ff]/20" aria-label="Our services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How We Can Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a range of services designed to support your mental health and well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-5xl mb-4" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="md">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #8b54d7 0%, #787ee7 100%)' }}
        aria-label="Call to action"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free 15-minute consultation to see if we're the right fit for you.
            No pressure, no commitment — just a conversation.
          </p>
          <Link to="/schedule">
            <Button
              size="lg"
              className="bg-white text-[#953fcf] hover:bg-[#edd2ff] border-0 shadow-xl focus:ring-white"
            >
              Schedule Your Free Consult
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
