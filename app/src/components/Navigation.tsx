import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C10]/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-heading font-bold text-xl text-[#F4F6FF]">
            Plausch
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors text-sm font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors text-sm font-medium"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('docs')}
            className="text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors text-sm font-medium"
          >
            Docs
          </button>
          <button
            onClick={() => scrollToSection('signin')}
            className="text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors text-sm font-medium"
          >
            Sign In
          </button>
        </div>

        {/* CTA */}
        <Button
          className="bg-violet hover:bg-violet/90 text-white btn-hover rounded-full px-5 py-2 text-sm font-medium"
        >
          Get Plausch
        </Button>
      </div>
    </nav>
  );
}
