import { useEffect, useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Headline entrance
      tl.fromTo(
        headlineRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.15
      );

      // Card entrance
      tl.fromTo(
        cardRef.current,
        { x: '10vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 0.6 },
        0.35
      );

      // Glow entrance
      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset elements to visible when scrolling back to top
            gsap.set(headlineRef.current, { x: 0, opacity: 1 });
            gsap.set(cardRef.current, { x: 0, opacity: 1 });
            gsap.set(glowRef.current, { scale: 1, opacity: 1 });
          },
        },
      });

      // ENTRANCE (0%-30%): No additional entrance (handled by load animation)
      // SETTLE (30%-70%): Hold position

      // EXIT (70%-100%)
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        glowRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.15, opacity: 0.3, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned flex items-center z-10"
      style={{ background: 'transparent' }}
    >
      {/* Glow effect behind card */}
      <div
        ref={glowRef}
        className="absolute right-[8vw] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] gradient-orb pointer-events-none"
      />

      {/* Headline block (left) */}
      <div
        ref={headlineRef}
        className="absolute left-[8vw] top-1/2 -translate-y-1/2 w-[42vw] max-w-[560px] z-10"
      >
        <span className="text-micro text-violet mb-4 block">PLAUSCH AI</span>
        <h1 className="headline-xl text-[#F4F6FF] mb-6">
          One chat.<br />
          <span className="text-violet">Every model.</span>
        </h1>
        <p className="text-body text-[#A7B0C8] mb-8 max-w-[480px]">
          Compare top open-source and API models side-by-side. Pick the best
          answer—without switching tabs.
        </p>
        <Button
          className="bg-violet hover:bg-violet/90 text-white btn-hover rounded-full px-6 py-3 text-sm font-medium group"
        >
          Get early access
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Hero Card (right) */}
      <div
        ref={cardRef}
        className="absolute right-[8vw] top-1/2 -translate-y-1/2 w-[34vw] max-w-[520px] aspect-[4/3] rounded-[32px] card-border card-glow overflow-hidden z-10 card-float"
      >
        <img
          src="/images/hero_card.jpg"
          alt="Plausch AI Chat Interface"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 text-micro text-[#A7B0C8]">
          Try a prompt
        </div>
      </div>
    </section>
  );
}
