'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ModernHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400">
      {/* Sky Background with Clouds */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400" />
        
        {/* Animated Clouds */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`cloud-${i}`}
            className="absolute opacity-60"
            style={{
              left: `${(i * 12.5) % 100}%`,
              top: `${20 + (i * 8) % 40}%`,
              width: `${120 + (i * 20) % 80}px`,
              height: `${60 + (i * 15) % 40}px`,
            }}
            animate={prefersReduced ? undefined : {
              x: [0, 20, -10, 0],
              y: [0, -5, 3, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={prefersReduced ? undefined : {
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          >
            <div 
              className="w-full h-full rounded-full bg-white/80 shadow-lg"
              style={{
                background: `radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.3) 100%)`,
                filter: 'blur(1px)',
              }}
            />
          </motion.div>
        ))}

        {/* Large Background Clouds */}
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={`bg-cloud-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${(i * 25) % 100}%`,
              top: `${10 + (i * 15) % 30}%`,
              width: `${200 + (i * 50) % 100}px`,
              height: `${100 + (i * 30) % 50}px`,
            }}
            animate={prefersReduced ? undefined : {
              x: [0, 30, -15, 0],
              y: [0, -8, 5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={prefersReduced ? undefined : {
              duration: 25 + (i * 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          >
            <div 
              className="w-full h-full rounded-full bg-white/60 shadow-xl"
              style={{
                background: `radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.1) 100%)`,
                filter: 'blur(2px)',
              }}
            />
          </motion.div>
        ))}

        {/* Additional Cloud Layers for Depth */}
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`depth-cloud-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${(i * 33) % 100}%`,
              top: `${15 + (i * 20) % 25}%`,
              width: `${300 + (i * 100) % 150}px`,
              height: `${150 + (i * 50) % 75}px`,
            }}
            animate={prefersReduced ? undefined : {
              x: [0, 40, -20, 0],
              y: [0, -10, 8, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={prefersReduced ? undefined : {
              duration: 30 + (i * 8),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 5,
            }}
          >
            <div 
              className="w-full h-full rounded-full bg-white/40 shadow-2xl"
              style={{
                background: `radial-gradient(ellipse at center, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0.05) 100%)`,
                filter: 'blur(3px)',
              }}
            />
          </motion.div>
        ))}

        {/* Subtle Sun Effect */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-xl"
          animate={prefersReduced ? undefined : {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={prefersReduced ? undefined : {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Mouse-following cloud effect */}
        <motion.div
          className="absolute w-64 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 64,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl">
          {/* Main Title */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-slate-800 mb-6"
            style={{
              fontFamily: 'var(--font-orbitron), sans-serif',
              letterSpacing: '0.05em',
              textShadow: '0 4px 8px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.2)',
              lineHeight: '0.9',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            FILIPINOWEB3
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: '300',
              textShadow: '0 2px 4px rgba(255,255,255,0.6)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Empowering Filipinos in the Web3 Revolution
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: '400',
              textShadow: '0 1px 2px rgba(255,255,255,0.4)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Join our community of Filipino developers, entrepreneurs, and innovators 
            building the future of decentralized technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="#about"
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg min-w-[200px] text-center hover:bg-slate-700"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Get Started
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-slate-600 text-slate-700 font-semibold rounded-lg hover:bg-white/30 hover:border-slate-500 transition-all duration-300 text-lg min-w-[200px] text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Join Community
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-slate-600/50 rounded-full flex justify-center bg-white/20 backdrop-blur-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-3 bg-slate-700/70 rounded-full mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
