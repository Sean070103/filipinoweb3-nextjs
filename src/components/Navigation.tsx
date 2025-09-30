'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.classList.toggle('window-scroll', window.scrollY > 100);
      }
      // Active section underline
      const links = document.querySelectorAll('.nav__menu a');
      const sections = Array.from(links).map(l => document.querySelector((l as HTMLAnchorElement).getAttribute('href') || '')).filter(Boolean) as HTMLElement[];
      const scrollPos = window.scrollY + 120;
      sections.forEach((sec, idx) => {
        const link = links[idx] as HTMLElement;
        if (sec && link) {
          const top = sec.offsetTop;
          const bottom = top + sec.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/community", label: "Community" },
    { href: "#team", label: "Team" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      aria-label="Primary navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container nav__container">
        <motion.a 
          href="/" 
          className="nav__brand" 
          aria-label="FW3 Home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h4>FW3</h4>
        </motion.a>
        
        <ul className={`nav__menu ${isMenuOpen ? 'flex' : 'hidden'}`}>
          {menuItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.a 
                href={item.href} 
                onClick={closeMenu}
                whileHover={{ 
                  scale: 1.05,
                  color: "#22d3ee"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>
        
        <motion.a 
          href="#contact" 
          className="btn btn-secondary nav__cta" 
          aria-label="Join our community"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Join
        </motion.a>
        
        <motion.button 
          id="open-menu-btn" 
          onClick={toggleMenu}
          style={{ display: isMenuOpen ? 'none' : 'inline-block' }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <i className="uil uil-bars"></i>
        </motion.button>
        
        <motion.button 
          id="close-menu-btn" 
          onClick={closeMenu}
          style={{ display: isMenuOpen ? 'inline-block' : 'none' }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <i className="uil uil-multiply"></i>
        </motion.button>
      </div>
    </motion.nav>
  );
}
