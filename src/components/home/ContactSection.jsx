"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { useTheme } from "../../context/Themecontext";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const { bgTheme, accent, themes } = useTheme();
  const active = themes?.[bgTheme] || {
    background: "#000000",
    text: "#ffffff",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      style: {
        background: accent,
        color: active.background,
        fontWeight: 600,
      },
      iconTheme: {
        primary: active.background,
        secondary: accent,
      },
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden transition-all duration-700"
      style={{
        background: "#000000",
        color: active.text,
      }}
    >
      {/* ✨ Accent Glows */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px] opacity-20"
        style={{ background: accent }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
        style={{ background: accent }}
      ></div>

      <Toaster position="top-center" />

      {/* 🌟 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-3 text-center tracking-tight"
        style={{
          color: accent,
          letterSpacing: "-0.02em",
        }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-base md:text-lg text-gray-300 mb-14 text-center max-w-xl font-light"
      >
        I’d love to hear from you — whether it’s a project, collaboration, or
        just a friendly hello.
      </motion.p>

      {/* 🔲 Layout */}
      <div className="flex flex-wrap justify-center items-stretch gap-12 w-full max-w-6xl relative z-10">
        {/* 🧍 Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center rounded-3xl p-10 border shadow-xl flex-1 min-w-[320px] transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
          style={{
            background: "rgba(0, 0, 0, 0.9)",
            borderColor: accent,
            boxShadow: `0 0 40px ${accent}22`,
          }}
        >
          <motion.img
            src="https://i.pinimg.com/736x/0f/44/8b/0f448b16f8bfbba6b5e745aefefcb908.jpg"
            alt="Maitri Bhardwaj"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 shadow-lg mb-4 object-cover"
            style={{
              borderColor: accent,
              boxShadow: `0 0 25px ${accent}55`,
            }}
          />

          <h3
            className="text-2xl md:text-3xl font-semibold mb-1 tracking-wide"
            style={{ color: accent }}
          >
            Maitri Bhardwaj
          </h3>

          <p className="text-sm mb-6 opacity-80 text-center">
            Flutter Developer • Web Designer
          </p>

          {/* 📩 Contact Info */}
          <div className="flex flex-col gap-3 text-sm items-center">
            <div className="flex items-center gap-3">
              <Mail size={18} color={accent} />
              <span>Maitri.Bhardwaj@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} color={accent} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} color={accent} />
              <span>Delhi, India</span>
            </div>
          </div>

          {/* 🌐 Social Links */}
          <div className="flex gap-8 mt-8 justify-center">
            {[Linkedin, Github, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                style={{ color: accent }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 📨 Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col rounded-3xl p-10 border shadow-xl flex-1 min-w-[320px] transition-all duration-500 hover:scale-[1.02]"
          style={{
            background: "#000",
            borderColor: accent,
            boxShadow: `0 0 40px ${accent}22`,
          }}
        >
          <h3
            className="text-2xl font-semibold mb-6 tracking-tight"
            style={{ color: accent }}
          >
            Send a Message
          </h3>

          <div className="flex flex-col gap-5">
            {["Your Name", "Your Email"].map((placeholder, i) => (
              <input
                key={i}
                type={placeholder === "Your Email" ? "email" : "text"}
                placeholder={placeholder}
                required
                className="rounded-xl px-5 py-3 border focus:outline-none focus:ring-2 transition-all text-base placeholder-opacity-70 focus:placeholder-opacity-0"
                style={{
                  backgroundColor: "#000",
                  borderColor: accent,
                  color: active.text,
                  caretColor: accent,
                  boxShadow: `inset 0 0 8px ${accent}11`,
                }}
              />
            ))}

            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="rounded-xl px-5 py-3 border focus:outline-none focus:ring-2 transition-all resize-none placeholder-opacity-70 focus:placeholder-opacity-0 text-base"
              style={{
                backgroundColor: "#000",
                borderColor: accent,
                color: active.text,
                caretColor: accent,
                boxShadow: `inset 0 0 8px ${accent}11`,
              }}
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 25px ${accent}`,
              }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold py-3 rounded-xl shadow-md transition-transform duration-300"
              style={{
                backgroundColor: accent,
                color: "#000",
              }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
