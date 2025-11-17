'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
        imageRendering: 'pixelated' as any
      }} />
      
      {/* Animated Scanlines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        imageRendering: 'pixelated' as any,
        animation: 'scanline 8s linear infinite'
      }} />
      
      <div className="container relative z-10 py-16 md:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="pixelated" style={{ 
            fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', 
            letterSpacing: '0.1em', 
            lineHeight: '1.4', 
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            imageRendering: 'pixelated' as any,
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 max-w-7xl mx-auto mb-16 px-4">
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
                  border: '4px solid #FFFFFF',
                  borderStyle: 'outset',
                  borderRadius: '12px',
                  boxShadow: '6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1)',
                  imageRendering: 'pixelated' as any,
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
                <div className="absolute -top-4 left-0 right-0 flex justify-start gap-1 px-2" style={{ zIndex: 1 }}>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderBottom: '8px solid #FF6B9D',
                        imageRendering: 'pixelated' as any
                      }}
                    />
                  ))}
                </div>
                
                {/* Image */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ borderBottom: '4px solid #FFFFFF' }}>
                  <Image 
                    src={value.image} 
                    alt={value.title} 
                    width={400}
                    height={250}
                    className="w-full h-48 md:h-56 object-cover"
                    style={{
                      imageRendering: 'pixelated' as any
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col flex-grow space-y-3 md:space-y-4">
                  <h3 
                    className="pixelated" 
                    style={{ 
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      letterSpacing: '0.08em',
                      fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                      color: '#FFFFFF',
                      fontWeight: '400',
                      imageRendering: 'pixelated' as any,
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
                      imageRendering: 'pixelated' as any,
                      WebkitFontSmoothing: 'none',
                      textRendering: 'optimizeSpeed',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {value.description}
                  </p>
                  
                  {/* Bottom Bar with Segments */}
                  <div className="mt-4 pt-3 relative flex-shrink-0" style={{ borderTop: '2px solid #FFFFFF' }}>
                    <div className="flex items-center gap-1 h-5 relative">
                      {/* Blue Segment */}
                      <div 
                        className="progress-bar-segment flex-1 h-full relative"
                        style={{
                          background: '#0066FF',
                          border: '2px solid #000000',
                          imageRendering: 'pixelated' as any,
                          '--index': '0'
                        } as any}
                      >
                        {/* Blue Dot Indicator */}
                        {dotPositions[index] === 0 && (
                          <div 
                            className="dot-indicator absolute -top-2.5 left-1/2 transform -translate-x-1/2"
                            style={{
                              width: '14px',
                              height: '14px',
                              background: '#0066FF',
                              border: '2px solid #000000',
                              borderRadius: '50%',
                              imageRendering: 'pixelated' as any,
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
                          border: '2px solid #000000',
                          imageRendering: 'pixelated' as any,
                          '--index': '1'
                        } as any}
                      >
                        {/* Red Dot Indicator */}
                        {dotPositions[index] === 1 && (
                          <div 
                            className="dot-indicator absolute -top-2.5 left-1/2 transform -translate-x-1/2"
                            style={{
                              width: '14px',
                              height: '14px',
                              background: '#FF0000',
                              border: '2px solid #000000',
                              borderRadius: '50%',
                              imageRendering: 'pixelated' as any,
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
                          border: '2px solid #000000',
                          imageRendering: 'pixelated' as any,
                          '--index': '2'
                        } as any}
                      >
                        {/* Yellow Dot Indicator */}
                        {dotPositions[index] === 2 && (
                          <div 
                            className="dot-indicator absolute -top-2.5 left-1/2 transform -translate-x-1/2"
                            style={{
                              width: '14px',
                              height: '14px',
                              background: '#FFD700',
                              border: '2px solid #000000',
                              borderRadius: '50%',
                              imageRendering: 'pixelated' as any,
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

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center px-4"
        >
          <div 
            className="p-8 md:p-12 max-w-4xl mx-auto text-center pixelated w-full"
            style={{
              background: '#000000',
              border: '4px solid #CCCCCC',
              borderStyle: 'outset',
              borderRadius: '12px',
              boxShadow: '6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.1)',
              imageRendering: 'pixelated' as any,
              overflow: 'hidden'
            }}
          >
            <h3 
              className="pixelated mb-4 md:mb-6" 
              style={{ 
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                letterSpacing: '0.08em',
                fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                color: '#FFFFFF',
                fontWeight: '400',
                imageRendering: 'pixelated' as any,
                WebkitFontSmoothing: 'none',
                textShadow: '3px 3px 0px #000000',
                lineHeight: '1.4',
                wordBreak: 'break-word'
              }}
            >
              READY TO BUILD THE FUTURE?
            </h3>
            <p 
              className="text-white mb-6 md:mb-8 max-w-2xl mx-auto text-left md:text-center" 
              style={{
                fontFamily: '"Courier New", monospace',
                fontWeight: 'bold',
                fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                lineHeight: '1.6',
                wordWrap: 'break-word'
              }}
            >
              Join our community of Web3 builders, developers, and innovators.
            </p>
            <div className="flex justify-center mb-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ 
                  scale: 0.98,
                  y: 2,
                  boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)'
                }}
                className="pixelated mario-button relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #FF6B6B 0%, #E63946 50%, #C1121F 100%)',
                  color: '#FFFFFF',
                  padding: '1.5rem 3rem',
                  border: '4px solid #000000',
                  borderStyle: 'outset',
                  borderRadius: '50px',
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  boxShadow: 'inset 0 -4px 0 rgba(0,0,0,0.3), inset 0 4px 0 rgba(255,255,255,0.2), 0 8px 0 rgba(0,0,0,0.6), 0 12px 0 rgba(0,0,0,0.4)',
                  imageRendering: 'pixelated' as any,
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                  letterSpacing: '0.1em',
                  lineHeight: '1.3',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  minWidth: '280px',
                  width: 'auto',
                  maxWidth: '400px',
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 10,
                  opacity: 1,
                  textShadow: '3px 3px 0px rgba(0,0,0,0.8), 1px 1px 0px rgba(0,0,0,0.5)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              >
                {/* Top highlight */}
                <div 
                  className="absolute top-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: '40%',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
                    borderRadius: '50px 50px 0 0',
                    imageRendering: 'pixelated' as any
                  }}
                />
                {/* Bottom shadow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: '40%',
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 100%)',
                    borderRadius: '0 0 50px 50px',
                    imageRendering: 'pixelated' as any
                  }}
                />
                {/* Pixelated pattern overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='none'/%3E%3Crect x='0' y='0' width='1' height='4' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='4' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
                    backgroundSize: '4px 4px',
                    imageRendering: 'pixelated' as any,
                    borderRadius: '50px'
                  }}
                />
                <span className="relative z-10" style={{
                  imageRendering: 'pixelated' as any,
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                  display: 'block'
                }}>JOIN OUR COMMUNITY</span>
              </motion.button>
            </div>
            
            {/* Pixelated Footer Pattern */}
            <div 
              className="mt-8 pt-4"
              style={{
                borderTop: '2px solid #666666',
                paddingTop: '1rem'
              }}
            >
              <div
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='%23FFD700'/%3E%3Crect x='2' y='2' width='4' height='4' fill='%23000000'/%3E%3C/svg%3E")`,
                  backgroundSize: '8px 8px',
                  imageRendering: 'pixelated' as any,
                  height: '16px',
                  opacity: 0.8,
                  borderTop: '1px solid #999999'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
