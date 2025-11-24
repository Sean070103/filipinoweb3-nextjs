"use client";

import Link from "next/link";
import { FlaskConical, Briefcase, Star } from "lucide-react";

export default function Navigation() {

  return (
    <>
      {/* Circus Boxes Navbar Design */}
      <div className="w-full fixed top-0 left-0 right-0 py-2 sm:py-4 md:py-6 flex justify-center items-center z-[9999] bg-transparent px-2 sm:px-4">
          <div 
          className="navbar-container flex items-center justify-center gap-0.5 sm:gap-1 pixelated"
          style={{
            background: '#000000',
            borderRadius: '0',
            boxShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(255,255,255,0.1)',
            border: 'clamp(2px, 0.5vw, 4px) solid #ffffff',
            borderStyle: 'outset',
            padding: 'clamp(4px, 1vw, 8px)',
            imageRendering: 'pixelated'
          }}
        >
          {/* FW Circus Box */}
          <Link
            href="/#home"
            className="flex items-center justify-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2"
            style={{
              background: '#22c55e',
              borderRadius: '0',
              boxShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(0,0,0,0.2)',
              border: 'clamp(2px, 0.4vw, 3px) solid #ffffff',
              borderStyle: 'outset',
              minWidth: 'clamp(50px, 12vw, 70px)',
              minHeight: 'clamp(45px, 10vw, 60px)',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: 'clamp(2px, 0.4vw, 3px) clamp(2px, 0.4vw, 3px) 0px #000000, clamp(1px, 0.2vw, 1px) clamp(1px, 0.2vw, 1px) 0px rgba(0,0,0,0.8)',
                fontSize: 'clamp(10px, 2vw, 14px)',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never'
              }}
            >
              FW
            </span>
          </Link>

          {/* LABS Circus Box */}
          <Link
            href="/labs"
            className="flex flex-col items-center justify-center px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2 relative"
            style={{
              background: '#eab308',
              borderRadius: '0',
              boxShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(0,0,0,0.2)',
              border: 'clamp(2px, 0.4vw, 3px) solid #ffffff',
              borderStyle: 'outset',
              minWidth: 'clamp(65px, 15vw, 90px)',
              minHeight: 'clamp(55px, 12vw, 75px)',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
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
            className="flex flex-col items-center justify-center px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2 relative"
            style={{
              background: '#06b6d4',
              borderRadius: '0',
              boxShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(0,0,0,0.2)',
              border: 'clamp(2px, 0.4vw, 3px) solid #ffffff',
              borderStyle: 'outset',
              minWidth: 'clamp(75px, 18vw, 110px)',
              minHeight: 'clamp(55px, 12vw, 75px)',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
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
            className="flex flex-col items-center justify-center px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2 relative"
            style={{
              background: '#f97316',
              borderRadius: '0',
              boxShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px rgba(0,0,0,0.3), inset clamp(-1px, -0.3vw, -2px) clamp(-1px, -0.3vw, -2px) 0px rgba(0,0,0,0.2)',
              border: 'clamp(2px, 0.4vw, 3px) solid #ffffff',
              borderStyle: 'outset',
              minWidth: 'clamp(75px, 18vw, 110px)',
              minHeight: 'clamp(55px, 12vw, 75px)',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
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
      `}</style>
    </>
  );
}