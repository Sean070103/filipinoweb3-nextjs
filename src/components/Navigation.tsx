"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, FlaskConical, Briefcase, Users } from "lucide-react";

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
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="navbar-pixel">
        <div className="navbar-container">
          {/* Desktop / tablet links */}
          <div className="navbar-links-desktop">
            <div 
              ref={dropdownRef} 
              className="navbar-dropdown-wrapper"
            >
              <div className="navbar-home-group">
                {/* FW3 brand: always navigates home */}
                <div className="navbar-brand" onClick={goToHome}>
                  <span className="navbar-brand-chip">FW3</span>
                </div>

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

            <Link href="/community" className="navbar-link">
              <button className="navbar-button navbar-community">
                <Users className="navbar-icon" />
                COMMUNITY
              </button>
            </Link>
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
                borderBottom: '2px solid #22c55e',
                textAlign: 'center'
              }}>
                <span style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                  color: '#22c55e',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  MENU
            </span>
              </div>
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

              <Link href="/community" className="navbar-link" onClick={() => setMobileOpen(false)}>
                <button className="navbar-button navbar-community">
                  <Users className="navbar-icon" />
                  COMMUNITY
                </button>
          </Link>
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
          background: #055709; /* green instead of blue */
          border: 2px solid #22c55e;
          border-top: 4px solid;
          border-image: linear-gradient(90deg, #CE1126 0%, #CE1126 33%, #0038A8 33%, #0038A8 66%, #FCD116 66%, #FCD116 100%) 1;
          box-shadow:
            0 0 0 2px #000000,
            0 4px 0 #000000,
            inset 0 0 20px rgba(206, 17, 38, 0.1),
            inset 0 0 20px rgba(0, 56, 168, 0.1),
            inset 0 0 20px rgba(252, 209, 22, 0.1);
          border-radius: 0;
          pointer-events: auto; /* re-enable interaction on inner content */
          position: relative;
        }

        .navbar-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(206, 17, 38, 0.03) 2px, rgba(206, 17, 38, 0.03) 4px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 2px, rgba(0, 56, 168, 0.03) 2px, rgba(0, 56, 168, 0.03) 4px);
          pointer-events: none;
          z-index: 0;
        }

        .navbar-brand {
          margin-right: 0;
          padding: 12px 18px;
          background: #055709;
          border: 3px solid #22c55e;
          box-shadow: 4px 4px 0 #000000;
          cursor: pointer;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .navbar-brand::before {
          content: '🇵🇭';
          position: absolute;
          top: 4px;
          left: 4px;
          font-size: 10px;
          opacity: 0.8;
          z-index: 2;
        }

        .navbar-brand::after {
          content: '';
          position: absolute;
          top: 6px;
          right: 6px;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #FCD116 0%, #CE1126 50%, #0038A8 100%);
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(252, 209, 22, 0.6);
          z-index: 2;
        }

        .navbar-brand-chip {
          font-family: var(--font-press-start-2p), "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #ffffff;
          text-transform: uppercase;
          text-shadow: 1px 1px 0 #000000;
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
          background: #033a05;
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
          background: #022c03;
          border-color: #22c55e;
        }

        .navbar-toggle-open {
          background: #15803d;
          box-shadow: 3px 3px 0 #000000;
          border-color: #4ade80;
        }

        .navbar-button {
          background: #033a05; /* green base */
          border: 2px solid #055709;
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
          background: #022c03;
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0 #000000;
          border-color: #22c55e;
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
          background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
          border-color: #4ade80;
          color: #03110c;
          text-shadow: 1px 1px 0 #4ade8040;
        }

        .navbar-home:hover {
          background: linear-gradient(180deg, #4ade80 0%, #15803d 100%);
          border-color: #86efac;
        }

        .navbar-labs {
          background: linear-gradient(180deg, #ff4444 0%, #CE1126 100%);
          border-color: #ff6b6b;
          color: #ffffff;
          text-shadow: 1px 1px 0 #000000;
        }

        .navbar-labs:hover {
          background: linear-gradient(180deg, #ff6666 0%, #a00d1e 100%);
          border-color: #ff8e8e;
        }

        .navbar-careers {
          background: linear-gradient(180deg, #1e4dd8 0%, #0038A8 100%);
          border-color: #4a6cf7;
          color: #ffffff;
          text-shadow: 1px 1px 0 #000000;
        }

        .navbar-careers:hover {
          background: linear-gradient(180deg, #3b5fe6 0%, #002d87 100%);
          border-color: #6b8aff;
        }

        .navbar-community {
          background: linear-gradient(180deg, #ffd700 0%, #FCD116 100%);
          border-color: #ffed4e;
          color: #000000;
          text-shadow: 1px 1px 0 #ffffff;
        }

        .navbar-community:hover {
          background: linear-gradient(180deg, #ffe033 0%, #e6c014 100%);
          border-color: #fff366;
        }

        .navbar-icon {
          width: 12px;
          height: 12px;
          color: #ffffff;
          transition: color 0.15s steps(2, end), transform 0.15s steps(2, end);
        }

        .navbar-button:hover .navbar-icon {
          transform: scale(1.2) rotate(5deg);
          color: #22c55e;
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
          color: #22c55e;
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
          background: #033a05; /* green dropdown */
          border: 2px solid #22c55e;
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
          position: relative;
          z-index: 1;
        }

        .navbar-links-desktop::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 60%;
          background: linear-gradient(180deg, #CE1126 0%, #0038A8 50%, #FCD116 100%);
          opacity: 0.4;
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
          background: rgba(34, 197, 94, 0.1);
        }

        .navbar-hamburger span {
          width: 20px;
          height: 2px;
          background: #22c55e;
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
          border-top: 3px solid #22c55e;
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
            border-bottom: 2px solid #22c55e;
            box-shadow: 0 2px 0 #000000;
            background: rgba(5, 87, 9, 0.95);
            backdrop-filter: blur(10px);
            position: relative;
            z-index: 10002;
          }

          .navbar-brand {
            margin-right: 0;
            padding: 8px 14px;
          }

          .navbar-home-group {
            display: flex;
            align-items: stretch;
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
            border: 2px solid #22c55e;
            background: rgba(34, 197, 94, 0.15);
            border-left: 4px solid #22c55e;
            box-shadow: 2px 2px 0 #000000;
            transition: all 0.2s ease;
            margin: 0;
            pointer-events: auto;
            color: #ffffff !important;
            font-weight: 600;
          }

          .navbar-mobile-menu .navbar-button:hover,
          .navbar-mobile-menu .navbar-link .navbar-button:hover {
            background: rgba(34, 197, 94, 0.3);
            border-left-color: #4ade80;
            border-color: #4ade80;
            transform: translateX(4px);
            box-shadow: 3px 3px 0 #000000, -4px 0 12px rgba(34, 197, 94, 0.4);
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
          background: linear-gradient(to bottom, #22c55e, #16a34a);
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
