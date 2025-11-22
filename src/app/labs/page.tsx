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
          paddingTop: "10rem",
        }}
      >
        <section
          style={{
            padding: "6rem 0",
            background:
              "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.15), transparent 50%)",
          }}
        >
          <div className="container">
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
                  padding: "0.5rem 1.25rem",
                  background: "rgba(34, 211, 238, 0.15)",
                  border: "2px solid rgba(34, 211, 238, 0.3)",
                  borderRadius: "8px",
                  fontFamily:
                    'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "#22d3ee",
                  marginBottom: "1.5rem",
                }}
              >
                COMING SOON
              </div>
              <h1
                style={{
                  fontFamily:
                    'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "0.08em",
                  marginBottom: "1.5rem",
                  background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                FW3 LABS
              </h1>
              <p
                style={{
                  color: "var(--color-light)",
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  marginBottom: "3rem",
                  maxWidth: "700px",
                  margin: "0 auto 3rem",
                }}
              >
                Future home for FW3 services, tools, and experimental projects.
                Build, test, and deploy with the community.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                marginTop: "4rem",
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
                    border: `2px solid ${feature.color}40`,
                    borderRadius: "1.5rem",
                    padding: "2.5rem",
                    boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${feature.color}20`,
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
                        fontSize: "3rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily:
                          'var(--font-press-start-2p), "Courier New", monospace',
                        fontSize: "1.25rem",
                        letterSpacing: "0.05em",
                        marginBottom: "1rem",
                        color: feature.color,
                      }}
                    >
                      {feature.title.toUpperCase()}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-light)",
                        fontSize: "1rem",
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
                marginTop: "4rem",
                background: "rgba(255,255,255,0.03)",
                border: "2px dashed rgba(34, 211, 238, 0.3)",
                borderRadius: "1rem",
                padding: "4rem 2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "4rem",
                  marginBottom: "1.5rem",
                  opacity: 0.5,
                }}
              >
                🔬
              </div>
              <p
                style={{
                  color: "var(--color-light)",
                  fontSize: "1.1rem",
                  margin: 0,
                  fontFamily:
                    'var(--font-press-start-2p), "Courier New", monospace',
                  letterSpacing: "0.05em",
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

