'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 300], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <header className="relative overflow-hidden">
      {/* Advanced Particle System */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {/* Main Ambient Orbs with Parallax */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            top: '10%', 
            left: '5%', 
            width: '240px', 
            height: '240px', 
            background: 'rgba(34,211,238,0.12)', 
            filter: 'blur(60px)', 
            borderRadius: '50%' 
          }}
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ y: y1 }}
        />
        <motion.div 
          style={{ 
            position: 'absolute', 
            bottom: '8%', 
            right: '12%', 
            width: '280px', 
            height: '280px', 
            background: 'rgba(168,85,247,0.12)', 
            filter: 'blur(70px)', 
            borderRadius: '50%' 
          }}
          animate={{
            x: [0, -25, 15, 0],
            y: [0, 20, -12, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ y: y2 }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            style={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: 'rgba(34, 211, 238, 0.6)',
              borderRadius: '50%',
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        {/* Mouse-following glow effect */}
        <motion.div
          style={{
            position: 'absolute',
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
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
          {/* Enhanced Title with Text Effects */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative text-white font-bold"
            style={{ 
              color: '#ffffff !important',
              textShadow: '0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              WebkitTextFillColor: '#ffffff !important'
            }}
            whileHover={{ 
              scale: 1.02,
              textShadow: '0 0 40px rgba(34, 211, 238, 0.8), 0 0 60px rgba(168, 85, 247, 0.6)'
            }}
          >
            Filipino Web3
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative text-white"
            style={{ 
              color: '#ffffff !important',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.1rem'
            }}
            whileHover={{ 
              scale: 1.01,
              color: "#ffffff"
            }}
          >
            is an organization with the aim of helping our fellow Filipinos hone
            their skills and maximize their potential to grow in the Web3 space.
          </motion.p>

          {/* Enhanced Button Container */}
          <motion.div 
            style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a 
              href="#about" 
              className="btn btn-secondary relative overflow-hidden"
              style={{ 
                color: '#ffffff !important',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                padding: '0.9rem 1.6rem',
                borderRadius: '0.65rem',
                backdropFilter: 'blur(2px)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.25), 0 0 0 2px rgba(255,255,255,0.08) inset"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10" style={{ color: '#ffffff !important' }}>Get Started</span>
            </motion.a>
            <motion.a 
              href="#team" 
              className="btn btn-secondary relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3), 0 0 0 2px rgba(255,255,255,0.15) inset"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Meet the Team</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Stats with Counter Animation */}
          <motion.div 
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.span
              whileHover={{ 
                scale: 1.1, 
                color: "#ffffff",
                textShadow: "0 0 20px rgba(34, 211, 238, 0.8)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group cursor-pointer text-white"
              style={{ color: '#ffffff !important' }}
            >
              <strong>2K+</strong> members
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
            <span className="dot" />
            <motion.span
              whileHover={{ 
                scale: 1.1, 
                color: "#ffffff",
                textShadow: "0 0 20px rgba(168, 85, 247, 0.8)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group cursor-pointer text-white"
              style={{ color: '#ffffff !important' }}
            >
              <strong>30+</strong> partners
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
            <span className="dot" />
            <motion.span
              whileHover={{ 
                scale: 1.1, 
                color: "#ffffff",
                textShadow: "0 0 20px rgba(34, 211, 238, 0.8)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group cursor-pointer text-white"
              style={{ color: '#ffffff !important' }}
            >
              <strong>100+</strong> events
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Right Section with 3D Effects */}
        <motion.div 
          className="header__right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="header__right-image relative"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 5
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* 3D Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 2, -2, 0],
                rotateX: [0, 1, -1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
            <Image 
              src="/images/fw3-logo-bg1.png" 
              alt="Filipino Web3 Logo" 
              width={500}
              height={500}
                className="relative z-10"
                style={{ 
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                  transform: 'translateZ(20px)'
                }}
              />
              
              {/* Glow Effect Behind Image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transform: 'translateZ(-10px)' }}
              />
            </motion.div>

            {/* Floating Elements Around Logo */}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i * 10)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 10 - 5, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
