'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, activeSection, onNavigate }: MobileMenuProps) {
  const prefersReduced = useReducedMotion();

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'events', label: 'Events', href: '#events' },
    { id: 'contact', label: 'Contact', href: '#contact' },
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
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          initial={prefersReduced ? undefined : { opacity: 0 }}
          animate={prefersReduced ? undefined : { opacity: 1 }}
          exit={prefersReduced ? undefined : { opacity: 0 }}
          transition={prefersReduced ? undefined : { duration: 0.3 }}
          onClick={handleBackdropClick}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-md border-l border-gray-800 z-50"
        initial={prefersReduced ? undefined : { x: '100%' }}
        animate={prefersReduced ? undefined : { x: isOpen ? 0 : '100%' }}
        exit={prefersReduced ? undefined : { x: '100%' }}
        transition={prefersReduced ? undefined : { duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">FW</span>
              </div>
              <span className="text-white font-bold text-lg">FilipinoWeb3</span>
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black rounded-md"
              whileHover={prefersReduced ? undefined : { scale: 1.1 }}
              whileTap={prefersReduced ? undefined : { scale: 0.9 }}
              transition={prefersReduced ? undefined : { duration: 0.2 }}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
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
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black ${
                      activeSection === item.id
                        ? 'bg-yellow-400/20 text-yellow-400 border-l-4 border-yellow-400'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    whileHover={prefersReduced ? undefined : { x: 8 }}
                    transition={prefersReduced ? undefined : { duration: 0.2 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CTA Section */}
          <motion.div
            className="p-6 border-t border-gray-800"
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
              className="block w-full text-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={prefersReduced ? undefined : { scale: 1.02 }}
              whileTap={prefersReduced ? undefined : { scale: 0.98 }}
              transition={prefersReduced ? undefined : { duration: 0.2 }}
            >
              Join Community
            </motion.a>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Follow us</p>
              <div className="flex space-x-3">
                {[
                  { name: 'Facebook', href: 'https://www.facebook.com/groups/filipinoweb3communitybuilders' },
                  { name: 'Telegram', href: 'https://t.me/Filipinocryptomanagers' },
                  { name: 'Twitter', href: 'https://twitter.com/filipinoweb3' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/filipino-web3-community-builders/' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                    whileHover={prefersReduced ? undefined : { scale: 1.1, y: -2 }}
                    whileTap={prefersReduced ? undefined : { scale: 0.95 }}
                    transition={prefersReduced ? undefined : { duration: 0.2 }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.name === 'Facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.name === 'Telegram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    )}
                    {social.name === 'Twitter' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                    {social.name === 'LinkedIn' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

