"use client";

// import { useRef, useState } from "react";
import PhilippinesMap from "../../components/PhilippinesMap";

type Location = {
  name: string;
  region: "Luzon" | "Visayas" | "Mindanao";
  x: number; // 0-100 (percentage of viewBox width)
  y: number; // 0-100 (percentage of viewBox height)
  members: number;
};

const locations: Location[] = [
  { name: "Metro Manila", region: "Luzon", x: 42, y: 35, members: 1200 },
  { name: "Baguio", region: "Luzon", x: 35, y: 25, members: 180 },
  { name: "Cebu", region: "Visayas", x: 55, y: 55, members: 520 },
  { name: "Iloilo", region: "Visayas", x: 45, y: 58, members: 210 },
  { name: "Davao", region: "Mindanao", x: 65, y: 78, members: 430 },
  { name: "Cagayan de Oro", region: "Mindanao", x: 58, y: 72, members: 190 },
];

export default function CommunityPage() {
  // const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  // const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  // const gRef = useRef<SVGGElement | null>(null);
  // const [view, setView] = useState({ x: 0, y: 0, scale: 1 });

  // const startRef = useRef<{
  //   x: number;
  //   y: number;
  //   vx: number;
  //   vy: number;
  //   drag: boolean;
  // }>({ x: 0, y: 0, vx: 0, vy: 0, drag: false });

  // const onWheel = (e: React.WheelEvent<SVGSVGElement>) => {
  //   e.preventDefault();
  //   const delta = -e.deltaY;
  //   const factor = delta > 0 ? 1.1 : 0.9;
  //   setView((v) => ({
  //     ...v,
  //     scale: Math.min(5, Math.max(0.6, v.scale * factor)),
  //   }));
  // };

  // const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
  //   startRef.current.drag = true;
  //   startRef.current.x = e.clientX;
  //   startRef.current.y = e.clientY;
  //   startRef.current.vx = view.x;
  //   startRef.current.vy = view.y;
  // };

  // const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
  //   if (!startRef.current.drag) return;
  //   const dx = e.clientX - startRef.current.x;
  //   const dy = e.clientY - startRef.current.y;
  //   setView((v) => ({
  //     ...v,
  //     x: startRef.current.vx + dx,
  //     y: startRef.current.vy + dy,
  //   }));
  // };

  // const onPointerUp = () => {
  //   startRef.current.drag = false;
  // };

  return (
    <main
      id="community"
      className="community"
      style={{ position: "relative", zIndex: 1 }}
    >
      <section
        className="container"
        style={{ paddingTop: "8rem", paddingBottom: "6rem" }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span className="eyebrow">Our Community</span>
          <h2>Philippines Map</h2>
          <p style={{ color: "var(--color-light)", marginTop: "0.5rem" }}>
            Where our builders are. Explore hubs across Luzon, Visayas, and
            Mindanao.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "2rem",
          }}
        >
          <PhilippinesMap />

          {/* Stats / CTA */}
          <aside style={{ alignSelf: "center" }}>
            <div style={{ display: "grid", gap: "1rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {(["Luzon", "Visayas", "Mindanao"] as Location["region"][]).map((r) => (
                  <div
                    key={r}
                    style={{
                      background: "var(--surface-1)",
                      border: "1px solid var(--border-low)",
                      borderRadius: "0.75rem",
                      padding: "1rem 1.25rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-light)",
                      }}
                    >
                      {r}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "1.4rem" }}>
                      {locations
                        .filter((l) => l.region === r)
                        .reduce((a, b) => a + b.members, 0)
                        .toLocaleString()}
                      +
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-light)",
                      }}
                    >
                      members
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border-low)",
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.25rem" }}>
                  Join local builders near you
                </h3>
                <p style={{ color: "var(--color-light)", marginTop: "0.5rem" }}>
                  We host meetups, study groups, and hack nights across the
                  country.
                </p>
                <a
                  href="#contact"
                  className="btn btn-primary"
                  style={{ marginTop: "0.5rem", display: "inline-block" }}
                >
                  Join Our Community
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
