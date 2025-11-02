"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { useTheme } from "../../context/Themecontext";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const { bgTheme, accent, themes } = useTheme();
  const active = themes?.[bgTheme] || {
    background: "#0a0a0a",
    text: "#ffffff",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      style: {
        background: accent,
        color: active.text,
        fontWeight: 600,
      },
      iconTheme: {
        primary: active.text,
        secondary: accent,
      },
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden transition-all duration-700"
      style={{
        background: `linear-gradient(160deg, ${active.background}, ${bgTheme === "black" ? "#111" : "#f4f4f4"})`,
        color: active.text,
      }}
    >
      {/* ✨ Ambient Glow */}
      <div
        className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full blur-[140px] opacity-25 animate-pulse"
        style={{ background: accent }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full blur-[160px] opacity-10"
        style={{ background: active.text }}
      ></div>

      <Toaster position="top-center" />

      {/* 🌟 Section Heading */}
  <motion.h2
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-tight"
  style={{
    backgroundImage: `linear-gradient(90deg, ${accent}, ${active.text} 40%, ${accent})`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: `0 0 15px ${accent}44, 0 0 25px ${accent}33`,
    letterSpacing: "-0.02em",
  }}
>
  Let’s Connect
</motion.h2>


      {/* 💬 Main Grid */}
      <div className="flex flex-wrap justify-center items-stretch gap-12 w-full max-w-6xl relative z-10">
        {/* 🧍 Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center rounded-3xl p-10 border backdrop-blur-xl shadow-xl flex-1 min-w-[320px] transition-all duration-500 hover:scale-[1.02]"
          style={{
            background: `linear-gradient(145deg, ${bgTheme === "black" ? "#141414" : "#f9f9f9"}, ${bgTheme === "black" ? "#1e1e1e" : "#ffffff"})`,
            borderColor: accent,
            boxShadow: `0 0 35px ${accent}33`,
          }}
        >
          <motion.img
            src="https://i.pinimg.com/736x/0f/44/8b/0f448b16f8bfbba6b5e745aefefcb908.jpg"
            alt="ayush juneja"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 shadow-lg mb-4 object-cover"
            style={{
              borderColor: accent,
              boxShadow: `0 0 30px ${accent}55`,
            }}
          />
          <h3
            className="text-2xl md:text-3xl font-semibold mb-2 tracking-wide"
            style={{
              backgroundImage: `linear-gradient(90deg, ${accent}, ${active.text})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ayush juneja
          </h3>
          <p className="text-sm mb-6 opacity-80">
            Flutter Dev • Web Designer • Tech Enthusiast
          </p>

          {/* 📍 Contact Info */}
          <div className="flex flex-col gap-3 text-sm items-center md:items-start">
            <div className="flex items-center gap-3">
              <Mail size={18} color={accent} />
              <span>ayush.juneja@example.com</span>
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
          <div className="flex gap-6 mt-8 justify-center">
            {[Linkedin, Github, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="transition-transform"
                style={{ color: accent }}
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 📨 Message Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col rounded-3xl p-10 border shadow-xl flex-1 min-w-[320px] transition-all duration-500 backdrop-blur-xl hover:scale-[1.02]"
          style={{
            background: `linear-gradient(145deg, ${bgTheme === "black" ? "#141414" : "#f9f9f9"}, ${bgTheme === "black" ? "#1e1e1e" : "#ffffff"})`,
            borderColor: accent,
            boxShadow: `0 0 35px ${accent}33`,
          }}
        >
          <h3
            className="text-xl font-semibold mb-6"
            style={{
              backgroundImage: `linear-gradient(to right, ${accent}, ${active.text})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
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
                className="rounded-lg px-4 py-3 border focus:outline-none focus:ring-2 transition-all placeholder-opacity-70 focus:placeholder-opacity-0"
                style={{
                  backgroundColor: `${active.background}aa`,
                  borderColor: accent,
                  color: active.text,
                  caretColor: accent,
                  boxShadow: `inset 0 0 10px ${accent}11`,
                }}
              />
            ))}

            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="rounded-lg px-4 py-3 border focus:outline-none focus:ring-2 transition-all resize-none placeholder-opacity-70 focus:placeholder-opacity-0"
              style={{
                backgroundColor: `${active.background}aa`,
                borderColor: accent,
                color: active.text,
                caretColor: accent,
                boxShadow: `inset 0 0 10px ${accent}11`,
              }}
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 25px ${accent}`,
              }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold py-3 rounded-lg shadow-md transition-transform duration-300"
              style={{
                backgroundColor: accent,
                color: active.background,
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
