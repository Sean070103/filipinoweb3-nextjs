'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Categories() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'TO WEB3 AND BEYOND!';
  // Background animations removed for a calmer look
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Hide cursor after typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    }, 100); // Adjust speed here (lower = faster)
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="categories relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      {/* Static soft glows (no animation) */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-400/10 rounded-full blur-xl" />
      </div>
      
      {/* Retro Grid + Scanlines */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='24' x='0' y='0' fill='%23ffffff' fill-opacity='0.06'/%3E%3Crect width='24' height='1' x='0' y='0' fill='%23ffffff' fill-opacity='0.06'/%3E%3C/svg%3E")`,
        backgroundSize: '24px 24px'
      }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)`,
        backgroundSize: '100% 3px',
        mixBlendMode: 'overlay'
      }} />
      {/* Pixel sprites removed for a calmer background */}
      
      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.h1 
              className="text-5xl lg:text-6xl font-black text-white leading-tight relative"
              style={{ 
                textShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)',
                fontFamily: 'Montserrat, sans-serif',
                color: '#ffffff',
                fontWeight: '800'
              }}
              whileHover={{ 
                scale: 1.02,
                textShadow: '0 0 30px rgba(34, 211, 238, 0.8), 0 0 50px rgba(168, 85, 247, 0.6)'
              }}
            >
              <span className="relative z-10">
                {displayText}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
              {/* Enhanced Text Glow Effect */}
              <motion.div 
                className="absolute inset-0 text-cyan-400/30 blur-sm"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}







                
              >
                {displayText}
              </motion.div>
              <motion.div 
                className="absolute inset-0 text-purple-400/20 blur-md"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                {displayText}
              </motion.div>
            </motion.h1>
          </ScrollReveal>
        </div>

        {/* Two Big Cards: Vision (left) and Mission (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 mx-auto items-start">
          {/* Vision - Left Card */}
          <ScrollReveal direction="left" delay={0.4}>
            <motion.div
              whileHover={{ x: 2 }}
              className="relative h-full"
            >
              <h3 className="mb-6" style={{
                fontFamily: 'var(--font-jersey)',
                fontWeight: 900,
                fontSize: '4rem',
                letterSpacing: '2px',
                imageRendering: 'pixelated',
                color: '#67e8f9',
                textShadow: '2px 2px 0 #0e7490, -2px -2px 0 #22d3ee',
                textTransform: 'uppercase'
              }}>VISION</h3>
              <div className="mb-8" style={{ maxWidth: '62ch' }}>
                <p className="text-gray-100" style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '1.375rem',
                  lineHeight: 1.7
                }}>
                  To be the premier global hub for Filipino Web3 innovators, embodying the Bayanihan spirit through holistic, connected, and innovative principles that unite our worldwide Filipino community in building the decentralized future.
                </p>
              </div>
              {/* Bullets removed as requested */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30" style={{ fontFamily: 'var(--font-jersey)', imageRendering: 'pixelated', textTransform: 'uppercase' }}>GLOBAL-FIRST</span>
                <span className="px-3 py-1 rounded text-xs bg-purple-500/10 text-purple-300 border border-purple-500/30" style={{ fontFamily: 'var(--font-jersey)', imageRendering: 'pixelated', textTransform: 'uppercase' }}>INCLUSIVE</span>
                <span className="px-3 py-1 rounded text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/30" style={{ fontFamily: 'var(--font-jersey)', imageRendering: 'pixelated', textTransform: 'uppercase' }}>SUSTAINABLE</span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Mission - Right Card */}
          <ScrollReveal direction="right" delay={0.6}>
            <motion.div
              whileHover={{ x: -2 }}
              className="relative h-full"
            >
              <h3 className="mb-6" style={{
                fontFamily: 'var(--font-jersey)',
                fontWeight: 900,
                fontSize: '4rem',
                letterSpacing: '2px',
                imageRendering: 'pixelated',
                color: '#c4b5fd',
                textShadow: '2px 2px 0 #3730a3, -2px -2px 0 #a78bfa',
                textTransform: 'uppercase'
              }}>MISSION</h3>
              <div className="mb-8" style={{ maxWidth: '62ch' }}>
                <p className="text-gray-100" style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '1.375rem',
                  lineHeight: 1.7
                }}>
                  Create a comprehensive platform for the Filipino Web3 community to exchange ideas, share knowledge, and discover opportunities, fostering innovation through the spirit of Malasakit and Pagkakaisa.
                </p>
              </div>
              {/* Bullets removed; exact sentences preserved */}
              <p className="text-gray-300" style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '62ch' }}>
                Provide comprehensive educational resources, mentorship programs, and skill development opportunities to empower Filipino developers, builders, and entrepreneurs in the Web3 ecosystem.
              </p>
              <p className="text-gray-300 mt-4" style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '62ch' }}>
                Establish professional standards and best practices in the Web3 industry through continuous education, certification programs, and collaborative learning initiatives.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/30" style={{ fontFamily: 'var(--font-jersey)', imageRendering: 'pixelated', textTransform: 'uppercase' }}>EDUCATION</span>
                <span className="px-3 py-1 rounded text-xs bg-pink-500/10 text-pink-300 border border-pink-500/30" style={{ fontFamily: 'var(--font-jersey)', imageRendering: 'pixelated', textTransform: 'uppercase' }}>MENTORSHIP</span>
                <span className="px-3 py-1 rounded text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30" style={{ fontFamily: 'var(--font-jersey)', imageRendering: 'pixelated', textTransform: 'uppercase' }}>OPPORTUNITIES</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
