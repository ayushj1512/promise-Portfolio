"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/Themecontext";

export default function RocketCursor() {
  const { accent } = useTheme();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [vel, setVel] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [smoke, setSmoke] = useState([]);
  const [boost, setBoost] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // 🧭 Track mouse position
  useEffect(() => {
    const handleMove = (e) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      setVel({ x: dx, y: dy });
      setPos({ x: e.clientX, y: e.clientY });
      lastPos.current = { x: e.clientX, y: e.clientY };

      // Flame + smoke particles
      setTrail((prev) => [
        ...prev.slice(-12),
        {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY + 30,
          size: Math.random() * 8 + 5,
          hue: Math.random() * 30 + 15,
        },
      ]);

      setSmoke((prev) => [
        ...prev.slice(-10),
        {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() * 20 - 10),
          y: e.clientY + 50,
          size: Math.random() * 15 + 10,
        },
      ]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // 🚀 Boost animation on click/tap
  useEffect(() => {
    const handleClick = () => {
      setBoost(true);
      setTimeout(() => setBoost(false), 400);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Calculate rocket rotation based on velocity
  const angle = Math.atan2(vel.y, vel.x) * (180 / Math.PI) + 90;

  return (
    <>
      {/* 🚀 Rocket */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        animate={{
          x: pos.x - 15,
          y: pos.y - 35,
          rotate: angle,
          scale: boost ? 1.25 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          width: 30,
          height: 70,
          transformOrigin: "center center",
        }}
      >
        {/* Rocket Body */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, #e3e3e3 0%, #aaa 40%, #555 100%)",
            borderRadius: "12px",
            border: `1px solid ${accent}`,
            boxShadow: `
              0 0 15px ${accent}88,
              inset 0 0 10px #777
            `,
          }}
        >
          {/* Nose Cone */}
          <div
            style={{
              position: "absolute",
              top: -14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderBottom: `22px solid ${accent}`,
              filter: `drop-shadow(0 0 8px ${accent})`,
            }}
          />

          {/* Fins */}
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: -10,
              width: 10,
              height: 16,
              background: `linear-gradient(180deg, ${accent}, #c70000)`,
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 12,
              right: -10,
              width: 10,
              height: 16,
              background: `linear-gradient(180deg, ${accent}, #c70000)`,
              borderRadius: "2px",
            }}
          />

          {/* 🔥 Centered Animated Flame */}
          <motion.div
            animate={{
              scaleY: [1, 2.2, 1],
              scaleX: [1, 0.9, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: boost ? 0.08 : 0.14,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              bottom: -25,
              left: "50%",
              transform: "translateX(-50%)",
              width: boost ? 18 : 14,
              height: boost ? 38 : 28,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 50% 25%, #fff, #ffd000, #ff7b00, #ff3300 85%)",
              boxShadow: `
                0 0 25px rgba(255,130,0,0.8),
                0 0 60px rgba(255,0,0,0.5),
                0 0 100px rgba(255,80,0,0.3)
              `,
              filter: "blur(0.5px)",
            }}
          />
        </div>
      </motion.div>

      {/* ✨ Flame Trail */}
      {trail.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0.9, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            y: 35,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: t.x - t.size / 2,
            top: t.y,
            width: t.size,
            height: t.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, hsl(${t.hue},100%,65%), transparent)`,
            boxShadow: `
              0 0 ${t.size * 2}px hsl(${t.hue},100%,70%),
              0 0 ${t.size * 5}px hsl(${t.hue},100%,50%)
            `,
            mixBlendMode: "screen",
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* 💨 Smoke Trail */}
      {smoke.map((s) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{
            opacity: 0,
            scale: 2,
            y: -30,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: s.x - s.size / 2,
            top: s.y,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,200,200,0.4), transparent)",
            filter: "blur(4px)",
          }}
        />
      ))}
    </>
  );
}
