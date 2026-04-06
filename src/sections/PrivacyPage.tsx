import { Navigation } from '../components/Navigation';
import { Starfield } from '../components/Starfield';

export function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-[#A7B0C8] max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your data.
            </p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
              <div className="space-y-8 text-[#F4F6FF]">
                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account,
                    use our services, or contact us for support. This may include your name, email address,
                    and any content you upload or generate through our platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services,
                    process transactions, send you technical notices and support messages, and respond
                    to your comments and questions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Data Security
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed">
                    We implement appropriate security measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction. However, no method of
                    transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Data Sharing
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties
                    without your consent, except as described in this policy or as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Your Rights
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed">
                    You have the right to access, update, or delete your personal information. You can
                    also opt out of certain data collection practices. Contact us if you wish to exercise
                    these rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Changes to This Policy
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes
                    by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold text-[#F4F6FF] mb-4">
                    Contact Us
                  </h2>
                  <p className="text-[#A7B0C8] leading-relaxed">
                    If you have any questions about this privacy policy, please contact us at
                    privacy@plausch.app.
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