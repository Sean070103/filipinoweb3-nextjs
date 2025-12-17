'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Eye, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Categories() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'TO WEB3 AND BEYOND!';
  
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
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        @keyframes pixelGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes pixelFloat {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes crtFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.98; }
        }
        @keyframes colorShift {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(5deg); }
          100% { filter: hue-rotate(0deg); }
        }
        .pixel-bg-effect {
          animation: pixelGlow 3s ease-in-out infinite;
        }
        
      `}} />
    <section 
      id="home" 
      className="categories relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)',
        backgroundImage: "url('/images/underground.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      
      <div className="container relative z-10 flex flex-col items-center">
        {/* Section Title - Pixelated */}
        <div className="text-center ph-sun-rays mb-12 w-full">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.h1 
              className="text-5xl lg:text-6xl font-black leading-tight relative pixelated"
              style={{ 
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                color: '#FFFFFF',
                fontWeight: '400',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                textShadow: '4px 4px 0px rgba(0,0,0,0.8), 2px 2px 0px rgba(255,255,255,0.2)',
                filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))',
                imageRendering: 'pixelated',
                textRendering: 'optimizeSpeed',
                WebkitFontSmoothing: 'none',
                MozOsxFontSmoothing: 'unset',
                fontSmooth: 'never',
                letterSpacing: '0.05em'
              }}
              whileHover={{ 
                scale: '1.02'
              }}
            >
              <span className="relative z-10">
                {displayText}
                {showCursor && <span className="animate-pulse" style={{ color: '#FFFFFF' }}>|</span>}
              </span>
            </motion.h1>
          </ScrollReveal>
        </div>

        {/* App Interface Container */}
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <div className="relative overflow-hidden flex flex-col max-w-4xl w-full"
            style={{ imageRendering: 'pixelated', minHeight: 'clamp(400px, 60vh, 600px)' }}
          >
            <div className="relative z-10 flex-1">
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                className="relative flex h-full flex-col overflow-visible"
              style={{ 
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                  position: 'relative',
                  minHeight: '100%'
                    }}
                  >
                
                {/* Static Vision and Mission Content - Retro Cyberpunk Pixel Theme */}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes visionGlow {
                    0%, 100% {
                      box-shadow: 6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1), 0 0 20px rgba(0, 255, 255, 0.3);
                      border-color: #00FFFF;
                    }
                    50% {
                      box-shadow: 6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1), 0 0 40px rgba(0, 255, 255, 0.6);
                      border-color: #00FFFF;
                    }
                  }
                  @keyframes missionGlow {
                    0%, 100% {
                      box-shadow: 6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1), 0 0 20px rgba(5, 87, 9, 0.5);
                      border-color: #22c55e;
                    }
                    50% {
                      box-shadow: 6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1), 0 0 40px rgba(5, 87, 9, 0.8);
                      border-color: #22c55e;
                    }
                  }
                  @keyframes scanline {
                    0% {
                      background-position: 0 0;
                    }
                    100% {
                      background-position: 0 20px;
                    }
                  }
                  .vision-card {
                    transition: all 0.3s ease;
                  }
                  .vision-card:hover {
                    transform: translateY(-4px);
                    animation: visionGlow 2s ease-in-out infinite;
                  }
                  .mission-card {
                    transition: all 0.3s ease;
                  }
                  .mission-card:hover {
                    transform: translateY(-4px);
                    animation: missionGlow 2s ease-in-out infinite;
                  }
                `}} />
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 md:py-8 flex flex-col justify-center">
                  <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                      {/* Vision Panel - Cyberpunk Pixel Style */}
                          <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="vision-card relative overflow-hidden"
                    style={{
                          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1629 100%)',
                          border: '4px solid #00FFFF',
                          boxShadow: '6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1), 0 0 20px rgba(0, 255, 255, 0.3)',
                          padding: 'clamp(2rem, 4vw, 3rem)',
                          minHeight: '450px',
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative',
                              imageRendering: 'pixelated',
                          WebkitFontSmoothing: 'none',
                          fontSmooth: 'never'
                        }}
                      >
                        {/* Scanline overlay */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
                          animation: 'scanline 8s linear infinite',
                              imageRendering: 'pixelated'
                            }} />
                        
                        {/* Grid overlay */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                              imageRendering: 'pixelated'
                            }} />
                        
                        {/* RGB divider at top */}
                        <div className="absolute top-0 left-0 right-0 h-1" style={{
                          background: 'linear-gradient(90deg, #00FFFF 0%, #FF00FF 33%, #FFFF00 66%, #00FFFF 100%)',
                          imageRendering: 'pixelated'
                              }} />
                        
                        {/* Title with Icon */}
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                            className="relative flex-shrink-0"
                            style={{ imageRendering: 'pixelated' }}
                          >
                            <div
                style={{
                                background: 'linear-gradient(135deg, #00FFFF 0%, #6FF2FF 100%)',
                            border: '3px solid #000000',
                                borderRadius: '0px',
                                padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '4px 4px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.3)',
                                width: '56px',
                                height: '56px',
                                position: 'relative'
                              }}
                            >
                              <div
                    style={{
                                  position: 'absolute',
                                  inset: 4,
                                  border: '1px solid rgba(0,0,0,0.25)',
                                  pointerEvents: 'none'
                                }}
                              />
                              <Eye
                                size={28}
                                strokeWidth={2.4}
                                color="#000000"
                style={{
                                  filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.8))',
                                  display: 'block'
                                }}
                              />
                    </div>
                  </motion.div>
                          <h2
                    style={{ 
                                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                              fontWeight: 'bold',
                              color: '#00FFFF',
                              letterSpacing: '0.1em',
                              textShadow: '3px 3px 0px #000000, 0 0 20px rgba(0, 255, 255, 0.8)',
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                              textRendering: 'optimizeSpeed',
                              margin: 0
                            }}
                          >
                            VISION
                          </h2>
                        </div>
                        
                        {/* Vision Content */}
                        <p
                        style={{
                            fontFamily: '"Inter", "Montserrat", sans-serif',
                            fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                            lineHeight: 1.8,
                            color: '#ffffff',
                            fontWeight: '400',
                            flex: 1,
                            textAlign: 'justify',
                            textJustify: 'inter-word',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                            position: 'relative',
                            zIndex: 10
                          }}
                        >
                          To be the premium hub of Filipinos in Web3 that is focused on bringing holistic, connected, and innovative principles.
                        </p>
                      </motion.div>

                      {/* Mission Panel - Filipino Green Cyberpunk Style */}
                  <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mission-card relative overflow-hidden"
                    style={{ 
                          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1629 100%)',
                          border: '4px solid #22c55e',
                          boxShadow: '6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1), 0 0 20px rgba(5, 87, 9, 0.5)',
                          padding: 'clamp(2rem, 4vw, 3rem)',
                          minHeight: '450px',
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative',
                              imageRendering: 'pixelated',
                              WebkitFontSmoothing: 'none',
                              fontSmooth: 'never'
                            }}
                      >
                        {/* Scanline overlay */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)',
                          animation: 'scanline 8s linear infinite',
                              imageRendering: 'pixelated'
                            }} />
                        
                        {/* Grid overlay */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                          backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                                imageRendering: 'pixelated'
                              }} />
                        
                        {/* RGB divider at top */}
                        <div className="absolute top-0 left-0 right-0 h-1" style={{
                          background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 50%, #22c55e 100%)',
                                imageRendering: 'pixelated'
                              }} />
                        
                        {/* Title with Icon */}
                        <div className="flex items-center gap-4 mb-8 relative z-10">
            <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                            className="relative flex-shrink-0"
                            style={{ imageRendering: 'pixelated' }}
                          >
                            <div
                style={{
                                background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
                                border: '3px solid #000000',
                                borderRadius: '0px',
                                padding: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '4px 4px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.3)',
                                width: '56px',
                                height: '56px',
                                position: 'relative'
                              }}
                            >
                              <div
                style={{
                                  position: 'absolute',
                                  inset: 4,
                                  border: '1px solid rgba(0,0,0,0.25)',
                                  pointerEvents: 'none'
                                }}
                              />
                              <Rocket
                                size={28}
                                strokeWidth={2.4}
                                color="#000000"
                style={{
                                  filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.8))',
                                  display: 'block'
                                }}
                              />
                            </div>
                                  </motion.div>
                          <h2
                    style={{
                                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                              fontWeight: 'bold',
                              color: '#22c55e',
                              letterSpacing: '0.1em',
                              textShadow: '3px 3px 0px #000000, 0 0 20px rgba(34, 197, 94, 0.8)',
                              imageRendering: 'pixelated',
                    WebkitFontSmoothing: 'none',
                    fontSmooth: 'never',
                    textRendering: 'optimizeSpeed',
                              margin: 0
                                  }}
                                >
                            MISSION
                          </h2>
                                </div>
                        
                        {/* Mission Content */}
                        <div className="space-y-5 flex-1 relative z-10">
                                <p
                                  style={{
                              fontFamily: '"Inter", "Montserrat", sans-serif',
                              fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                      lineHeight: 1.8,
                              color: '#ffffff',
                              fontWeight: '400',
                              textAlign: 'justify',
                              textJustify: 'inter-word',
                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                            }}
                          >
                            Provide a channel for Web3 community to exchange ideas, information, and opportunities.
                          </p>
                          <p
                                      style={{
                              fontFamily: '"Inter", "Montserrat", sans-serif',
                              fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                                        lineHeight: 1.8,
                              color: '#ffffff',
                              fontWeight: '400',
                              textAlign: 'justify',
                              textJustify: 'inter-word',
                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                            }}
                          >
                            Share valuable information and resources for the community that will help with upscaling skills in Web3 career and development.
                          </p>
                          <p
                                      style={{
                              fontFamily: '"Inter", "Montserrat", sans-serif',
                              fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                                        lineHeight: 1.8,
                              color: '#ffffff',
                              fontWeight: '400',
                              textAlign: 'justify',
                              textJustify: 'inter-word',
                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                            }}
                          >
                            Help professionalize the field of Web3 industry through continuing education and training.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
      </div>
    </section>
    </>
  );
}