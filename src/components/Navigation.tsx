"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Star } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {/* Circus Boxes Navbar Design */}
      <div className="w-full fixed top-0 left-0 right-0 py-6 flex justify-center items-center z-[9999] bg-transparent">
          <div 
          className="navbar-container flex items-center justify-center gap-1 pixelated"
          style={{
            background: '#000000',
            borderRadius: '0',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.3), inset -2px -2px 0px rgba(255,255,255,0.1)',
            border: '4px solid #ffffff',
            borderStyle: 'outset',
            padding: '8px',
            imageRendering: 'pixelated'
          }}
        >
          {/* FW Circus Box */}
          <Link
            href="/#home"
            className="flex items-center justify-center px-6 py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2"
            style={{
              background: '#22c55e',
              borderRadius: '0',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3), inset -2px -2px 0px rgba(0,0,0,0.2)',
              border: '3px solid #ffffff',
              borderStyle: 'outset',
              minWidth: '70px',
              minHeight: '60px',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: '3px 3px 0px #000000, 1px 1px 0px rgba(0,0,0,0.8)',
                fontSize: '14px',
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

          {/* ABOUT Circus Box */}
          <Link
            href="/#about"
            className="flex flex-col items-center justify-center px-5 py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2 relative"
            style={{
              background: '#eab308',
              borderRadius: '0',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3), inset -2px -2px 0px rgba(0,0,0,0.2)',
              border: '3px solid #ffffff',
              borderStyle: 'outset',
              minWidth: '90px',
              minHeight: '75px',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: '3px 3px 0px #000000, 1px 1px 0px rgba(0,0,0,0.8)',
                fontSize: '10px',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never'
              }}
            >
              ABOUT
            </span>
            {/* Circus People Icon */}
            <Users 
              className="w-5 h-5 text-white mt-2" 
              style={{ 
                filter: 'drop-shadow(2px 2px 0px rgba(135, 206, 250, 0.4))',
                transition: 'transform 0.3s ease',
              }}
            />
          </Link>

          {/* COMMUNITY Circus Box */}
          <Link
            href="/community"
            className="flex flex-col items-center justify-center px-5 py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2 relative"
            style={{
              background: '#06b6d4',
              borderRadius: '0',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3), inset -2px -2px 0px rgba(0,0,0,0.2)',
              border: '3px solid #ffffff',
              borderStyle: 'outset',
              minWidth: '110px',
              minHeight: '75px',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: '3px 3px 0px #000000, 1px 1px 0px rgba(0,0,0,0.8)',
                fontSize: '8px',
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
              className="w-5 h-5 text-white mt-2" 
              style={{ 
                filter: 'drop-shadow(2px 2px 0px rgba(135, 206, 250, 0.4))',
                transition: 'transform 0.3s ease',
              }}
            />
          </Link>

          {/* TEAM Circus Box */}
          <Link
            href="/#team"
            className="flex items-center justify-center px-6 py-5 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:skew-x-2"
            style={{
              background: '#f97316',
              borderRadius: '0',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3), inset -2px -2px 0px rgba(0,0,0,0.2)',
              border: '3px solid #ffffff',
              borderStyle: 'outset',
              minWidth: '70px',
              minHeight: '60px',
              position: 'relative',
              imageRendering: 'pixelated'
            }}
          >
            <span 
              className="text-white font-black pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textShadow: '3px 3px 0px #000000, 1px 1px 0px rgba(0,0,0,0.8)',
                fontSize: '14px',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never'
              }}
            >
              TEAM
            </span>
          </Link>
        </div>
      </div>
      
      {/* Circus Animation Styles */}
      <style jsx>{`
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