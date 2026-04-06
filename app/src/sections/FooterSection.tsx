import { useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cta = ctaRef.current;
    const footer = footerRef.current;
    if (!section || !cta || !footer) return;

    const ctx = gsap.context(() => {
      // CTA reveal
      gsap.fromTo(
        cta,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: cta,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Footer reveal
      gsap.fromTo(
        footer,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 z-20"
      style={{ background: 'transparent' }}
    >
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] gradient-orb opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        {/* CTA */}
        <div ref={ctaRef} className="mb-20">
          <h2 className="headline-lg text-[#F4F6FF] mb-4">
            Ready to chat smarter?
          </h2>
          <p className="text-body text-[#A7B0C8] mb-8 max-w-md mx-auto">
            Join the beta and start comparing models today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-violet hover:bg-violet/90 text-white btn-hover rounded-full px-8 py-3 text-sm font-medium group"
            >
              Get Plausch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-white/10 text-[#F4F6FF] hover:bg-white/5 rounded-full px-8 py-3 text-sm font-medium"
            >
              <Github className="mr-2 w-4 h-4" />
              Read the docs
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer ref={footerRef} className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="font-heading font-bold text-lg text-[#F4F6FF]">
                Plausch
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors text-sm"
              >
                Contact
              </a>
            </div>

            {/* Copyright */}
            <div className="text-[#A7B0C8] text-sm">
              © 2025 Plausch AI
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
