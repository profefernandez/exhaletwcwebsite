import React from 'react';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'January 1, 2025';

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Exhale TWC</title>
        <meta
          name="description"
          content="Exhale TWC Privacy Policy - How we collect, use, and protect your personal information."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Page Header */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #953fcf 0%, #8b54d7 100%)' }}
        aria-label="Privacy policy page header"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/80 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white" aria-label="Privacy policy content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <div className="space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                Exhale TWC ("we," "our," or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website at exhaletwc.com or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, and other
                  contact details you provide when scheduling a consultation or filling out a contact form.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website,
                  including pages visited, time spent, and referring URLs.
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, IP address, operating system,
                  and similar technical information.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and schedule consultations</li>
                <li>Provide and improve our therapy services</li>
                <li>Send appointment reminders and practice updates (with your consent)</li>
                <li>Comply with legal and ethical obligations</li>
                <li>Protect the safety and security of our website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. HIPAA Compliance</h2>
              <p>
                As a healthcare provider, Exhale TWC is committed to complying with the Health
                Insurance Portability and Accountability Act (HIPAA). Protected Health Information
                (PHI) is handled with the utmost care and confidentiality. We implement
                administrative, physical, and technical safeguards to protect your health information
                as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>In emergency situations where there is imminent risk of harm</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your
                browsing experience. You can control cookie settings through your browser preferences.
                Disabling cookies may affect certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information,
                including SSL/TLS encryption, secure servers, and regular security audits. However,
                no method of transmission over the internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Opt out of marketing communications at any time</li>
                <li>File a complaint with relevant data protection authorities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Children's Privacy</h2>
              <p>
                Our website is not directed to individuals under the age of 18. We do not knowingly
                collect personal information from minors. If we become aware that a minor has provided
                us with personal information, we will take steps to delete such information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant
                changes by posting the new policy on this page with an updated "Last updated" date.
                Your continued use of our website after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <div className="bg-[#edd2ff]/30 rounded-xl p-6 mt-4">
                <p className="font-semibold text-gray-900">Exhale TWC</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:tamara@exhaletwc.com"
                    className="text-[#953fcf] hover:text-[#8b54d7] underline"
                  >
                    tamara@exhaletwc.com
                  </a>
                </p>
                <p>Website: exhaletwc.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
