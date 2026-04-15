import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContactForm } from '../hooks/useContactForm';

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
        className="pt-40 pb-24"
        style={{ background: 'linear-gradient(150deg, #1C1C2E 0%, #2D1B4E 60%, #4A1A7A 100%)' }}
        aria-label="Schedule page header"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span className="badge-pill mb-6 inline-flex" style={{ background: 'rgba(201,168,76,0.12)', color: '#F0DFA0', borderColor: 'rgba(201,168,76,0.3)' }}>
            Begin Your Journey
          </span>
          <h1 className="text-5xl sm:text-6xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Book a free<br /><em className="text-[#EDD2FF]">consultation.</em>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            A 15-minute, no-obligation conversation to explore whether Exhale TWC is the right fit for your healing journey.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-24 bg-white" aria-label="Consultation request form">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Side info */}
            <div className="lg:col-span-2">
              <span className="badge-pill mb-4">What to Expect</span>
              <h2 className="text-3xl font-light text-[#1C1C2E] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Your first step<br /><em>toward healing.</em>
              </h2>
              <span className="divider-gold mb-8" />
              <div className="flex flex-col gap-6">
                {[
                  { step: '01', title: 'Submit Your Request', desc: 'Fill out the form with a few details about what brings you here.' },
                  { step: '02', title: 'Receive a Response', desc: 'We will reach out within 24 business hours to schedule your consultation.' },
                  { step: '03', title: 'Free 15-Min Consult', desc: 'A warm, confidential conversation to see if we are the right fit for you.' },
                  { step: '04', title: 'Begin Your Journey', desc: 'If it feels right, we schedule your first full session and get started.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span
                      className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
                      aria-hidden="true"
                    >{item.step}</span>
                    <div>
                      <p className="font-semibold text-[#1C1C2E] text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 p-5 rounded-2xl"
                style={{ background: '#F7EEFF', border: '1px solid #EDD2FF' }}
              >
                <p className="text-sm text-[#3D3D5C] leading-relaxed">
                  <span className="font-semibold text-[#7B2FBE]">Confidential &amp; Secure.</span> All information shared is strictly private. We are HIPAA-aware and committed to protecting your privacy.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {isSuccess ? (
                <div
                  className="rounded-3xl p-12 text-center"
                  style={{ background: '#F7EEFF', border: '1px solid #EDD2FF' }}
                  role="alert"
                  aria-live="polite"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-[#1C1C2E] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    Message received.
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Thank you for reaching out. We will be in touch within 24 business hours to schedule your complimentary consultation.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
                  >Return Home</Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-3xl p-8 lg:p-10"
                  style={{ background: '#FAFAFA', border: '1px solid #EDD2FF' }}
                  aria-label="Consultation request form"
                >
                  <h2 className="text-2xl font-medium text-[#1C1C2E] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
                    Request a Consultation
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-semibold text-[#3D3D5C] uppercase tracking-wider mb-2">
                        First Name <span className="text-[#7B2FBE]" aria-label="required">*</span>
                      </label>
                      <input
                        type="text" id="firstName" name="firstName"
                        value={formData.firstName} onChange={handleChange}
                        required autoComplete="given-name" placeholder="First name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7B2FBE] focus:ring-2 focus:ring-[#7B2FBE]/20 outline-none transition-colors text-[#1C1C2E] placeholder-gray-400 text-sm"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-semibold text-[#3D3D5C] uppercase tracking-wider mb-2">
                        Last Name <span className="text-[#7B2FBE]" aria-label="required">*</span>
                      </label>
                      <input
                        type="text" id="lastName" name="lastName"
                        value={formData.lastName} onChange={handleChange}
                        required autoComplete="family-name" placeholder="Last name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7B2FBE] focus:ring-2 focus:ring-[#7B2FBE]/20 outline-none transition-colors text-[#1C1C2E] placeholder-gray-400 text-sm"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="block text-xs font-semibold text-[#3D3D5C] uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#7B2FBE]" aria-label="required">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      required autoComplete="email" placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7B2FBE] focus:ring-2 focus:ring-[#7B2FBE]/20 outline-none transition-colors text-[#1C1C2E] placeholder-gray-400 text-sm"
                      aria-required="true"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#3D3D5C] uppercase tracking-wider mb-2">
                      Phone <span className="text-gray-400 text-xs normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      autoComplete="tel" placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7B2FBE] focus:ring-2 focus:ring-[#7B2FBE]/20 outline-none transition-colors text-[#1C1C2E] placeholder-gray-400 text-sm"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="serviceType" className="block text-xs font-semibold text-[#3D3D5C] uppercase tracking-wider mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceType" name="serviceType"
                      value={formData.serviceType} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7B2FBE] focus:ring-2 focus:ring-[#7B2FBE]/20 outline-none transition-colors text-[#1C1C2E] text-sm"
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
                    <label htmlFor="message" className="block text-xs font-semibold text-[#3D3D5C] uppercase tracking-wider mb-2">
                      What brings you here? <span className="text-[#7B2FBE]" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange}
                      required rows={5}
                      placeholder="Share a little about what you are looking for in therapy..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7B2FBE] focus:ring-2 focus:ring-[#7B2FBE]/20 outline-none transition-colors text-[#1C1C2E] placeholder-gray-400 resize-y text-sm"
                      aria-required="true"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full py-4 rounded-full text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send My Request'}
                  </button>

                  <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed">
                    By submitting, you agree to our{' '}
                    <Link to="/privacy-policy" className="text-[#7B2FBE] underline hover:text-[#9B59D0]">Privacy Policy</Link>.
                    All information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="py-16" style={{ background: '#F7EEFF' }} aria-label="Contact information">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: '✉', title: 'Email Us', content: 'hello@exhaletwc.com', href: 'mailto:hello@exhaletwc.com' },
              { icon: '⏱', title: 'Response Time', content: 'Within 24 business hours', href: null },
              { icon: '🔒', title: 'Confidential', content: 'All communications are private and secure', href: null },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl"
                  style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
                  aria-hidden="true"
                >{item.icon}</div>
                <h3 className="font-semibold text-[#1C1C2E] mb-1 text-sm">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-[#7B2FBE] hover:text-[#9B59D0] text-sm transition-colors">{item.content}</a>
                ) : (
                  <p className="text-gray-500 text-sm">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
