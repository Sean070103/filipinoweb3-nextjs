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
                  <div
                    className="p-6 sm:p-7 md:p-8 flex flex-col flex-grow"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.92), rgba(0,0,0,0.96))',
                      borderTop: `1px solid ${value.neonColor}25`,
                      boxShadow: `0 -6px 12px rgba(0,0,0,0.45)`,
                      maxWidth: '560px',
                      width: '100%',
                      margin: '0 auto',
                      rowGap: '1rem',
                      padding: 'clamp(1.4rem, 3.2vw, 1.9rem)',
                      textAlign: 'left',
                    }}
                  >
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
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
                      className="flex-grow mb-4"
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
      </div>
    </section>
    </>
  );
}
