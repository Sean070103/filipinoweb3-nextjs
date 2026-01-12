"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Briefcase, Code, Gamepad2, Megaphone, TrendingUp, Laptop, BookOpen, Sparkles } from "lucide-react";

export default function CareersPage() {
  return (
    <>
      <main
        style={{
          position: "relative",
          zIndex: 1,
          background: "#01060f",
          minHeight: "100vh",
          paddingTop: "clamp(6rem, 12vw, 10rem)",
        }}
      >
        <section
          className="px-4 sm:px-6 md:px-8"
          style={{
            padding: "clamp(3rem, 6vw, 6rem) 0",
            background:
              "radial-gradient(circle at 80% 30%, rgba(168,85,247,0.15), transparent 50%)",
          }}
        >
          <div className="container mx-auto max-w-7xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)",
                    background: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(34, 211, 238, 0.2))",
                    border: "clamp(1px, 0.3vw, 2px) solid rgba(168, 85, 247, 0.4)",
                    borderRadius: "clamp(8px, 1.5vw, 12px)",
                    fontFamily:
                      'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)",
                    letterSpacing: "0.1em",
                    color: "#a855f7",
                    marginBottom: "clamp(1.5rem, 3vw, 2rem)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Sparkles size={16} style={{ color: "#a855f7" }} />
                  COMING SOON
                </motion.div>
                <h1
                  style={{
                    fontFamily:
                      'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: "clamp(1.75rem, 5vw, 4rem)",
                    letterSpacing: "0.08em",
                    marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                    background: "linear-gradient(135deg, #a855f7, #22d3ee, #f97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    padding: "0 clamp(0.5rem, 2vw, 1rem)",
                    textShadow: "0 0 clamp(20px, 5vw, 40px) rgba(168, 85, 247, 0.3)",
                  }}
                >
                  CAREERS
                </h1>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                    lineHeight: 1.8,
                    marginBottom: "clamp(2rem, 4vw, 3rem)",
                    maxWidth: "700px",
                    margin: "0 auto clamp(2rem, 4vw, 3rem)",
                    padding: "0 clamp(0.5rem, 2vw, 1rem)",
                  }}
                >
                  Curated Web3 job postings relevant to the Philippines. Find your
                  next role in blockchain, DeFi, NFTs, and more.
                </p>
              </div>
            </ScrollReveal>

            <div
              className="grid gap-4 sm:gap-6 md:gap-8"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr))",
                marginTop: "clamp(2rem, 4vw, 4rem)",
              }}
            >
              {/* Career Category Cards */}
              {[
                {
                  title: "Blockchain Developer",
                  description:
                    "Smart contract development, DeFi protocols, and blockchain infrastructure",
                  icon: Code,
                  color: "#22d3ee",
                },
                {
                  title: "NFT & Gaming",
                  description:
                    "GameFi, NFT marketplaces, and metaverse development roles",
                  icon: Gamepad2,
                  color: "#a855f7",
                },
                {
                  title: "Web3 Marketing",
                  description:
                    "Community management, growth marketing, and content creation",
                  icon: Megaphone,
                  color: "#f97316",
                },
                {
                  title: "DeFi Analyst",
                  description:
                    "Protocol analysis, risk assessment, and DeFi strategy roles",
                  icon: TrendingUp,
                  color: "#22d3ee",
                },
                {
                  title: "Full-Stack Web3",
                  description:
                    "Full-stack development with Web3 integration and dApp building",
                  icon: Laptop,
                  color: "#a855f7",
                },
                {
                  title: "Research & Education",
                  description:
                    "Web3 research, technical writing, and educational content creation",
                  icon: BookOpen,
                  color: "#f97316",
                },
              ].map((category, index) => (
                <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                  <motion.div
                    className="group"
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(20,20,40,0.7))",
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${category.color}30`,
                      borderRadius: "clamp(1rem, 2vw, 1.5rem)",
                      padding: "clamp(2rem, 4vw, 3rem)",
                      boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${category.color}20 inset`,
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    {/* Animated Background Glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at center, ${category.color}20 0%, transparent 70%)`,
                        transition: "opacity 0.5s ease",
                      }}
                    />

                    {/* Border Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        borderRadius: "inherit",
                        padding: "1px",
                        background: `linear-gradient(135deg, ${category.color}60, ${category.color}30)`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />

                    <div style={{ position: "relative", zIndex: 10 }}>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "clamp(60px, 10vw, 80px)",
                          height: "clamp(60px, 10vw, 80px)",
                          borderRadius: "clamp(12px, 2vw, 16px)",
                          background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                          border: `2px solid ${category.color}40`,
                          marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                        }}
                      >
                        <category.icon
                          size={32}
                          style={{ color: category.color }}
                        />
                      </motion.div>
                      <h3
                        style={{
                          fontFamily:
                            'var(--font-press-start-2p), "Courier New", monospace',
                          fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
                          letterSpacing: "0.05em",
                          marginBottom: "clamp(0.75rem, 1.5vw, 1rem)",
                          background: `linear-gradient(135deg, ${category.color}, #ffffff)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {category.title.toUpperCase()}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.85)",
                          fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={0.8}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  marginTop: "clamp(3rem, 6vw, 5rem)",
                  background: "linear-gradient(135deg, rgba(168,85,247,0.05), rgba(34,211,238,0.05))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  borderRadius: "clamp(1rem, 2vw, 1.5rem)",
                  padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 3vw, 2.5rem)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Animated background pattern */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(168,85,247,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.1) 0%, transparent 50%)`,
                    pointerEvents: "none",
                  }}
                />

                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    marginBottom: "clamp(1.5rem, 3vw, 2rem)",
                    display: "inline-block",
                  }}
                >
                  💼
                </motion.div>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                    margin: 0,
                    marginBottom: "clamp(0.75rem, 1.5vw, 1rem)",
                    fontFamily:
                      'var(--font-press-start-2p), "Courier New", monospace',
                    letterSpacing: "0.05em",
                    padding: "0 clamp(0.5rem, 2vw, 1rem)",
                    background: "linear-gradient(135deg, #a855f7, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  JOB BOARD LAUNCHING Q2 2026
                </p>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
                    margin: 0,
                    padding: "0 clamp(0.5rem, 2vw, 1rem)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Featuring scraped listings from top Web3 companies
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}

