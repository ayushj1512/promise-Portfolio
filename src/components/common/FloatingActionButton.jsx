'use client';
import { motion } from 'framer-motion';
import { Home, User, Cpu, Folder, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActionButton() {
  const [activeSection, setActiveSection] = useState('');

  // 🎨 Fixed accent color (change if needed)
  const accent = '#00ffff';
  const background = '#000000';
  const textColor = '#ffffff';

  // 🧭 Section shortcuts
  const shortcuts = [
    { name: 'Home', icon: Home, id: 'hero' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Stack', icon: Cpu, id: 'techstack' },
    { name: 'Projects', icon: Folder, id: 'projects' },
    { name: 'Contact', icon: Mail, id: 'contact' },
  ];

  // 🧭 Highlight active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let current = '';
      for (const item of shortcuts) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-6 px-6 py-3 rounded-3xl shadow-2xl border backdrop-blur-lg z-50"
      style={{
        background: `linear-gradient(120deg, ${background}cc, ${accent}22)`,
        borderColor: `${accent}33`,
        boxShadow: `0 8px 25px ${accent}55`,
        color: textColor,
      }}
    >
      {shortcuts.map(({ name, icon: Icon, id }) => {
        const isActive = activeSection === id;
        return (
          <motion.button
            key={id}
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -5 }}
            onClick={() => scrollTo(id)}
            className="relative group flex flex-col items-center"
            style={{ color: textColor }}
          >
            <motion.div
              className={`p-2 rounded-full transition-all duration-300 ${
                isActive ? 'scale-110' : ''
              }`}
              style={{
                backgroundColor: isActive
                  ? `${accent}55`
                  : `${accent}22`,
                boxShadow: isActive ? `0 0 12px ${accent}` : 'none',
              }}
            >
              <Icon className="w-5 h-5" />
            </motion.div>

            {/* Tooltip */}
            <span className="absolute -top-8 text-[11px] bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              {name}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
