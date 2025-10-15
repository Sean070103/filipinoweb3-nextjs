'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CosmicHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  console.log(mousePosition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

<<<<<<< HEAD
  // Generate stars with consistent values
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: (i * 7.3) % 100, // Use deterministic values instead of Math.random()
    y: (i * 11.7) % 100,
    size: ((i * 3.1) % 3) + 1,
    delay: (i * 2.3) % 5,
  }));

  // Generate Ethereum-themed matrix characters
  const ethereumChars = Array.from({ length: 50 }, () => 'Ξ');
  const matrixChars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (i * 13.7) % 100, // Use deterministic values instead of Math.random()
    y: (i * 19.3) % 100,
    char: ethereumChars[i] || 'Ξ',
    delay: (i * 7.1) % 10,
    speed: ((i * 5.7) % 3) + 1,
  }));
=======
  // Generate stars
  // const stars = Array.from({ length: 100 }, (_, i) => ({
  //   id: i,
  //   x: Math.random() * 100,
  //   y: Math.random() * 100,
  //   size: Math.random() * 3 + 1,
  //   delay: Math.random() * 5,
  // }));

  // Generate Ethereum-themed matrix characters
  // const ethereumChars = Array.from({ length: 50 }, () => 'Ξ');
  // const matrixChars = Array.from({ length: 50 }, (_, i) => ({
  //   id: i,
  //   x: Math.random() * 100,
  //   y: Math.random() * 100,
  //   char: ethereumChars[i] || 'Ξ',
  //   delay: Math.random() * 10,
  //   speed: Math.random() * 3 + 1,
  // }));
>>>>>>> 44036beaa5c8980881a52d01ea389ef8e797a2e1

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Deep Space Background */}
      <div className="absolute inset-0">
         {/* Subtle nebula clouds */}
         <motion.div
           className="absolute top-0 left-0 w-full h-full opacity-20"
           animate={{
             background: [
               'radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.1) 0%, rgba(20, 20, 20, 0.05) 30%, transparent 60%)',
               'radial-gradient(circle at 80% 70%, rgba(40, 40, 40, 0.1) 0%, rgba(0, 0, 0, 0.05) 30%, transparent 60%)',
               'radial-gradient(circle at 50% 20%, rgba(60, 60, 60, 0.08) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 70%)',
               'radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.1) 0%, rgba(20, 20, 20, 0.05) 30%, transparent 60%)',
             ],
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
         />
        
         {/* Web3/Software Development Background Elements */}
         
         {/* Floating Code Snippets */}
         {Array.from({ length: 8 }, (_, i) => (
           <motion.div
             key={`code-${i}`}
             className="absolute font-mono text-xs text-gray-400 opacity-40"
             style={{
               left: `${(i * 13.7) % 100}%`,
               top: `${(i * 19.3) % 100}%`,
               fontSize: '10px',
             }}
             animate={{
               y: [0, -20, 0],
               opacity: [0.2, 0.5, 0.2],
             }}
             transition={{
               duration: 8 + ((i * 3.1) % 4),
               repeat: Infinity,
               ease: "easeInOut",
               delay: (i * 2.3) % 5,
             }}
           >
             {['function()', 'const web3', 'blockchain', 'smart contract', 'defi', 'nft', 'dao', 'solidity'][i]}
           </motion.div>
         ))}
         
         {/* Blockchain Network Nodes */}
         {Array.from({ length: 12 }, (_, i) => (
           <motion.div
             key={`node-${i}`}
             className="absolute w-2 h-2 rounded-full bg-gray-500 opacity-50"
             style={{
               left: `${20 + (i * 6)}%`,
               top: `${30 + Math.sin(i * 0.5) * 20}%`,
             }}
             animate={{
               opacity: [0.3, 0.6, 0.3],
               scale: [1, 1.2, 1],
             }}
             transition={{
               duration: 4 + ((i * 1.7) % 2),
               repeat: Infinity,
               ease: "easeInOut",
               delay: i * 0.3,
             }}
           />
         ))}
         
         {/* Connecting Lines Between Nodes */}
         {Array.from({ length: 6 }, (_, i) => (
           <motion.div
             key={`connection-${i}`}
             className="absolute h-0.5 bg-gray-400 opacity-40"
             style={{
               left: `${25 + (i * 8)}%`,
               top: `${35 + Math.sin(i * 0.3) * 15}%`,
               width: `${20 + ((i * 7.3) % 30)}px`,
               transform: `rotate(${(i * 11.7) % 45}deg)`,
             }}
             animate={{
               opacity: [0.2, 0.5, 0.2],
             }}
             transition={{
               duration: 6 + ((i * 2.1) % 3),
               repeat: Infinity,
               ease: "easeInOut",
               delay: i * 0.5,
             }}
           />
         ))}
         
         {/* Terminal/Console Elements */}
         <motion.div
           className="absolute top-20 left-10 font-mono text-xs text-gray-300 opacity-60"
           animate={{
             opacity: [0.3, 0.6, 0.3],
           }}
           transition={{
             duration: 3,
             repeat: Infinity,
             ease: "easeInOut",
           }}
         >
           <div>$ npm install web3</div>
           <div>$ git commit -m (deploy smart contract)</div>
         </motion.div>
         
         <motion.div
           className="absolute bottom-20 right-10 font-mono text-xs text-gray-300 opacity-60"
           animate={{
             opacity: [0.3, 0.6, 0.3],
           }}
           transition={{
             duration: 4,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 1,
           }}
         >
           <div>{"const { ethers } = require(\"ethers\");"}</div>
           <div>{"// Filipino Web3 Community"}</div>
         </motion.div>
         
         {/* Community Icons */}
         <motion.div
           className="absolute top-1/4 right-1/4 w-8 h-8 opacity-40"
           animate={{
             rotate: [0, 360],
             scale: [1, 1.1, 1],
           }}
           transition={{
             duration: 10,
             repeat: Infinity,
             ease: "linear",
           }}
         >
           <div className="w-full h-full border border-gray-500 rounded-full flex items-center justify-center">
             <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
           </div>
         </motion.div>
         
         <motion.div
           className="absolute bottom-1/3 left-1/4 w-6 h-6 opacity-35"
           animate={{
             y: [0, -10, 0],
             opacity: [0.2, 0.5, 0.2],
           }}
           transition={{
             duration: 5,
             repeat: Infinity,
             ease: "easeInOut",
           }}
         >
           <div className="w-full h-full border border-gray-400 rounded flex items-center justify-center">
             <div className="w-2 h-2 bg-gray-300"></div>
           </div>
         </motion.div>
         

       </div>

      {/* Central Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-10">
        <div className="text-center max-w-5xl">
          {/* Central Sphere with Web3 Text */}
          <div className="relative inline-block">
             {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-gray-500/60"
               style={{
                 width: '400px',
                 height: '400px',
                 left: '-200px',
                 top: '-200px',
               }}
               animate={{
                 rotate: [0, 360],
                 scale: [1, 1.1, 1],
               }}
               transition={{
                 duration: 15,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
             />
            
             {/* Main Sphere */}
           <motion.div
              className="relative w-80 h-80 rounded-full overflow-hidden"
              style={{
                background: `
                 radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 30%),
                 radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
                  radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.8) 30%, rgba(40, 40, 40, 0.6) 60%, rgba(0, 0, 0, 0.95) 100%)
                `,
                boxShadow: `
                 0 0 60px rgba(255, 255, 255, 0.15),
                  0 0 120px rgba(0, 0, 0, 0.8),
                 inset 0 0 60px rgba(60, 60, 60, 0.4),
                 inset 0 0 120px rgba(0, 0, 0, 0.6)
                `,
               border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                 '0 0 60px rgba(255, 255, 255, 0.15), 0 0 120px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(60, 60, 60, 0.4), inset 0 0 120px rgba(0, 0, 0, 0.6)',
                 '0 0 80px rgba(255, 255, 255, 0.25), 0 0 160px rgba(0, 0, 0, 0.9), inset 0 0 80px rgba(80, 80, 80, 0.55), inset 0 0 160px rgba(0, 0, 0, 0.75)',
                 '0 0 60px rgba(255, 255, 255, 0.15), 0 0 120px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(60, 60, 60, 0.4), inset 0 0 120px rgba(0, 0, 0, 0.6)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Web3 Text with Glitch Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h1
                  className="text-6xl font-black relative"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 30px rgba(255, 107, 107, 0.5)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    textShadow: [
                      '0 0 30px rgba(255, 107, 107, 0.5)',
                      '0 0 40px rgba(78, 205, 196, 0.6), 0 0 60px rgba(69, 183, 209, 0.4)',
                      '0 0 50px rgba(254, 202, 87, 0.7), 0 0 70px rgba(255, 159, 243, 0.5)',
                      '0 0 30px rgba(255, 107, 107, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  FWEB3
                </motion.h1>
                
                {/* Colorful Glitch Effect Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: [0, 0.6, 0],
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <h1 
                    className="text-6xl font-black"
                    style={{
                      background: 'linear-gradient(45deg, #ff6b6b, #ff9ff3)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    FWEB3
                  </h1>
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: [0, 0.6, 0],
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.15,
                  }}
                >
                  <h1 
                    className="text-6xl font-black"
                    style={{
                      background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    FWEB3
                  </h1>
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: [0, 0.5, 0],
                    y: [0, 2, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <h1 
                    className="text-6xl font-black"
                    style={{
                      background: 'linear-gradient(45deg, #feca57, #54a0ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    FWEB3
                  </h1>
                </motion.div>
               </div>
               
               {/* Orb Surface Details */}
               <div className="absolute inset-0">
                 {/* Highlight spots */}
                 <motion.div
                   className="absolute top-8 left-12 w-4 h-4 rounded-full"
                   style={{
                     background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                     boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
                   }}
                   animate={{
                     opacity: [0.3, 0.8, 0.3],
                     scale: [1, 1.2, 1],
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: 0.5,
                   }}
                 />
                 
                 <motion.div
                   className="absolute bottom-16 right-20 w-3 h-3 rounded-full"
                   style={{
                     background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                     boxShadow: '0 0 8px rgba(255, 255, 255, 0.15)',
                   }}
                   animate={{
                     opacity: [0.2, 0.6, 0.2],
                     scale: [1, 1.3, 1],
                   }}
                   transition={{
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: 1.5,
                   }}
                 />
                 
                 {/* Subtle surface texture */}
                 <motion.div
                   className="absolute inset-4 rounded-full opacity-30"
                   style={{
                     background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
                     filter: 'blur(1px)',
                   }}
                   animate={{
                     opacity: [0.15, 0.35, 0.15],
                   }}
                   transition={{
                     duration: 5,
                     repeat: Infinity,
                     ease: "easeInOut",
                   }}
                 />
               </div>
             </motion.div>
             
             {/* Additional Orb Rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/30"
               style={{
                 width: '420px',
                 height: '420px',
                 left: '-210px',
                 top: '-210px',
               }}
               animate={{
                 rotate: [0, -360],
                 scale: [1, 1.05, 1],
               }}
               transition={{
                 duration: 20,
                 repeat: Infinity,
                 ease: "linear",
               }}
             />
             
            <motion.div
              className="absolute inset-0 rounded-full border border-white/20"
               style={{
                 width: '440px',
                 height: '440px',
                 left: '-220px',
                 top: '-220px',
               }}
               animate={{
                 rotate: [0, 360],
                 scale: [1, 1.1, 1],
               }}
               transition={{
                 duration: 25,
                 repeat: Infinity,
                 ease: "linear",
               }}
             />
           </div>

           {/* Pixelated Subtitle */}
           <motion.div
             className="mt-8"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 1 }}
           >
            <h2 
              className="text-3xl text-white font-bold mb-4 pixelated"
              style={{ 
                fontFamily: 'var(--font-jersey), monospace',
                fontSize: '2.25rem',
                letterSpacing: '0.12em',
                color: '#FCD116',
                textShadow: '0 0 8px #FCD116, 0 0 16px #FCD116',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never'
              }}
            >
              FILIPINO WEB3 COMMUNITY
            </h2>
           </motion.div>

        </div>
      </div>

    </div>
  );
}
