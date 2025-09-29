'use client';

import { motion } from 'framer-motion';
import { Eye, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

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
    <section id="home" className="categories relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse hover:animate-spin" 
             style={{ animation: 'float 6s ease-in-out infinite, pulse 3s ease-in-out infinite' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-pulse delay-1000 hover:scale-150" 
             style={{ animation: 'float 8s ease-in-out infinite reverse, pulse 4s ease-in-out infinite' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-2000 hover:animate-bounce" 
             style={{ animation: 'float 10s ease-in-out infinite, pulse 5s ease-in-out infinite' }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500 hover:rotate-180" 
             style={{ animation: 'float 7s ease-in-out infinite, pulse 3.5s ease-in-out infinite' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-400/5 rounded-full blur-lg animate-pulse delay-3000" 
             style={{ animation: 'float 9s ease-in-out infinite, rotate 20s linear infinite' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-400/8 rounded-full blur-md animate-pulse delay-1500" 
             style={{ animation: 'float 11s ease-in-out infinite, scale 4s ease-in-out infinite' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='20'/%3E%3Crect x='20' y='20' width='20' height='20'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] py-16">
          {/* Left Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-mono font-black text-white leading-tight relative"
              style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)' }}
            >
              <span className="relative z-10">
                {displayText}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
              {/* Enhanced Text Glow Effect */}
              <div className="absolute inset-0 text-cyan-400/30 blur-sm">
                {displayText}
              </div>
              <div className="absolute inset-0 text-purple-400/20 blur-md">
                {displayText}
              </div>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-2xl font-mono font-semibold text-cyan-400 mt-4"
              style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.4)' }}
            >
              Empowering Filipino Innovators
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-xl text-gray-300 leading-relaxed font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We are helping to build a healthy group of Web3 enthusiasts and
              community builders, and we want YOU to be part of it.
            </motion.p>
          </motion.div>

          {/* Right Section - Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Vision Card */}
            <motion.article 
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12, scale: 1.05, rotateY: 5 }}
              className="bg-black/80 backdrop-blur-sm border-2 border-cyan-400 p-8 hover:border-purple-400 transition-all duration-500 group relative overflow-hidden"
              style={{ 
                boxShadow: '0 10px 30px rgba(34, 211, 238, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Corner Decorations */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="text-2xl font-mono font-bold text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                    Vision
                  </h5>
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center group-hover:bg-purple-400 transition-colors duration-300 shadow-lg group-hover:shadow-cyan-400/25">
                    <Eye className="w-6 h-6 text-black" />
                  </div>
                </div>
                <p className="text-gray-300 font-mono text-base leading-relaxed">
                  To be the premium hub of Filipinos in Web3 that is focused on bringing holistic, connected, and innovative principles.
                </p>
              </div>
            </motion.article>

            {/* Mission Card */}
            <motion.article 
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12, scale: 1.05, rotateY: -5 }}
              className="bg-black/80 backdrop-blur-sm border-2 border-cyan-400 p-8 hover:border-purple-400 transition-all duration-500 group relative overflow-hidden"
              style={{ 
                boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Corner Decorations */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="text-2xl font-mono font-bold text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                    Mission
                  </h5>
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center group-hover:bg-purple-400 transition-colors duration-300 shadow-lg group-hover:shadow-cyan-400/25">
                    <Rocket className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 font-mono text-base leading-relaxed">
                    Connect Filipino Web3 builders through knowledge sharing and collaborative innovation.
                  </p>
                  <p className="text-gray-300 font-mono text-base leading-relaxed">
                    Elevate the Philippines as a global Web3 powerhouse through education and professional development.
                  </p>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
