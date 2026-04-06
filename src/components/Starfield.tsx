import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
      starsRef.current = [];
      
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 2 + 0.5,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    const animate = (time: number) => {
      ctx.fillStyle = '#0B0C10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const scrollOffset = scrollYRef.current * 0.015;

      starsRef.current.forEach((star) => {
        // Twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = star.opacity * (0.7 + twinkle * 0.3);

        // Parallax drift
        let y = star.y - scrollOffset * star.z;
        y = ((y % canvas.height) + canvas.height) % canvas.height;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 246, 255, ${currentOpacity})`;
        ctx.fill();

        // Add subtle violet tint to some stars
        if (star.z > 1.8) {
          ctx.beginPath();
          ctx.arc(star.x, y, star.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(123, 97, 255, ${currentOpacity * 0.5})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-canvas"
      aria-hidden="true"
    />
  );
}
