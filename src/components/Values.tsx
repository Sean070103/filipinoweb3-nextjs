'use client';

import React from 'react';
import Image from 'next/image';
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
      image: "/images/Bayani_01.png",
      description: "Building in Web3 involves different roles that are essential in its success as an industry. Maintaining the balance and flow of interdependence is vital for overall development. As builders, we must develop and strengthen the shared goals and ideals of our communities.",
      neonColor: "#00FFFF", // Cyan
      icon: CircleDot,
      number: "#001",
      glowColor: "#FFE5B4", // Warm peach
      glowColorSecondary: "#90EE90" // Light green
    },
    {
      title: "CONNECTED",
      image: "/images/Bayani_02.png",
      description: "Web3 interactions should be built on authentic, harmonious, and mutually-beneficial relationships. Strategies must be attuned to the community's needs, passions, and interests. The organization's advocacy is a community-centered approach for the professional development of the community.",
      neonColor: "#FF00FF", // Magenta
      icon: Link2,
      number: "#002",
      glowColor: "#00FFFF", // Cyan
      glowColorSecondary: "#87CEEB" // Sky blue
    },
    {
      title: "INNOVATIVE",
      image: "/images/Bayani_03.png", 
      description: "Web3 as an emerging industry is distinguished by its fast-paced dynamics. It is important for Web3 builders to be highly agile and adaptable. The organization aims to foster a vibrant exchange of information and encourage continuing education.",
      neonColor: "#FFFF00", // Yellow
      icon: Zap,
      number: "#003",
      glowColor: "#FFEAA7", // Soft yellow
      glowColorSecondary: "#98FB98" // Mint green
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
        @keyframes characterBlink {
          0%, 90%, 100% {
            opacity: 1;
          }
          95% {
            opacity: 0.85;
          }
        }
        @keyframes sparkleFlicker {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          25% {
            opacity: 0.7;
            transform: scale(0.98);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.01);
          }
          75% {
            opacity: 0.8;
            transform: scale(0.99);
          }
        }
        @keyframes lightBob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
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
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='none'/%3E%3Cpath d='M 0 0 L 20 0 M 0 20 L 20 20 M 0 0 L 0 20 M 20 0 L 20 20' stroke='${value.neonColor}' stroke-width='0.3'/%3E%3C/svg%3E")`,
                      backgroundSize: '20px 20px',
                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      opacity: 0.06,
                    }}
                  />
                  
                  {/* Subtle Scanline Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${value.neonColor}12 3px, ${value.neonColor}12 6px)`,
                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      opacity: 0.08,
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
                    height: 'clamp(220px, 32vw, 300px)',
                    background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(20, 20, 20, 0.9) 100%)',
                    filter: 'saturate(0.7)'
                  }}>
                    {/* Desaturated background overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none z-0"
                      style={{
                        background: `linear-gradient(to bottom, transparent 0%, rgba(13, 13, 13, 0.4) 100%)`,
                        filter: 'saturate(0.6)'
                      }}
                    />
                    
                    {/* Character with enhanced saturation and glow */}
                    <div
                      className="relative z-10 w-full h-full flex items-center justify-center"
                      style={{
                        animation: 'characterBlink 4s ease-in-out infinite, sparkleFlicker 6s ease-in-out infinite, lightBob 3s ease-in-out infinite',
                        animationDelay: `${index * 0.5}s, ${index * 0.3}s, ${index * 0.7}s`
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {/* Soft glow outline */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `radial-gradient(ellipse at center, ${value.glowColor}40 0%, ${value.glowColorSecondary}30 40%, transparent 70%)`,
                            filter: `blur(8px)`,
                            animation: 'glowPulse 3s ease-in-out infinite',
                            animationDelay: `${index * 0.4}s`,
                            zIndex: 1
                          }}
                        />
                        
                        {/* Character image with increased saturation */}
                        <Image 
                          src={value.image} 
                          alt={value.title} 
                          width={400}
                          height={300}
                          className="w-full h-full object-contain relative z-10"
                          style={{
                            imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                            filter: `
                              contrast(1.1) 
                              brightness(1.05) 
                              saturate(1.4)
                              drop-shadow(0 0 2px ${value.glowColor}80)
                              drop-shadow(0 0 4px ${value.glowColorSecondary}60)
                            `,
                            position: 'relative',
                            zIndex: 2
                          }}
                        />
                        
                        {/* Additional glow layers */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `radial-gradient(ellipse at 50% 40%, ${value.glowColor}20 0%, transparent 60%)`,
                            filter: `blur(4px)`,
                            zIndex: 3
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* BAYANI BLOCKS Banner */}
                  <div 
                    className="relative flex flex-col items-center justify-center py-3 px-4"
                    style={{
                      background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
                      borderTop: `2px solid ${value.neonColor}40`,
                      borderBottom: `2px solid ${value.neonColor}40`,
                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {/* Wood grain texture overlay */}
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='%23654321'/%3E%3Crect x='0' y='0' width='4' height='1' fill='%23A0522D'/%3E%3C/svg%3E")`,
                        backgroundSize: '4px 4px',
                        imageRendering: 'pixelated' as CSSProperties['imageRendering']
                      }}
                    />
                    
                    <div 
                      className="relative z-10 text-center"
                      style={{
                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                        fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)',
                        fontWeight: '400',
                        color: '#FFD700',
                        textShadow: '2px 2px 0px #000000, 0 0 8px rgba(255, 215, 0, 0.5)',
                        imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                        WebkitFontSmoothing: 'none',
                        fontSmooth: 'never',
                        textRendering: 'optimizeSpeed',
                        letterSpacing: '0.05em',
                        lineHeight: '1.3'
                      }}
                    >
                      BAYANI BLOCKS
                    </div>
                    <div 
                      className="relative z-10 text-center mt-1"
                      style={{
                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                        fontSize: 'clamp(0.35rem, 0.9vw, 0.55rem)',
                        fontWeight: '400',
                        color: '#FFFFFF',
                        textShadow: '1px 1px 0px #000000',
                        imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                        WebkitFontSmoothing: 'none',
                        fontSmooth: 'never',
                        textRendering: 'optimizeSpeed',
                        letterSpacing: '0.03em'
                      }}
                    >
                      FILIPINO PIXEL FRIENDS {value.number}
                    </div>
                  </div>
                  
                  {/* Content Section - Pixelated Card */}
                  <div
                    className="p-6 sm:p-7 md:p-8 flex flex-col flex-grow relative"
                    style={{
                      background: '#000000',
                      border: `2px solid ${value.neonColor}60`,
                      borderRadius: '0px',
                      boxShadow: `
                        4px 4px 0px rgba(0,0,0,0.8),
                        inset 2px 2px 0px rgba(255,255,255,0.1),
                        0 0 15px ${value.neonColor}20
                      `,
                      maxWidth: '560px',
                      width: '100%',
                      margin: '0 auto',
                      rowGap: '1rem',
                      padding: 'clamp(1.4rem, 3.2vw, 1.9rem)',
                      textAlign: 'left',
                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                      position: 'relative'
                    }}
                  >
                    {/* Pixelated grid overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-5"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='${value.neonColor}'/%3E%3Crect x='0' y='0' width='8' height='1' fill='${value.neonColor}'/%3E%3C/svg%3E")`,
                        backgroundSize: '8px 8px',
                        imageRendering: 'pixelated' as CSSProperties['imageRendering']
                      }}
                    />
                    
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: value.neonColor, opacity: 0.6 }} />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: value.neonColor, opacity: 0.6 }} />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: value.neonColor, opacity: 0.6 }} />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: value.neonColor, opacity: 0.6 }} />
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4 relative z-10">
                      <div 
                        className="flex-shrink-0 mt-1"
                        style={{
                          color: value.neonColor,
                          filter: `drop-shadow(0 0 6px ${value.neonColor}50)`,
                          imageRendering: 'pixelated' as CSSProperties['imageRendering']
                        }}
                      >
                        <IconComponent size={24} strokeWidth={2.5} />
                      </div>
                      <h3 
                        className="pixelated flex-1" 
                        style={{ 
                          fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                          letterSpacing: '0.04em',
                          fontSize: 'clamp(0.78rem, 1.5vw, 1.05rem)',
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
                      className="flex-grow mb-4 relative z-10"
                      style={{
                        fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
                        color: '#F8F8F8',
                        fontSize: 'clamp(0.88rem, 1.08vw, 0.98rem)',
                        fontWeight: '500',
                        lineHeight: '1.65',
                        textRendering: 'optimizeLegibility',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        letterSpacing: '0em',
                        wordSpacing: '0em',
                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        textAlignLast: 'left',
                        hyphens: 'auto',
                        margin: 0,
                        textShadow: '0 1px 0 rgba(0,0,0,0.65)',
                      }}
                    >
                      {value.description}
                    </p>
                    
                    {/* RGB Divider */}
                    <div className="mt-auto pt-5 relative flex-shrink-0 z-10" style={{ 
                      borderTop: `1px solid ${value.neonColor}25`
                    }}>
                      <div className="flex items-center gap-0.5 h-1 relative">
                        {/* Red Segment */}
                        <div 
                          className="flex-1 h-full"
                          style={{
                            background: '#FF0000',
                            boxShadow: '0 0 4px #FF000040',
                            imageRendering: 'pixelated' as CSSProperties['imageRendering']
                          }}
                        />
                        {/* Green Segment */}
                        <div 
                          className="flex-1 h-full"
                          style={{
                            background: '#00FF00',
                            boxShadow: '0 0 4px #00FF0040',
                            imageRendering: 'pixelated' as CSSProperties['imageRendering']
                          }}
                        />
                        {/* Blue Segment */}
                        <div 
                          className="flex-1 h-full"
                          style={{
                            background: '#0000FF',
                            boxShadow: '0 0 4px #0000FF40',
                            imageRendering: 'pixelated' as CSSProperties['imageRendering']
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
      </div>
    </section>
    </>
  );
}
