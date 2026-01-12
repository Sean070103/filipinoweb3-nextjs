"use client";

import { Suspense } from "react";
import InteractivePhilippinesMap from "@/components/InteractivePhilippinesMap";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";

export default function CommunityPageContent() {
  return (
    <>
    <main
      id="community"
      className="community"
        style={{ position: "relative", zIndex: 1, background: "#01060f" }}
      >
        {/* Hero Section */}
        <section
          className="px-4 sm:px-6 md:px-8"
          style={{
            paddingTop: "clamp(6rem, 12vw, 10rem)",
            paddingBottom: "clamp(3rem, 6vw, 6rem)",
            background:
              "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.15), transparent 50%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.15), transparent 50%)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="container mx-auto max-w-7xl">
            <div
              style={{
                textAlign: "center",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2rem, 6vw, 5rem)",
                  marginBottom: "clamp(0.75rem, 2vw, 1.5rem)",
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  letterSpacing: "clamp(0.05em, 0.15vw, 0.1em)",
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg, #22d3ee, #a855f7, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 clamp(15px, 4vw, 35px) rgba(34, 211, 238, 0.5)",
                  padding: "0 clamp(0.5rem, 2vw, 1rem)",
                  wordBreak: "break-word",
                }}
              >
                FW3
              </h1>
            </div>
          </div>
        </section>

        {/* Interactive Philippines Map Section */}
      <section
        className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
          style={{
            padding: "clamp(3rem, 6vw, 6rem) 0",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="text-center mb-6 sm:mb-10 md:mb-14 px-4">
            <h2
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: "clamp(1rem, 3.5vw, 2.25rem)",
                letterSpacing: "0.08em",
                marginBottom: "clamp(0.75rem, 2vw, 1.25rem)",
                background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                padding: "0 clamp(0.5rem, 2vw, 1rem)",
                lineHeight: 1.3,
                wordBreak: "break-word",
              }}
            >
              EXPLORE OUR COMMUNITIES
            </h2>
            <p
              style={{
                color: "var(--color-light)",
                fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
                padding: "0 clamp(0.5rem, 2vw, 1rem)",
                wordBreak: "break-word",
              }}
            >
              Click on any marker to learn more about our Web3 communities
              across the Philippines
          </p>
        </div>

          <Suspense fallback={
            <div style={{ 
              width: '100%', 
              height: '600px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '12px'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Loading map...</p>
            </div>
          }>
            <InteractivePhilippinesMap />
          </Suspense>
        </section>

        {/* Organizations Section */}
        <section
          className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative"
          style={{
            padding: "clamp(3rem, 6vw, 6rem) 0",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Background decorative elements */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: "clamp(200px, 30vw, 400px)",
              height: "clamp(200px, 30vw, 400px)",
              background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(60px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "5%",
              width: "clamp(200px, 30vw, 400px)",
              height: "clamp(200px, 30vw, 400px)",
              background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(60px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-6 sm:mb-10 md:mb-14 px-4 relative z-10">
              <h2
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: "clamp(1rem, 3.5vw, 2.25rem)",
                  letterSpacing: "0.08em",
                  marginBottom: "clamp(0.75rem, 2vw, 1.25rem)",
                  background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  padding: "0 clamp(0.5rem, 2vw, 1rem)",
                  lineHeight: 1.3,
                  wordBreak: "break-word",
                }}
              >
                WEB3 COMMUNITIES
              </h2>
              <p
                style={{
                  color: "var(--color-light)",
                  fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.7,
                  padding: "0 clamp(0.5rem, 2vw, 1rem)",
                  wordBreak: "break-word",
                  opacity: 0.9,
                }}
              >
                Discover the local Web3 organizations building the future across the Philippines
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8 sm:gap-10 relative z-10 max-w-4xl mx-auto">
            {/* Web3 Cebu */}
            <ScrollReveal direction="up" delay={0.2}>
              <motion.div
                className="group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => window.open("https://www.facebook.com/web3cebu", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-start gap-6 pb-8 border-b border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <img
                    src="/images/Cebu.jfif"
                    alt="Web3 Cebu"
                    className="rounded-lg flex-shrink-0"
                    style={{
                      width: "clamp(80px, 12vw, 100px)",
                      height: "clamp(80px, 12vw, 100px)",
                      objectFit: "cover",
                      border: "2px solid rgba(34, 211, 238, 0.2)",
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        style={{
                          fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                          fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                          letterSpacing: "0.05em",
                          background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        WEB3 CEBU
                      </h3>
                      <ExternalLink
                        size={18}
                        style={{ color: "#22d3ee", opacity: 0.6 }}
                        className="group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={14} style={{ color: "#22d3ee", opacity: 0.7 }} />
                      <span
                        style={{
                          fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
                          color: "#22d3ee",
                          opacity: 0.8,
                          fontFamily: '"Courier New", monospace',
                        }}
                      >
                        Visayas
                      </span>
                    </div>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                        lineHeight: 1.7,
                      }}
                    >
                      Empowering Cebu&apos;s Web3 ecosystem through education, networking, and innovation. Building a vibrant community of developers, entrepreneurs, and blockchain enthusiasts in the Queen City of the South.
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Web3 Iloilo */}
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                className="group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => window.open("https://www.facebook.com/web3iloilo", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-start gap-6 pb-8 border-b border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <img
                    src="/images/Iloilo.jfif"
                    alt="Web3 Iloilo"
                    className="rounded-lg flex-shrink-0"
                    style={{
                      width: "clamp(80px, 12vw, 100px)",
                      height: "clamp(80px, 12vw, 100px)",
                      objectFit: "cover",
                      border: "2px solid rgba(34, 211, 238, 0.2)",
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        style={{
                          fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                          fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                          letterSpacing: "0.05em",
                          background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        WEB3 ILOILO
                      </h3>
                      <ExternalLink
                        size={18}
                        style={{ color: "#22d3ee", opacity: 0.6 }}
                        className="group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={14} style={{ color: "#22d3ee", opacity: 0.7 }} />
                      <span
                        style={{
                          fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
                          color: "#22d3ee",
                          opacity: 0.8,
                          fontFamily: '"Courier New", monospace',
                        }}
                      >
                        Visayas
                      </span>
                    </div>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                        lineHeight: 1.7,
                      }}
                    >
                      Fostering Web3 innovation in Iloilo City. Connecting local builders, hosting workshops, and creating opportunities for the next generation of decentralized technology leaders in Western Visayas.
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Web3 Kabankalan */}
            <ScrollReveal direction="up" delay={0.4}>
              <motion.div
                className="group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => window.open("https://www.facebook.com/web3kab", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-start gap-6 pb-8 border-b border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <img
                    src="/images/Kabankalan.jfif"
                    alt="Web3 Kabankalan"
                    className="rounded-lg flex-shrink-0"
                    style={{
                      width: "clamp(80px, 12vw, 100px)",
                      height: "clamp(80px, 12vw, 100px)",
                      objectFit: "cover",
                      border: "2px solid rgba(34, 211, 238, 0.2)",
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        style={{
                          fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                          fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                          letterSpacing: "0.05em",
                          background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        WEB3 KABANKALAN
                      </h3>
                      <ExternalLink
                        size={18}
                        style={{ color: "#22d3ee", opacity: 0.6 }}
                        className="group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={14} style={{ color: "#22d3ee", opacity: 0.7 }} />
                      <span
                        style={{
                          fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
                          color: "#22d3ee",
                          opacity: 0.8,
                          fontFamily: '"Courier New", monospace',
                        }}
                      >
                        Visayas
                      </span>
                    </div>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                        lineHeight: 1.7,
                      }}
                    >
                      Growing the Web3 community in Kabankalan City. Dedicated to educating and empowering local builders while bridging the gap between traditional tech and decentralized innovation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Web3 Rizal */}
            <ScrollReveal direction="up" delay={0.5}>
              <motion.div
                className="group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => window.open("https://www.facebook.com/Web3Rizal", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-start gap-6 pb-8 border-b border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <img
                    src="/images/Rizal.jfif"
                    alt="Web3 Rizal"
                    className="rounded-lg flex-shrink-0"
                    style={{
                      width: "clamp(80px, 12vw, 100px)",
                      height: "clamp(80px, 12vw, 100px)",
                      objectFit: "cover",
                      border: "2px solid rgba(34, 211, 238, 0.2)",
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        style={{
                          fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                          fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                          letterSpacing: "0.05em",
                          background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        WEB3 RIZAL
                      </h3>
                      <ExternalLink
                        size={18}
                        style={{ color: "#22d3ee", opacity: 0.6 }}
                        className="group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={14} style={{ color: "#22d3ee", opacity: 0.7 }} />
                      <span
                        style={{
                          fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
                          color: "#22d3ee",
                          opacity: 0.8,
                          fontFamily: '"Courier New", monospace',
                        }}
                      >
                        Luzon
                      </span>
                    </div>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                        lineHeight: 1.7,
                      }}
                    >
                      Championing Web3 adoption in Rizal province. Creating a collaborative space for developers, creators, and entrepreneurs to explore blockchain technology and build the future of decentralized applications.
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Web3 San Carlos */}
            <ScrollReveal direction="up" delay={0.6}>
              <motion.div
                className="group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => window.open("https://www.facebook.com/web3sancarlos", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-start gap-6 pb-8 border-b border-white/10 group-hover:border-cyan-500/30 transition-colors last:border-b-0">
                  <img
                    src="/images/Sancarlos.jfif"
                    alt="Web3 San Carlos"
                    className="rounded-lg flex-shrink-0"
                    style={{
                      width: "clamp(80px, 12vw, 100px)",
                      height: "clamp(80px, 12vw, 100px)",
                      objectFit: "cover",
                      border: "2px solid rgba(34, 211, 238, 0.2)",
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        style={{
                          fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                          fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                          letterSpacing: "0.05em",
                          background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        WEB3 SAN CARLOS
                      </h3>
                      <ExternalLink
                        size={18}
                        style={{ color: "#22d3ee", opacity: 0.6 }}
                        className="group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={14} style={{ color: "#22d3ee", opacity: 0.7 }} />
                      <span
                        style={{
                          fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
                          color: "#22d3ee",
                          opacity: 0.8,
                          fontFamily: '"Courier New", monospace',
                        }}
                      >
                        Visayas
                      </span>
                    </div>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                        lineHeight: 1.7,
                      }}
                    >
                      Building a strong Web3 presence in San Carlos City. Empowering local innovators through education, mentorship, and community-driven initiatives in the heart of Negros Occidental.
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}
