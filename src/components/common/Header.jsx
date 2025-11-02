'use client';
import ThemeSwitcher from '../header/themeswitcher';
import { useTheme } from '../../context/Themecontext';

export default function Header() {
  const { bgTheme, accent, themes } = useTheme();
  const activeTheme = themes[bgTheme];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b backdrop-blur-lg transition-all duration-700"
      style={{
        background: activeTheme.background,
        borderColor: `${accent}66`,
        boxShadow: `0 0 15px ${accent}33`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🌟 Brand Name */}
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
            Ayush
          </span>{' '}
          <span style={{ color: activeTheme.text }}>Juneja</span>
        </h1>

        {/* 🎨 Theme Switcher Component */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
