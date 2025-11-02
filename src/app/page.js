"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/Themecontext";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LoadingScreen from "@/components/common/LoadingScreen";
import FloatingActionButton from "@/components/common/FloatingActionButton";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TechStack from "@/components/home/TechStack";
import TimelineSection from "@/components/home/TimelineSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import BlogSection from "@/components/home/BlogSection";
import AchivementSection from "@/components/home/AchivementSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const { bgTheme, accent, themes } = useTheme();
  const activeTheme = themes[bgTheme];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden transition-colors duration-500"
      style={{
        backgroundColor: activeTheme.background,
        color: activeTheme.text,
      }}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="flex items-center justify-center min-h-screen"
            style={{ backgroundColor: activeTheme.background }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col min-h-screen"
            style={{
              backgroundColor: activeTheme.background,
              color: activeTheme.text,
            }}
          >
            {/* 🧭 HEADER */}
            <Header />

            {/* 🚀 MAIN CONTENT */}
            <section id="hero">
              <HeroSection />
            </section>

            <section id="about">
              <AboutSection />
            </section>

            <section id="techstack">
              <TechStack />
            </section>

            <section id="timeline">
              <TimelineSection />
            </section>

            <section id="projects">
              <ProjectsSection />
            </section>

            <section id="blogs">
              <BlogSection />
            </section>

            <section id="achievements">
              <AchivementSection />
            </section>

            <section id="contact">
              <ContactSection />
            </section>

            {/* 🦶 FOOTER */}
            <Footer />

            {/* 🎨 Floating Theme Switcher */}
            <FloatingActionButton />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
