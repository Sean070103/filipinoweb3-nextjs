"use client";

import Link from "next/link";
import { FlaskConical, Briefcase, Star } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === undefined;
  const isLabs = pathname?.startsWith("/labs");
  const isCommunity = pathname?.startsWith("/community");
  const isCareers = pathname?.startsWith("/careers");

  return (
    <>
      {/* Circus Boxes Navbar Design */}
      <div className="w-full fixed top-0 left-0 right-0 py-2 sm:py-4 md:py-6 flex justify-center items-center z-[9999] bg-transparent px-2 sm:px-4">
          <div 
          className="navbar-container relative flex items-center justify-center gap-0.5 sm:gap-1 pixelated"
          style={{
            background: '#000000',
            borderRadius: '0',
            boxShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(255,255,255,0.1)',
            border: 'clamp(2px, 0.5vw, 4px) solid #ffffff',
            borderStyle: 'outset',
            padding: 'clamp(4px, 1vw, 8px)',
            imageRendering: 'pixelated',
            overflow: 'hidden'
          }}
        >
          <div 
            className="absolute inset-0 -z-10 nav-underlay"
            aria-hidden
          />
          {/* FW3 Circus Box */}
          <Link
            href="/#hero"
            className="nav-box flex items-center justify-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2"
            style={{
              background: '#22c55e',
              borderRadius: '0',
              boxShadow: isHome
                ? '0 0 20px rgba(34, 197, 94, 0.6), inset 2px 2px 0 rgba(255,255,255,0.4)'
                : 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(0,0,0,0.2)',
              border: `clamp(2px, 0.4vw, 3px) solid ${isHome ? '#e2ffe5' : '#ffffff'}`,
              borderStyle: 'outset',
              minWidth: 'clamp(50px, 12vw, 70px)',
              minHeight: 'clamp(45px, 10vw, 60px)',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
            > 
            <span 
              className="nav-led"
              style={{
                background: isHome ? '#00ffaf' : '#ffd700',
                boxShadow: isHome ? '0 0 8px rgba(0,255,175,0.8)' : '0 0 5px rgba(255,215,0,0.6)',
                animation: isHome ? 'ledPulse 1.2s ease-in-out infinite' : 'ledBlink 2s linear infinite'
              }}
            />
            <span className="nav-scanline" aria-hidden />
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: 'clamp(2px, 0.4vw, 3px) clamp(2px, 0.4vw, 3px) 0px #000000, clamp(1px, 0.2vw, 1px) clamp(1px, 0.2vw, 1px) 0px rgba(0,0,0,0.8)',
                fontSize: 'clamp(9px, 1.8vw, 13px)',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never'
              }}
            >
              FW3
            </span>
          </Link>

          {/* LABS Circus Box */}
          <Link
            href="/labs"
            className="nav-box flex flex-col items-center justify-center px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2 relative"
            style={{
              background: '#eab308',
              borderRadius: '0',
              boxShadow: isLabs
                ? '0 0 20px rgba(234, 179, 8, 0.6), inset 2px 2px 0 rgba(255,255,255,0.4)'
                : 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(0,0,0,0.2)',
              border: `clamp(2px, 0.4vw, 3px) solid ${isLabs ? '#fff3d1' : '#ffffff'}`,
              borderStyle: 'outset',
              minWidth: 'clamp(65px, 15vw, 90px)',
              minHeight: 'clamp(55px, 12vw, 75px)',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
            <span 
              className="nav-led"
              style={{
                background: isLabs ? '#ffef9f' : '#ffd700',
                boxShadow: isLabs ? '0 0 8px rgba(255,239,159,0.8)' : '0 0 5px rgba(255,215,0,0.6)',
                animation: isLabs ? 'ledPulse 1.2s ease-in-out infinite' : 'ledBlink 2s linear infinite'
              }}
            />
            <span className="nav-scanline" aria-hidden />
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: 'clamp(2px, 0.4vw, 3px) clamp(2px, 0.4vw, 3px) 0px #000000, clamp(1px, 0.2vw, 1px) clamp(1px, 0.2vw, 1px) 0px rgba(0,0,0,0.8)',
                fontSize: 'clamp(7px, 1.5vw, 10px)',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never'
              }}
            >
              LABS
            </span>
            {/* Flask Icon */}
            <FlaskConical 
              className="text-white mt-1 sm:mt-1.5 md:mt-2" 
              style={{ 
                width: 'clamp(12px, 3vw, 20px)',
                height: 'clamp(12px, 3vw, 20px)',
                filter: 'drop-shadow(2px 2px 0px rgba(135, 206, 250, 0.4))',
                transition: 'transform 0.3s ease',
              }}
            />
          </Link>

          {/* COMMUNITY Circus Box */}
          <Link
            href="/community"
            className="nav-box flex flex-col items-center justify-center px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2 relative"
            style={{
              background: '#06b6d4',
              borderRadius: '0',
              boxShadow: isCommunity
                ? '0 0 20px rgba(6, 182, 212, 0.6), inset 2px 2px 0 rgba(255,255,255,0.4)'
                : 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(0,0,0,0.2)',
              border: `clamp(2px, 0.4vw, 3px) solid ${isCommunity ? '#d0f7ff' : '#ffffff'}`,
              borderStyle: 'outset',
              minWidth: 'clamp(75px, 18vw, 110px)',
              minHeight: 'clamp(55px, 12vw, 75px)',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
            <span 
              className="nav-led"
              style={{
                background: isCommunity ? '#6ef4ff' : '#ffd700',
                boxShadow: isCommunity ? '0 0 8px rgba(110,244,255,0.8)' : '0 0 5px rgba(255,215,0,0.6)',
                animation: isCommunity ? 'ledPulse 1.2s ease-in-out infinite' : 'ledBlink 2s linear infinite'
              }}
            />
            <span className="nav-scanline" aria-hidden />
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: 'clamp(2px, 0.4vw, 3px) clamp(2px, 0.4vw, 3px) 0px #000000, clamp(1px, 0.2vw, 1px) clamp(1px, 0.2vw, 1px) 0px rgba(0,0,0,0.8)',
                fontSize: 'clamp(6px, 1.2vw, 8px)',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never'
              }}
            >
              COMMUNITY
            </span>
            {/* Circus Star Icon */}
            <Star 
              className="text-white mt-1 sm:mt-1.5 md:mt-2" 
              style={{ 
                width: 'clamp(12px, 3vw, 20px)',
                height: 'clamp(12px, 3vw, 20px)',
                filter: 'drop-shadow(2px 2px 0px rgba(135, 206, 250, 0.4))',
                transition: 'transform 0.3s ease',
              }}
            />
          </Link>

          {/* CAREERS Circus Box */}
          <Link
            href="/careers"
            className="nav-box flex flex-col items-center justify-center px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2 relative"
            style={{
              background: '#f97316',
              borderRadius: '0',
              boxShadow: isCareers
                ? '0 0 20px rgba(249, 115, 22, 0.6), inset 2px 2px 0 rgba(255,255,255,0.4)'
                : 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(0,0,0,0.2)',
              border: `clamp(2px, 0.4vw, 3px) solid ${isCareers ? '#ffe1cc' : '#ffffff'}`,
              borderStyle: 'outset',
              minWidth: 'clamp(75px, 18vw, 110px)',
              minHeight: 'clamp(55px, 12vw, 75px)',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
            <span 
              className="nav-led"
              style={{
                background: isCareers ? '#ffc49c' : '#ffd700',
                boxShadow: isCareers ? '0 0 8px rgba(255,196,156,0.8)' : '0 0 5px rgba(255,215,0,0.6)',
                animation: isCareers ? 'ledPulse 1.2s ease-in-out infinite' : 'ledBlink 2s linear infinite'
              }}
            />
            <span className="nav-scanline" aria-hidden />
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: 'clamp(2px, 0.4vw, 3px) clamp(2px, 0.4vw, 3px) 0px #000000, clamp(1px, 0.2vw, 1px) clamp(1px, 0.2vw, 1px) 0px rgba(0,0,0,0.8)',
                fontSize: 'clamp(6px, 1.2vw, 8px)',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never'
              }}
            >
              CAREERS
            </span>
            {/* Briefcase Icon */}
            <Briefcase 
              className="text-white mt-1 sm:mt-1.5 md:mt-2" 
              style={{ 
                width: 'clamp(12px, 3vw, 20px)',
                height: 'clamp(12px, 3vw, 20px)',
                filter: 'drop-shadow(2px 2px 0px rgba(135, 206, 250, 0.4))',
                transition: 'transform 0.3s ease',
              }}
            />
          </Link>
        </div>
      </div>
      
      {/* Circus Animation Styles */}
      <style>{`
        @keyframes circusGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .nav-underlay {
          background: linear-gradient(120deg, rgba(34,197,94,0.12), rgba(6,182,212,0.12), rgba(249,115,22,0.12));
          background-size: 200% 200%;
          animation: underlayShift 12s linear infinite;
          filter: blur(10px);
        }
        .nav-box {
          overflow: hidden;
        }
        .nav-scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 60%, transparent 100%);
          opacity: 0;
          animation: scanlineSweep 4s linear infinite;
          pointer-events: none;
        }
        .nav-box:hover .nav-scanline {
          opacity: 0.35;
        }
        .nav-led {
          position: absolute;
          top: clamp(4px, 0.8vw, 6px);
          left: clamp(4px, 0.8vw, 6px);
          width: clamp(4px, 0.7vw, 6px);
          height: clamp(4px, 0.7vw, 6px);
          border-radius: 9999px;
        }
        @keyframes underlayShift {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes scanlineSweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes ledPulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.4; }
        }
        @keyframes ledBlink {
          0%, 90% { opacity: 0.8; }
          95% { opacity: 0.2; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </>
  );
}