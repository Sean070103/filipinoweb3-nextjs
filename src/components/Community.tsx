"use client";

import { motion } from "framer-motion";

export default function Community() {
  const stats = [
    { label: "Members", value: "5,200+" },
    { label: "Chapters", value: "18" },
    { label: "Events", value: "90+" },
    { label: "Partners", value: "25+" },
  ];

  return (
    <section id="community" className="relative overflow-hidden py-20">
      {/* Pixelated Background */}
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "8px 8px",
          imageRendering: "pixelated",
        }}
      />

      <div className="container relative z-10 ph-banig-border-top">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-5xl lg:text-6xl font-black text-white pixelated"
            style={{
              fontFamily:
                'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.05em",
              textShadow: "4px 4px 0px #000000",
              imageRendering: "pixelated",
              WebkitFontSmoothing: "none",
            }}
          >
            COMMUNITY
          </h2>
          <div className="flex justify-center mt-6">
            <div className="ph-divider" />
          </div>
          <p
            className="text-white mt-4 max-w-3xl mx-auto pixelated"
            style={{
              fontFamily: '"Courier New", monospace',
              fontWeight: "bold",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              color: "#ffffff",
            }}
          >
            Empowering builders nationwide with mentorship, opportunities, and
            shared resources.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="text-center py-8 pixelated"
              style={{
                background: "#1a1a1a",
                border: "4px solid #ffffff",
                borderStyle: "outset",
                boxShadow:
                  "4px 4px 0px rgba(0,0,0,0.5), inset -2px -2px 0px rgba(0,0,0,0.3)",
                imageRendering: "pixelated",
              }}
            >
              <div
                className="text-3xl font-black text-white pixelated"
                style={{
                  fontFamily:
                    'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  textShadow: "3px 3px 0px #000000",
                  imageRendering: "pixelated",
                  WebkitFontSmoothing: "none",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-sm text-white mt-1 pixelated"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontWeight: "bold",
                  color: "#ffffff",
                  fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
                }}
              >
                {s.label.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="p-8 text-center pixelated"
          style={{
            background: "#1a1a1a",
            border: "4px solid #ffffff",
            borderStyle: "outset",
            boxShadow: "4px 4px 0px rgba(0,0,0,0.5)",
            imageRendering: "pixelated",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-white mb-3 pixelated"
            style={{
              fontFamily:
                'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              letterSpacing: "0.05em",
              textShadow: "3px 3px 0px #000000",
              imageRendering: "pixelated",
              WebkitFontSmoothing: "none",
            }}
          >
            JOIN A LOCAL CHAPTER OR START ONE IN YOUR CITY
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 pixelated"
            style={{
              background: "#ffffff",
              color: "#000000",
              border: "4px solid #000000",
              borderStyle: "outset",
              fontFamily:
                'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
              fontWeight: "400",
              textTransform: "uppercase",
              boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
              imageRendering: "pixelated",
              WebkitFontSmoothing: "none",
              borderRadius: "0",
            }}
          >
            CONTACT US
          </motion.a>
        </div>
      </div>
    </section>
  );
}
