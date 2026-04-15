import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContactForm } from '../hooks/useContactForm';

const steps = [
  { step: '01', title: 'Submit Your Request', desc: 'Fill out the form with a few details about what brings you here.' },
  { step: '02', title: 'Receive a Response', desc: 'We will reach out within 24 business hours to schedule your consultation.' },
  { step: '03', title: 'Free 15-Min Consult', desc: 'A warm, confidential conversation to see if we are the right fit for you.' },
  { step: '04', title: 'Begin Your Journey', desc: 'If it feels right, we schedule your first full session and get started.' },
];

export const Schedule: React.FC = () => {
  const { formData, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactForm();

  return (
    <>
      <Helmet>
        <title>Book a Consultation — Exhale TWC</title>
        <meta name="description" content="Schedule a free 15-minute consultation with Exhale TWC. Begin your holistic wellness journey today." />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <section
        className="relative pt-44 pb-28 overflow-hidden"
        aria-labelledby="schedule-hero-heading"
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
            Begin Your Journey
          </span>
          <h1
            id="schedule-hero-heading"
            className="font-light text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Book a free<br /><em style={{ color: '#EDD2FF' }}>consultation.</em>
          </h1>
          <p
            className="max-w-xl mx-auto leading-relaxed"
            style={{ color: '#E8E0F0', fontSize: '1.125rem' }}
          >
            A 15-minute, no-obligation conversation to explore whether Exhale TWC is the right fit for your healing journey.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-28 bg-white" aria-labelledby="form-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Side info */}
            <div className="lg:col-span-2">
              <span className="badge-pill mb-5">What to Expect</span>
              <h2
                id="form-heading"
                className="font-light text-[#0F0A1A] mb-6"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Your first step<br /><em>toward healing.</em>
              </h2>
              <span className="divider-gold" />
              <ol className="flex flex-col gap-7 mt-2 list-none" aria-label="Steps to get started">
                {steps.map((item) => (
                  <li key={item.step} className="flex items-start gap-5">
                    <span
                      className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)', fontSize: '0.875rem', minWidth: 44, minHeight: 44 }}
                      aria-hidden="true"
                    >
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-[#0F0A1A]" style={{ fontSize: '1rem' }}>{item.title}</p>
                      <p className="text-[#4A3D5C] mt-1 leading-relaxed" style={{ fontSize: '0.9375rem' }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div
                className="mt-10 p-6 rounded-2xl"
                style={{ background: '#F7EEFF', border: '2px solid #EDD2FF' }}
                role="note"
                aria-label="Privacy and confidentiality notice"
              >
                <p className="text-[#2D2040] leading-relaxed" style={{ fontSize: '1rem' }}>
                  <span className="font-bold text-[#4A1A7A]">Confidential &amp; Secure.</span> All information shared is strictly private. We are HIPAA-aware and committed to protecting your privacy.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {isSuccess ? (
                <div
                  className="rounded-3xl p-12 text-center"
                  style={{ background: '#F7EEFF', border: '2px solid #EDD2FF' }}
                  role="alert"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2
                    className="font-light text-[#0F0A1A] mb-4"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                  >
                    Message received.
                  </h2>
                  <p className="text-[#2D2040] mb-8 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                    Thank you for reaching out. We will be in touch within 24 business hours to schedule your complimentary consultation.
                  </p>
                  <Link
                    to="/"
                    className="btn-primary"
                    aria-label="Return to the Exhale TWC homepage"
                  >
                    Return Home
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-3xl p-8 lg:p-10"
                  style={{ background: '#FAFAFA', border: '2px solid #EDD2FF' }}
                  aria-label="Consultation request form"
                >
                  <h2
                    className="font-medium text-[#0F0A1A] mb-8"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                  >
                    Request a Consultation
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="firstName">
                        First Name <span style={{ color: '#4A1A7A' }} aria-label="required">*</span>
                      </label>
                      <input
                        type="text" id="firstName" name="firstName"
                        value={formData.firstName} onChange={handleChange}
                        required autoComplete="given-name" placeholder="First name"
                        aria-required="true"
                        aria-describedby="firstName-hint"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName">
                        Last Name <span style={{ color: '#4A1A7A' }} aria-label="required">*</span>
                      </label>
                      <input
                        type="text" id="lastName" name="lastName"
                        value={formData.lastName} onChange={handleChange}
                        required autoComplete="family-name" placeholder="Last name"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email">
                      Email Address <span style={{ color: '#4A1A7A' }} aria-label="required">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      required autoComplete="email" placeholder="your@email.com"
                      aria-required="true"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="phone">
                      Phone <span className="sr-only">(optional)</span>
                      <span className="font-normal normal-case tracking-normal text-[#4A3D5C] ml-1" style={{ fontSize: '0.875rem' }}>(optional)</span>
                    </label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      autoComplete="tel" placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="serviceType">Service Interest</label>
                    <select
                      id="serviceType" name="serviceType"
                      value={formData.serviceType} onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="online">Online Therapy</option>
                      <option value="trauma">Trauma-Informed Care</option>
                      <option value="transitions">Life Transitions Support</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message">
                      What brings you here? <span style={{ color: '#4A1A7A' }} aria-label="required">*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange}
                      required rows={5}
                      placeholder="Share a little about what you are looking for in therapy..."
                      aria-required="true"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full rounded-full font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)',
                      fontSize: '1.0625rem',
                      padding: '1rem 2rem',
                      minHeight: 52,
                    }}
                  >
                    {isSubmitting ? (
                      <span aria-live="polite">Sending your request...</span>
                    ) : (
                      'Send My Request'
                    )}
                  </button>

                  <p className="text-[#4A3D5C] mt-5 text-center leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                    By submitting, you agree to our{' '}
                    <Link to="/privacy-policy" className="text-[#4A1A7A] underline font-semibold hover:text-[#7B2FBE]">
                      Privacy Policy
                    </Link>.
                    All information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section
        className="py-20"
        style={{ background: '#F7EEFF' }}
        aria-labelledby="contact-info-heading"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2
            id="contact-info-heading"
            className="font-light text-[#0F0A1A] mb-4"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Prefer to reach out directly?
          </h2>
          <p className="text-[#2D2040] mb-8" style={{ fontSize: '1.0625rem' }}>
            We welcome your questions and are happy to connect.
          </p>
          <a
            href="mailto:hello@exhaletwc.com"
            className="inline-flex items-center gap-2 font-bold text-[#4A1A7A] hover:underline"
            style={{ fontSize: '1.125rem' }}
            aria-label="Email Exhale TWC at hello@exhaletwc.com"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@exhaletwc.com
          </a>
        </div>
      </section>
    </>
  );
};
