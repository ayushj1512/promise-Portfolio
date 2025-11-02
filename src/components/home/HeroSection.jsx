'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { useTheme } from '../../context/Themecontext';

export default function HeroSection() {
  const { bgTheme, themes, accent } = useTheme();
  const activeTheme = themes[bgTheme];
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // ✅ Typewriter quotes
  const quotes = [
    'Turning imagination into code ✨',
    'Designing smooth user experiences 🎨',
    'Building ideas that inspire 💡',
    'Creating with passion and precision ⚡',
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const quote = quotes[currentQuoteIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(quote.substring(0, displayedText.length + 1));
        if (displayedText === quote) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedText(quote.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentQuoteIndex, quotes]);

  // ✅ Card tilt effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * -20;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  // Add subtle ambient glow when theme/accent changes
  useEffect(() => {
    document.body.style.transition = 'background 0.8s ease';
  }, [bgTheme, accent]);

  return (
    <section
      key={bgTheme}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-10 py-20 transition-all duration-700"
      style={{
        backgroundColor: activeTheme.background,
        color: activeTheme.text,
      }}
    >
      {/* Left — Intro Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center text-left space-y-6 max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hey, I’m{' '}
          <span
            style={{
              color: accent,
              textShadow: `0 0 10px ${accent}66`,
            }}
          >
            ayush juneja
          </span>
        </h1>

        <h2 className="text-2xl font-light opacity-90">
          A{' '}
          <span
            style={{
              color: accent,
              fontWeight: 600,
            }}
          >
            Flutter Developer
          </span>{' '}
          & Creative Technologist
        </h2>

        {/* ✨ Typewriter Quotes */}
        <h3
          className="text-lg md:text-xl font-medium h-8"
          style={{
            color: accent,
            minHeight: '2rem',
            whiteSpace: 'nowrap',
          }}
        >
          {displayedText}
          <span
            className="ml-1 animate-pulse"
            style={{
              color: accent,
            }}
          >
            |
          </span>
        </h3>

        <p className="opacity-80 leading-relaxed mt-2">
          I build immersive mobile and web experiences — blending creativity,
          performance, and technology into seamless digital products. Let’s
          bring your ideas to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: accent,
              color: bgTheme === 'black' ? '#000' : '#fff',
              boxShadow: `0 0 25px ${accent}77`,
            }}
            className="font-medium px-6 py-3 rounded-full transition-all"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            style={{
              border: `1px solid ${accent}`,
              color: accent,
            }}
            className="font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-all"
          >
            Let’s Connect
          </motion.a>
        </div>
      </motion.div>

      {/* Right — Tilted Profile Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          backgroundColor:
            bgTheme === 'black'
              ? 'rgba(255,255,255,0.06)'
              : 'rgba(0,0,0,0.05)',
          border: `1px solid ${accent}44`,
          boxShadow: `0 0 40px ${accent}55`,
          transition: 'transform 0.25s ease-out, box-shadow 0.5s ease',
        }}
        className="relative flex flex-col items-center justify-center rounded-2xl backdrop-blur-xl p-8"
      >
        <div
          className="relative w-56 h-56 rounded-full overflow-hidden border-4 shadow-xl mb-4"
          style={{
            borderColor: accent,
            boxShadow: `0 0 30px ${accent}77`,
          }}
        >
          <Image
            src="/ayush-profile.jpg"
            alt="ayush juneja"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <h3
          className="text-2xl font-bold"
          style={{
            color: accent,
            textShadow: `0 0 10px ${accent}55`,
          }}
        >
          ayush juneja
        </h3>
        <p
          className="text-sm opacity-80"
          style={{ color: activeTheme.text }}
        >
          President · Developer · Innovator
        </p>
      </motion.div>
    </section>
  );
}
