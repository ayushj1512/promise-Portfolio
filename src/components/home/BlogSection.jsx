'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '../../context/Themecontext';
import '../../styles/scrollhide.css'; // 👈 For hiding scrollbar

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { bgTheme, themes, accent } = useTheme();
  const activeTheme = themes[bgTheme];

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setSelectedBlog(null);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

   const blogs = [
    {
      title: "The Journey of a Developer",
      date: "October 2025",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "A reflection on the art of coding, perseverance, and continuous learning.",
      content: `Every developer’s journey begins with curiosity — the desire to create something from nothing. 
Over time, I’ve realized that consistency, creativity, and problem-solving are the real superpowers. 
Coding isn’t just about writing syntax; it’s about transforming ideas into digital reality. 
Each bug fixed, each feature built, adds another story to your evolution as a developer.`,
    },
    {
      title: "Designing with Purpose",
      date: "September 2025",
      image:
        "https://images.unsplash.com/photo-1607083209254-7a6a4a7a5a6e?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Good design is not decoration — it’s empathy turned into experience.",
      content: `Great design communicates emotion before words do. It’s not about how beautiful something looks, but how naturally it guides the user. 
True design is when aesthetics and function coexist seamlessly. 
Purposeful design starts with understanding human behavior and ends with creating intuitive experiences that make people feel understood.`,
    },
    {
      title: "Building the Future with Code",
      date: "August 2025",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "How technology continues to reshape creativity and innovation across the world.",
      content: `Technology is not just a tool — it’s an ecosystem that evolves with us. 
Every line of code written today shapes the digital experiences of tomorrow. 
Developers are the architects of the invisible world — designing systems that change how we think, connect, and create.`,
    },
    {
      title: "The Art of Minimalism in Design",
      date: "July 2025",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Why simplicity often speaks louder than complex visuals and cluttered layouts.",
      content: `Minimalism is not the absence of elements — it’s the presence of meaning. 
It’s about stripping away what’s unnecessary so that the essential can shine. 
The quiet elegance of white space, clean typography, and balance creates a sense of peace and focus for the user.`,
    },
    {
      title: "Why Dark Mode is More Than Just A Trend",
      date: "June 2025",
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Exploring the psychology, comfort, and modern appeal of dark UI design.",
      content: `Dark mode is more than a design preference — it’s an experience. 
It reduces strain, enhances focus, and creates a modern aesthetic. 
The contrast of light on dark feels cinematic, immersive, and timeless — like working in a theater where your thoughts are the spotlight.`,
    },
    {
      title: "Human-Centered Design Thinking",
      date: "May 2025",
      image:
        "https://images.unsplash.com/photo-1556767576-cfba5c0bfc2c?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Design begins when you start solving for people — not for perfection.",
      content: `Design thinking transforms how we approach problem-solving. 
When empathy drives the process, innovation follows naturally. 
It reminds us that technology is only powerful when it serves people — not the other way around.`,
    },
    {
      title: "Mastering Focus in a Distracted World",
      date: "April 2025",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Practical techniques to stay productive and mindful in the digital age.",
      content: `In an age of endless notifications, focus has become the new luxury. 
Deep work isn’t about time management — it’s about attention management. 
Creating boundaries with your digital world is an act of self-respect and clarity.`,
    },
    {
      title: "From Idea to Launch — The Creative Process",
      date: "March 2025",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "A reflection on turning concepts into real, functioning projects.",
      content: `The creative process is a dance between structure and spontaneity. 
It’s about knowing when to plan and when to flow. 
Every launch carries the essence of persistence, failure, and the courage to keep building when nobody’s watching.`,
    },
    {
      title: "Embracing Failure as a Catalyst for Growth",
      date: "February 2025",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Why every setback is a lesson in disguise and a step toward mastery.",
      content: `Failure isn’t the end — it’s the tuition fee of success. 
Every mistake teaches something a textbook never could. 
Resilience grows not from comfort, but from the courage to stand up after falling.`,
    },
    {
      title: "AI, Creativity, and the Future of Work",
      date: "January 2025",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "How artificial intelligence is reshaping creativity and human potential.",
      content: `AI isn’t replacing creativity — it’s amplifying it. 
When machines handle repetition, humans are free to explore imagination. 
The future of work will belong to those who can blend emotional intelligence with technical brilliance.`,
    },
    {
      title: "The Rise of Indie Developers",
      date: "December 2024",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "How solo creators are building tools, apps, and games that rival entire teams.",
      content: `Indie developers are the new-age artisans of the digital world. 
With creativity, community, and courage, they’re proving that passion often outshines big budgets.`,
    },
    {
      title: "Design Systems — The Backbone of Consistency",
      date: "November 2024",
      image:
        "https://images.unsplash.com/photo-1601933470619-3ad74a7c59e0?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Why every great product has a well-structured design system behind it.",
      content: `Design systems bring order to creativity. 
They allow large teams to build cohesive products while still leaving space for innovation. 
In a way, they’re the silent heroes of great design.`,
    },
    {
      title: "Typography — The Voice of Visuals",
      date: "October 2024",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Typography is more than text — it’s emotion in motion.",
      content: `Fonts speak louder than we think. 
Every curve, weight, and spacing decision carries tone, emotion, and personality. 
Great typography doesn’t just communicate — it whispers feelings between the lines.`,
    },
    {
      title: "Sustainable Tech — Building for Tomorrow",
      date: "September 2024",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Why sustainability should be at the heart of every tech decision.",
      content: `Technology is powerful, but it must also be responsible. 
Building energy-efficient, scalable, and inclusive systems is not just smart — it’s essential for our collective future.`,
    },
    {
      title: "Digital Detox — Reclaiming Your Time Online",
      date: "August 2024",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Practical ways to balance creativity, focus, and mental clarity in a hyperconnected world.",
      content: `We don’t need to escape technology — we need to reshape our relationship with it. 
A conscious digital detox redefines priorities and restores presence.`,
    },
    {
      title: "Freelancing in the Modern Era",
      date: "July 2024",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Freedom, flexibility, and the new face of work culture.",
      content: `Freelancing isn’t just about independence — it’s about ownership. 
You define your time, your craft, and your worth. 
In this economy, passion and adaptability are the true currencies.`,
    },
    {
      title: "Personal Branding for Creators",
      date: "June 2024",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Why your online identity is your strongest asset in a crowded digital world.",
      content: `Your personal brand is not a logo — it’s your voice, story, and values. 
It’s how people remember you when you’re not in the room.`,
    },
    {
      title: "Remote Work Revolution",
      date: "May 2024",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "How the shift to remote work changed creativity, balance, and productivity forever.",
      content: `Remote work empowered millions to blend life and labor harmoniously. 
It challenged old systems and gave rise to a new culture — one built on trust, flexibility, and outcomes, not hours.`,
    },
    {
      title: "Why Every Developer Should Write",
      date: "April 2024",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Writing clarifies thinking — even for coders.",
      content: `When you write about code, you understand it better. 
Writing builds empathy, patience, and the ability to teach — which are the foundations of leadership in tech.`,
    },
    {
      title: "Mindful UI — Designing Calm Interfaces",
      date: "March 2024",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1400&q=80",
      shortDesc:
        "Interfaces that breathe, move, and flow gently — just like good conversation.",
      content: `Mindful UI embraces softness — rounded corners, gentle animations, and thoughtful pacing. 
It’s about reducing cognitive load and creating peace in pixels.`,
    },
  ];


  return (
    <section
      id="blogs"
      className="relative py-20 px-6 flex flex-col items-center overflow-hidden"
      style={{
        backgroundColor: activeTheme.background,
        color: activeTheme.text,
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-14"
        style={{
          color: accent,
          textShadow: `0 0 25px ${accent}55`,
          letterSpacing: '-0.02em',
        }}
      >
        Insights & Reflections
      </motion.h2>

      {/* Accent Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] blur-[180px] rounded-full opacity-10"
        style={{ background: accent }}
      ></div>

      {/* Horizontal Scroll Row */}
      <div className="flex gap-8 w-full max-w-7xl overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="min-w-[330px] md:min-w-[380px] bg-zinc-900/40 dark:bg-white/10 backdrop-blur-xl border border-zinc-800/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer snap-center"
            onClick={() => setSelectedBlog(blog)}
          >
            <div className="overflow-hidden relative">
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60"></div>
            </div>

            <div className="p-6 flex flex-col justify-between h-64">
              <div>
                <p className="text-sm text-gray-400 mb-1">{blog.date}</p>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: accent }}
                >
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify line-clamp-4">
                  {blog.shortDesc}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedBlog(blog);
                }}
                className="mt-5 self-start text-sm font-medium px-4 py-2 rounded-full transition-all hover:scale-105"
                style={{
                  backgroundColor: `${accent}22`,
                  color: accent,
                  border: `1px solid ${accent}55`,
                }}
              >
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-zinc-900/95 dark:bg-white/95 border border-gray-700 rounded-2xl p-8 max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[90vh]"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
                onClick={() => setSelectedBlog(null)}
              >
                <X size={22} />
              </button>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <h3
                className="text-3xl font-semibold mb-3"
                style={{ color: accent }}
              >
                {selectedBlog.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{selectedBlog.date}</p>
              <p className="text-gray-200 leading-relaxed text-justify dark:text-gray-700 whitespace-pre-line">
                {selectedBlog.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
