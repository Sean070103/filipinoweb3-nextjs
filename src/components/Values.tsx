'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

export default function Values() {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.3,
  //       delayChildren: 0.2,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: 'easeOut',
  //     },
  //   },
  // };

  const values = [
    {
      title: "Bayanihan",
      image: "/images/holistic.png",
      description: "The Filipino spirit of community cooperation drives our Web3 ecosystem. Every builder, developer, and community member works together for collective success.",
      color: "from-red-500 to-yellow-500",
      glowColor: "#FFD700"
    },
    {
      title: "Malasakit",
      image: "/images/connected.png",
      description: "Deep concern for others' welfare guides our Web3 relationships. We build authentic connections that uplift our entire Filipino community.",
      color: "from-blue-500 to-red-500",
      glowColor: "#FF6B9D"
    },
    {
      title: "Diskarte",
      image: "/images/innovative.png", 
      description: "Filipino resourcefulness meets Web3 innovation. We embrace change with creative problem-solving and stay ahead of the curve.",
      color: "from-yellow-500 to-blue-500",
      glowColor: "#4ECDC4"
    }
  ];

  const dotPositions = [2, 0, 1]; // Yellow dot position for each card (0=blue, 1=red, 2=yellow)

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pixelGlow {
          0%, 100% {
            box-shadow: 6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1);
          }
          50% {
            box-shadow: 6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.3);
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
        @keyframes pixelPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        @keyframes progressFill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes dotPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.9;
          }
        }
        @keyframes cyberGlow {
          0%, 100% {
            box-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF, inset 0 0 10px rgba(0,255,255,0.2);
          }
          50% {
            box-shadow: 0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF, 0 0 80px #00FFFF, inset 0 0 15px rgba(0,255,255,0.3);
          }
        }
        @keyframes cyberBorder {
          0% {
            border-color: #00FFFF;
            box-shadow: 0 0 10px #00FFFF, inset 0 0 10px rgba(0,255,255,0.2);
          }
          25% {
            border-color: #FF00FF;
            box-shadow: 0 0 10px #FF00FF, inset 0 0 10px rgba(255,0,255,0.2);
          }
          50% {
            border-color: #00FF00;
            box-shadow: 0 0 10px #00FF00, inset 0 0 10px rgba(0,255,0,0.2);
          }
          75% {
            border-color: #FFFF00;
            box-shadow: 0 0 10px #FFFF00, inset 0 0 10px rgba(255,255,0,0.2);
          }
          100% {
            border-color: #00FFFF;
            box-shadow: 0 0 10px #00FFFF, inset 0 0 10px rgba(0,255,255,0.2);
          }
        }
        @keyframes scanlineMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 20px;
          }
        }
        .value-card {
          transition: all 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-8px);
          animation: pixelGlow 2s ease-in-out infinite;
        }
        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid transparent;
          pointer-events: none;
          z-index: 1;
        }
        .value-card:hover::before {
          border-color: rgba(255,255,255,0.3);
          animation: scanline 3s linear infinite;
        }
        .progress-bar-segment {
          animation: progressFill 1.5s ease-out forwards;
          animation-delay: calc(var(--index) * 0.2s);
        }
        .dot-indicator {
          animation: dotPulse 2s ease-in-out infinite;
        }
      `}} />
    <section id="about" className="values relative">
      {/* Dark Background with Grid Pattern */}
      <div className="absolute inset-0" style={{
        background: '#000000'
      }} />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%23FFD700'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23FFD700'/%3E%3C/svg%3E")`,
        backgroundSize: '8px 8px',
        imageRendering: 'pixelated' as CSSProperties['imageRendering']
      }} />
      
      {/* Animated Scanlines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        imageRendering: 'pixelated' as CSSProperties['imageRendering'],
        animation: 'scanline 8s linear infinite'
      }} />
      
      <div className="container relative z-10 py-8 sm:py-12 md:py-16 lg:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 sm:px-6"
        >
          <h2 className="pixelated" style={{ 
            fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', 
            letterSpacing: '0.1em', 
            lineHeight: '1.4', 
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            imageRendering: 'pixelated' as CSSProperties['imageRendering'],
            WebkitFontSmoothing: 'none',
            textRendering: 'optimizeSpeed',
            wordSpacing: '0.2em'
          }}>
            <span style={{ 
              color: '#FFFFFF',
              textShadow: '4px 4px 0px #000000',
              WebkitFontSmoothing: 'none',
              display: 'inline-block',
              marginRight: '0.3em'
            }}>OUR</span>
            <span style={{ 
              color: '#00FF00',
              textShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00, 4px 4px 0px #000000',
              WebkitFontSmoothing: 'none',
              filter: 'drop-shadow(0 0 5px #00FF00)',
              display: 'inline-block'
            }}>VALUES</span>
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card - Pixelated Style with Pink Triangles */}
              <motion.div 
                className="value-card relative pixelated h-full flex flex-col"
                style={{
                  background: '#000000',
                  border: 'clamp(2px, 0.5vw, 4px) solid #FFFFFF',
                  borderStyle: 'outset',
                  borderRadius: 'clamp(8px, 1.5vw, 12px)',
                  boxShadow: 'clamp(3px, 0.8vw, 6px) clamp(3px, 0.8vw, 6px) 0px rgba(0,0,0,0.8), inset clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px rgba(255,255,255,0.1)',
                  imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Pink Triangles on Top Edge */}
                <div className="absolute -top-2 sm:-top-3 md:-top-4 left-0 right-0 flex justify-start gap-0.5 sm:gap-1 px-1 sm:px-2" style={{ zIndex: 1 }}>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="hidden sm:block"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: 'clamp(4px, 1vw, 6px) solid transparent',
                        borderRight: 'clamp(4px, 1vw, 6px) solid transparent',
                        borderBottom: 'clamp(6px, 1.2vw, 8px) solid #FF6B9D',
                        imageRendering: 'pixelated' as CSSProperties['imageRendering']
                      }}
                    />
                  ))}
                </div>
                
                {/* Image */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ borderBottom: 'clamp(2px, 0.5vw, 4px) solid #FFFFFF' }}>
                  <Image 
                    src={value.image} 
                    alt={value.title} 
                    width={400}
                    height={250}
                    className="w-full h-40 xs:h-44 sm:h-48 md:h-56 object-cover"
                    style={{
                      imageRendering: 'pixelated' as CSSProperties['imageRendering']
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 
                    className="pixelated" 
                    style={{ 
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      letterSpacing: '0.08em',
                      fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                      color: '#FFFFFF',
                      fontWeight: '400',
                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      WebkitFontSmoothing: 'none',
                      MozOsxFontSmoothing: 'unset',
                      fontSmooth: 'never',
                      textShadow: `3px 3px 0px #000000, 0 0 10px ${value.glowColor}`,
                      textRendering: 'optimizeSpeed',
                      lineHeight: '1.3',
                      wordBreak: 'break-word',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {value.title.toUpperCase()}
                  </h3>
                  <p 
                    className="text-white flex-grow" 
                    style={{
                      fontFamily: '"Courier New", monospace',
                      color: '#FFFFFF',
                      fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                      fontWeight: 'bold',
                      lineHeight: '1.7',
                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      WebkitFontSmoothing: 'none',
                      textRendering: 'optimizeSpeed',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {value.description}
                  </p>
                  
                  {/* Bottom Bar with Segments */}
                  <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 relative flex-shrink-0" style={{ borderTop: 'clamp(1px, 0.3vw, 2px) solid #FFFFFF' }}>
                    <div className="flex items-center gap-0.5 sm:gap-1 h-4 sm:h-5 relative">
                      {/* Blue Segment */}
                      <div 
                        className="progress-bar-segment flex-1 h-full relative"
                        style={{
                          background: '#0066FF',
                          border: 'clamp(1px, 0.3vw, 2px) solid #000000',
                          imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                          '--index': '0'
                        } as React.CSSProperties}
                      >
                        {/* Blue Dot Indicator */}
                        {dotPositions[index] === 0 && (
                          <div 
                            className="dot-indicator absolute -top-2 sm:-top-2.5 left-1/2 transform -translate-x-1/2"
                            style={{
                              width: 'clamp(10px, 2vw, 14px)',
                              height: 'clamp(10px, 2vw, 14px)',
                              background: '#0066FF',
                              border: 'clamp(1px, 0.3vw, 2px) solid #000000',
                              borderRadius: '50%',
                              imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                              boxShadow: '0 0 12px #0066FF, 0 0 20px #0066FF',
                              zIndex: 10
                            }}
                          />
                        )}
                      </div>
                      {/* Red Segment */}
                      <div 
                        className="progress-bar-segment flex-1 h-full relative"
                        style={{
                          background: '#FF0000',
                          border: 'clamp(1px, 0.3vw, 2px) solid #000000',
                          imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                          '--index': '1'
                        } as React.CSSProperties}
                      >
                        {/* Red Dot Indicator */}
                        {dotPositions[index] === 1 && (
                          <div 
                            className="dot-indicator absolute -top-2 sm:-top-2.5 left-1/2 transform -translate-x-1/2"
                            style={{
                              width: 'clamp(10px, 2vw, 14px)',
                              height: 'clamp(10px, 2vw, 14px)',
                              background: '#FF0000',
                              border: 'clamp(1px, 0.3vw, 2px) solid #000000',
                              borderRadius: '50%',
                              imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                              boxShadow: '0 0 12px #FF0000, 0 0 20px #FF0000',
                              zIndex: 10
                            }}
                          />
                        )}
                      </div>
                      {/* Yellow Segment */}
                      <div 
                        className="progress-bar-segment flex-1 h-full relative"
                        style={{
                          background: '#FFD700',
                          border: 'clamp(1px, 0.3vw, 2px) solid #000000',
                          imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                          '--index': '2'
                        } as React.CSSProperties}
                      >
                        {/* Yellow Dot Indicator */}
                        {dotPositions[index] === 2 && (
                          <div 
                            className="dot-indicator absolute -top-2 sm:-top-2.5 left-1/2 transform -translate-x-1/2"
                            style={{
                              width: 'clamp(10px, 2vw, 14px)',
                              height: 'clamp(10px, 2vw, 14px)',
                              background: '#FFD700',
                              border: 'clamp(1px, 0.3vw, 2px) solid #000000',
                              borderRadius: '50%',
                              imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                              boxShadow: '0 0 12px #FFD700, 0 0 20px #FFD700',
                              zIndex: 10
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Retro Pixel Popup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center px-4 sm:px-6 md:px-8"
          style={{
            marginTop: 'clamp(3rem, 8vw, 12rem)',
            paddingTop: 'clamp(1.5rem, 4vw, 6rem)',
            marginBottom: 'clamp(1.5rem, 3vw, 4rem)'
          }}
        >
          <div 
            className="p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl mx-auto text-center pixelated w-full relative"
            style={{
              background: '#000000',
              border: 'clamp(3px, 0.8vw, 5px) solid #CCCCCC',
              borderStyle: 'outset',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              boxShadow: 'clamp(4px, 1vw, 8px) clamp(4px, 1vw, 8px) 0px rgba(0,0,0,0.9), inset clamp(2px, 0.5vw, 3px) clamp(2px, 0.5vw, 3px) 0px rgba(255,255,255,0.15)',
              imageRendering: 'pixelated' as CSSProperties['imageRendering'],
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {/* Grid Background Pattern */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='none'/%3E%3Cpath d='M 0 0 L 20 0 M 0 20 L 20 20 M 0 0 L 0 20 M 20 0 L 20 20' stroke='%2306b6d4' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: '20px 20px',
                imageRendering: 'pixelated' as CSSProperties['imageRendering']
              }}
            />
            
            <div className="relative z-10">
              <h3 
                className="pixelated mb-4 sm:mb-5 md:mb-6" 
                style={{ 
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  letterSpacing: '0.1em',
                  fontSize: 'clamp(1.1rem, 3.5vw, 2.2rem)',
                  color: '#FFFFFF',
                  fontWeight: '400',
                  imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                  WebkitFontSmoothing: 'none',
                  textShadow: 'clamp(3px, 0.6vw, 4px) clamp(3px, 0.6vw, 4px) 0px #000000, 0 0 clamp(10px, 2vw, 15px) rgba(6, 182, 212, 0.5)',
                  lineHeight: '1.3',
                  wordBreak: 'break-word',
                  padding: '0 clamp(0.5rem, 2vw, 1rem)'
                }}
              >
                READY TO BUILD THE<br />
                <span style={{ 
                  fontSize: 'clamp(1.3rem, 4vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>FUTURE?</span>
              </h3>
              
              <p 
                className="mb-6 sm:mb-8 md:mb-10 text-center" 
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontWeight: '400',
                  fontSize: 'clamp(0.65rem, 1.8vw, 0.9rem)',
                  lineHeight: '1.8',
                  wordWrap: 'break-word',
                  textAlign: 'center',
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '100%',
                  padding: '0 clamp(0.5rem, 2vw, 1rem)',
                  color: '#CCCCCC',
                  textShadow: '2px 2px 0px #000000',
                  imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                  WebkitFontSmoothing: 'none'
                }}
              >
                Join our community of Web3 builders, developers, and innovators.
              </p>
              
              <div className="flex justify-center mb-4 sm:mb-5 px-2">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    y: 0
                  }}
                >
                  <Link
                    href="/community"
                    className="pixelated relative overflow-hidden block"
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4 0%, #22c55e 50%, #06b6d4 100%)',
                      backgroundSize: '200% 200%',
                      color: '#000000',
                      padding: 'clamp(1rem, 2.5vw, 1.5rem) clamp(2rem, 5vw, 3.5rem)',
                      border: 'clamp(3px, 0.8vw, 5px) solid #000000',
                      borderStyle: 'outset',
                      borderRadius: '0',
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)',
                      fontWeight: '400',
                      textTransform: 'uppercase',
                      boxShadow: 'inset 0 clamp(-3px, -0.8vw, -5px) 0 rgba(0,0,0,0.2), inset 0 clamp(3px, 0.8vw, 5px) 0 rgba(255,255,255,0.3), 0 clamp(4px, 1vw, 8px) 0 rgba(0,0,0,0.8)',
                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                      letterSpacing: '0.15em',
                      lineHeight: '1.4',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minWidth: 'clamp(220px, 55vw, 300px)',
                      width: 'auto',
                      maxWidth: '100%',
                      display: 'inline-block',
                      position: 'relative',
                      zIndex: 10,
                      textShadow: '1px 1px 0px rgba(255,255,255,0.3)',
                      textDecoration: 'none'
                    }}
                  >
                    {/* Animated gradient overlay */}
                    <motion.div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                        imageRendering: 'pixelated' as CSSProperties['imageRendering']
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
                    <div 
                      className="absolute top-0 left-0 right-0 pointer-events-none"
                      style={{
                        height: '35%',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
                        imageRendering: 'pixelated' as CSSProperties['imageRendering']
                      }}
                    />
                    {/* Pixelated pattern overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-15"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='none'/%3E%3Crect x='0' y='0' width='1' height='4' fill='%23000000'/%3E%3Crect x='0' y='0' width='4' height='1' fill='%23000000'/%3E%3C/svg%3E")`,
                        backgroundSize: '4px 4px',
                        imageRendering: 'pixelated' as CSSProperties['imageRendering']
                      }}
                    />
                    <span className="relative z-10" style={{
                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                      display: 'block',
                      position: 'relative',
                      zIndex: 2
                    }}>JOIN OUR COMMUNITY</span>
                  </Link>
                </motion.div>
              </div>
              
              {/* Pixelated Footer Pattern - Yellow/Black Checkerboard */}
              <div 
                className="mt-5 sm:mt-6 md:mt-8 pt-3 sm:pt-4 md:pt-5"
                style={{
                  borderTop: 'clamp(2px, 0.5vw, 3px) solid #666666',
                  paddingTop: 'clamp(0.75rem, 2vw, 1.25rem)'
                }}
              >
                <div
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='12' height='12' fill='%23FFD700'/%3E%3Crect x='0' y='0' width='6' height='6' fill='%23000000'/%3E%3Crect x='6' y='6' width='6' height='6' fill='%23000000'/%3E%3C/svg%3E")`,
                    backgroundSize: 'clamp(10px, 2vw, 12px) clamp(10px, 2vw, 12px)',
                    imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                    height: 'clamp(16px, 3vw, 20px)',
                    opacity: 0.9,
                    borderTop: 'clamp(1px, 0.3vw, 2px) solid #999999',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
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
