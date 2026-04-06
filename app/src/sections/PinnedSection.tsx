import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedSectionProps {
  id: string;
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  cardImage: string;
  cardAlt: string;
  cardAspectRatio?: string;
  zIndex: number;
}

export function PinnedSection({
  id,
  eyebrow,
  headline,
  headlineAccent,
  subheadline,
  cardImage,
  cardAlt,
  cardAspectRatio = '16/9',
  zIndex,
}: PinnedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

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
        },
      });

      // ENTRANCE (0%-30%)
      // Headline from left
      scrollTl.fromTo(
        headlineRef.current,
        { x: '-55vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Card from right
      scrollTl.fromTo(
        cardRef.current,
        { x: '55vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.06
      );

      // Glow fade in
      scrollTl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, ease: 'none' },
        0.1
      );

      // SETTLE (30%-70%): Elements hold position

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
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 1.1, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="section-pinned flex items-center"
      style={{ background: 'transparent', zIndex }}
    >
      {/* Glow effect behind card */}
      <div
        ref={glowRef}
        className="absolute right-[6vw] top-1/2 -translate-y-1/2 w-[44vw] h-[44vw] max-w-[650px] max-h-[650px] gradient-orb pointer-events-none opacity-60"
      />

      {/* Headline block (left) */}
      <div
        ref={headlineRef}
        className="absolute left-[8vw] top-1/2 -translate-y-1/2 w-[42vw] max-w-[560px] z-10"
      >
        {eyebrow && (
          <span className="text-micro text-violet mb-4 block">{eyebrow}</span>
        )}
        <h2 className="headline-lg text-[#F4F6FF] mb-6">
          {headline}
          {headlineAccent && (
            <span className="text-violet">{headlineAccent}</span>
          )}
        </h2>
        <p className="text-body text-[#A7B0C8] max-w-[480px]">{subheadline}</p>
      </div>

      {/* Feature Card (right) */}
      <div
        ref={cardRef}
        className="absolute right-[8vw] top-1/2 -translate-y-1/2 w-[40vw] max-w-[640px] rounded-[28px] card-border card-glow overflow-hidden z-10"
        style={{ aspectRatio: cardAspectRatio }}
      >
        <img
          src={cardImage}
          alt={cardAlt}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
