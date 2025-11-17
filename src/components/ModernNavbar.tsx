'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-green-400/30' 
            : 'bg-black/20 backdrop-blur-sm'
        }`}
        initial={prefersReduced ? undefined : { y: -100 }}
        animate={prefersReduced ? undefined : { y: 0 }}
        transition={prefersReduced ? undefined : { duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={prefersReduced ? undefined : { scale: 1.05 }}
              transition={prefersReduced ? undefined : { duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg border border-green-300">
                <span className="text-black font-bold text-lg" style={{ fontFamily: 'Courier New, monospace' }}>FW</span>
              </div>
              <span 
                className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-green-400' : 'text-white'
                }`}
                style={{
                  fontFamily: 'var(--font-orbitron), sans-serif',
                  letterSpacing: '0.1em',
                  textShadow: isScrolled ? '0 0 10px rgba(34, 211, 238, 0.5)' : '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                FILIPINOWEB3
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? isScrolled 
                        ? 'text-green-400 bg-green-400/20' 
                        : 'text-cyan-300 bg-cyan-900/20'
                      : isScrolled
                        ? 'text-white/90 hover:text-green-400 hover:bg-green-400/10'
                        : 'text-white/90 hover:text-cyan-300 hover:bg-cyan-400/10'
                  }`}
                  whileHover={prefersReduced ? undefined : { y: -2 }}
                  whileTap={prefersReduced ? undefined : { y: 0 }}
                  transition={prefersReduced ? undefined : { duration: 0.2 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#join"
              className={`hidden md:inline-flex items-center px-6 py-2 font-semibold rounded-lg text-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-green-400 text-black hover:bg-green-300 shadow-lg border border-green-300'
                  : 'bg-cyan-400 text-black hover:bg-cyan-300 shadow-lg border border-cyan-300'
              }`}
              whileHover={prefersReduced ? undefined : { scale: 1.05 }}
              whileTap={prefersReduced ? undefined : { scale: 0.95 }}
              transition={prefersReduced ? undefined : { duration: 0.2 }}
            >
              JOIN
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white hover:text-green-400 hover:bg-green-400/10' 
                  : 'text-white hover:text-cyan-300 hover:bg-cyan-400/10'
              }`}
              whileTap={prefersReduced ? undefined : { scale: 0.95 }}
              transition={prefersReduced ? undefined : { duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <motion.div
            className="fixed top-16 left-4 right-4 bg-black/90 rounded-xl shadow-2xl border border-green-400/30 backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-green-400 bg-green-400/20'
                      : 'text-white hover:text-green-400 hover:bg-green-400/10'
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#join"
                className="block px-4 py-3 text-sm font-semibold text-black bg-green-400 rounded-lg hover:bg-green-300 transition-colors duration-200 text-center mt-4 border border-green-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                JOIN
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
