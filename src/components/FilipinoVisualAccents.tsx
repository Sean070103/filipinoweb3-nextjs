'use client';

// import { motion } from 'framer-motion';

export default function FilipinoVisualAccents() {
  return (
    <>
      {/* Traditional Filipino Decorative Elements */}
      
      {/* Capiz Shell Window Effect */}
      <motion.div 
        className="fixed top-20 right-10 w-32 h-32 ph-capiz rounded-full opacity-20 pointer-events-none z-10" 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Sarimanok Motif Accents */}
      <motion.div 
        className="fixed bottom-20 left-10 w-24 h-24 ph-sarimanok rounded-full opacity-15 pointer-events-none z-10" 
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Traditional Weave Pattern Borders */}
      <motion.div 
        className="fixed top-1/2 left-0 w-4 h-32 ph-textile opacity-30 pointer-events-none z-10" 
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="fixed top-1/2 right-0 w-4 h-32 ph-textile opacity-30 pointer-events-none z-10" 
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Filipino Geometric Accents */}
      <motion.div 
        className="fixed top-1/4 left-1/4 w-16 h-16 ph-geometric rounded-full opacity-20 pointer-events-none z-10" 
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 right-1/4 w-16 h-16 ph-geometric rounded-full opacity-20 pointer-events-none z-10" 
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* Filipino Sun Pattern Accents */}
      <motion.div 
        className="fixed top-1/3 right-1/3 w-20 h-20 ph-sun-pattern rounded-full opacity-15 pointer-events-none z-10" 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Traditional Filipino Border Accents */}
      <motion.div 
        className="fixed top-0 left-1/2 transform -translate-x-1/2 w-64 h-2 ph-border-pattern opacity-40 pointer-events-none z-10" 
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-2 ph-border-pattern opacity-40 pointer-events-none z-10" 
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Traditional Filipino Architectural Accents */}
      <motion.div 
        className="fixed top-1/4 right-1/4 w-12 h-12 ph-bahay-kubo opacity-20 pointer-events-none z-10" 
        animate={{
          y: [0, -5, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 left-1/4 w-12 h-12 ph-bahay-kubo opacity-20 pointer-events-none z-10" 
        animate={{
          y: [0, 5, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </>
  );
}
