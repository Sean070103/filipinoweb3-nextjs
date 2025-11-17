'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

interface RetroGamingMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function RetroGamingMobileMenu({ isOpen, onClose, activeSection, onNavigate }: RetroGamingMobileMenuProps) {
  const prefersReduced = useReducedMotion();

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'events', label: 'EVENTS', href: '#events' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close menu on outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Retro Backdrop */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
          initial={prefersReduced ? undefined : { opacity: 0 }}
          animate={prefersReduced ? undefined : { opacity: 1 }}
          exit={prefersReduced ? undefined : { opacity: 0 }}
          transition={prefersReduced ? undefined : { duration: 0.3 }}
          onClick={handleBackdropClick}
        />
      )}

      {/* Retro Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black border-l-4 border-green-400 z-50"
        style={{
          imageRendering: 'pixelated',
          boxShadow: '-4px 0 0px #008000',
        }}
        initial={prefersReduced ? undefined : { x: '100%' }}
        animate={prefersReduced ? undefined : { x: isOpen ? 0 : '100%' }}
        exit={prefersReduced ? undefined : { x: '100%' }}
        transition={prefersReduced ? undefined : { duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex flex-col h-full">
          {/* Retro Header */}
          <div className="flex items-center justify-between p-6 border-b-4 border-green-400">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 bg-green-400 border-2 border-green-600 flex items-center justify-center"
                style={{ imageRendering: 'pixelated' }}
              >
                <span 
                  className="text-black font-bold text-lg"
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
                className="text-green-400 font-bold text-lg"
                style={{
                  fontFamily: 'Courier New, monospace',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                  textShadow: '2px 2px 0px #008000',
                  letterSpacing: '0.1em',
                }}
              >
                FWEB3
              </span>
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 text-green-400 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black border-2 border-green-400 hover:border-green-300"
              style={{
                imageRendering: 'pixelated',
                boxShadow: '2px 2px 0px #008000',
              }}
              whileHover={prefersReduced ? undefined : { scale: 1.1 }}
              whileTap={prefersReduced ? undefined : { scale: 0.9 }}
              transition={prefersReduced ? undefined : { duration: 0.2 }}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          {/* Retro Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={prefersReduced ? undefined : { opacity: 0, x: 20 }}
                  animate={prefersReduced ? undefined : { opacity: 1, x: 0 }}
                  transition={prefersReduced ? undefined : { 
                    duration: 0.3, 
                    delay: index * 0.1 
                  }}
                >
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                      onClose();
                    }}
                    className={`block px-4 py-3 text-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black border-2 ${
                      activeSection === item.id
                        ? 'bg-green-400 text-black border-green-600'
                        : 'text-green-400 hover:text-green-300 hover:bg-green-400/10 border-green-400 hover:border-green-300'
                    }`}
                    style={{
                      fontFamily: 'Courier New, monospace',
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                      textShadow: activeSection === item.id ? 'none' : '1px 1px 0px #008000',
                      boxShadow: activeSection === item.id ? '4px 4px 0px #008000' : '2px 2px 0px #008000',
                      letterSpacing: '0.1em',
                    }}
                    whileHover={prefersReduced ? undefined : { x: 8, scale: 1.02 }}
                    whileTap={prefersReduced ? undefined : { scale: 0.98 }}
                    transition={prefersReduced ? undefined : { duration: 0.2 }}
                  >
                    [{item.label}]
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Retro CTA Section */}
          <motion.div
            className="p-6 border-t-4 border-green-400"
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? undefined : { 
              duration: 0.3, 
              delay: 0.4 
            }}
          >
            <motion.a
              href="#join"
              onClick={onClose}
              className="block w-full text-center px-6 py-3 bg-cyan-400 text-black font-bold border-2 border-cyan-600 hover:bg-cyan-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              style={{
                fontFamily: 'Courier New, monospace',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never',
                textShadow: '1px 1px 0px #008080',
                boxShadow: '4px 4px 0px #008080',
                letterSpacing: '0.1em',
              }}
              whileHover={prefersReduced ? undefined : { scale: 1.02, y: -2 }}
              whileTap={prefersReduced ? undefined : { scale: 0.98, y: 0 }}
              transition={prefersReduced ? undefined : { duration: 0.2 }}
            >
              [JOIN GAME]
            </motion.a>
            
            {/* Retro Social Links */}
            <div className="mt-6">
              <p 
                className="text-green-400 text-sm mb-3 font-bold"
                style={{
                  fontFamily: 'Courier New, monospace',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                  textShadow: '1px 1px 0px #008000',
                  letterSpacing: '0.1em',
                }}
              >
                &gt; FOLLOW US
              </p>
              <div className="flex space-x-3">
                {[
                  { name: 'Facebook', href: 'https://www.facebook.com/groups/filipinoweb3communitybuilders', color: '#00ff00' },
                  { name: 'Telegram', href: 'https://t.me/Filipinocryptomanagers', color: '#00ffff' },
                  { name: 'Twitter', href: 'https://twitter.com/filipinoweb3', color: '#ff00ff' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/filipino-web3-community-builders/', color: '#ffff00' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
                    style={{
                      backgroundColor: social.color,
                      borderColor: social.color,
                      imageRendering: 'pixelated',
                      boxShadow: '2px 2px 0px #000000',
                    }}
                    whileHover={prefersReduced ? undefined : { scale: 1.1, y: -2 }}
                    whileTap={prefersReduced ? undefined : { scale: 0.95 }}
                    transition={prefersReduced ? undefined : { duration: 0.2 }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span 
                      className="text-black font-bold text-xs"
                      style={{
                        fontFamily: 'Courier New, monospace',
                        imageRendering: 'pixelated',
                        WebkitFontSmoothing: 'none',
                        fontSmooth: 'never',
                      }}
                    >
                      {social.name[0]}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Retro Contact */}
            <div className="mt-4">
              <p 
                className="text-green-400 text-sm"
                style={{
                  fontFamily: 'Courier New, monospace',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                  textShadow: '1px 1px 0px #008000',
                }}
              >
                <a 
                  href="mailto:filipinoweb3@gmail.com" 
                  className="hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
                >
                  &gt; filipinoweb3@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}








