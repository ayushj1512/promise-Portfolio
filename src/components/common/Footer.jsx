"use client";
import { useTheme } from "../../context/Themecontext";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const { bgTheme, accent, themes } = useTheme();
  const activeTheme = themes[bgTheme];

  return (
    <footer
      className="w-full border-t backdrop-blur-md transition-all duration-500"
      style={{
        background: activeTheme.background,
        borderColor: `${accent}55`,
        color: activeTheme.text,
        boxShadow: `0 -2px 10px ${accent}22`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* 🌟 Brand Name */}
        <h2
          className="text-xl font-semibold select-none"
          style={{
            color: activeTheme.text,
            textShadow: `0 0 10px ${accent}55`,
          }}
        >
          <span style={{ color: accent }}>Ayush</span> Juneja
        </h2>

        {/* 🌐 Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-all duration-300 hover:opacity-80"
              style={{
                color: activeTheme.text,
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* 🔗 Social Icons */}
        <div className="flex items-center gap-4">
          {[
            {
              Icon: Github,
              href: "https://github.com/",
            },
            {
              Icon: Linkedin,
              href: "https://linkedin.com/",
            },
            {
              Icon: Instagram,
              href: "https://instagram.com/",
            },
            {
              Icon: Mail,
              href: "mailto:ayush@example.com",
            },
          ].map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border transition-all duration-300 hover:scale-110"
              style={{
                borderColor: accent,
                color: accent,
                backgroundColor: `${accent}15`,
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* 💬 Bottom Text */}
      <div
        className="text-center text-sm py-4 border-t"
        style={{
          borderColor: `${accent}33`,
          color: `${activeTheme.text}aa`,
        }}
      >
        © {new Date().getFullYear()} Ayush Juneja. All Rights Reserved.
      </div>
    </footer>
  );
}
