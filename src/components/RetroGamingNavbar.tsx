'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function RetroGamingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple active section detection
      const sections = ['home', 'about', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'events', label: 'EVENTS', href: '#events' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/80 border-b-2 border-green-400' 
          : 'backdrop-blur-sm bg-black/70 border-b-2 border-green-500'
      }`}
      style={{
        imageRendering: 'pixelated',
        boxShadow: '0 4px 0px #008000',
      }}
      initial={prefersReduced ? undefined : { y: -100 }}
      animate={prefersReduced ? undefined : { y: 0 }}
      transition={prefersReduced ? undefined : { duration: 0.5, ease: "easeOut" }}
    >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-28">
          {/* Retro Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={prefersReduced ? undefined : { scale: 1.05 }}
            transition={prefersReduced ? undefined : { duration: 0.2 }}
          >
             <div 
               className="w-16 h-16 bg-green-400 border-2 border-green-600 flex items-center justify-center"
               style={{ imageRendering: 'pixelated' }}
             >
               <span 
                 className="text-black font-bold text-2xl"
                style={{
                  fontFamily: 'Courier New, monospace',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                }}
              >
                FW
              </span>
            </div>
             <span 
               className="text-green-400 font-bold text-3xl"
              style={{
                fontFamily: 'Courier New, monospace',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never',
                textShadow: '2px 2px 0px #008000',
                letterSpacing: '0.1em',
              }}
            >
              FILIPINOWEB3
            </span>
          </motion.div>

           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-4">
             {navItems.map((item) => (
               <motion.a
                 key={item.id}
                 href={item.href}
                 className={`relative px-6 py-4 text-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black border-2 ${
                  activeSection === item.id
                    ? 'text-green-400 bg-green-400/10 border-green-400'
                    : 'text-gray-200 bg-black/30 border-green-700 hover:text-green-400 hover:bg-green-400/10 hover:border-green-500'
                }`}
                style={{
                  fontFamily: 'Courier New, monospace',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                  textShadow: '1px 1px 0px #000000',
                  boxShadow: activeSection === item.id ? '4px 4px 0px #008000' : '2px 2px 0px #004d00',
                }}
                whileHover={prefersReduced ? undefined : { y: -2 }}
                whileTap={prefersReduced ? undefined : { y: 0 }}
                transition={prefersReduced ? undefined : { duration: 0.2 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                [{item.label}]
              </motion.a>
            ))}
          </div>

           {/* Retro CTA Button */}
           <motion.a
             href="#join"
             className="hidden md:inline-flex items-center px-8 py-4 bg-cyan-400 text-black font-bold border-2 border-cyan-600 hover:bg-cyan-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black text-lg"
            style={{
              fontFamily: 'Courier New, monospace',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none',
              fontSmooth: 'never',
              textShadow: '1px 1px 0px #008080',
              boxShadow: '4px 4px 0px #008080',
            }}
            whileHover={prefersReduced ? undefined : { scale: 1.05, y: -2 }}
            whileTap={prefersReduced ? undefined : { scale: 0.95, y: 0 }}
            transition={prefersReduced ? undefined : { duration: 0.2 }}
          >
            [JOIN]
          </motion.a>

           {/* Mobile menu button */}
           <motion.button
             className="md:hidden p-4 text-green-400 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black border-2 border-green-400 hover:border-green-300"
             style={{
               imageRendering: 'pixelated',
               boxShadow: '2px 2px 0px #008000',
             }}
             whileTap={prefersReduced ? undefined : { scale: 0.95 }}
             transition={prefersReduced ? undefined : { duration: 0.2 }}
             aria-label="Toggle mobile menu"
           >
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

