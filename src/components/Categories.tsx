'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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
        const container = bmoElement?.parentElement?.getBoundingClientRect();
        if (container && bmoElement) {
          setBmoPosition({
            x: e.clientX - container.left - dragOffset.x,
            y: e.clientY - container.top - dragOffset.y
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
        const container = bmoElement?.parentElement?.getBoundingClientRect();
        if (container && bmoElement) {
          setBmoPosition({
            x: touch.clientX - container.left - dragOffset.x,
            y: touch.clientY - container.top - dragOffset.y
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
            transform: translate(-100px, -100px) scale(1);
          }
          25% {
            transform: translate(calc(100% + 50px), -100px) scale(1);
          }
          50% {
            transform: translate(calc(100% + 50px), calc(100% + 50px)) scale(1);
          }
          75% {
            transform: translate(-100px, calc(100% + 50px)) scale(1);
          }
          100% {
            transform: translate(-100px, -100px) scale(1);
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
        background: '#000000',
      }}
    >
      
      <div className="container relative z-10">
        {/* Section Title - Pixelated */}
        <div className="text-center ph-sun-rays mb-12">
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
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden flex flex-col"
            style={{ imageRendering: 'pixelated', minHeight: 'clamp(400px, 60vh, 600px)' }}
          >
            <div className="relative z-10 flex-1">
              <AnimatePresence mode="wait">
                {selectedApp === null ? (
            <motion.div
                    key="apps"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex h-full flex-col overflow-hidden"
              style={{ 
                      background: '#1fbad1', 
                      border: '6px solid #000000', 
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                      boxShadow: 'inset 0 0 50px rgba(0,0,0,0.3), 0 0 30px rgba(31, 186, 209, 0.2)'
                    }}
                  >
                    {/* Moving BMO Robot with Floating Pad */}
                    <div className="absolute inset-0 pointer-events-none overflow-visible z-0" style={{ overflow: 'visible' }}>
                      <div 
                        className="bmo-robot absolute"
                style={{
                          width: 'clamp(60px, 8vw, 120px)',
                          height: 'clamp(60px, 8vw, 120px)',
                          imageRendering: 'pixelated',
                          filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.8))',
                          zIndex: 1,
                          animation: isDragging || bmoPosition ? 'none' : 'bmoMove 30s linear infinite',
                          cursor: 'grab',
                          pointerEvents: 'auto',
                          transform: bmoPosition ? `translate(${bmoPosition.x}px, ${bmoPosition.y}px)` : undefined,
                          transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setIsDragging(true);
                          const rect = e.currentTarget.getBoundingClientRect();
                          const container = e.currentTarget.parentElement?.getBoundingClientRect();
                          if (container) {
                            setDragOffset({
                              x: e.clientX - rect.left - rect.width / 2,
                              y: e.clientY - rect.top - rect.height / 2
                            });
                            setBmoPosition({
                              x: e.clientX - container.left - rect.width / 2,
                              y: e.clientY - container.top - rect.height / 2
                            });
                          }
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
                          const container = e.currentTarget.parentElement?.getBoundingClientRect();
                          if (container) {
                            setDragOffset({
                              x: touch.clientX - rect.left - rect.width / 2,
                              y: touch.clientY - rect.top - rect.height / 2
                            });
                            setBmoPosition({
                              x: touch.clientX - container.left - rect.width / 2,
                              y: touch.clientY - container.top - rect.height / 2
                            });
                          }
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
                            background: '#1fbad1',
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
                </div>
                
                    {/* Apps Grid */}
                    <div className="flex-1 overflow-y-auto px-6 py-8 md:py-12 flex flex-col justify-center items-center">
                      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
                        <h3 className="text-center mb-12" style={{
                          fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                          color: '#FFD700',
                          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                          letterSpacing: '0.06em',
                          imageRendering: 'pixelated',
                    WebkitFontSmoothing: 'none',
                          MozOsxFontSmoothing: 'unset',
                    fontSmooth: 'never',
                          textShadow: '4px 4px 0px #000000, 2px 2px 0px #FF6B9D',
                          margin: '0 auto 2rem auto',
                    textRendering: 'optimizeSpeed'
                        }}>SYSTEM MODULES</h3>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-items-center items-center w-full max-w-lg mx-auto">
                          {apps.map((app) => (
                            <button
                              key={app.id}
                              onClick={() => {
                                setSelectedApp(app.id);
                                setIsMaximized(true);
                              }}
                              className="flex flex-col items-center gap-3 focus:outline-none"
                            >
                              <motion.div
                                className="flex items-center justify-center"
                    style={{
                                  background: app.id === 'vision' ? '#FF6B9D' : '#4ECDC4',
                                  width: 'clamp(80px, 12vw, 144px)',
                                  height: 'clamp(80px, 12vw, 144px)',
                                  border: 'clamp(4px, 0.6vw, 6px) solid #000000',
                                  borderStyle: 'outset',
                                  boxShadow: '6px 6px 0 rgba(0,0,0,0.8), inset 2px 2px 0 rgba(255,255,255,0.3)',
                                  imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never'
                    }}
                                whileHover={{
                                  scale: 1.05,
                                  boxShadow: '8px 8px 0 rgba(0,0,0,0.8), inset 2px 2px 0 rgba(255,255,255,0.3)'
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <span style={{ 
                                  fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                                  imageRendering: 'pixelated',
                                  filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.8))'
                                }}>{app.icon}</span>
                              </motion.div>
                    <span style={{ 
                                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                color: '#FFD700',
                                fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
                                textAlign: 'center',
                                lineHeight: 1.2,
                                imageRendering: 'pixelated',
                                WebkitFontSmoothing: 'none',
                                MozOsxFontSmoothing: 'unset',
                                fontSmooth: 'never',
                                textShadow: '3px 3px 0px #000000, 1px 1px 0px #FF6B9D',
                                marginTop: '0.75rem',
                                textRendering: 'optimizeSpeed'
                              }}>
                                {app.label}
                              </span>
                            </button>
                          ))}
                </div>
                      </div>
                    </div>
                    {/* Bottom soft keys */}
                    <div className="flex items-center justify-between px-6 pb-4 border-t-4 border-black">
                      <button onClick={() => setSelectedApp(null)} className="text-white" style={{ 
                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', 
                        imageRendering: 'pixelated',
                        WebkitFontSmoothing: 'none',
                        fontSmooth: 'never',
                        background: 'transparent', 
                        border: 'none', 
                        cursor: 'pointer', 
                        fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
                        textShadow: '2px 2px 0px #000000',
                        textRendering: 'optimizeSpeed'
                      }}>MENU</button>
                      <span className="text-white" style={{ 
                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', 
                        imageRendering: 'pixelated',
                        WebkitFontSmoothing: 'none',
                        fontSmooth: 'never',
                        fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
                        textShadow: '2px 2px 0px #000000',
                        textRendering: 'optimizeSpeed'
                      }}>SYSTEM READY</span>
                      <button onClick={() => setSelectedApp(null)} className="text-white" style={{ 
                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', 
                        imageRendering: 'pixelated',
                        WebkitFontSmoothing: 'none',
                        fontSmooth: 'never',
                        background: 'transparent', 
                        border: 'none', 
                        cursor: 'pointer', 
                        fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
                        textShadow: '2px 2px 0px #000000',
                        textRendering: 'optimizeSpeed'
                      }}>CLEAR</button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="app-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex h-full flex-col overflow-hidden"
                    style={{ 
                      background: '#1fbad1', 
                      border: '6px solid #000000', 
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                      boxShadow: 'inset 0 0 50px rgba(0,0,0,0.3), 0 0 30px rgba(31, 186, 209, 0.2)'
                    }}
                  >
                    {/* Moving BMO Robot with Floating Pad */}
                    <div className="absolute inset-0 pointer-events-none overflow-visible z-0" style={{ overflow: 'visible' }}>
                      <div 
                        className="bmo-robot absolute"
                        style={{
                          width: '80px',
                          height: '80px',
                          imageRendering: 'pixelated',
                          filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.8))',
                          zIndex: 1,
                          animation: isDragging || bmoPosition ? 'none' : 'bmoMove 30s linear infinite',
                          cursor: isDragging ? 'grabbing' : 'grab',
                          pointerEvents: 'auto',
                          transform: bmoPosition ? `translate(${bmoPosition.x}px, ${bmoPosition.y}px)` : undefined,
                          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                          userSelect: 'none'
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setIsDragging(true);
                          const rect = e.currentTarget.getBoundingClientRect();
                          const container = e.currentTarget.parentElement?.getBoundingClientRect();
                          if (container) {
                            setDragOffset({
                              x: e.clientX - rect.left - rect.width / 2,
                              y: e.clientY - rect.top - rect.height / 2
                            });
                            setBmoPosition({
                              x: e.clientX - container.left - rect.width / 2,
                              y: e.clientY - container.top - rect.height / 2
                            });
                          }
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
                          const container = e.currentTarget.parentElement?.getBoundingClientRect();
                          if (container) {
                            setDragOffset({
                              x: touch.clientX - rect.left - rect.width / 2,
                              y: touch.clientY - rect.top - rect.height / 2
                            });
                            setBmoPosition({
                              x: touch.clientX - container.left - rect.width / 2,
                              y: touch.clientY - container.top - rect.height / 2
                            });
                          }
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
                            width: '100px',
                            height: '20px',
                            background: '#8B4513',
                            border: '4px solid #000000',
                            borderRadius: '10px',
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
                              imageRendering: 'pixelated' as CSSProperties['imageRendering']
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
                            background: '#1fbad1',
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
              </div>
                    
                    {/* App Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 md:py-8 flex flex-col justify-center">
                      <div className="w-full max-w-3xl mx-auto">
                        {/* App window */}
            <motion.div
                          className="mb-6 overflow-hidden"
              style={{ 
                            border: '6px solid #000000',
                            borderStyle: 'outset',
                            boxShadow: '8px 8px 0 rgba(0,0,0,0.8), inset 2px 2px 0 rgba(255,255,255,0.2)',
                            imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                            WebkitFontSmoothing: 'none',
                            fontSmooth: 'never',
                            margin: '0 auto'
                          }}
                          animate={{ 
                            width: isMaximized ? '100%' : '80%'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Title bar */}
                          <div 
                            className="flex items-center justify-between px-3 py-2"
                style={{
                              background: '#FF6B9D',
                              borderBottom: '6px solid #000000',
                              borderStyle: 'outset',
                              imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                              WebkitFontSmoothing: 'none',
                              fontSmooth: 'never'
                            }}
                            onTouchStart={(e) => {
                              setSwipeStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
                            }}
                            onTouchMove={(e) => {
                              if (!swipeStart) return;
                              const deltaX = e.touches[0].clientX - swipeStart.x;
                              const deltaY = e.touches[0].clientY - swipeStart.y;
                              if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 100) {
                                setSelectedApp(null);
                                setSwipeStart(null);
                              }
                            }}
                            onTouchEnd={() => setSwipeStart(null)}
                          >
                            <span                             style={{
                              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                              color: '#000000',
                              fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)',
                              letterSpacing: '0.05em',
                              imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                              WebkitFontSmoothing: 'none',
                              MozOsxFontSmoothing: 'unset',
                              fontSmooth: 'never',
                              textRendering: 'optimizeSpeed'
                            }}>
                              {selectedApp === 'vision' ? 'VISION' : 'MISSION'}
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setIsMaximized(!isMaximized)}
                                aria-label={isMaximized ? "Minimize" : "Maximize"}
                                className="px-2 py-1"
                style={{
                                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                  color: '#000000',
                                  background: '#4ECDC4',
                                  border: '4px solid #000000',
                                  borderStyle: 'outset',
                                  boxShadow: '4px 4px 0 rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.3)',
                                  imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                                  WebkitFontSmoothing: 'none',
                                  fontSmooth: 'never'
                                }}
                              >
                                {isMaximized ? '−' : '+'}
                              </button>
                              <button
                                onClick={() => setIsMaximized(!isMaximized)}
                                aria-label={isMaximized ? "Restore" : "Maximize"}
                                className="px-2 py-1"
                style={{
                                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                  color: '#000000',
                                  background: '#4ECDC4',
                                  border: '4px solid #000000',
                                  borderStyle: 'outset',
                                  boxShadow: '4px 4px 0 rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.3)',
                                  imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                                  WebkitFontSmoothing: 'none',
                                  fontSmooth: 'never'
                                }}
                              >
                                □
                              </button>
                              <button
                                onClick={() => setSelectedApp(null)}
                                aria-label="Close"
                                className="px-3 py-1"
                  style={{
                                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                  color: '#000000',
                                  background: '#4ECDC4',
                    border: '4px solid #000000',
                                  borderStyle: 'outset',
                                  boxShadow: '4px 4px 0 rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.3)',
                                  imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                                  WebkitFontSmoothing: 'none',
                                  fontSmooth: 'never'
                                }}
                              >
                                X
                              </button>
                            </div>
                          </div>
              {/* Content */}
                          <motion.div 
                            className="overflow-hidden"
                    style={{
                    background: '#FFD700',
                              padding: '1.5rem 2rem',
                              imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                              WebkitFontSmoothing: 'none',
                              fontSmooth: 'never'
                            }}
                            animate={{ 
                              maxHeight: isMaximized ? 900 : 140,
                              opacity: isMaximized ? 1 : 0.7
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {selectedApp === 'vision' ? (
                              <div>
                                <p
                    style={{
                                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                    fontSize: 'clamp(0.7rem, 1.5vw, 0.98rem)',
                                    lineHeight: 1.8,
                                    color: '#000000',
                    fontWeight: 'normal',
                                    letterSpacing: '0.04em',
                                    imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                    WebkitFontSmoothing: 'none',
                                    MozOsxFontSmoothing: 'unset',
                    fontSmooth: 'never',
                                    marginBottom: '1.5rem',
                    textRendering: 'optimizeSpeed'
                                  }}
                                >
                                  TO BE THE PREMIER GLOBAL HUB FOR FILIPINO WEB3 INNOVATORS, EMBODYING THE <span style={{ color: '#0066ff', fontWeight: 'bold' }}>BAYANIHAN</span> SPIRIT THROUGH HOLISTIC, CONNECTED, AND INNOVATIVE PRINCIPLES THAT UNITE OUR WORLDWIDE FILIPINO COMMUNITY IN BUILDING THE DECENTRALIZED FUTURE.
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center">
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-3"
                  style={{
                                      background: '#FF6B9D',
                                      border: '4px solid #000000',
                                      borderStyle: 'outset',
                                      boxShadow: '4px 4px 0 rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.3)',
                                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                                      WebkitFontSmoothing: 'none',
                                      fontSmooth: 'never'
                                    }}
                                  >
                                    <span className="text-xl">🌍</span>
                                    <span
                    style={{
                                        fontFamily: '"Courier New", monospace',
                                        fontWeight: 'bold',
                                        color: '#000000',
                                        fontSize: 'clamp(0.72rem, 1.4vw, 0.95rem)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                      }}
                                    >
                                      GLOBAL-FIRST
                                    </span>
                                  </motion.div>
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-3"
                    style={{
                                      background: '#FF6B9D',
                                      border: '4px solid #000000',
                                      borderStyle: 'outset',
                                      boxShadow: '4px 4px 0 rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.3)',
                                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never'
                    }}
                  >
                                    <span className="text-xl">❤️</span>
                                    <span
                                      style={{
                                        fontFamily: '"Courier New", monospace',
                                        fontWeight: 'bold',
                                        color: '#000000',
                                        fontSize: 'clamp(0.72rem, 1.4vw, 0.95rem)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                      }}
                                    >
                                      INCLUSIVE
                                    </span>
                                  </motion.div>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <p
                                  style={{
                                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                    fontSize: 'clamp(0.7rem, 1.5vw, 0.98rem)',
                      lineHeight: 1.8,
                                    color: '#000000',
                      fontWeight: 'normal',
                                    letterSpacing: '0.04em',
                                    imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                      WebkitFontSmoothing: 'none',
                                    MozOsxFontSmoothing: 'unset',
                                    fontSmooth: 'never',
                                    marginBottom: '1.5rem',
                                    textRendering: 'optimizeSpeed'
                                  }}
                                >
                                  CREATE A COMPREHENSIVE PLATFORM FOR THE FILIPINO WEB3 COMMUNITY TO EXCHANGE IDEAS, SHARE KNOWLEDGE AND DISCOVER OPPORTUNITIES, FOSTERING INNOVATION THROUGH THE SPIRIT OF <span style={{ color: '#0066ff', fontWeight: 'bold' }}>MALASAKIT</span> AND <span style={{ color: '#0066ff', fontWeight: 'bold' }}>PAGKAKAISA</span>.
                                </p>
                                <div className="space-y-4 mb-5">
                                  <div className="flex items-start gap-3">
                                    <span
                                      style={{
                                        color: '#000000',
                                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                        marginTop: '2px',
                                        lineHeight: '1',
                                        imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                                        WebkitFontSmoothing: 'none',
                                        MozOsxFontSmoothing: 'unset',
                                        fontSmooth: 'never',
                                        textRendering: 'optimizeSpeed'
                                      }}
                                    >
                                      +
                                    </span>
                                    <p
                                      className="flex-1"
                                      style={{
                                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                        fontSize: 'clamp(0.65rem, 1.4vw, 0.9rem)',
                                        lineHeight: 1.8,
                                        color: '#000000',
                        fontWeight: 'normal',
                                        letterSpacing: '0.05em',
                                        imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                        WebkitFontSmoothing: 'none',
                                        MozOsxFontSmoothing: 'unset',
                                        fontSmooth: 'never',
                                        textRendering: 'optimizeSpeed'
                                      }}
                                    >
                                      PROVIDE COMPREHENSIVE EDUCATIONAL RESOURCES, MENTORSHIP PROGRAMS, AND SKILL DEVELOPMENT OPPORTUNITIES
                      </p>
                    </div>
                                  <div className="flex items-start gap-3">
                                    <span
                                      style={{
                                        color: '#000000',
                                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                        marginTop: '2px',
                                        lineHeight: '1',
                                        imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                                        WebkitFontSmoothing: 'none',
                                        MozOsxFontSmoothing: 'unset',
                                        fontSmooth: 'never',
                                        textRendering: 'optimizeSpeed'
                                      }}
                                    >
                                      +
                                    </span>
                                    <p
                                      className="flex-1"
                                      style={{
                                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                        fontSize: 'clamp(0.65rem, 1.4vw, 0.9rem)',
                                        lineHeight: 1.8,
                                        color: '#000000',
                        fontWeight: 'normal',
                                        letterSpacing: '0.05em',
                                        imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                        WebkitFontSmoothing: 'none',
                                        MozOsxFontSmoothing: 'unset',
                                        fontSmooth: 'never',
                                        textRendering: 'optimizeSpeed'
                                      }}
                                    >
                                      ESTABLISH PROFESSIONAL STANDARDS AND BEST PRACTICES THROUGH CONTINUOUS EDUCATION AND COLLABORATIVE LEARNING
                      </p>
                    </div>
                  </div>
                                <div className="flex flex-wrap gap-3 justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-3"
                    style={{ 
                                      background: '#FF6B9D',
                                      border: '4px solid #000000',
                                      borderStyle: 'outset',
                                      boxShadow: '4px 4px 0 rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.3)',
                                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                                      WebkitFontSmoothing: 'none',
                                      fontSmooth: 'never'
                                    }}
                                  >
                                    <span className="text-xl">#</span>
                                    <span
                                      style={{
                                        fontFamily: '"Courier New", monospace',
                                        fontWeight: 'bold',
                                        color: '#000000',
                                        fontSize: 'clamp(0.72rem, 1.4vw, 0.95rem)',
                      textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                      }}
                                    >
                                      EDUCATION
                                    </span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-3"
                    style={{ 
                                      background: '#FF6B9D',
                                      border: '4px solid #000000',
                                      borderStyle: 'outset',
                                      boxShadow: '4px 4px 0 rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.3)',
                                      imageRendering: 'pixelated' as CSSProperties['imageRendering'],
                                      WebkitFontSmoothing: 'none',
                                      fontSmooth: 'never'
                                    }}
                                  >
                                    <span className="text-xl">❤️</span>
                                    <span
                                      style={{
                                        fontFamily: '"Courier New", monospace',
                                        fontWeight: 'bold',
                                        color: '#000000',
                                        fontSize: 'clamp(0.72rem, 1.4vw, 0.95rem)',
                      textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                      }}
                                    >
                                      MENTORSHIP
                                    </span>
                  </motion.div>
                </div>
              </div>
                            )}
            </motion.div>
                        </motion.div>
        </div>
                    </div>
                    {/* Bottom soft keys */}
                    <div className="flex items-center justify-between px-6 pb-4">
                      <button onClick={() => setSelectedApp(null)} className="text-white" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated' as CSSProperties['imageRendering'], background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)' }}>MENU</button>
                      <span className="text-white" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated' as CSSProperties['imageRendering'], fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)' }}>SYSTEM READY</span>
                      <button onClick={() => setSelectedApp(null)} className="text-white" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated' as CSSProperties['imageRendering'], background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)' }}>CLEAR</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
                </div>
              </div>
            </motion.div>
      </div>
    </section>
    </>
  );
}