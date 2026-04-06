import { Navigation } from '../components/Navigation';
import { Starfield } from '../components/Starfield';

export function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0B0C10]">
      {/* Starfield Background */}
      <Starfield />

      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#F4F6FF] mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-[#A7B0C8] max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
              <div className="space-y-8 text-[#F4F6FF]">
                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Acceptance of Terms
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    By accessing and using Plausch, you accept and agree to be bound by the terms
                    and provision of this agreement. If you do not agree to abide by the above,
                    please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Use License
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    Permission is granted to temporarily use Plausch for personal, non-commercial
                    transitory viewing only. This is the grant of a license, not a transfer of title,
                    and under this license you may not:
                  </p>
                  <ul className="text-[#A7B0C8] leading-relaxed mb-4 ml-6 list-disc">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to decompile or reverse engineer any software contained on our service</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Service Description
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    Plausch provides AI model comparison and chat functionality. We strive to offer
                    accurate and reliable service, but we cannot guarantee that our service will
                    always be available, uninterrupted, or error-free.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    User Responsibilities
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    You are responsible for maintaining the confidentiality of your account and password.
                    You agree to accept responsibility for all activities that occur under your account
                    or password. You must not use our service for any illegal or unauthorized purpose.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Content and Conduct
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    You agree not to use our service to transmit any content that is unlawful, harmful,
                    threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's
                    privacy, hateful, or racially, ethnically, or otherwise objectionable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Intellectual Property
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    The service and its original content, features, and functionality are and will remain
                    the exclusive property of Plausch and its licensors. The service is protected by
                    copyright, trademark, and other laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Termination
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    We may terminate or suspend your account and bar access to the service immediately,
                    without prior notice or liability, under our sole discretion, for any reason whatsoever
                    and without limitation, including but not limited to a breach of the Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    In no event shall Plausch, nor its directors, employees, partners, agents, suppliers,
                    or affiliates, be liable for any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of profits, data, use, goodwill,
                    or other intangible losses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Governing Law
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    These Terms shall be interpreted and governed by the laws of the jurisdiction in
                    which Plausch operates, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Changes to Terms
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at
                    any time. If a revision is material, we will provide at least 30 days notice prior
                    to any new terms taking effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Contact Information
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed mb-4">
                    If you have any questions about these Terms and Conditions, please contact us at
                    legal@plausch.app.
                  </p>
                </section>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-[#A7B0C8]">
                    Last updated: April 6, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}