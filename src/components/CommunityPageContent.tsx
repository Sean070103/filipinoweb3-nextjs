"use client";

import { Suspense } from "react";
import InteractivePhilippinesMap from "@/components/InteractivePhilippinesMap";

export default function CommunityPageContent() {
  return (
    <>
    <main
      id="community"
      className="community"
        style={{ position: "relative", zIndex: 1, background: "#01060f" }}
      >
        {/* Interactive Philippines Map Section */}
      <section
        className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
          style={{
            paddingTop: "clamp(6rem, 10vw, 8rem)",
            paddingBottom: "clamp(3rem, 6vw, 6rem)",
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

      </main>
    </>
  );
}
