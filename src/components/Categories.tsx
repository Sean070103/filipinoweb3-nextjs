'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Eye, Rocket } from 'lucide-react';
import type { CSSProperties } from 'react';
import ScrollReveal from './ScrollReveal';

const bmoMessages = [
  'HELLO!',
  'WEB3 IS COOL!',
  'LET\'S BUILD!',
  'BAYANIHAN!',
  'FILIPINO POWER!',
  'TO THE MOON!',
  'GAME ON!',
  'SYSTEM READY!'
];

export default function Categories() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [isMaximized, setIsMaximized] = useState(true);
  const [swipeStart, setSwipeStart] = useState<{ x: number; y: number } | null>(null);
  const [bmoMessage, setBmoMessage] = useState('');
  const [showBmoSpeech, setShowBmoSpeech] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [bmoPosition, setBmoPosition] = useState<{ x: number; y: number } | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number } | null>(null);
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

  // BMO speech bubble effect
  useEffect(() => {
    const speechInterval = setInterval(() => {
      if (!isDragging) {
        const randomMessage = bmoMessages[Math.floor(Math.random() * bmoMessages.length)];
        setBmoMessage(randomMessage);
        setShowBmoSpeech(true);
        
        setTimeout(() => {
          setShowBmoSpeech(false);
        }, 3000);
      }
    }, 5000); // Change message every 5 seconds
    
    return () => clearInterval(speechInterval);
  }, [isDragging]);

  // Global mouse move handler for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && dragOffset) {
        const bmoElement = document.querySelector('.bmo-robot') as HTMLElement;
        if (bmoElement) {
          setBmoPosition({
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y
          });
        }
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setDragOffset(null);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Global touch move handler for dragging
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && dragOffset && e.touches[0]) {
        e.preventDefault();
        const touch = e.touches[0];
        const bmoElement = document.querySelector('.bmo-robot') as HTMLElement;
        if (bmoElement) {
          setBmoPosition({
            x: touch.clientX - dragOffset.x,
            y: touch.clientY - dragOffset.y
          });
        }
      }
    };

    if (isDragging) {
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, dragOffset]);

  const apps = [
    { id: 'vision', label: 'VISION', icon: '👁️' },
    { id: 'mission', label: 'MISSION', icon: '🚀' }
  ];

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
        @keyframes bmoMove {
          0% {
            transform: translate(5%, 10%) scale(1);
          }
          25% {
            transform: translate(calc(95% - 120px), 10%) scale(1);
          }
          50% {
            transform: translate(calc(95% - 120px), calc(90% - 120px)) scale(1);
          }
          75% {
            transform: translate(5%, calc(90% - 120px)) scale(1);
          }
          100% {
            transform: translate(5%, 10%) scale(1);
          }
        }
        @keyframes bmoBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes padFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }
        @keyframes speechPop {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.8);
          }
          50% {
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .pixel-bg-effect {
          animation: pixelGlow 3s ease-in-out infinite;
        }
        
        .bmo-robot {
          animation: bmoBounce 2s ease-in-out infinite;
        }
        
        .bmo-speech {
          animation: speechPop 0.4s ease-out;
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
                {/* Moving BMO Robot with Floating Pad - Contained to this section */}
                      <div 
                        className="bmo-robot absolute"
                style={{
                          width: 'clamp(60px, 8vw, 120px)',
                          height: 'clamp(60px, 8vw, 120px)',
                          imageRendering: 'pixelated',
                          filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.8))',
                    zIndex: 1000,
                          animation: isDragging || bmoPosition ? 'none' : 'bmoMove 30s linear infinite',
                          cursor: 'grab',
                          pointerEvents: 'auto',
                    left: bmoPosition ? `${bmoPosition.x}px` : '5%',
                    top: bmoPosition ? `${bmoPosition.y}px` : '10%',
                    transform: bmoPosition ? 'none' : undefined,
                    transition: isDragging ? 'none' : 'left 0.1s ease-out, top 0.1s ease-out'
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setIsDragging(true);
                          const rect = e.currentTarget.getBoundingClientRect();
                            setDragOffset({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                            });
                            setBmoPosition({
                      x: e.clientX - rect.width / 2,
                      y: e.clientY - rect.height / 2
                            });
                        }}
                        onClick={(e) => {
                          if (!isDragging && !dragOffset) {
                            e.stopPropagation();
                            const clickMessages = ['CLICKED!', 'HELLO!', 'HI THERE!', 'GAME ON!'];
                            const randomMessage = clickMessages[Math.floor(Math.random() * clickMessages.length)];
                            setBmoMessage(randomMessage);
                            setShowBmoSpeech(true);
                            setTimeout(() => {
                              setShowBmoSpeech(false);
                            }, 2000);
                          }
                        }}
                        onTouchStart={(e) => {
                          setIsDragging(true);
                          const touch = e.touches[0];
                          const rect = e.currentTarget.getBoundingClientRect();
                            setDragOffset({
                      x: touch.clientX - rect.left,
                      y: touch.clientY - rect.top
                            });
                            setBmoPosition({
                      x: touch.clientX - rect.width / 2,
                      y: touch.clientY - rect.height / 2
                            });
                        }}
                        onTouchEnd={() => {
                          setIsDragging(false);
                          setDragOffset(null);
                        }}
                      >
                        {/* Floating Pad */}
                        <div 
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                  style={{
                            width: 'clamp(75px, 10vw, 120px)',
                            height: 'clamp(15px, 2vw, 25px)',
                            background: '#8B4513',
                    border: 'clamp(3px, 0.4vw, 4px) solid #000000',
                            borderRadius: 'clamp(8px, 1vw, 10px)',
                            boxShadow: 'inset 2px 2px 0 rgba(255,255,255,0.2), 4px 4px 0 rgba(0,0,0,0.8)',
                            imageRendering: 'pixelated',
                            animation: 'padFloat 2s ease-in-out infinite',
                            zIndex: 0
                          }}
                        >
                          {/* Pad Details */}
                          <div style={{
                            position: 'absolute',
                            top: '2px',
                            left: '10px',
                            right: '10px',
                            height: '2px',
                            background: '#654321',
                            borderRadius: '1px',
                            imageRendering: 'pixelated'
                          }} />
                        </div>
                        {/* BMO Speech Bubble */}
                        {showBmoSpeech && bmoMessage && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -90, scale: 1 }}
                            exit={{ opacity: 0, y: -100, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-1/2 transform -translate-x-1/2 bmo-speech"
                    style={{
                              background: '#FFD700',
                              border: '4px solid #000000',
                              borderRadius: '8px',
                              padding: '8px 12px',
                              minWidth: '120px',
                              textAlign: 'center',
                              boxShadow: '4px 4px 0 rgba(0,0,0,0.8), inset 2px 2px 0 rgba(255,255,255,0.3)',
                              imageRendering: 'pixelated',
                              zIndex: 10,
                              pointerEvents: 'none'
                            }}
                          >
                            <span style={{
                              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                              fontSize: '0.65rem',
                              color: '#000000',
                              fontWeight: 'bold',
                              imageRendering: 'pixelated',
                    WebkitFontSmoothing: 'none',
                    fontSmooth: 'never',
                              textRendering: 'optimizeSpeed',
                              display: 'block'
                            }}>
                              {bmoMessage}
                            </span>
                            {/* Speech bubble tail */}
                            <div style={{
                              position: 'absolute',
                              bottom: '-12px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 0,
                              height: 0,
                              borderLeft: '8px solid transparent',
                              borderRight: '8px solid transparent',
                              borderTop: '12px solid #000000',
                              imageRendering: 'pixelated'
                            }} />
                            <div style={{
                              position: 'absolute',
                              bottom: '-8px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 0,
                              height: 0,
                              borderLeft: '6px solid transparent',
                              borderRight: '6px solid transparent',
                              borderTop: '10px solid #FFD700',
                              imageRendering: 'pixelated'
                            }} />
                          </motion.div>
                        )}
                        {/* BMO Body */}
                        <div style={{
                          width: '100%',
                          height: '100%',
                          background: '#A8E6CF',
                          border: '4px solid #000000',
                          borderRadius: '8px',
                          position: 'relative',
                          boxShadow: 'inset 2px 2px 0 rgba(255,255,255,0.3), inset -2px -2px 0 rgba(0,0,0,0.3)',
                          imageRendering: 'pixelated'
                        }}>
                          {/* BMO Screen */}
                          <div style={{
                            position: 'absolute',
                  top: '8px',
                  left: '8px',
                  right: '8px',
                            height: '45px',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)',
                            border: '3px solid #000000',
                            borderRadius: '4px',
                            imageRendering: 'pixelated'
                          }}>
                            {/* BMO Eyes */}
                            <div style={{
                              display: 'flex',
                              gap: '8px',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '100%',
                              paddingTop: '4px'
                            }}>
                              <div style={{
                                width: '8px',
                                height: '8px',
                                background: '#000000',
                                borderRadius: '50%',
                                imageRendering: 'pixelated'
                              }} />
                              <div style={{
                                width: '8px',
                                height: '8px',
                                background: '#000000',
                                borderRadius: '50%',
                                imageRendering: 'pixelated'
                              }} />
                            </div>
                            {/* BMO Mouth */}
                            <div style={{
                              position: 'absolute',
                              bottom: '4px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '20px',
                              height: '4px',
                              background: '#000000',
                              borderRadius: '2px',
                              imageRendering: 'pixelated'
                            }} />
                          </div>
                          {/* BMO Buttons */}
                          <div style={{
                            position: 'absolute',
                  bottom: '8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '4px'
                          }}>
                            <div style={{
                              width: '12px',
                              height: '12px',
                              background: '#FF6B9D',
                              border: '2px solid #000000',
                              borderRadius: '50%',
                              imageRendering: 'pixelated'
                            }} />
                            <div style={{
                              width: '12px',
                              height: '12px',
                              background: '#4ECDC4',
                              border: '2px solid #000000',
                              borderRadius: '50%',
                              imageRendering: 'pixelated'
                            }} />
                        </div>
                      </div>
                </div>
                
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
                        <div className="flex items-center justify-between mb-8 relative z-10">
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
                              textRendering: 'optimizeSpeed'
                            }}
                          >
                            VISION
                          </h2>
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                            className="relative"
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
                        <div className="flex items-center justify-between mb-8 relative z-10">
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
                    textRendering: 'optimizeSpeed'
                                  }}
                                >
                            MISSION
                          </h2>
                                  <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                            className="relative"
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