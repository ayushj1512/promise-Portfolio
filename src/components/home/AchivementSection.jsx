"use client";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal, Crown } from "lucide-react";
import { useTheme } from "../../context/Themecontext";

export default function AchievementsSection() {
  const { bgTheme, themes, accent } = useTheme();
  const active = themes[bgTheme];

  return (
    <section
      id="achievements"
      className="relative w-full flex flex-col items-center justify-center px-6 py-24 overflow-hidden text-center"
      style={{
        backgroundColor: active.background,
        color: active.text,
      }}
    >
      {/* 💫 Ambient Glow Effect */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] blur-[250px] opacity-10 rounded-full"
        style={{ background: accent }}
      />

      {/* 🏆 Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-20"
        style={{
          color: accent,
          textShadow: `0 0 25px ${accent}55`,
        }}
      >
        My Achievements & Milestones
      </motion.h2>

      {/* 👑 Ayush Special Highlight Card */}
      <motion.div
        className="flex justify-center mb-20 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div
          className="relative rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl border backdrop-blur-2xl max-w-md transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${accent}22, ${active.background})`,
            borderColor: `${accent}55`,
            boxShadow: `0 0 40px ${accent}33`,
          }}
        >
          {/* Floating Crown Animation */}
          <motion.div
            className="absolute -top-10"
            animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Crown size={50} color="gold" className="drop-shadow-[0_0_10px_gold]" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-yellow-300 drop-shadow-lg">
            AYUSH — The Visionary Leader
          </h3>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            A symbol of creativity, leadership, and innovation — blending passion
            with purpose to inspire positive change.
          </p>
          <span className="mt-4 text-sm uppercase tracking-wide font-medium text-yellow-400">
            Special Recognition
          </span>
        </div>
      </motion.div>

      {/* 🏅 Achievements Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: `0 0 30px ${accent}55`,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-3xl p-8 flex flex-col items-center text-center border shadow-lg backdrop-blur-xl transition-all duration-300"
            style={{
              background:
                bgTheme === "black"
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.05)",
              borderColor: `${accent}33`,
            }}
          >
            {/* Icon Animation */}
            <motion.div
              className="p-4 mb-4 rounded-full shadow-md"
              style={{
                background: `linear-gradient(135deg, ${accent}, ${active.text})`,
                color: bgTheme === "black" ? active.background : "#000",
              }}
              animate={{
                y: [0, -6, 0],
                rotate: [0, -4, 4, 0],
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.div>

            <h3 className="text-xl font-semibold mb-2 text-white/90">
              {item.title}
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-2">
              {item.description}
            </p>
            <span className="mt-2 text-xs opacity-60">{item.year}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ✨ Decorative Motion Blur Lines */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-40"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}

// 🏅 Achievements Data
const achievements = [
  {
    icon: <Trophy size={34} />,
    title: "President — Paradox Fashion Society",
    description:
      "Led 30+ members, curated multiple high-impact shows, and won national-level competitions.",
    year: "2024",
  },
  {
    icon: <Medal size={34} />,
    title: "Flutter Developer Internship",
    description:
      "Engineered a healthcare app with Firebase authentication and BLoC architecture.",
    year: "2024",
  },
  {
    icon: <Star size={34} />,
    title: "Top 10 Finalist — National Hackathon",
    description:
      "Built an innovative prototype within 24 hours that received jury appreciation.",
    year: "2023",
  },
  {
    icon: <Award size={34} />,
    title: "Dean’s Excellence Award",
    description:
      "Recognized for outstanding academic performance and creative leadership.",
    year: "2023",
  },
  {
    icon: <Trophy size={34} />,
    title: "Entrepreneurial Venture — Cheesecake",
    description:
      "Founded a growing accessories brand empowering individuality and creativity.",
    year: "2025",
  },
  {
    icon: <Medal size={34} />,
    title: "Tech & Design Innovator",
    description:
      "Built multiple web and mobile products delivering impact across startups and brands.",
    year: "2022–2025",
  },
];
