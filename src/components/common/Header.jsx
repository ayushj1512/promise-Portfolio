'use client';
import { useState } from 'react';
import ThemeSwitcher from '../header/themeswitcher';
import { Rocket } from 'lucide-react'; // ✅ Changed to Rocket icon
import { useTheme } from '../../context/Themecontext';
import Cursor from '../common/Cursor'; // ✅ Ensure path is correct
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const { bgTheme, accent, themes } = useTheme();
  const activeTheme = themes[bgTheme];
  const [cursorEnabled, setCursorEnabled] = useState(false);

  return (
    <>
      {/* 🚀 Header Section */}
      <header
        className="fixed top-0 left-0 w-full z-50 border-b backdrop-blur-lg transition-all duration-700"
        style={{
          background: activeTheme.background,
          borderColor: `${accent}66`,
          boxShadow: `0 0 15px ${accent}33`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* 💫 Brand Name */}
          <h1
            className="text-2xl md:text-3xl font-semibold tracking-wide select-none cursor-pointer transition-all hover:scale-105"
            style={{
              color: activeTheme.text,
              textShadow: `0 0 15px ${accent}55`,
            }}
          >
            <span
              style={{
                color: accent,
                textShadow: `0 0 10px ${accent}66`,
              }}
            >
              Maitri
            </span>{' '}
            <span style={{ color: activeTheme.text }}>Bhardwaj</span>
          </h1>

          {/* 🎨 Theme Switcher + Rocket Cursor Toggle */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />

            {/* 🚀 Rocket Cursor Toggle Button */}
            <button
              onClick={() => setCursorEnabled(!cursorEnabled)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium hover:scale-105"
              style={{
                background: cursorEnabled ? accent : activeTheme.card,
                color: cursorEnabled ? activeTheme.background : accent,
                boxShadow: cursorEnabled ? `0 0 20px ${accent}77` : 'none',
              }}
            >
              <Rocket
                className="w-5 h-5 transition-transform duration-500"
                style={{
                  transform: cursorEnabled ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              />
              {cursorEnabled ? 'Disable Rocket Cursor' : 'Enable Rocket Cursor'}
            </button>
          </div>
        </div>
      </header>

      {/* ✨ Cursor Effect */}
      <AnimatePresence>{cursorEnabled && <Cursor />}</AnimatePresence>
    </>
  );
}
