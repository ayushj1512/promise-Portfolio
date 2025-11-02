"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/Themecontext";
import { Palette, Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const { bgTheme, toggleBgTheme, setAccent, accent } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const accentColors = [
    "#00ffff", // Cyan
    "#ff69b4", // Pink
    "#00ff7f", // Lime Green
    "#9370db", // Purple
    "#ffd700", // Gold
    "#ff4500", // Orange
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Floating Palette Icon */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.9, rotate: -8 }}
        className="p-3 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300"
        style={{
          backgroundColor: `${accent}33`,
          borderColor: accent,
          color: accent,
          boxShadow: `0 0 12px ${accent}55`,
        }}
      >
        <Palette size={20} />
      </motion.button>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-56 rounded-2xl shadow-xl border overflow-hidden z-50"
            style={{
              backgroundColor:
                bgTheme === "black" ? "rgba(30,30,30,0.75)" : "rgba(255,255,255,0.75)",
              borderColor: `${accent}55`,
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="p-4 space-y-4">
              {/* 🌗 Theme Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium opacity-80">Theme</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleBgTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-300"
                  style={{
                    borderColor: accent,
                    color: accent,
                    backgroundColor: `${accent}22`,
                  }}
                >
                  {bgTheme === "black" ? <Sun size={16} /> : <Moon size={16} />}
                  {bgTheme === "black" ? "Light" : "Dark"}
                </motion.button>
              </div>

              {/* 🎨 Accent Colors */}
              <div>
                <span className="text-sm font-medium opacity-80">Accent</span>
                <div className="flex flex-wrap gap-3 mt-3">
                  {accentColors.map((color) => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setAccent(color)}
                      className={`w-7 h-7 rounded-full border-2 shadow-sm transition-all duration-300 ${
                        accent === color
                          ? "ring-2 ring-offset-2 ring-gray-400 scale-110"
                          : ""
                      }`}
                      style={{
                        backgroundColor: color,
                        borderColor:
                          accent === color ? "#fff" : "rgba(255,255,255,0.4)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
