'use client';

import { motion } from 'framer-motion';
import { Download, User } from 'lucide-react';
import { useTheme } from '../../context/Themecontext';
import '../../styles/glare.css';
import ElectricBorder from '../reactbits/ElectricBorder';

export default function AboutSection() {
  const { bgTheme, accent, themes } = useTheme();
  const active = themes[bgTheme] || themes.black;

  return (
    <section
      id="about"
      className="w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden relative transition-all duration-700"
     style={{
  background: active.background,
  color: active.text,
}}

    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${accent}22 0%, transparent 70%)`,
          zIndex: 0,
        }}
      ></div>

    {/* Section Title */}
<motion.div
  initial={{ opacity: 0, y: -25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  className="relative flex flex-col items-center justify-center mb-16 z-10"
>
  {/* Gradient Animated Text */}
  <h2
    className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-clip-text text-transparent"
    style={{
      backgroundImage: `linear-gradient(90deg, ${accent}, ${active.text}, ${accent})`,
      backgroundSize: '200% auto',
      animation: 'shimmer 4s linear infinite',
      textShadow: `0 0 15px ${accent}55`,
    }}
  >
    About Me
  </h2>

  {/* Glowing Underline */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: '90%', opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    className="h-[3px] mt-4 rounded-full shadow-lg"
    style={{
      background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
      boxShadow: `0 0 20px ${accent}99`,
    }}
  />
</motion.div>

{/* Add shimmer animation */}
<style jsx>{`
  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
`}</style>


      {/* Electric Border Wrapper */}
      <ElectricBorder
        color={accent}
        speed={1.2}
        chaos={0.7}
        thickness={2.5}
        style={{
          borderRadius: 24,
          padding: '1rem',
          maxWidth: '90%',
        }}
      >
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: `0 15px 45px ${accent}33`,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="glare-hover relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-8 md:px-16 py-12 rounded-3xl border backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-700"
          style={{
            background: `linear-gradient(145deg, ${
              bgTheme === 'black' ? '#111' : '#fff'
            }, ${bgTheme === 'black' ? '#1a1a1a' : '#f5f5f5'})`,
            borderColor: accent,
            boxShadow: `0 0 25px ${accent}33`,
            zIndex: 5,
          }}
        >
          {/* Profile Image */}
          <motion.img
            src="https://i.pinimg.com/736x/33/6b/85/336b856e97a0f73ac7f1781c09fa91b9.jpg"
            alt="ayush juneja"
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 180 }}
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 shadow-lg"
            style={{
              borderColor: accent,
              boxShadow: `0 0 35px ${accent}77`,
            }}
          />

          {/* Text Content */}
          <div className="max-w-2xl text-center md:text-left space-y-6 relative z-10">
            <h3
              className="text-3xl md:text-4xl font-semibold"
              style={{
                color: active.text,
                textShadow: `0 0 10px ${accent}33`,
              }}
            >
              I'm ayush juneja
            </h3>

            <p
              className="leading-relaxed text-lg md:text-xl opacity-90"
              style={{ color: active.text }}
            >
              A passionate{' '}
              <span style={{ color: accent, fontWeight: 600 }}>Developer</span>{' '}
              and{' '}
              <span style={{ color: active.text, fontWeight: 600 }}>Designer</span>{' '}
              from Delhi. Currently pursuing B.Tech at HMRITM, I lead as the{' '}
              <span style={{ color: accent, fontWeight: 600 }}>
                President of Paradox Fashion Society
              </span>{' '}
              and work as a{' '}
              <span style={{ color: active.text, fontWeight: 600 }}>
                Flutter Developer
              </span>{' '}
              crafting smooth, aesthetic, and functional digital experiences.
            </p>

            <p style={{ color: active.text, opacity: 0.7 }}>
              I’m on a journey to build elegant apps and brands that empower and
              inspire. Whether through design, code, or leadership — I turn ideas
              into meaningful digital experiences.
            </p>

            {/* Download CV */}
            <motion.a
              href="/ayush_juneja_CV.pdf"
              download
              whileHover={{
                scale: 1.07,
                boxShadow: `0 0 25px ${accent}`,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 border-2 rounded-full font-semibold tracking-wide transition-all duration-500 hover:brightness-110"
              style={{
                borderColor: accent,
                color: accent,
                backgroundColor:
                  bgTheme === 'black' ? '#11111155' : '#f5f5f555',
              }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </ElectricBorder>
    </section>
  );
}
