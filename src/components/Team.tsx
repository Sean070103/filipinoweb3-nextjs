"use client";

import Image from "next/image";
import { REGION_COLORS, type Region } from "@/constants/regionColors";

type Champion = {
  name: string;
  role: string;
  image: string;
  region: "Luzon" | "Visayas" | "Mindanao";
};

const champions: Champion[] = [
  {
    name: "Aerva",
    role: "Community",
    image: "/images/Aerva.jpg",
    region: "Mindanao",
  },
  {
    name: "Arkin",
    role: "Frontend",
    image: "/images/Arkin.jpeg",
    region: "Luzon",
  },
  {
    name: "Clivv",
    role: "Marketing",
    image: "/images/CLivv_new.jpg",
    region: "Visayas",
  },
  {
    name: "Cordyx",
    role: "Backend",
    image: "/images/Cordy.jfif",
    region: "Visayas",
  },
  {
    name: "Kata",
    role: "SMM/Content",
    image: "/images/Katrina.jpg",
    region: "Luzon",
  },
  {
    name: "Lupin",
    role: "Business Dev",
    image: "/images/Lupin_new.jpg",
    region: "Visayas",
  },
  {
    name: "Sift",
    role: "Operations",
    image: "/images/Sift.jpg",
    region: "Luzon",
  },
  {
    name: "Zirk",
    role: "Product",
    image: "/images/coretoshi_zirk.png",
    region: "Luzon",
  },
];

export default function Team() {
  return (
    <section id="team" className="team relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Pixelated Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "8px 8px",
          imageRendering: "pixelated",
        }}
      />

      <div
        className="container relative z-10 px-4 sm:px-6 md:px-8"
        style={{
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        {/* Core Members Section */}
        <div
          className="text-center"
          style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}
        >
          <h2
            className="font-black text-white pixelated"
            style={{
              fontFamily:
                'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
              letterSpacing: "0.05em",
              textShadow:
                "clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px #000000",
              imageRendering: "pixelated",
              WebkitFontSmoothing: "none",
              marginBottom: "clamp(1rem, 1.5vw, 1.25rem)",
            }}
          >
            TEAM FW3
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "700px",
              margin: "0 auto",
              gap: "clamp(0.75rem, 1.5vw, 1rem)",
            }}
          >
            <p
              style={{
                color: "var(--color-light)",
                fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
                lineHeight: 1.7,
                padding: "0 clamp(0.5rem, 2vw, 1rem)",
                wordBreak: "break-word",
                textAlign: "center",
              }}
            >
              Meet the team powering Filipino Web3 innovation
            </p>
            <div className="ph-divider" />
          </div>
        </div>

        <div
          className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1"
          style={{
            gap: "clamp(1rem, 2vw, 1.5rem)",
            width: "100%",
          }}
        >
          {champions.map((champion) => {
            const color = REGION_COLORS[champion.region as Region];

            return (
              <div
                key={champion.name}
                className="champion-card"
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "100%",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  padding: "0",
                  touchAction: "manipulation",
                }}
                onMouseEnter={(e) => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth >= 640
                  ) {
                    e.currentTarget.style.transform =
                      "scale(1.05) translateY(-5px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth >= 640
                  ) {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                  }
                }}
              >
                {/* Character Portrait Frame */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "clamp(180px, 25vw, 220px)",
                    border: `clamp(2px, 0.4vw, 3px) solid ${color}`,
                    borderRadius: "clamp(4px, 0.6vw, 6px)",
                    overflow: "hidden",
                    background: "rgba(0,0,0,0.8)",
                    boxShadow: `0 clamp(2px, 0.5vw, 4px) clamp(8px, 2vw, 15px) rgba(0,0,0,0.5), 0 0 clamp(5px, 1.5vw, 10px) ${color}40`,
                    marginBottom: "clamp(0.5rem, 1vw, 0.75rem)",
                  }}
                >
                  <Image
                    src={champion.image}
                    alt={champion.name}
                    width={140}
                    height={140}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    unoptimized={champion.image.endsWith(".jfif")}
                  />

                  {/* Region Icon (top left) */}
                  <div
                    style={{
                      position: "absolute",
                      top: "clamp(4px, 0.8vw, 6px)",
                      left: "clamp(4px, 0.8vw, 6px)",
                      width: "clamp(20px, 3.5vw, 28px)",
                      height: "clamp(20px, 3.5vw, 28px)",
                      borderRadius: "50%",
                      background: color,
                      border: "clamp(1.5px, 0.3vw, 2px) solid #000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "clamp(10px, 1.8vw, 12px)",
                      fontWeight: "bold",
                      color: "#fff",
                      boxShadow: `0 0 clamp(4px, 1vw, 8px) ${color}`,
                      zIndex: 10,
                    }}
                  >
                    {champion.region[0]}
                  </div>

                  {/* Gold Star (bottom right) */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "clamp(4px, 0.8vw, 6px)",
                      right: "clamp(4px, 0.8vw, 6px)",
                      width: "clamp(22px, 4vw, 30px)",
                      height: "clamp(22px, 4vw, 30px)",
                      background: "linear-gradient(135deg, #FFD700, #FFA500)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow:
                        "0 0 clamp(5px, 1.5vw, 10px) rgba(255, 215, 0, 0.8)",
                      border: "clamp(1.5px, 0.3vw, 2px) solid #000",
                      zIndex: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(12px, 2.2vw, 16px)",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      ★
                    </span>
                  </div>
                </div>

                {/* Character Name */}
                <div
                  style={{
                    textAlign: "center",
                    fontFamily:
                      'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
                    color: "#fff",
                    letterSpacing: "0.05em",
                    textShadow:
                      "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px #000",
                    marginBottom: "clamp(0.25rem, 0.6vw, 0.4rem)",
                    padding: "0 clamp(0.25rem, 0.5vw, 0.5rem)",
                    wordBreak: "break-word",
                    lineHeight: 1.3,
                  }}
                >
                  {champion.name.toUpperCase()}
                </div>

                {/* Role Badge */}
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)",
                    color: color,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                    padding: "0 clamp(0.25rem, 0.5vw, 0.5rem)",
                    lineHeight: 1.4,
                  }}
                >
                  {champion.role}
                </div>
              </div>
            );
          })}
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        @media (max-width: 640px) {
          .champion-card {
            max-width: 100%;
            margin: 0 auto;
          }
          
          .champion-card:active {
            transform: scale(0.98) !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .champion-card {
            max-width: 100%;
          }
        }
      `,
          }}
        />
      </div>
    </section>
  );
}
