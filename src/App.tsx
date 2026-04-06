import { Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Starfield } from './components/Starfield';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { PinnedSection } from './sections/PinnedSection';
import { PricingSection } from './sections/PricingSection';
import { FooterSection } from './sections/FooterSection';
import { PrivacyPage } from './sections/PrivacyPage';
import { TermsPage } from './sections/TermsPage';

gsap.registerPlugin(ScrollTrigger);

const featureSections = [
  {
    id: 'compare',
    headline: 'Compare answers ',
    headlineAccent: 'side-by-side.',
    subheadline:
      'Run the same prompt on multiple models. See differences in tone, speed, and accuracy—in one view.',
    cardImage: '/images/compare_card.jpg',
    cardAlt: 'Model Comparison Interface',
  },
  {
    id: 'picker',
    headline: 'Pick the best model ',
    headlineAccent: 'for any task.',
    subheadline:
      'From quick summaries to deep reasoning—choose the right brain for the job.',
    cardImage: '/images/picker_card.jpg',
    cardAlt: 'Model Picker Interface',
  },
  {
    id: 'privacy',
    headline: 'Your chats, ',
    headlineAccent: 'your data.',
    subheadline:
      'Local-first options, no training on your conversations, and clear data policies.',
    cardImage: '/images/privacy_card.jpg',
    cardAlt: 'Privacy Settings Interface',
  },
  {
    id: 'terms',
    headline: 'Clear terms, ',
    headlineAccent: 'fair usage.',
    subheadline:
      'Transparent terms and conditions that protect both you and our service.',
    cardImage: '/images/team_card.jpg',
    cardAlt: 'Terms and Conditions Interface',
  },
  {
    id: 'shortcuts',
    headline: 'Fast, simple, ',
    headlineAccent: 'keyboard-first.',
    subheadline:
      'No clicking through menus. Hit a shortcut and keep flowing.',
    cardImage: '/images/shortcuts_card.jpg',
    cardAlt: 'Keyboard Shortcuts Interface',
  },
  {
    id: 'ecosystem',
    headline: 'Open source, ',
    headlineAccent: 'open ecosystem.',
    subheadline:
      'Use the models you trust. Self-host or connect your own endpoints.',
    cardImage: '/images/ecosystem_card.jpg',
    cardAlt: 'Ecosystem Providers Interface',
  },
  {
    id: 'teams',
    headline: 'Built for ',
    headlineAccent: 'teams.',
    subheadline:
      'Share prompts, compare as a group, and keep everyone on the same page.',
    cardImage: '/images/team_card.jpg',
    cardAlt: 'Team Collaboration Interface',
  },
];

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const snapTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timeout = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap
      snapTriggerRef.current = ScrollTrigger.create({
        snap: {
          snapTo: (value) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (snapTriggerRef.current) {
        snapTriggerRef.current.kill();
      }
    };
  }, []);

  // Cleanup all ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}

function HomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const snapTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timeout = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap
      snapTriggerRef.current = ScrollTrigger.create({
        snap: {
          snapTo: (value) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (snapTriggerRef.current) {
        snapTriggerRef.current.kill();
      }
    };
  }, []);

  // Cleanup all ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0C10]">
      {/* Starfield Background */}
      <Starfield />

      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main ref={mainRef} className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Feature Sections */}
        {featureSections.map((section, index) => (
          <PinnedSection
            key={section.id}
            id={section.id}
            headline={section.headline}
            headlineAccent={section.headlineAccent}
            subheadline={section.subheadline}
            cardImage={section.cardImage}
            cardAlt={section.cardAlt}
            zIndex={20 + index}
            linkTo={section.id === 'privacy' ? '/privacy' : section.id === 'terms' ? '/terms' : undefined}
          />
        ))}

        {/* Pricing Section (flowing) */}
        <PricingSection />

        {/* Footer/CTA Section (flowing) */}
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
