"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/Themecontext";
import { Palette, Moon, Sun, Droplet } from "lucide-react";

export default function ThemeSwitcher() {
  const { bgTheme, toggleBgTheme, setAccent, accent } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 🧠 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🌈 Vibrant Palette Mix
  const accentColors = [
    "#00FFFF", "#FF00FF", "#00FF7F", "#FFD700", "#FF4500", "#FF1493", "#39FF14",
    "#7DF9FF", "#FF3131", "#00B3FF", "#ADFF2F", "#9C27B0",
    "#F8BBD0", "#A7FFEB", "#D1C4E9", "#FFECB3", "#C5CAE9", "#DCEDC8", "#FFCCBC",
    "#9400D3", "#FF6EC7", "#FF8C00", "#3F51B5", "#1DE9B6", "#E91E63", "#8BC34A",
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 🌈 Floating Neon Palette Button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        className="p-3 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accent}55, transparent 70%)`,
          borderColor: accent,
          color: accent,
          boxShadow: `0 0 25px ${accent}AA, inset 0 0 15px ${accent}55`,
        }}
      >
        <motion.div
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Palette size={20} />
        </motion.div>
      </motion.button>

      {/* 🪩 Glowing Dropdown Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-80 rounded-3xl shadow-2xl border overflow-hidden z-50"
            style={{
              background:
                bgTheme === "black"
                  ? "linear-gradient(145deg, rgba(10,10,10,0.9), rgba(35,35,35,0.85))"
                  : "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,245,245,0.85))",
              borderColor: `${accent}88`,
              boxShadow: `0 0 25px ${accent}55, inset 0 0 20px ${accent}22`,
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="p-6 space-y-6">
              {/* 🌗 Mode Switch */}
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: `${accent}` }}
                >
                  Display Mode
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleBgTheme}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium"
                  style={{
                    borderColor: accent,
                    color: accent,
                    backgroundColor: `${accent}15`,
                    boxShadow: `0 0 12px ${accent}44`,
                  }}
                >
                  {bgTheme === "black" ? <Sun size={16} /> : <Moon size={16} />}
                  {bgTheme === "black" ? "Light" : "Dark"}
                </motion.button>
              </div>

              {/* 🎨 Color Palette */}
              <div>
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: accent }}
                >
                  Choose Accent
                </span>

                <div className="grid grid-cols-7 gap-3 mt-4">
                  {accentColors.map((color) => (
                    <motion.div
                      key={color}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setAccent(color)}
                      className="relative cursor-pointer rounded-full"
                    >
                      <div
                        className={`w-7 h-7 rounded-full border-2 transition-all duration-300 ${
                          accent === color
                            ? "ring-2 ring-offset-1 ring-white scale-110"
                            : ""
                        }`}
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${color}, ${color}99)`,
                          borderColor: accent === color ? "#fff" : "#aaa3",
                          boxShadow:
                            accent === color
                              ? `0 0 18px ${color}CC`
                              : `0 0 8px ${color}66`,
                        }}
                      ></div>
                    </motion.div>
                  ))}
                </div>

                {/* 💧 Custom Color Picker */}
                <div className="flex items-center gap-3 mt-6">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Droplet size={18} style={{ color: accent }} />
                  </motion.div>

                  <motion.input
                    whileHover={{ scale: 1.1 }}
                    type="color"
                    value={accent}
                    onChange={(e) => setAccent(e.target.value)}
                    className="w-10 h-10 rounded-full cursor-pointer border-none"
                    style={{
                      boxShadow: `0 0 15px ${accent}88`,
                      background: accent,
                    }}
                  />

                  <span
                    className="text-xs tracking-wide"
                    style={{ color: accent }}
                  >
                    Custom Color
                  </span>
                </div>
              </div>

              {/* 🌌 Animated Footer Line */}
              <motion.div
                layoutId="accent-line"
                className="w-full h-0.5 rounded-full mt-4"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                  boxShadow: `0 0 20px ${accent}`,
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
