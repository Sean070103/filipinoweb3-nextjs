'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { Link2, Zap, CircleDot } from 'lucide-react';

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
      title: "HOLISTIC",
      image: "/images/holistic.png",
      description: "Building in Web3 involves different roles that are essential in its success as an industry. Maintaining the balance and flow of interdependence is vital for overall development. As builders, we must develop and strengthen the shared goals and ideals of our communities.",
      neonColor: "#00FFFF", // Cyan
      icon: CircleDot
    },
    {
      title: "CONNECTED",
      image: "/images/connected.png",
      description: "Web3 interactions should be built on authentic, harmonious, and mutually-beneficial relationships. Strategies must be attuned to the community's needs, passions, and interests. The organization's advocacy is a community-centered approach for the professional development of the community.",
      neonColor: "#FF00FF", // Magenta
      icon: Link2
    },
    {
      title: "INNOVATIVE",
      image: "/images/innovative.png", 
      description: "Web3 as an emerging industry is distinguished by its fast-paced dynamics. It is important for Web3 builders to be highly agile and adaptable. The organization aims to foster a vibrant exchange of information and encourage continuing education.",
      neonColor: "#FFFF00", // Yellow
      icon: Zap
    }
  ];

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
      {/* Dark Futuristic Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0d0d0d 0%, #111111 50%, #0d0d0d 100%)'
      }} />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='none'/%3E%3Cpath d='M 0 0 L 20 0 M 0 20 L 20 20 M 0 0 L 0 20 M 20 0 L 20 20' stroke='%2300FFFF' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '20px 20px',
        imageRendering: 'pixelated' as CSSProperties['imageRendering']
      }} />
      
      {/* Subtle Scanlines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)',
        imageRendering: 'pixelated' as CSSProperties['imageRendering']
      }} />
      
      <div className="container relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 px-4 sm:px-6"
        >
          <h2 className="pixelated" style={{ 
            fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', 
            letterSpacing: '0.15em', 
            lineHeight: '1.4', 
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            imageRendering: 'pixelated' as CSSProperties['imageRendering'],
            WebkitFontSmoothing: 'none',
            textRendering: 'optimizeSpeed'
          }}>
            <span style={{ 
              color: '#FFFFFF',
              textShadow: '3px 3px 0px #000000',
              WebkitFontSmoothing: 'none',
              display: 'inline-block',
              marginRight: '0.4em'
            }}>OUR</span>
            <span style={{ 
              color: '#00FFFF',
              textShadow: `
                3px 3px 0px #000000,
                0 0 10px #00FFFF40,
                0 0 20px #00FFFF20
              `,
              WebkitFontSmoothing: 'none',
              display: 'inline-block'
            }}>VALUES</span>
          </h2>
        </motion.div>

        {/* Values Grid - Cyberpunk Pixel Art Style */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Cyberpunk Card */}
                <motion.div 
                  className="relative h-full flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, #0d0d0d 0%, #0f0f0f 50%, #0d0d0d 100%)',
                    border: `1px solid ${value.neonColor}35`,
                    borderRadius: '0',
                    boxShadow: `
                      0 0 15px ${value.neonColor}15,
                      inset 0 0 15px ${value.neonColor}03
                    `,
                    overflow: 'hidden',
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                  whileHover={{ 
                    y: -3,
                    borderColor: `${value.neonColor}50`,
                    boxShadow: `
                      0 0 20px ${value.neonColor}25,
                      inset 0 0 20px ${value.neonColor}05
                    `,
                    transition: { duration: 0.25 }
                  }}
                >
                  {/* Subtle Grid Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-3"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='none'/%3E%3Cpath d='M 0 0 L 20 0 M 0 20 L 20 20 M 0 0 L 0 20 M 20 0 L 20 20' stroke='${value.neonColor}' stroke-width='0.3'/%3E%3C/svg%3E")`,
                      backgroundSize: '20px 20px',
                      imageRendering: 'pixelated' as CSSProperties['imageRendering']
                    }}
                  />
                  
                  {/* Subtle Scanline Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-5"
                    style={{
                      background: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${value.neonColor}15 3px, ${value.neonColor}15 6px)`,
                      imageRendering: 'pixelated' as CSSProperties['imageRendering']
                    }}
                  />
                  
                  {/* Soft Neon Edge Glow */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      border: `1px solid ${value.neonColor}40`,
                      boxShadow: `0 0 10px ${value.neonColor}20, inset 0 0 10px ${value.neonColor}08`,
                      borderRadius: '0'
                    }}
                  />
                  
                  {/* Image Section */}
                  <div className="relative overflow-hidden flex-shrink-0" style={{ 
                    borderBottom: `1px solid ${value.neonColor}30`,
                    height: 'clamp(220px, 32vw, 300px)'
                  }}>
                    <Image 
                      src={value.image} 
                      alt={value.title} 
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      style={{
                        imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                        filter: 'contrast(1.05) brightness(0.98) saturate(1.1)'
                      }}
                    />
                    {/* Subtle Image Overlay Gradient */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom, transparent 0%, rgba(13, 13, 13, 0.3) 100%)`
                      }}
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-grow">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-5">
                      <div 
                        className="flex-shrink-0 mt-1"
                        style={{
                          color: value.neonColor,
                          filter: `drop-shadow(0 0 6px ${value.neonColor}50)`
                        }}
                      >
                        <IconComponent size={24} strokeWidth={2.5} />
                      </div>
                      <h3 
                        className="pixelated flex-1" 
                        style={{ 
                          fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                          letterSpacing: '0.12em',
                          fontSize: 'clamp(0.85rem, 2vw, 1.25rem)',
                          color: '#FFFFFF',
                          fontWeight: '400',
                          imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                          WebkitFontSmoothing: 'none',
                          textShadow: `
                            2px 2px 0px #000000,
                            0 0 6px ${value.neonColor}30
                          `,
                          textRendering: 'optimizeSpeed',
                          lineHeight: '1.5',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          margin: 0,
                          hyphens: 'auto'
                        }}
                      >
                        {value.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p 
                      className="flex-grow mb-6" 
                      style={{
                        fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
                        color: '#C8C8C8',
                        fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                        fontWeight: '400',
                        lineHeight: '1.75',
                        textRendering: 'optimizeLegibility',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        letterSpacing: '0.015em',
                        margin: 0
                      }}
                    >
                      {value.description}
                    </p>
                    
                    {/* RGB Divider */}
                    <div className="mt-auto pt-5 relative flex-shrink-0" style={{ 
                      borderTop: `1px solid ${value.neonColor}25`
                    }}>
                      <div className="flex items-center gap-0.5 h-0.5 relative">
                        {/* Red Segment */}
                        <div 
                          className="flex-1 h-full"
                          style={{
                            background: '#FF0000',
                            boxShadow: '0 0 3px #FF000030'
                          }}
                        />
                        {/* Green Segment */}
                        <div 
                          className="flex-1 h-full"
                          style={{
                            background: '#00FF00',
                            boxShadow: '0 0 3px #00FF0030'
                          }}
                        />
                        {/* Blue Segment */}
                        <div 
                          className="flex-1 h-full"
                          style={{
                            background: '#0000FF',
                            boxShadow: '0 0 3px #0000FF30'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
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
