'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CommunityCTA() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes crtGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(173, 216, 230, 0.9), 0 0 20px rgba(173, 216, 230, 0.7), 0 0 30px rgba(173, 216, 230, 0.5);
          }
          50% {
            text-shadow: 0 0 15px rgba(173, 216, 230, 1), 0 0 25px rgba(173, 216, 230, 0.8), 0 0 35px rgba(173, 216, 230, 0.6);
          }
        }
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes terminalFlicker {
          0%, 100% {
            opacity: 1;
          }
          98% {
            opacity: 1;
          }
          99% {
            opacity: 0.98;
          }
        }
      `}} />
      <section id="community-cta" className="relative py-6 sm:py-10 overflow-hidden">
        {/* Dark Background with Grid Pattern */}
        <div className="absolute inset-0" style={{
          background: '#0a0a0a',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%230a0a0a'/%3E%3Cpath d='M 0 0 L 20 0 M 0 20 L 20 20 M 0 0 L 0 20 M 20 0 L 20 20' stroke='%2314b8a6' stroke-width='0.5' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
          imageRendering: 'pixelated'
        }} />
        
        {/* Subtle scanline effect */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(20, 184, 166, 0.03) 2px, rgba(20, 184, 166, 0.03) 4px)',
          animation: 'scanline 8s linear infinite',
          imageRendering: 'pixelated'
        }} />
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[300px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            {/* Main Content Frame - Rounded Rectangle with Terminal Aesthetic */}
            <div 
              className="relative"
              style={{
                background: '#d3d3d3',
                borderRadius: 'clamp(8px, 1.5vw, 14px)',
                padding: 'clamp(3px, 0.5vw, 4px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                imageRendering: 'pixelated',
                maxWidth: 'clamp(320px, 70vw, 480px)',
                width: '100%',
                animation: 'terminalFlicker 0.15s infinite'
              }}
            >
              {/* Inner Dark Border */}
              <div 
                className="relative"
                style={{
                  background: '#2a2a2a',
                  borderRadius: 'clamp(6px, 1.2vw, 12px)',
                  padding: 'clamp(2px, 0.3vw, 3px)',
                  imageRendering: 'pixelated',
                  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Black Interior with CRT effect */}
                <div 
                  className="relative overflow-hidden"
                  style={{
                    background: '#000000',
                    borderRadius: 'clamp(5px, 1vw, 10px)',
                    padding: 'clamp(1rem, 2vw, 1.5rem) clamp(0.8rem, 1.5vw, 1.2rem)',
                    imageRendering: 'pixelated',
                    position: 'relative'
                  }}
                >
                  {/* Subtle CRT screen glow */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse at center, rgba(173, 216, 230, 0.05) 0%, transparent 70%)',
                    imageRendering: 'pixelated'
                  }} />
                  
                  {/* Main Heading with CRT Glow */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mb-2"
                    style={{
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: 'clamp(0.65rem, 1.7vw, 1.2rem)',
                      fontWeight: '400',
                      color: '#FFFFFF',
                      letterSpacing: '0.08em',
                      textShadow: '0 0 12px rgba(173, 216, 230, 0.95), 0 0 24px rgba(173, 216, 230, 0.75), 0 0 36px rgba(173, 216, 230, 0.55)',
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                      textRendering: 'optimizeSpeed',
                      lineHeight: '1.2',
                      animation: 'crtGlow 3s ease-in-out infinite',
                      position: 'relative',
                      zIndex: 10,
                      marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)'
                    }}
                  >
                    READY TO BUILD THE
                    <br />
                    FUTURE?
                  </motion.h2>

                  {/* Body Text - Centered */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-3"
                    style={{
                      position: 'relative',
                      zIndex: 10
                    }}
                  >
                    <p
                      className="text-center"
                      style={{
                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                        fontSize: 'clamp(0.45rem, 1vw, 0.65rem)',
                        fontWeight: '400',
                        color: '#FFFFFF',
                        lineHeight: '1.4',
                        imageRendering: 'pixelated',
                        WebkitFontSmoothing: 'none',
                        fontSmooth: 'never',
                        textRendering: 'optimizeSpeed',
                        marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      Join our community of Web3 builders, developers, and innovators.
                    </p>
                  </motion.div>

                  {/* CTA Button with Enhanced Gradient */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      position: 'relative',
                      zIndex: 10
                    }}
                  >
                    <Link
                      href="/community"
                      className="inline-block"
                      style={{
                        textDecoration: 'none'
                      }}
                    >
                      <div
                        className="relative inline-block px-5 py-2.5"
                        style={{
                          background: 'linear-gradient(90deg, #0d9488 0%, #14b8a6 40%, #22c55e 80%, #4ade80 100%)',
                          border: '2px solid #4a5568',
                          borderRadius: 'clamp(4px, 0.8vw, 8px)',
                          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 15px rgba(34, 197, 94, 0.3)',
                          cursor: 'pointer',
                          imageRendering: 'pixelated',
                          WebkitFontSmoothing: 'none',
                          fontSmooth: 'never',
                          transition: 'all 0.3s ease',
                          minWidth: 'clamp(160px, 40vw, 220px)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 0 25px rgba(34, 197, 94, 0.5)';
                          e.currentTarget.style.filter = 'brightness(1.15)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 15px rgba(34, 197, 94, 0.3)';
                          e.currentTarget.style.filter = 'brightness(1)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {/* Animated gradient overlay */}
                        <motion.div 
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                            imageRendering: 'pixelated'
                          }}
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear'
                          }}
                        />
                        
                        {/* Top highlight */}
                        <div className="absolute top-0 left-0 right-0 h-2/5 pointer-events-none" style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
                          imageRendering: 'pixelated'
                        }} />
                        
                        {/* Pixel pattern overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='none'/%3E%3Crect x='0' y='0' width='1' height='4' fill='%23000000'/%3E%3Crect x='0' y='0' width='4' height='1' fill='%23000000'/%3E%3C/svg%3E")`,
                          backgroundSize: '4px 4px',
                          imageRendering: 'pixelated'
                        }} />
                        
                        <span
                          style={{
                            fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                            fontSize: 'clamp(0.45rem, 1vw, 0.65rem)',
                            fontWeight: '400',
                            color: '#FFFFFF',
                            letterSpacing: '0.08em',
                            imageRendering: 'pixelated',
                            WebkitFontSmoothing: 'none',
                            fontSmooth: 'never',
                            textRendering: 'optimizeSpeed',
                            textTransform: 'uppercase',
                            position: 'relative',
                            zIndex: 1,
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 8px rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          JOIN OUR COMMUNITY
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                  
                  {/* Bottom Checkerboard Pattern - Enhanced */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-2"
                    style={{
                      height: 'clamp(14px, 2.2vw, 20px)',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' fill='%23FFD700'/%3E%3Crect x='0' y='0' width='8' height='8' fill='%23000000'/%3E%3Crect x='8' y='8' width='8' height='8' fill='%23000000'/%3E%3C/svg%3E")`,
                      backgroundSize: 'clamp(14px, 2.2vw, 20px) clamp(14px, 2.2vw, 20px)',
                      imageRendering: 'pixelated',
                      borderRadius: '0 0 clamp(3px, 0.6vw, 8px) clamp(3px, 0.6vw, 8px)',
                      marginTop: 'clamp(0.5rem, 1vw, 0.75rem)',
                      marginLeft: `-clamp(0.8rem, 1.5vw, 1.2rem)`,
                      marginRight: `-clamp(0.8rem, 1.5vw, 1.2rem)`,
                      marginBottom: `-clamp(1rem, 2vw, 1.5rem)`,
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 215, 0, 0.3)',
                      position: 'relative',
                      zIndex: 10,
                      borderTop: '1px solid rgba(255, 215, 0, 0.2)'
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

