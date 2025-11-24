"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import InteractivePhilippinesMap from "@/components/InteractivePhilippinesMap";

type RegionSpotlight = {
  region: "Luzon" | "Visayas" | "Mindanao";
  chapter: string;
  lead: string;
  focus: string;
};

type Champion = {
  name: string;
  role: string;
  image: string;
  region: "Luzon" | "Visayas" | "Mindanao";
  skill: string;
  stat: number;
  responsibilities: string[];
};

const spotlights: RegionSpotlight[] = [
  {
    region: "Luzon",
    chapter: "Metro Manila Builders League",
    lead: "Aira D.",
    focus: "DeFi tooling & AI guild experiments",
  },
  {
    region: "Visayas",
    chapter: "Cebu Crypto Carpool",
    lead: "Marco L.",
    focus: "On-chain gaming & IRL hardware hacks",
  },
  {
    region: "Mindanao",
    chapter: "Davao Future Foundry",
    lead: "Jules S.",
    focus: "Community wallets & bamboo node infra",
  },
];

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
    image: "/images/clivv_azuki1.jpg",
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
    image: "/images/Sift.jpg", // Placeholder - update with actual image
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
      <Navigation />
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
                  fontSize: "clamp(2.5rem, 8vw, 6rem)",
                  marginBottom: "clamp(1rem, 2.5vw, 2rem)",
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  letterSpacing: "clamp(0.05em, 0.15vw, 0.1em)",
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #22d3ee, #a855f7, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 clamp(20px, 5vw, 40px) rgba(34, 211, 238, 0.5)",
                  padding: "0 clamp(0.5rem, 2vw, 1rem)",
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
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
            <h2
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: "clamp(1.25rem, 4vw, 2.5rem)",
                letterSpacing: "0.08em",
                marginBottom: "clamp(0.5rem, 1.5vw, 1rem)",
                background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                padding: "0 clamp(0.5rem, 2vw, 1rem)",
              }}
            >
              EXPLORE OUR COMMUNITIES
            </h2>
            <p
              style={{
                color: "var(--color-light)",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
                padding: "0 clamp(0.5rem, 2vw, 1rem)",
              }}
            >
              Click on any marker to learn more about our Web3 communities
              across the Philippines
          </p>
        </div>

          <InteractivePhilippinesMap />
        </section>

        {/* Regional Spotlights */}
        <section
          className="px-4 sm:px-6 md:px-8"
          style={{
            padding: "clamp(3rem, 6vw, 6rem) 0",
            background:
              "linear-gradient(120deg, rgba(34,211,238,0.08), rgba(168,85,247,0.08))",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="container mx-auto max-w-7xl">
            <h3
              style={{
                textAlign: "center",
                fontFamily:
                  'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: "clamp(1rem, 3vw, 2rem)",
                letterSpacing: "0.08em",
                marginBottom: "clamp(2rem, 4vw, 3rem)",
                background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                padding: "0 clamp(0.5rem, 2vw, 1rem)",
              }}
            >
              FW3 Regional Spotlights
            </h3>

              <div
                className="grid gap-4 sm:gap-6 md:gap-8"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 30vw, 280px), 1fr))",
                }}
            >
              {spotlights.map((spotlight) => {
                const regionColors = {
                  Luzon: "#22d3ee",
                  Visayas: "#a855f7",
                  Mindanao: "#f97316",
                };
                const color = regionColors[spotlight.region];

                return (
                  <div
                    key={spotlight.region}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(20,20,40,0.6))",
                      border: `clamp(1px, 0.3vw, 2px) solid ${color}40`,
                      borderRadius: "clamp(0.75rem, 2vw, 1.5rem)",
                      padding: "clamp(1.25rem, 3vw, 2rem)",
                      boxShadow: `0 clamp(10px, 2.5vw, 20px) clamp(20px, 5vw, 40px) rgba(0,0,0,0.4), 0 0 clamp(15px, 4vw, 30px) ${color}20`,
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = `${color}80`;
                      e.currentTarget.style.boxShadow = `0 25px 50px rgba(0,0,0,0.5), 0 0 40px ${color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = `${color}40`;
                      e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${color}20`;
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
                        background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <div
                          style={{
                            width: "clamp(10px, 1.5vw, 12px)",
                            height: "clamp(10px, 1.5vw, 12px)",
                            borderRadius: "50%",
                            background: color,
                            boxShadow: `0 0 clamp(8px, 2vw, 15px) ${color}`,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
                            color: color,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            fontFamily:
                              'var(--font-press-start-2p), "Courier New", monospace',
                            fontWeight: 600,
                          }}
                        >
                          {spotlight.region}
                        </span>
                      </div>
                      <h4
                        style={{
                          margin: "0 0 clamp(0.75rem, 1.5vw, 1rem) 0",
                          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                          fontWeight: 700,
                        }}
                      >
                        {spotlight.chapter}
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                  gap: "clamp(0.5rem, 1vw, 0.75rem)",
                }}
              >
                        <p
                          style={{
                            margin: 0,
                            fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                            color: "var(--color-light)",
                            lineHeight: 1.5,
                          }}
                        >
                          <strong style={{ color: color }}>Lead:</strong>{" "}
                          {spotlight.lead}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                            color: "var(--color-light)",
                            lineHeight: 1.5,
                          }}
                        >
                          <strong style={{ color: color }}>Focus:</strong>{" "}
                          {spotlight.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Player Profiles Section - Game Style Roster */}
        <section
          className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
          style={{
            padding: "clamp(3rem, 6vw, 6rem) 0",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            className="flex flex-wrap justify-center"
            style={{
              gap: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            {champions.map((champion) => {
              const regionColors = {
                Luzon: "#22d3ee",
                Visayas: "#a855f7",
                Mindanao: "#f97316",
              };
              const color = regionColors[champion.region];

              return (
                <div
                  key={champion.name}
                  style={{
                    position: "relative",
                    width: "clamp(100px, 12vw, 140px)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1) translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                  }}
                >
                  {/* Character Portrait Frame */}
                  <div
                    style={{
                      position: "relative",
                      width: "clamp(100px, 12vw, 140px)",
                      height: "clamp(100px, 12vw, 140px)",
                      border: `clamp(2px, 0.4vw, 3px) solid ${color}`,
                      borderRadius: "clamp(3px, 0.5vw, 4px)",
                      overflow: "hidden",
                      background: "rgba(0,0,0,0.8)",
                      boxShadow: `0 clamp(2px, 0.5vw, 4px) clamp(8px, 2vw, 15px) rgba(0,0,0,0.5), 0 0 clamp(5px, 1.5vw, 10px) ${color}40`,
                      marginBottom: "clamp(0.375rem, 0.75vw, 0.5rem)",
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
                    />
                    
                    {/* Region Icon (top left) */}
                    <div
                      style={{
                        position: "absolute",
                        top: "clamp(3px, 0.5vw, 4px)",
                        left: "clamp(3px, 0.5vw, 4px)",
                        width: "clamp(16px, 2.5vw, 20px)",
                        height: "clamp(16px, 2.5vw, 20px)",
                        borderRadius: "50%",
                        background: color,
                        border: "clamp(1px, 0.25vw, 2px) solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(8px, 1.2vw, 10px)",
                        fontWeight: "bold",
                        boxShadow: `0 0 clamp(4px, 1vw, 8px) ${color}`,
                      }}
                    >
                      {champion.region[0]}
                    </div>

                    {/* Gold Star (bottom right) */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "clamp(3px, 0.5vw, 4px)",
                        right: "clamp(3px, 0.5vw, 4px)",
                        width: "clamp(18px, 3vw, 24px)",
                        height: "clamp(18px, 3vw, 24px)",
                        background: "linear-gradient(135deg, #FFD700, #FFA500)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 clamp(5px, 1.5vw, 10px) rgba(255, 215, 0, 0.8)",
                        border: "clamp(1px, 0.25vw, 2px) solid #000",
                      }}
                    >
                      <span style={{ fontSize: "clamp(10px, 1.8vw, 14px)", color: "#000" }}>★</span>
                    </div>

                    {/* Stat Badge (top right) */}
                    <div
                      style={{
                        position: "absolute",
                        top: "clamp(3px, 0.5vw, 4px)",
                        right: "clamp(3px, 0.5vw, 4px)",
                        background: "rgba(0,0,0,0.8)",
                        border: `clamp(0.5px, 0.15vw, 1px) solid ${color}`,
                        borderRadius: "clamp(3px, 0.5vw, 4px)",
                        padding: "clamp(1px, 0.3vw, 2px) clamp(4px, 0.8vw, 6px)",
                        fontSize: "clamp(8px, 1.2vw, 10px)",
                        fontWeight: "bold",
                        color: color,
                        fontFamily:
                          'var(--font-press-start-2p), "Courier New", monospace',
                      }}
                    >
                      {champion.stat}%
                    </div>
                  </div>

                  {/* Character Name */}
                  <div
                    style={{
                      textAlign: "center",
                      fontFamily:
                        'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: "clamp(0.6rem, 1vw, 0.7rem)",
                      color: "#fff",
                      letterSpacing: "0.05em",
                      textShadow: "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px #000",
                      marginBottom: "clamp(0.15rem, 0.4vw, 0.25rem)",
                    }}
                  >
                    {champion.name.toUpperCase()}
              </div>

                  {/* Role Badge */}
              <div
                style={{
                      textAlign: "center",
                      fontSize: "clamp(0.55rem, 0.9vw, 0.65rem)",
                      color: color,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontWeight: 600,
                    }}
                  >
                    {champion.role}
                  </div>

                  {/* Skill Stat Bar */}
                  <div
                    style={{
                      marginTop: "clamp(0.375rem, 0.75vw, 0.5rem)",
                      width: "100%",
                      height: "clamp(4px, 0.8vw, 6px)",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "clamp(2px, 0.4vw, 3px)",
                      overflow: "hidden",
                      border: "clamp(0.5px, 0.15vw, 1px) solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: `${champion.stat}%`,
                        height: "100%",
                        background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                        boxShadow: `0 0 8px ${color}60`,
                        transition: "width 0.5s ease",
                      }}
                    />
              </div>
            </div>
              );
            })}
        </div>
      </section>
    </main>
    </>
  );
}
