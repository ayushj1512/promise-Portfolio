'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const themes = {
  // 💚 Aqua–Glitch Theme (Default)
  glitch: {
    accent1: '#2b4539', // Deep green tint
    accent2: '#61dca3', // Bright mint green
    accent3: '#61b3dc', // Cool blue accent
    bg: '#0a0a0a',
    text: '#ffffff',
  },

  // 🌹 Rose Elegance
  rose: {
    accent1: '#f43f5e',
    accent2: '#ff758c',
    bg: '#fff1f2',
    text: '#881337',
  },

  // 🤎 Brown–Beige Classy
  brownBeige: {
    accent1: '#a67b5b',
    accent2: '#d9bfa7',
    bg: '#fdfaf6',
    text: '#3e2723',
  },
};

export default function ThemeTest() {
  const [theme, setTheme] = useState('glitch');

  useEffect(() => {
    const savedTheme = localStorage.getItem('customTheme');
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme(theme);
    }
  }, []);

  const applyTheme = (themeName) => {
    const colors = themes[themeName];
    document.documentElement.style.setProperty('--accent1', colors.accent1);
    document.documentElement.style.setProperty('--accent2', colors.accent2);
    document.documentElement.style.setProperty('--accent3', colors.accent3 || colors.accent2);
    document.documentElement.style.setProperty('--bg-color', colors.bg);
    document.documentElement.style.setProperty('--text-color', colors.text);
    localStorage.setItem('customTheme', themeName);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-500"
      style={{
        backgroundColor: `var(--bg-color)`,
        color: `var(--text-color)`,
      }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Theme Mode:{" "}
        <span
          style={{
            background: `linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent3))`,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {theme}
        </span>
      </motion.h1>

      {/* Accent Display */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="p-10 rounded-2xl shadow-lg text-center mb-10"
        style={{
          background: `linear-gradient(135deg, var(--accent1), var(--accent2), var(--accent3))`,
          color: '#fff',
        }}
      >
        <p className="text-lg font-semibold tracking-wide">
          Accent Blend — Showing your dual-tone theme style
        </p>
      </motion.div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.keys(themes).map((key) => (
          <button
            key={key}
            onClick={() => handleThemeChange(key)}
            className="px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105 border"
            style={{
              background: `linear-gradient(90deg, ${themes[key].accent1}, ${themes[key].accent2})`,
              color: '#fff',
              borderColor: theme === key ? themes[key].text : 'transparent',
              boxShadow:
                theme === key
                  ? `0 0 15px ${themes[key].accent2}`
                  : 'none',
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Info */}
      <p className="mt-10 text-sm opacity-80 text-center">
        Current Accents:{" "}
        <span style={{ color: 'var(--accent1)' }}>{themes[theme].accent1}</span>{" "}
        &{" "}
        <span style={{ color: 'var(--accent2)' }}>{themes[theme].accent2}</span>
      </p>
    </div>
  );
}
