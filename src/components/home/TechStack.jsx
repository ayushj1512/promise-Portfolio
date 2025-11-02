'use client';
import { motion } from 'framer-motion';
import {
  SiFlutter,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiGithub,
} from 'react-icons/si';
import { Cpu, Code, Wrench } from 'lucide-react';
import { useTheme } from '../../context/Themecontext';
import '../../styles/glare.css';

export default function TechStack() {
  const { bgTheme, accent, themes } = useTheme();
  const activeTheme = themes[bgTheme] || themes.black;

  const techs = [
    { name: 'Flutter', icon: <SiFlutter />, color: '#61b3dc' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#fcca3f' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#facc15' },
    { name: 'React', icon: <SiReact />, color: '#61dafb' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#2b4539' },
    { name: 'Figma', icon: <SiFigma />, color: '#a259ff' },
    { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
  ];

  return (
    <section
      className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center gap-16 overflow-hidden transition-all duration-500"
      style={{
        background: activeTheme.background,
        color: activeTheme.text,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 20% 30%, ${accent}22, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 80% 70%, ${activeTheme.text}11, transparent 60%)`,
        }}
      />

    {/* Title */}
<motion.div
  initial={{ opacity: 0, y: -25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  className="flex flex-col items-center justify-center gap-4 text-center relative"
>
  <div className="flex items-center gap-3">
    <Cpu className="w-10 h-10" style={{ color: accent }} />
   <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="text-5xl md:text-6xl font-extrabold tracking-tight text-center"
  style={{
    color: accent,
    textShadow: `0 0 12px ${accent}55`,
    letterSpacing: '-0.5px',
  }}
>
  My Tech Stack
</motion.h2>

  </div>

  {/* Animated underline accent */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: '80px', opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="h-[3px] rounded-full mt-3"
    style={{
      background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
      boxShadow: `0 0 12px ${accent}66`,
    }}
  />

  <p
    className="text-base md:text-lg mt-3 opacity-75 max-w-md"
    style={{ color: activeTheme.text }}
  >
    Technologies and tools I use to craft beautiful, scalable, and performant digital experiences.
  </p>
</motion.div>


      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-6 md:px-16 relative z-10">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: `0 0 25px ${tech.color}55`,
            }}
            className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl backdrop-blur-md border cursor-pointer transition-all duration-500 hover:-translate-y-2"
            style={{
              borderColor: `${tech.color}66`,
              background:
                bgTheme === 'black'
                  ? 'rgba(20,20,20,0.8)'
                  : 'rgba(255,255,255,0.7)',
              boxShadow: `inset 0 0 15px ${tech.color}22, 0 0 15px ${tech.color}11`,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.25 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="text-4xl"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </motion.div>
            <p
              className="text-sm font-semibold mt-3 tracking-wide text-center"
              style={{
                color: bgTheme === 'black' ? '#d1d1d1' : '#333',
              }}
            >
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Animated Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '70%' }}
        transition={{ duration: 1 }}
        className="h-[2px] rounded-full mt-16"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      {/* Floating icons for depth */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-16 right-20 opacity-25"
      >
        <Code size={40} color={accent} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-16 left-20 opacity-25"
      >
        <Wrench size={40} color={activeTheme.text} />
      </motion.div>
    </section>
  );
}
