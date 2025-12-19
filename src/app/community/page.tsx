"use client";

import Image from "next/image";
import InteractivePhilippinesMap from "@/components/InteractivePhilippinesMap";
import { REGION_COLORS, type Region } from "@/constants/regionColors";

type Champion = {
  name: string;
  role: string;
  image: string;
  region: "Luzon" | "Visayas" | "Mindanao";
  skill: string;
  stat: number;
  responsibilities: string[];
};

const champions: Champion[] = [
  {
    name: "Sift",
    role: "Operations",
    image: "/images/Sift.jpg",
    region: "Luzon",
    skill: "Operations",
    stat: 95,
    responsibilities: [
      "Organization Planning",
      "Account Management",
      "Operation (Internal)",
      "Representative (IRL)",
      "Finance",
      "Due Diligence / KYC",
      "Legal Registration",
    ],
  },
  {
    name: "Lupin",
    role: "Business Dev",
    image: "/images/lupz_u.jpg",
    region: "Luzon",
    skill: "Business Development",
    stat: 92,
    responsibilities: [
      "Organization Planning",
      "Partnerships",
      "Coordination (External)",
      "Finance",
      "Hosting",
      "IP Application",
      "Business Development",
      "Legal Registration",
      "Moderation",
    ],
  },
  {
    name: "Zirk",
    role: "Product",
    image: "/images/coretoshi_zirk.png",
    region: "Visayas",
    skill: "Product Development",
    stat: 90,
    responsibilities: ["Posting", "Website", "Hackathons"],
  },
  {
    name: "Clivv",
    role: "Marketing",
    image: "/images/Clivv(1).png",
    region: "Mindanao",
    skill: "Marketing",
    stat: 88,
    responsibilities: [
      "Account Management",
      "Content Planning",
      "Content Caption",
      "Posting",
      "Partnerships",
      "Representative (IRL)",
      "Coordination (External)",
      "Hosting",
      "Hackathons",
    ],
  },
  {
    name: "Aerva",
    role: "Community",
    image: "/images/Aerva.jpg",
    region: "Visayas",
    skill: "Community Management",
    stat: 93,
    responsibilities: [
      "Graphics",
      "Moderation",
      "IP Application",
      "Business Development",
      "Hackathons",
    ],
  },
  {
    name: "Kata",
    role: "SMM/Content",
    image: "/images/Katrina.jpg",
    region: "Luzon",
    skill: "Content Creation",
    stat: 89,
    responsibilities: [
      "Content Planning",
      "Content Caption",
      "Graphics",
      "Hackathons",
    ],
  },
  {
    name: "Arkin",
    role: "Frontend",
    image: "/images/Arkin.jpeg",
    region: "Luzon",
    skill: "Frontend Development",
    stat: 87,
    responsibilities: [
      "Tech Audit / Cybersecurity",
      "Website",
      "Hackathons",
    ],
  },
  {
    name: "Cordyx",
    role: "Backend",
    image: "/images/Cordy.jfif",
    region: "Visayas",
    skill: "Backend Development",
    stat: 91,
    responsibilities: [
      "Tech Audit / Cybersecurity",
      "Hackathons",
    ],
  },
];

export default function CommunityPage() {
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

          <InteractivePhilippinesMap />
        </section>

        {/* Player Profiles Section - Game Style Roster */}
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
              TEAM FW3
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
              Meet the team powering Filipino Web3 innovation
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
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
                    if (typeof window !== 'undefined' && window.innerWidth >= 640) {
                      e.currentTarget.style.transform = "scale(1.05) translateY(-5px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 640) {
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
                      unoptimized={champion.image.endsWith('.jfif')}
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
                        boxShadow: "0 0 clamp(5px, 1.5vw, 10px) rgba(255, 215, 0, 0.8)",
                        border: "clamp(1.5px, 0.3vw, 2px) solid #000",
                        zIndex: 10,
                      }}
                    >
                      <span style={{ fontSize: "clamp(12px, 2.2vw, 16px)", color: "#000", fontWeight: "bold" }}>★</span>
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
                      textShadow: "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px #000",
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

                  {/* Skill Stat Bar removed by request */}
            </div>
              );
            })}
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
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
      `}} />
    </main>
    </>
  );
}
