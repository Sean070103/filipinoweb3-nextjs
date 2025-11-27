'use client';

import { motion } from 'framer-motion';

export default function Header() {

  return (
    <header 
      className="relative overflow-hidden"
      style={{
        background: '#0a0f1a',
        backgroundImage: "url('/images/underground.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem 0',
      }}
    >
      <div className="container header__container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="flex flex-col items-center justify-center min-h-screen text-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ paddingLeft: 'clamp(5rem, 15vw, 12rem)' }}
        >
          {/* Enhanced Title with Retro Pixelated Text Effects */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative text-white font-bold pixelated mb-6"
            style={{ 
              color: '#ffffff',
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.2,
              fontWeight: '400',
              WebkitTextFillColor: 'currentColor',
              display: 'block',
              imageRendering: 'pixelated',
              textRendering: 'optimizeSpeed',
              WebkitFontSmoothing: 'none',
              MozOsxFontSmoothing: 'unset',
              fontSmooth: 'never',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Glow effect behind text */}
            <div 
              className="absolute inset-0 blur-xl opacity-20"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed, #f97316)',
                zIndex: -1,
                transform: 'scale(1.1)',
              }}
            />
            <span 
              className="block mb-1"
              style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #3b82f6 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 25px rgba(0, 212, 255, 0.5), 0 0 50px rgba(0, 212, 255, 0.3)',
                filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.7))',
              }}
            >
              FILIPINO
            </span>
            <span 
              className="block"
              style={{ 
                background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 25px rgba(249, 115, 22, 0.5), 0 0 50px rgba(249, 115, 22, 0.3)',
                filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.7))',
              }}
            >
              WEB3
            </span>
          </motion.h1>

          {/* Tagline with enhanced styling */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="pixelated mb-8 max-w-2xl px-6"
            style={{
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(0.6rem, 1.2vw, 0.85rem)',
              background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.6,
              textShadow: '2px 2px 0px rgba(0,0,0,0.8), 0 0 15px rgba(167, 139, 250, 0.3)',
              letterSpacing: '0.08em',
            }}
          >
            EMPOWERING FILIPINOS IN THE WEB3 REVOLUTION
          </motion.p>

        </motion.div>
      </div>
      
      {/* CSS Animations with Retro Pixelated Effects */}
      <style>{`
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
        
        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes textGlow {
          0%, 100% {
            textShadow: '6px 6px 0px rgba(0,0,0,0.8), 0 0 30px rgba(206, 17, 38, 0.8), 0 0 60px rgba(206, 17, 38, 0.4)';
          }
          50% {
            textShadow: '6px 6px 0px rgba(0,0,0,0.8), 0 0 40px rgba(206, 17, 38, 1), 0 0 80px rgba(206, 17, 38, 0.6)';
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
