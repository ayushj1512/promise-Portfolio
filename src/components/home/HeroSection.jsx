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
  const [glowDirection, setGlowDirection] = useState({ x: 0, y: 0 });

  const quotes = [
    'Turning imagination into code ✨',
    'Designing smooth user experiences 🎨',
    'Building ideas that inspire 💡',
    'Creating with passion and precision ⚡',
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const quote = quotes[currentQuoteIndex];
    let typingSpeed = isDeleting ? 60 : 120;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(quote.substring(0, displayedText.length + 1));
        if (displayedText === quote) setTimeout(() => setIsDeleting(true), 1500);
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

  // Tilt & glow
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
    setGlowDirection({ x: (x - centerX) / centerX, y: (y - centerY) / centerY });
  };
  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setGlowDirection({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.body.style.transition = 'background 0.8s ease';
  }, [bgTheme, accent]);

  return (
    <section
      key={bgTheme}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-10 py-24 transition-all duration-700"
      style={{
        backgroundColor: activeTheme.background,
        color: activeTheme.text,
      }}
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center max-w-2xl space-y-8"
      >
       <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-5xl md:text-6xl font-extrabold leading-tight"
>
  Hey, I’m{' '}
  <span
    style={{
      color: accent,
      textShadow: `0 0 20px ${accent}55`,
    }}
  >
    MAITRI BHARDWAJ
  </span>
</motion.h1>
s
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-medium opacity-90 relative"
        >
          A{' '}
          <span
            className="font-semibold relative"
            style={{
              color: accent,
            }}
          >
            Flutter Developer
            <motion.span
              className="absolute left-0 -bottom-1 h-[2px] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 0.6 }}
              style={{ backgroundColor: accent }}
            />
          </span>{' '}
          & Creative Technologist
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl font-medium h-8"
          style={{
            color: accent,
            minHeight: '2rem',
            whiteSpace: 'nowrap',
          }}
        >
          {displayedText}
          <span className="ml-1 animate-pulse" style={{ color: accent }}>
            |
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="opacity-80 leading-relaxed text-lg"
        >
          I specialize in crafting seamless mobile and web applications that merge innovation
          with precision. My goal? To turn bold ideas into interactive, high-performing realities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-5 mt-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.07 }}
            style={{
              backgroundColor: accent,
              color: bgTheme === 'black' ? '#000' : '#fff',
              boxShadow: `0 0 25px ${accent}77`,
            }}
            className="font-semibold px-7 py-3 rounded-full transition-all"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            style={{
              border: `1px solid ${accent}`,
              color: accent,
            }}
            className="font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-all"
          >
            Let’s Connect
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right — Tilted Profile Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          backgroundColor:
            bgTheme === 'black'
              ? 'rgba(255,255,255,0.08)'
              : 'rgba(0,0,0,0.08)',
          border: `1px solid ${accent}55`,
          boxShadow: `
            ${glowDirection.x * 40}px ${glowDirection.y * 40}px 80px ${accent}66,
            0 0 40px ${accent}33
          `,
          transition: 'transform 0.25s ease-out, box-shadow 0.3s ease',
        }}
        className="relative flex flex-col items-center justify-center rounded-3xl backdrop-blur-2xl p-10 w-[360px] h-[460px]"
      >
        <div
          className="relative w-64 h-64 rounded-full overflow-hidden border-4 shadow-2xl mb-6"
          style={{
            borderColor: accent,
            boxShadow: `0 0 50px ${accent}88`,
          }}
        >
          <Image
            src="/Maitri-profile.jpg"
            alt="Maitri Bhardwaj"
            width={256}
            height={256}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <h3
          className="text-3xl font-bold mb-1"
          style={{
            color: accent,
            textShadow: `0 0 15px ${accent}77`,
          }}
        >
          Maitri Bhardwaj
        </h3>

        <p className="text-base opacity-80 text-center">
          President · Developer · Innovator
        </p>
      </motion.div>
    </section>
  );
}
