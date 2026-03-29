import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { useContactForm } from '../hooks/useContactForm';

export const Schedule: React.FC = () => {
  const { formData, isSubmitting, isSuccess, error, handleChange, handleSubmit } = useContactForm();

  return (
    <>
      <Helmet>
        <title>Schedule a Consult | Exhale TWC</title>
        <meta
          name="description"
          content="Schedule a free 15-minute consultation with Exhale TWC. Take the first step toward healing today."
        />
      </Helmet>

      {/* Page Header */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #953fcf 0%, #8b54d7 100%)' }}
        aria-label="Schedule page header"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take the first step. Fill out the form below and we'll reach out within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-20 bg-white" aria-label="Contact and scheduling form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSuccess ? (
            <div
              className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
              role="alert"
              aria-live="polite"
            >
              <div className="text-5xl mb-4" aria-hidden="true">✅</div>
              <h2 className="text-2xl font-bold text-green-800 mb-3">Message Sent!</h2>
              <p className="text-green-700 leading-relaxed">
                Thank you for reaching out. We'll review your message and contact you within 24
                business hours. We look forward to connecting with you!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gray-100"
              noValidate
              aria-label="Schedule consultation form"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to request a free 15-minute consultation.
              </p>

              {error && (
                <div
                  className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6 text-sm"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#953fcf] focus:ring-2 focus:ring-[#953fcf]/20 outline-none transition-colors text-gray-900 placeholder-gray-400"
                    aria-required="true"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#953fcf] focus:ring-2 focus:ring-[#953fcf]/20 outline-none transition-colors text-gray-900 placeholder-gray-400"
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-gray-400 text-xs">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#953fcf] focus:ring-2 focus:ring-[#953fcf]/20 outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Service Type */}
              <div className="mb-6">
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interest
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#953fcf] focus:ring-2 focus:ring-[#953fcf]/20 outline-none transition-colors text-gray-900 bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="individual">Individual Therapy</option>
                  <option value="online">Online Therapy</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  What brings you here? <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Share a bit about what you're looking for in therapy..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#953fcf] focus:ring-2 focus:ring-[#953fcf]/20 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-y"
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our{' '}
                <Link to="/privacy-policy" className="text-[#953fcf] underline hover:text-[#8b54d7]">
                  Privacy Policy
                </Link>
                . All information is kept strictly confidential.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-[#edd2ff]/20" aria-label="Contact information">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">📧</div>
              <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
              <a
                href="mailto:hello@exhaletwc.com"
                className="text-[#953fcf] hover:text-[#8b54d7] text-sm transition-colors"
              >
                hello@exhaletwc.com
              </a>
            </div>
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">⏰</div>
              <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
              <p className="text-gray-600 text-sm">Within 24 business hours</p>
            </div>
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-1">Confidential</h3>
              <p className="text-gray-600 text-sm">All communications are private and secure</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
