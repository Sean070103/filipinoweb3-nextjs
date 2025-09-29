'use client';

import { useState, useEffect } from 'react';

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

  return (
    <nav aria-label="Primary navigation">
      <div className="container nav__container">
        <a href="/" className="nav__brand" aria-label="FW3 Home">
          <h4>FW3</h4>
        </a>
        <ul className={`nav__menu ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="/community" onClick={closeMenu}>Community</a></li>
          <li><a href="#team" onClick={closeMenu}>Team</a></li>
          <li><a href="#faqs" onClick={closeMenu}>FAQs</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a href="#contact" className="btn btn-secondary nav__cta" aria-label="Join our community">Join</a>
        <button 
          id="open-menu-btn" 
          onClick={toggleMenu}
          style={{ display: isMenuOpen ? 'none' : 'inline-block' }}
        >
          <i className="uil uil-bars"></i>
        </button>
        <button 
          id="close-menu-btn" 
          onClick={closeMenu}
          style={{ display: isMenuOpen ? 'inline-block' : 'none' }}
        >
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
}
