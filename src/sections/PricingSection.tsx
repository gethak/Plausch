import { useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'Perfect for getting started',
    features: [
      '3 models',
      '10 comparisons/day',
      'Local storage',
      'Basic shortcuts',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/mo',
    description: 'For power users',
    features: [
      '10+ models',
      'Unlimited comparisons',
      'Cloud sync',
      'Priority speed',
      'Advanced shortcuts',
    ],
    cta: 'Upgrade to Pro',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$29',
    period: '/mo per seat',
    description: 'For collaborative teams',
    features: [
      'Everything in Pro',
      'Shared workspaces',
      'Admin & billing',
      'SSO (soon)',
      'Priority support',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    if (!section || !title || !cards) return;

    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        title,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger reveal
      const cardElements = cards.querySelectorAll('.pricing-card');
      gsap.fromTo(
        cardElements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cards,
            start: 'top 75%',
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
      id="pricing"
      className="relative py-24 lg:py-32 z-20"
      style={{ background: 'transparent' }}
    >
      {/* Subtle gradient orb */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] gradient-orb opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-micro text-violet mb-4 block">PRICING</span>
          <h2 className="headline-lg text-[#F4F6FF] mb-4">
            Simple pricing
          </h2>
          <p className="text-body text-[#A7B0C8] max-w-md mx-auto">
            Start free. Upgrade when you need more models and team features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card rounded-[28px] p-8 card-border ${
                plan.highlighted
                  ? 'bg-violet/10 border-violet/30'
                  : 'bg-[#141821]/50'
              }`}
            >
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl text-[#F4F6FF] mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-heading font-bold text-4xl text-[#F4F6FF]">
                    {plan.price}
                  </span>
                  <span className="text-[#A7B0C8] text-sm">{plan.period}</span>
                </div>
                <p className="text-[#A7B0C8] text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-violet/20' : 'bg-white/5'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.highlighted ? 'text-violet' : 'text-[#A7B0C8]'
                        }`}
                      />
                    </div>
                    <span className="text-[#A7B0C8] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full py-3 font-medium btn-hover ${
                  plan.highlighted
                    ? 'bg-violet hover:bg-violet/90 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-[#F4F6FF] border border-white/10'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
