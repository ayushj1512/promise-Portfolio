"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../../context/Themecontext";

export default function ProjectsSection() {
  const { bgTheme, accent, themes } = useTheme();
  const activeTheme = themes[bgTheme];

  const projects = [
    {
      name: "Count88",
      url: "https://count88-frontend.vercel.app/",
      description:
        "A modern analytics dashboard that visualizes metrics and real-time data with a smooth user interface.",
    },
    {
      name: "Craftra",
      url: "https://www.craftra.co/",
      description:
        "An online creative marketplace connecting handmade product sellers to buyers globally — built with responsive UI.",
    },
    {
      name: "New Lakshmi Store",
      url: "https://www.newlakshmistore.com/",
      description:
        "A fully functional e-commerce store offering groceries, home essentials, and more — integrated with payment and order tracking.",
    },
    {
      name: "Shop Velour",
      url: "https://shopvelour.in/",
      description:
        "A premium accessories brand website featuring elegant UI, modern layout, and brand storytelling — developed using Next.js.",
    },
    {
      name: "Bhagwati Cars",
      url: "https://bhagwaticars.com/",
      description:
        "A professional used car dealership platform enabling users to buy and sell vehicles seamlessly.",
    },
    {
      name: "Miray Fashions",
      url: "https://mirayfashions.com/",
      description:
        "A fast, elegant fashion e-commerce website with category sections, product grids, and creative interactions.",
    },
    {
      name: "Anhad Yoga",
      url: "https://anhadyoga.vercel.app/",
      description:
        "A minimalist yoga website focusing on mindfulness and wellness — designed for clarity and calm.",
    },
  ];

  // Two rows: first row (4 projects), second row (3)
  const rows = [projects.slice(0, 4), projects.slice(4, 7)];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 flex flex-col items-center transition-all duration-500"
      style={{
        backgroundColor: activeTheme.background,
        color: activeTheme.text,
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-16"
        style={{
          color: accent,
          textShadow: `0 0 20px ${accent}55, 0 0 40px ${accent}22`,
          letterSpacing: "-0.02em",
        }}
      >
        Featured Projects
      </motion.h2>

      {/* Reverse Pyramid Layout */}
      <div className="flex flex-col gap-14 w-full items-center">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-10"
            style={{
              maxWidth: `${row.length * 330}px`,
            }}
          >
            {row.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 25px ${accent}55`,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => window.open(project.url, "_blank")}
                className="relative group rounded-2xl overflow-hidden border shadow-md backdrop-blur-md transition-all duration-500 cursor-pointer"
                style={{
                  borderColor: `${accent}55`,
                  background:
                    bgTheme === "black"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.05)",
                  width: "300px",
                }}
              >
                {/* Iframe Preview */}
                <div className="relative w-full h-56 overflow-hidden">
                  <iframe
                    src={project.url}
                    loading="lazy"
                    className="w-full h-full border-none transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    title={project.name}
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>

                {/* Project Details */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: accent }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4 opacity-80"
                      style={{
                        color:
                          bgTheme === "black"
                            ? "rgba(255,255,255,0.8)"
                            : "rgba(0,0,0,0.7)",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                    style={{ color: accent }}
                  >
                    <ExternalLink size={16} /> Visit Project
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(120deg, ${accent}33, ${activeTheme.text}22, ${accent}33)`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Accent Background Glows */}
      <div
        className="absolute top-24 left-10 w-[300px] h-[300px] blur-[100px] rounded-full opacity-20"
        style={{ background: accent }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-[400px] h-[400px] blur-[120px] rounded-full opacity-10"
        style={{ background: activeTheme.text }}
      ></div>
    </section>
  );
}
