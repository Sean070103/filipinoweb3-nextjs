"use client";

import Navigation from "@/components/Navigation";

export default function LabsPage() {
  return (
    <>
      <Navigation />
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
              "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.15), transparent 50%)",
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
              <div
                style={{
                  display: "inline-block",
                  padding: "clamp(0.375rem, 0.8vw, 0.5rem) clamp(0.75rem, 1.5vw, 1.25rem)",
                  background: "rgba(34, 211, 238, 0.15)",
                  border: "clamp(1px, 0.3vw, 2px) solid rgba(34, 211, 238, 0.3)",
                  borderRadius: "clamp(6px, 1vw, 8px)",
                  fontFamily:
                    'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: "clamp(0.6rem, 1vw, 0.7rem)",
                  letterSpacing: "0.1em",
                  color: "#22d3ee",
                  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                }}
              >
                COMING SOON
              </div>
              <h1
                style={{
                  fontFamily:
                    'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: "clamp(1.75rem, 5vw, 4rem)",
                  letterSpacing: "0.08em",
                  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                  background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  padding: "0 clamp(0.5rem, 2vw, 1rem)",
                }}
              >
                FW3 LABS
              </h1>
              <p
                style={{
                  color: "var(--color-light)",
                  fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
                  lineHeight: 1.8,
                  marginBottom: "clamp(2rem, 4vw, 3rem)",
                  maxWidth: "700px",
                  margin: "0 auto clamp(2rem, 4vw, 3rem)",
                  padding: "0 clamp(0.5rem, 2vw, 1rem)",
                }}
              >
                Future home for FW3 services, tools, and experimental projects.
                Build, test, and deploy with the community.
              </p>
            </div>

            <div
              className="grid gap-4 sm:gap-6 md:gap-8"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr))",
                marginTop: "clamp(2rem, 4vw, 4rem)",
              }}
            >
              {/* Lab Feature Cards */}
              {[
                {
                  title: "Development Tools",
                  description:
                    "Open-source tools and frameworks for Web3 development",
                  icon: "🔧",
                  color: "#22d3ee",
                },
                {
                  title: "Testing Environment",
                  description:
                    "Sandboxed environments for testing smart contracts and dApps",
                  icon: "🧪",
                  color: "#a855f7",
                },
                {
                  title: "Community Projects",
                  description:
                    "Collaborative projects built by FW3 community members",
                  icon: "🚀",
                  color: "#f97316",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(20,20,40,0.6))",
                    border: `clamp(1px, 0.3vw, 2px) solid ${feature.color}40`,
                    borderRadius: "clamp(0.75rem, 2vw, 1.5rem)",
                    padding: "clamp(1.5rem, 3vw, 2.5rem)",
                    boxShadow: `0 clamp(10px, 2.5vw, 20px) clamp(20px, 5vw, 40px) rgba(0,0,0,0.4), 0 0 clamp(15px, 4vw, 30px) ${feature.color}20`,
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = `${feature.color}80`;
                    e.currentTarget.style.boxShadow = `0 25px 50px rgba(0,0,0,0.5), 0 0 40px ${feature.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = `${feature.color}40`;
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${feature.color}20`;
                  }}
                >
                  {/* Background Glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-50%",
                      right: "-50%",
                      width: "200%",
                      height: "200%",
                      background: `radial-gradient(circle, ${feature.color}15 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        marginBottom: "clamp(0.75rem, 1.5vw, 1rem)",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily:
                          'var(--font-press-start-2p), "Courier New", monospace',
                        fontSize: "clamp(1rem, 2vw, 1.25rem)",
                        letterSpacing: "0.05em",
                        marginBottom: "clamp(0.75rem, 1.5vw, 1rem)",
                        color: feature.color,
                      }}
                    >
                      {feature.title.toUpperCase()}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-light)",
                        fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "clamp(2rem, 4vw, 4rem)",
                background: "rgba(255,255,255,0.03)",
                border: "clamp(1px, 0.3vw, 2px) dashed rgba(34, 211, 238, 0.3)",
                borderRadius: "clamp(0.75rem, 1.5vw, 1rem)",
                padding: "clamp(2rem, 4vw, 4rem) clamp(1rem, 2.5vw, 2rem)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                  opacity: 0.5,
                }}
              >
                🔬
              </div>
              <p
                style={{
                  color: "var(--color-light)",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  margin: 0,
                  fontFamily:
                    'var(--font-press-start-2p), "Courier New", monospace',
                  letterSpacing: "0.05em",
                  padding: "0 clamp(0.5rem, 2vw, 1rem)",
                }}
              >
                LABS SECTION LAUNCHING Q2 2025
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

