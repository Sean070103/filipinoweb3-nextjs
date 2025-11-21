'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function CosmicHero() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#4A90E2' }}>
      {/* Blue Background with Subtle Horizontal Bands */}
      <div className="absolute inset-0" aria-hidden="true" role="presentation">
        {/* Main blue background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, 
                #4A90E2 0%, 
                #4A8FE0 8%, 
                #4A90E2 16%, 
                #4A91E4 24%, 
                #4A90E2 32%, 
                #4A8FE0 40%, 
                #4A90E2 48%, 
                #4A91E4 56%, 
                #4A90E2 64%, 
                #4A8FE0 72%, 
                #4A90E2 80%, 
                #4A91E4 88%, 
                #4A90E2 100%
              )
            `
          }}
        />

        {/* Single Pixel Art Cloud */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute top-16 left-1/2 transform -translate-x-1/2"
            style={{
              width: '160px',
              height: '80px',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 80 40\'%3E%3C!-- Pixel Art Cloud with blue-grey shading --%3E%3C!-- Main cloud body (white) --%3E%3Crect x=\'8\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'12\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'16\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'20\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'24\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'28\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'32\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'36\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'40\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'44\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'48\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'52\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'56\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'60\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'64\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3C!-- Top section --%3E%3Crect x=\'12\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'16\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'20\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'24\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'28\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'32\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'36\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'40\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'44\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'48\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'52\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'56\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'60\' y=\'16\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3C!-- Peak section --%3E%3Crect x=\'16\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'20\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'24\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'28\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'32\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'36\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'40\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'44\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'48\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'52\' y=\'12\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3C!-- Top peak --%3E%3Crect x=\'20\' y=\'8\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'24\' y=\'8\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'28\' y=\'8\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'32\' y=\'8\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'36\' y=\'8\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'40\' y=\'8\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3Crect x=\'44\' y=\'8\' width=\'4\' height=\'4\' fill=\'%23ffffff\'/%3E%3C!-- Light blue-grey shading --%3E%3Crect x=\'12\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'16\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'20\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'24\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'28\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'32\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'36\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'40\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'44\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'48\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'52\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'56\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3Crect x=\'60\' y=\'20\' width=\'4\' height=\'4\' fill=\'%23b8c5d1\'/%3E%3C!-- Dark blue-grey outline --%3E%3Crect x=\'8\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'12\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'16\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'20\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'24\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'28\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'32\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'36\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'40\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'44\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'48\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'52\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'56\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'60\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3Crect x=\'64\' y=\'24\' width=\'4\' height=\'4\' fill=\'%236b7b8c\'/%3E%3C/svg%3E")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              imageRendering: 'pixelated'
            }}
          />
        </div>
        
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
            animate={prefersReduced ? undefined : { y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={prefersReduced ? undefined : { duration: 8 + ((i * 3.1) % 4), repeat: Infinity, ease: "easeInOut", delay: (i * 2.3) % 5 }}
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
            animate={prefersReduced ? undefined : { opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={prefersReduced ? undefined : { duration: 4 + ((i * 1.7) % 2), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
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
            animate={prefersReduced ? undefined : { opacity: [0.2, 0.5, 0.2] }}
            transition={prefersReduced ? undefined : { duration: 6 + ((i * 2.1) % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
           />
         ))}
         
         {/* Terminal/Console Elements */}
         <motion.div
           className="absolute top-20 left-10 font-mono text-xs text-gray-300 opacity-60"
          animate={prefersReduced ? undefined : { opacity: [0.3, 0.6, 0.3] }}
          transition={prefersReduced ? undefined : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
         >
           <div>$ npm install web3</div>
           <div>$ git commit -m (deploy smart contract)</div>
         </motion.div>
         
         <motion.div
           className="absolute bottom-20 right-10 font-mono text-xs text-gray-300 opacity-60"
          animate={prefersReduced ? undefined : { opacity: [0.3, 0.6, 0.3] }}
          transition={prefersReduced ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
          animate={prefersReduced ? undefined : { y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={prefersReduced ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
         >
           <div className="w-full h-full border border-gray-400 rounded flex items-center justify-center">
             <div className="w-2 h-2 bg-gray-300"></div>
           </div>
         </motion.div>
         

       </div>

      {/* Central Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-10">
        <div className="text-center max-w-5xl">
          {/* Main Title - Just FWEB3 Text */}
          <div className="relative inline-block">
            <motion.h1
              className="text-8xl md:text-9xl font-black relative"
              style={{
                fontFamily: 'Courier New, monospace',
                color: '#ffffff',
                textShadow: `
                  4px 4px 0px #1a365d,
                  8px 8px 0px #2d3748,
                  12px 12px 0px #1a202c,
                  0 0 30px #ffffff
                `,
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never',
                letterSpacing: '0.2em',
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                lineHeight: '0.8',
                transform: 'scale(1)',
                filter: 'contrast(1.2)',
              }}
              animate={prefersReduced ? undefined : {
                scale: [1, 1.02, 1],
              }}
              transition={prefersReduced ? undefined : {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  FWEB3
                </motion.h1>
                
               </div>
               

        </div>
      </div>

    </div>
  );
}
