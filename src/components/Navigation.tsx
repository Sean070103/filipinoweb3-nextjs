"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Home, FlaskConical, Briefcase, Mail } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === undefined;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToHome = () => {
    if (!isHome) {
      window.location.href = '/';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string, category?: string | null) => {
    if (!isHome) {
      if (category) {
        window.location.href = `/#${sectionId}?category=${category}`;
      } else {
        window.location.href = `/#${sectionId}`;
      }
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (category) {
        sessionStorage.setItem('faqCategory', category);
      }
    }
    setActiveDropdown(null);
  };

  const homeSections = [
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "faqs", label: "FAQs", category: null },
  ];

  return (
    <>
      <nav className="navbar-pixel">
        <div className="navbar-container">
          <div className="navbar-brand" onClick={goToHome}>
            <span className="navbar-brand-chip">FW3</span>
          </div>

          {/* Desktop / tablet links */}
          <div className="navbar-links-desktop">
            <div 
              ref={dropdownRef} 
              className="navbar-dropdown-wrapper"
            >
              <div className="navbar-home-group">
                {/* Main HOME button: always navigates home */}
                <button
                  className="navbar-button navbar-home"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    goToHome();
                  }}
                >
                  <Home className="navbar-icon" />
                  HOME
                </button>

                {/* Small toggle button: only controls dropdown */}
                <button
                  className={`navbar-toggle ${activeDropdown === "home" ? "navbar-toggle-open" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveDropdown(activeDropdown === "home" ? null : "home");
                  }}
                >
                  <ChevronDown className={`navbar-chevron ${activeDropdown === "home" ? "navbar-chevron-open" : ""}`} />
                </button>
              </div>

              {activeDropdown === "home" && (
                <>
                  <div 
                    className="navbar-backdrop" 
                    onClick={() => setActiveDropdown(null)}
                    onMouseDown={(e) => e.preventDefault()}
                  />
                  <div 
                    className="navbar-dropdown" 
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    {homeSections.map((section) => (
                      <button
                        key={section.id}
                        className="navbar-dropdown-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToSection(section.id, section.category);
                        }}
                      >
                        {section.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link href="/labs" className="navbar-link">
              <button className="navbar-button navbar-labs">
                <FlaskConical className="navbar-icon" />
                LABS
              </button>
            </Link>

            <Link href="/careers" className="navbar-link">
              <button className="navbar-button navbar-careers">
                <Briefcase className="navbar-icon" />
                CAREERS
              </button>
          </Link>

            <button className="navbar-button navbar-contact" onClick={() => scrollToSection("contact")}>
              <Mail className="navbar-icon" />
              CONTACT
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`navbar-hamburger ${mobileOpen ? "navbar-hamburger-open" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileOpen(!mobileOpen);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile dropdown menu + backdrop */}
        {mobileOpen && (
          <>
            <div
              className="navbar-mobile-backdrop"
              onClick={() => setMobileOpen(false)}
            />
            <div className="navbar-mobile-menu">
              <div style={{
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '2px solid #06b6d4',
                textAlign: 'center'
              }}>
                <span style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                  color: '#06b6d4',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  MENU
                </span>
              </div>
              <button
                className="navbar-button navbar-home"
                onClick={(e) => {
                  e.preventDefault();
                  goToHome();
                  setMobileOpen(false);
                }}
              >
                <Home className="navbar-icon" />
                HOME
              </button>

              {homeSections.map((section) => (
                <button
                  key={section.id}
                  className="navbar-button"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id, section.category);
                    setMobileOpen(false);
                  }}
                >
                  {section.label}
                </button>
              ))}

              <Link href="/labs" className="navbar-link" onClick={() => setMobileOpen(false)}>
                <button className="navbar-button navbar-labs">
                  <FlaskConical className="navbar-icon" />
                  LABS
                </button>
              </Link>

              <Link href="/careers" className="navbar-link" onClick={() => setMobileOpen(false)}>
                <button className="navbar-button navbar-careers">
                  <Briefcase className="navbar-icon" />
                  CAREERS
                </button>
          </Link>

              <button
                className="navbar-button navbar-contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  setMobileOpen(false);
                }}
              >
                <Mail className="navbar-icon" />
                CONTACT
              </button>
        </div>
          </>
        )}
      </nav>
      
      <style>{`
        .navbar-pixel {
          position: fixed;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          background: transparent !important;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
          width: auto;
          height: auto;
          image-rendering: pixelated !important;
          image-rendering: -moz-crisp-edges !important;
          image-rendering: crisp-edges !important;
          -webkit-font-smoothing: none !important;
          -moz-osx-font-smoothing: unset !important;
          font-smooth: never !important;
          pointer-events: none; /* container passes clicks through to buttons */
        }

        .navbar-container {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 4px 6px;
          margin: 0;
          background: #022c44; /* deep blue instead of black */
          border: 2px solid #06b6d4;
          box-shadow:
            0 0 0 2px #000000,
            0 4px 0 #000000;
          border-radius: 0;
          pointer-events: auto; /* re-enable interaction on inner content */
        }

        .navbar-brand {
          margin-right: 8px;
          padding: 12px 18px;
          background: linear-gradient(180deg, #34d399 0%, #059669 100%);
          border: 3px solid #ecfdf5;
          box-shadow: 4px 4px 0 #000000;
          cursor: pointer;
          display: flex;
          align-items: center;
          position: relative;
        }

        .navbar-brand::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #bbf7d0;
          box-shadow: 0 0 6px rgba(74, 222, 128, 0.9);
        }

        .navbar-brand-chip {
          font-family: var(--font-press-start-2p), "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #ecfdf5;
          text-transform: uppercase;
          text-shadow: 1px 1px 0 #16a34a;
        }

        .navbar-dropdown-wrapper {
          position: relative;
        }

        .navbar-home-group {
          display: flex;
          align-items: stretch;
          border-radius: 0;
          overflow: hidden;
          box-shadow: 3px 3px 0 #000000;
        }

        .navbar-toggle {
          background: #053c5e;
          border: 2px solid #4b5563;
          border-left: none;
          border-style: outset;
          border-radius: 0;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          image-rendering: pixelated !important;
          -webkit-font-smoothing: none !important;
        }

        .navbar-toggle:hover {
          background: #111827;
          border-color: #06b6d4;
        }

        .navbar-toggle-open {
          background: #0f766e;
          box-shadow: 3px 3px 0 #000000;
          border-color: #22c55e;
        }

        .navbar-button {
          background: #0e1f2f; /* neutral base */
          border: 2px solid #1e3a8a;
          border-style: outset;
          border-radius: 0;
          color: #e5e7eb;
          font-family: var(--font-press-start-2p), "Courier New", monospace;
          font-size: 10px;
          letter-spacing: 0.05em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 16px;
          transition: background 0.15s steps(2, end), transform 0.15s steps(2, end), box-shadow 0.15s steps(2, end), border-color 0.15s steps(2, end), color 0.15s steps(2, end);
          text-transform: uppercase;
          image-rendering: pixelated !important;
          -webkit-font-smoothing: none !important;
          transform: scale(1);
          box-shadow: 3px 3px 0 #000000;
        }

        .navbar-button::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(248, 250, 252, 0.9);
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.9);
        }

        .navbar-button:hover {
          background: #0f172a;
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0 #000000;
          border-color: #06b6d4;
          color: #f9fafb;
        }

        .navbar-button:active {
          transform: translate(0, 0);
          border-style: inset;
          box-shadow: 1px 1px 0 #000000;
        }

        .navbar-button-active {
          background: #0f766e;
          box-shadow: 4px 4px 0 #000000;
          border-color: #a7f3d0;
          color: #0f172a;
        }

        .navbar-button-active:hover {
          background: #22c55e !important;
          box-shadow: 5px 5px 0 #000000;
        }

        /* Per-button color accents */
        .navbar-home {
          background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%);
          border-color: #7dd3fc;
          color: #01111f;
          text-shadow: 1px 1px 0 #7dd3fc40;
        }

        .navbar-home:hover {
          background: linear-gradient(180deg, #67e8f9 0%, #0369a1 100%);
          border-color: #bae6fd;
        }

        .navbar-labs {
          background: linear-gradient(180deg, #34d399 0%, #059669 100%);
          border-color: #bbf7d0;
          color: #03110c;
          text-shadow: 1px 1px 0 #86efac50;
        }

        .navbar-labs:hover {
          background: linear-gradient(180deg, #6ee7b7 0%, #047857 100%);
          border-color: #dcfce7;
        }

        .navbar-careers {
          background: linear-gradient(180deg, #fb923c 0%, #ea580c 100%);
          border-color: #fed7aa;
          color: #2a0c00;
          text-shadow: 1px 1px 0 #fed7aa60;
        }

        .navbar-careers:hover {
          background: linear-gradient(180deg, #fdba74 0%, #c2410c 100%);
          border-color: #ffe4c7;
        }

        .navbar-contact {
          background: linear-gradient(180deg, #c084fc 0%, #9333ea 100%);
          border-color: #f5d0fe;
          color: #230334;
          text-shadow: 1px 1px 0 #f5d0fe60;
        }

        .navbar-contact:hover {
          background: linear-gradient(180deg, #d8b4fe 0%, #7e22ce 100%);
          border-color: #fde4ff;
        }

        .navbar-icon {
          width: 12px;
          height: 12px;
          color: #ffffff;
          transition: color 0.15s steps(2, end), transform 0.15s steps(2, end);
        }

        .navbar-button:hover .navbar-icon {
          transform: scale(1.2) rotate(5deg);
          color: #06b6d4;
        }

        .navbar-chevron {
          width: 12px;
          height: 12px;
          color: #ffffff;
          transition: transform 0.15s steps(2, end), color 0.15s steps(2, end);
        }

        .navbar-chevron-open {
          transform: rotate(180deg) scale(1.1);
        }

        .navbar-button:hover .navbar-chevron {
          transform: scale(1.1);
          color: #06b6d4;
        }

        .navbar-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10000;
          background: transparent;
        }

        .navbar-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: #013954; /* blue dropdown */
          border: 2px solid #06b6d4;
          box-shadow: 4px 4px 0 #000000;
          z-index: 10001;
          min-width: 160px;
          width: max-content;
          display: flex;
          flex-direction: column;
          image-rendering: pixelated !important;
          -webkit-font-smoothing: none !important;
          animation: dropdownSlideIn 0.15s steps(2, end);
          margin-top: 4px;
        }

        .navbar-links-desktop {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          margin-left: 8px;
          padding: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .navbar-hamburger:hover {
          background: rgba(6, 182, 212, 0.1);
        }

        .navbar-hamburger span {
          width: 20px;
          height: 2px;
          background: #06b6d4;
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .navbar-hamburger-open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .navbar-hamburger-open span:nth-child(2) {
          opacity: 0;
        }

        .navbar-hamburger-open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .navbar-mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10000;
          background: #011420;
          border-top: 3px solid #06b6d4;
          padding: 80px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          height: 100vh;
          overflow-y: auto;
          animation: slideDown 0.3s ease-out;
          pointer-events: auto;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .navbar-mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.7);
          animation: fadeIn 0.2s ease-out;
          pointer-events: auto;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .navbar-pixel {
            left: 0;
            right: 0;
            transform: none;
            justify-content: center;
            top: 0;
            padding: 0;
            z-index: 10001;
          }

          .navbar-container {
            width: 100%;
            max-width: 100%;
            justify-content: space-between;
            padding: 8px 16px;
            border: none;
            border-bottom: 2px solid #06b6d4;
            box-shadow: 0 2px 0 #000000;
            background: rgba(2, 44, 68, 0.95);
            backdrop-filter: blur(10px);
            position: relative;
            z-index: 10002;
          }

          .navbar-brand {
            margin-right: 0;
            padding: 8px 14px;
          }

          .navbar-links-desktop {
            display: none;
          }

          .navbar-hamburger {
            display: flex;
          }

          .navbar-mobile-menu .navbar-button,
          .navbar-mobile-menu .navbar-link .navbar-button {
            width: 100%;
            justify-content: flex-start;
            padding: 16px 20px;
            font-size: 12px;
            border: 2px solid #06b6d4;
            background: rgba(6, 182, 212, 0.15);
            border-left: 4px solid #06b6d4;
            box-shadow: 2px 2px 0 #000000;
            transition: all 0.2s ease;
            margin: 0;
            pointer-events: auto;
            color: #ffffff !important;
            font-weight: 600;
          }

          .navbar-mobile-menu .navbar-button:hover,
          .navbar-mobile-menu .navbar-link .navbar-button:hover {
            background: rgba(6, 182, 212, 0.3);
            border-left-color: #22c55e;
            border-color: #22c55e;
            transform: translateX(4px);
            box-shadow: 3px 3px 0 #000000, -4px 0 12px rgba(6, 182, 212, 0.4);
          }

          .navbar-mobile-menu .navbar-button:active,
          .navbar-mobile-menu .navbar-link .navbar-button:active {
            transform: translateX(2px);
          }

          .navbar-mobile-menu .navbar-link {
            width: 100%;
            display: block;
            text-decoration: none;
          }
        }

        @media (min-width: 769px) {
          .navbar-mobile-menu {
            display: none;
          }

          .navbar-mobile-backdrop {
            display: none;
          }
        }

        @keyframes dropdownSlideIn {
          from {
          opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .navbar-dropdown-item {
          width: 100%;
          text-align: left;
          padding: 10px 16px;
          background: transparent;
          border: none;
          color: #e0f2fe;
          font-family: var(--font-press-start-2p), "Courier New", monospace;
          font-size: 9px;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          display: block;
          min-height: 36px;
          text-transform: uppercase;
          image-rendering: pixelated !important;
          -webkit-font-smoothing: none !important;
          position: relative;
          transform: translateX(0);
        }

        .navbar-dropdown-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: linear-gradient(to bottom, #06b6d4, #a855f7);
          transition: width 0.3s ease;
          z-index: -1;
        }

        .navbar-dropdown-item:hover {
          background: #0f172a;
          color: #f9fafb;
          transform: translateX(2px);
          box-shadow: 2px 2px 0 #000000;
        }

        .navbar-dropdown-item:hover::before {
          width: 3px;
        }

        .navbar-dropdown-item:active {
          transform: translateX(2px) scale(0.98);
        }

        .navbar-link {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
