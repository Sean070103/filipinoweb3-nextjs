'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Categories() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'TO WEB3 AND BEYOND!';
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);
  
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      {/* Enhanced Animated Background Elements with Parallax */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg"
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl"
          style={{ y: y3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-400/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Additional floating elements with enhanced animations */}
        <motion.div 
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-400/5 rounded-full blur-lg"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-400/8 rounded-full blur-md"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, -360],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        {/* Particle System */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='20'/%3E%3Crect x='20' y='20' width='20' height='20'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }} />
      
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

        {/* Vision and Mission Layout - Like the Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 max-w-7xl mx-auto items-center">
          {/* Left Side - Large Title */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="text-center lg:text-left">
              <motion.h2 
                className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  textShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  textShadow: '0 0 30px rgba(34, 211, 238, 0.8), 0 0 50px rgba(168, 85, 247, 0.6)'
                }}
              >
                The Premium<br />
                Hub for<br />
                Filipino Web3<br />
                Innovators
              </motion.h2>
            </div>
          </ScrollReveal>

          {/* Right Side - Vision and Mission Content */}
          <ScrollReveal direction="right" delay={0.6}>
            <div className="space-y-8">
              {/* Vision Section */}
              <motion.div 
                className="group"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-6"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Vision
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6"
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  To be the premium hub of Filipinos in Web3 that is focused on bringing holistic, connected, and innovative principles.
                </p>
                <p className="text-gray-400 text-base leading-relaxed"
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  We are building a comprehensive ecosystem that connects Filipino developers, entrepreneurs, and innovators with global Web3 opportunities, fostering collaboration and knowledge sharing across the blockchain landscape.
                </p>
              </motion.div>

              {/* Mission Section */}
              <motion.div 
                className="group"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-6"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Mission
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6"
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  We envision a thriving ecosystem where Filipino talent leads the charge in blockchain innovation, creating meaningful impact across the global Web3 landscape.
                </p>
                <p className="text-gray-400 text-base leading-relaxed"
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our mission extends beyond community building to include educational initiatives, mentorship programs, and strategic partnerships that position the Philippines as a key player in the global Web3 revolution.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
