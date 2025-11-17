'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  // const y3 = useTransform(scrollY, [0, 300], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particles with consistent values
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i * 17.3) % 100, // Use deterministic values instead of Math.random()
    y: (i * 23.7) % 100,
    size: ((i * 7.1) % 4) + 1,
    delay: (i * 3.7) % 5,
    duration: ((i * 11.3) % 10) + 10,
  }));

  return (
    <header 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #5C94FC 0%, #87CEEB 50%, #ADD8E6 100%)',
        minHeight: '100vh',
      }}
    >

      {/* Mario-Style Game Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {/* Ground/Floor at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'repeating-linear-gradient(90deg, #8B4513 0px, #8B4513 8px, #A0522D 8px, #A0522D 16px)',
            imageRendering: 'pixelated',
            borderTop: '4px solid #654321',
            boxShadow: '0 -2px 0 #654321, 0 -4px 0 #8B4513'
          }}
        />
        
        {/* Grass layer on top of ground */}
        <div
          style={{
            position: 'absolute',
            bottom: '120px',
            left: 0,
            right: 0,
            height: '20px',
            background: '#7CB342',
            imageRendering: 'pixelated',
            borderTop: '2px solid #558B2F',
            boxShadow: '0 -2px 0 #558B2F, 0 -4px 0 #7CB342'
          }}
        />

        {/* Distant Hills */}
        <div
          style={{
            position: 'absolute',
            bottom: '140px',
            left: 0,
            right: 0,
            height: '150px',
            background: 'linear-gradient(180deg, #4CAF50 0%, #66BB6A 100%)',
            clipPath: 'polygon(0% 100%, 15% 60%, 25% 70%, 35% 50%, 45% 65%, 55% 45%, 65% 60%, 75% 55%, 85% 65%, 100% 50%, 100% 100%)',
            imageRendering: 'pixelated',
            opacity: 0.7
          }}
        />

        {/* Retro Pixelated Grid Pattern Overlay (subtle) */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '8px 8px',
            imageRendering: 'pixelated'
          }}
        />
      </div>
      
      <div className="container header__container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="header__left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Enhanced Title with Retro Pixelated Text Effects */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative text-white font-bold pixelated"
            style={{ 
              color: '#ffffff',
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.2,
              fontWeight: '400',
              WebkitTextFillColor: 'currentColor',
              display: 'inline-block',
              imageRendering: 'pixelated',
              textRendering: 'optimizeSpeed',
              WebkitFontSmoothing: 'none',
              MozOsxFontSmoothing: 'unset',
              fontSmooth: 'never',
              letterSpacing: '0.05em'
            }}
            whileHover={{ 
              scale: 1.02
            }}
          >
            <span style={{ 
              color: '#CE1126', 
              textShadow: '4px 4px 0px rgba(0,0,0,0.3), 0 0 0 #CE1126, 2px 2px 0 #CE1126',
              filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))'
            }}>Filipino </span>
            <span style={{ 
              color: '#FCD116', 
              WebkitTextFillColor: '#FCD116', 
              textShadow: '4px 4px 0px rgba(0,0,0,0.3), 0 0 0 #FCD116, 2px 2px 0 #FCD116',
              filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))'
            }}>WEB3</span>
          </motion.h1>

          {/* Enhanced Description with Retro Styling */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative text-white pixelated"
            style={{ 
              color: '#ffffff !important',
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
              lineHeight: 1.6,
              imageRendering: 'pixelated',
              textRendering: 'optimizeSpeed',
              WebkitFontSmoothing: 'none',
              letterSpacing: '0.02em',
              textShadow: '2px 2px 0px rgba(0,0,0,0.3)'
            }}
            whileHover={{ 
              scale: 1.01,
              color: "#ffffff"
            }}
          >
            is an organization with the aim of helping our fellow Filipinos hone
            their skills and maximize their potential to grow in the Web3 space.
          </motion.p>

          {/* Retro Pixelated Button Container */}
          <motion.div 
            style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a 
              href="#about" 
              className="btn btn-secondary relative overflow-hidden pixelated"
              style={{ 
                color: '#ffffff !important',
                background: 'rgba(206, 17, 38, 0.9)',
                border: '4px solid #ffffff',
                borderStyle: 'outset',
                padding: '1rem 2rem',
                borderRadius: '0',
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                textRendering: 'optimizeSpeed',
                WebkitFontSmoothing: 'none',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.3), inset -2px -2px 0px rgba(0,0,0,0.2)',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                letterSpacing: '0.05em'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "6px 6px 0px rgba(0,0,0,0.4), inset -2px -2px 0px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95, boxShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="relative z-10" style={{ color: '#ffffff !important' }}>Get Started</span>
            </motion.a>
            <motion.a 
              href="#team" 
              className="btn btn-secondary relative overflow-hidden pixelated"
              style={{ 
                color: '#ffffff !important',
                background: 'rgba(252, 209, 22, 0.9)',
                border: '4px solid #ffffff',
                borderStyle: 'outset',
                padding: '1rem 2rem',
                borderRadius: '0',
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                textTransform: 'uppercase',
                imageRendering: 'pixelated',
                textRendering: 'optimizeSpeed',
                WebkitFontSmoothing: 'none',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.3), inset -2px -2px 0px rgba(0,0,0,0.2)',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                letterSpacing: '0.05em'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "6px 6px 0px rgba(0,0,0,0.4), inset -2px -2px 0px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95, boxShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="relative z-10" style={{ color: '#000000 !important' }}>Meet the Team</span>
            </motion.a>
          </motion.div>

          {/* Stats removed as requested */}
        </motion.div>
        
        {/* Enhanced Right Section with 3D Effects */}
        <motion.div 
          className="header__right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="header__right-image relative" style={{ transformStyle: 'flat' }}>
            <Image 
              src="/images/fw3-logo-bg1.png" 
              alt="Filipino Web3 Logo" 
              width={500}
              height={500}
              className="relative z-10"
              style={{ 
                filter: 'none', 
                transform: 'none',
                imageRendering: 'pixelated'
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* CSS Animations with Retro Pixelated Effects */}
      <style jsx>{`
        @keyframes floatHouse {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-5px) translateX(3px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-8px) translateX(-2px);
            opacity: 0.25;
          }
          75% {
            transform: translateY(-3px) translateX(5px);
            opacity: 0.35;
          }
        }
        
        @keyframes pixelGlow {
          0%, 100% {
            filter: drop-shadow(2px 2px 0px rgba(0,0,0,0.5));
          }
          50% {
            filter: drop-shadow(3px 3px 0px rgba(0,0,0,0.6));
          }
        }
        
        .pixelated {
          image-rendering: pixelated !important;
          image-rendering: -moz-crisp-edges !important;
          image-rendering: crisp-edges !important;
          -webkit-font-smoothing: none !important;
          -moz-osx-font-smoothing: unset !important;
          font-smooth: never !important;
        }
      `}</style>
    </header>
  );
}
