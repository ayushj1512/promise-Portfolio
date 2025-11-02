"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useTheme } from "../../context/Themecontext";

export default function EducationExperience() {
  const { bgTheme, accent, themes } = useTheme();
  const activeTheme = themes[bgTheme];

  const education = [
    {
      icon: <GraduationCap size={22} />,
      title: "B.Tech in Computer Science",
      place: "HMR Institute of Technology & Management",
      year: "2021 - 2025",
    },
    {
      icon: <GraduationCap size={22} />,
      title: "Higher Secondary School",
      place: "Lancers Convent, Delhi",
      year: "2019 - 2021",
    },
  ];

  const experience = [
    {
      icon: <Briefcase size={22} />,
      title: "Software Intern",
      place: "Panasonic India Pvt. Ltd.",
      year: "2023",
      desc: "Worked on workflow automation, testing, and internal tool optimization.",
    },
    {
      icon: <Briefcase size={22} />,
      title: "Frontend Developer Intern",
      place: "Street Style Store",
      year: "2024",
      desc: "Improved UI/UX, built landing pages, and optimized Next.js performance.",
    },
    {
      icon: <Briefcase size={22} />,
      title: "Software Engineer Intern",
      place: "Centre for Railway Information Systems (CRIS)",
      year: "2025",
      desc: "Developed real-time dashboards and analytics systems for better insights.",
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: activeTheme.background,
        color: activeTheme.text,
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blur-[120px] opacity-20 -z-10 rounded-full"
        style={{ background: accent }}
      ></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-20"
        style={{
          color: accent,
          textShadow: `0 0 18px ${accent}55`,
        }}
      >
        My Journey
      </motion.h2>

      {/* Two Parallel Timelines */}
      <div className="flex flex-col md:flex-row justify-center items-start w-full max-w-6xl gap-16 px-6 md:px-10">
        {/* Education Timeline */}
        <div className="relative flex-1">
          {/* Timeline Line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-[3px]"
            style={{ background: `${accent}44` }}
          ></div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-10 flex items-center gap-2"
            style={{ color: accent }}
          >
            <GraduationCap size={26} /> Education
          </motion.h3>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-10 mb-10"
            >
              {/* Connector Dot */}
              <div
                className="absolute left-[3px] top-3 w-4 h-4 rounded-full"
                style={{
                  background: accent,
                  boxShadow: `0 0 20px ${accent}`,
                }}
              ></div>

              {/* Card */}
              <div
                className="rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    bgTheme === "black"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.05)",
                  borderColor: `${accent}55`,
                }}
              >
                <div className="flex items-center gap-2 text-lg font-semibold mb-1">
                  <span style={{ color: accent }}>{edu.icon}</span>
                  <h4>{edu.title}</h4>
                </div>
                <p
                  className="opacity-80 text-sm"
                  style={{
                    color:
                      bgTheme === "black"
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(0,0,0,0.7)",
                  }}
                >
                  {edu.place}
                </p>
                <p
                  className="text-xs mt-2 opacity-70"
                  style={{
                    color:
                      bgTheme === "black"
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(0,0,0,0.6)",
                  }}
                >
                  {edu.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="relative flex-1">
          {/* Timeline Line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-[3px]"
            style={{ background: `${accent}44` }}
          ></div>

          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-10 flex items-center gap-2"
            style={{ color: accent }}
          >
            <Briefcase size={26} /> Corporate Experience
          </motion.h3>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-10 mb-10"
            >
              {/* Connector Dot */}
              <div
                className="absolute left-[3px] top-3 w-4 h-4 rounded-full"
                style={{
                  background: accent,
                  boxShadow: `0 0 20px ${accent}`,
                }}
              ></div>

              {/* Card */}
              <div
                className="rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    bgTheme === "black"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.05)",
                  borderColor: `${accent}55`,
                }}
              >
                <div className="flex items-center gap-2 text-lg font-semibold mb-1">
                  <span style={{ color: accent }}>{exp.icon}</span>
                  <h4>{exp.title}</h4>
                </div>
                <p
                  className="opacity-80 text-sm"
                  style={{
                    color:
                      bgTheme === "black"
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(0,0,0,0.7)",
                  }}
                >
                  {exp.place}
                </p>
                <p
                  className="text-xs mt-2 opacity-70"
                  style={{
                    color:
                      bgTheme === "black"
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(0,0,0,0.6)",
                  }}
                >
                  {exp.year}
                </p>
                {exp.desc && (
                  <p
                    className="mt-3 text-sm leading-relaxed opacity-70"
                    style={{
                      color:
                        bgTheme === "black"
                          ? "rgba(255,255,255,0.75)"
                          : "rgba(0,0,0,0.75)",
                    }}
                  >
                    {exp.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
