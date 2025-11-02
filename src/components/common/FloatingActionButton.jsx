'use client';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Cpu,
  Calendar,
  Folder,
  PenTool,
  Award,
  Mail,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/Themecontext';

export default function FloatingActionButton() {
  const [activeSection, setActiveSection] = useState('');
  const { accent, bgTheme } = useTheme();

  const textColor = bgTheme === 'black' ? '#ffffff' : '#000000';
  const background = bgTheme === 'black' ? '#000000' : '#ffffff';

  // 🧭 Section shortcuts
  const shortcuts = [
    { name: 'Home', icon: Home, id: 'hero' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Stack', icon: Cpu, id: 'techstack' },
    { name: 'Timeline', icon: Calendar, id: 'timeline' },
    { name: 'Projects', icon: Folder, id: 'projects' },
    { name: 'Blogs', icon: PenTool, id: 'blogs' },
    { name: 'Achievements', icon: Award, id: 'achievements' },
    { name: 'Contact', icon: Mail, id: 'contact' },
  ];

  // 🧭 Highlight active section while scrolling
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

  // Smooth scroll
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-5 px-6 py-3 rounded-3xl shadow-2xl border backdrop-blur-lg z-50"
      style={{
        background: `linear-gradient(120deg, ${background}cc, ${accent}22)`,
        borderColor: `${accent}33`,
        boxShadow: `0 0 25px ${accent}44`,
        color: textColor,
      }}
    >
      {shortcuts.map(({ name, icon: Icon, id }) => {
        const isActive = activeSection === id;
        return (
          <motion.button
            key={id}
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -6 }}
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
                boxShadow: isActive ? `0 0 15px ${accent}` : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <Icon className="w-5 h-5" />
            </motion.div>

            {/* Tooltip */}
            <span
              className="absolute -top-8 text-[11px] bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
              style={{ boxShadow: `0 0 8px ${accent}66` }}
            >
              {name}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
