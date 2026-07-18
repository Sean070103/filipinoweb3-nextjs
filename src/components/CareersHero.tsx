"use client";

import { motion } from "framer-motion";
// import { Sparkles, Code, Gamepad2, Megaphone, TrendingUp, Laptop, BookOpen } from "lucide-react";

const FONT = 'var(--font-press-start-2p), "Courier New", monospace';

// Hidden — uncomment to restore category cards
// const CATEGORIES = [
//   { title: "Blockchain Developer", description: "Smart contract development, DeFi protocols, and blockchain infrastructure", icon: Code, color: "#22d3ee" },
//   { title: "NFT & Gaming", description: "GameFi, NFT marketplaces, and metaverse development roles", icon: Gamepad2, color: "#a855f7" },
//   { title: "Web3 Marketing", description: "Community management, growth marketing, and content creation", icon: Megaphone, color: "#f97316" },
//   { title: "DeFi Analyst", description: "Protocol analysis, risk assessment, and DeFi strategy roles", icon: TrendingUp, color: "#22d3ee" },
//   { title: "Full-Stack Web3", description: "Full-stack development with Web3 integration and dApp building", icon: Laptop, color: "#a855f7" },
//   { title: "Research & Education", description: "Web3 research, technical writing, and educational content creation", icon: BookOpen, color: "#f97316" },
// ];

export default function CareersHero() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>

        {/* COMING SOON badge — hidden, uncomment to restore
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.6rem 1.2rem",
            background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(34,211,238,0.2))",
            border: "1px solid rgba(168,85,247,0.4)",
            borderRadius: "10px", fontFamily: FONT,
            fontSize: "clamp(0.55rem, 1vw, 0.7rem)", letterSpacing: "0.1em",
            color: "#a855f7", marginBottom: "1.5rem",
          }}
        >
          <Sparkles size={14} /> COMING SOON
        </motion.div>
        */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: FONT, fontSize: "clamp(1.75rem, 5vw, 4rem)",
            letterSpacing: "0.08em", marginBottom: "1rem",
            background: "linear-gradient(135deg, #a855f7, #22d3ee, #f97316)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          CAREERS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto clamp(2rem, 4vw, 3rem)" }}
        >
          Curated Web3 job postings relevant to the Philippines. Find your next role in blockchain, DeFi, NFTs, and more.
        </motion.p>
      </div>

      {/* ── CATEGORY CARDS — hidden, uncomment to restore
      <div className="grid gap-4 sm:gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(clamp(220px, 28vw, 280px), 1fr))", marginTop: "clamp(2rem, 4vw, 4rem)" }}>
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(20,20,40,0.7))",
              border: `1px solid ${cat.color}30`,
              borderRadius: "1rem", padding: "clamp(1.5rem, 3vw, 2rem)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "clamp(48px, 8vw, 64px)", height: "clamp(48px, 8vw, 64px)",
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}10)`,
              border: `2px solid ${cat.color}40`, marginBottom: "1rem",
            }}>
              <cat.icon size={24} style={{ color: cat.color }} />
            </div>
            <h3 style={{
              fontFamily: FONT, fontSize: "clamp(0.6rem, 1.2vw, 0.8rem)",
              letterSpacing: "0.05em", marginBottom: "0.6rem",
              background: `linear-gradient(135deg, ${cat.color}, #ffffff)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              {cat.title.toUpperCase()}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)", lineHeight: 1.6, margin: 0 }}>
              {cat.description}
            </p>
          </motion.div>
        ))}
      </div>
      ── */}

      {/* ── LAUNCHING BANNER — hidden, uncomment to restore
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: "clamp(3rem, 6vw, 5rem)",
          background: "linear-gradient(135deg, rgba(168,85,247,0.05), rgba(34,211,238,0.05))",
          border: "1px solid rgba(168,85,247,0.2)",
          borderRadius: "1.25rem",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 3vw, 2.5rem)",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 30%, rgba(168,85,247,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.1) 0%, transparent 50%)", pointerEvents: "none" }} />
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem", display: "inline-block" }}>
          💼
        </motion.div>
        <p style={{ fontFamily: FONT, fontSize: "clamp(0.9rem, 1.8vw, 1.2rem)", background: "linear-gradient(135deg, #a855f7, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.75rem", position: "relative", zIndex: 1 }}>
          JOB BOARD LAUNCHING Q2 2026
        </p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)", position: "relative", zIndex: 1, margin: 0 }}>
          Featuring curated listings from top Web3 companies
        </p>
      </motion.div>
      ── */}
    </>
  );
}
