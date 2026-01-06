'use client';

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const prefersReduced = useReducedMotion();

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/groups/filipinoweb3communitybuilders',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/filipinoweb3',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: '#000000'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/filipino-web3-community-builders/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: '#0077B5'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Filipinocryptomanagers',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      color: '#0088cc'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Team', href: '/#team' },
    { label: 'FAQs', href: '/#faqs' },
    { label: 'Contact', href: '/#contact' },
  ];

  const pages = [
    { label: 'Labs', href: '/labs' },
    { label: 'Careers', href: '/careers' },
    { label: 'Community', href: '/community' },
  ];

  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        background: '#000000',
        borderTop: '4px solid #06b6d4',
        imageRendering: 'pixelated',
        WebkitFontSmoothing: 'none',
        fontSmooth: 'never'
      }}
    >
      {/* Pixelated grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%2306b6d4'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%2322c55e'/%3E%3C/svg%3E")`,
        backgroundSize: '8px 8px',
        imageRendering: 'pixelated'
      }} />

      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-1" style={{
        background: 'linear-gradient(90deg, transparent 0%, #06b6d4 50%, transparent 100%)',
        boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Brand Section */}
          <motion.div
            className="flex flex-col"
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? undefined : { duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-4 focus:outline-none group">
              <div 
                className="inline-flex items-center gap-3 px-4 py-3"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)',
                  border: '3px solid #000000',
                  boxShadow: '4px 4px 0 #000000',
                  imageRendering: 'pixelated'
                }}
              >
                <span 
                  className="font-black text-xl"
                  style={{
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    color: '#000000',
                    letterSpacing: '0.1em',
                    textShadow: '2px 2px 0 rgba(255,255,255,0.3)'
                  }}
                >
                  FW3
                </span>
              </div>
            </Link>
            <p 
              className="text-sm mb-4"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.5rem, 1vw, 0.7rem)',
                color: '#06b6d4',
                lineHeight: 1.6,
                letterSpacing: '0.05em'
              }}
            >
              BUILDING THE FUTURE OF WEB3 IN THE PHILIPPINES
            </p>
            <p 
              className="text-xs"
              style={{
                fontFamily: '"Courier New", monospace',
                color: '#6b7280',
                letterSpacing: '0.05em'
              }}
            >
              © 2026 Filipino Web3. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col"
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? undefined : { duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-4 font-bold"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                color: '#22c55e',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                minHeight: 'clamp(1.5rem, 2vw, 2rem)',
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              QUICK LINKS
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {quickLinks.map((link) => (
                <li key={link.label} className="m-0 p-0">
                  <Link
                    href={link.href}
                    className="block py-1 transition-all duration-200 hover:translate-x-2 focus:outline-none"
                    style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: 'clamp(0.65rem, 1vw, 0.85rem)',
                      color: '#e5e7eb',
                      letterSpacing: '0.05em'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#06b6d4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#e5e7eb';
                    }}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pages */}
          <motion.div
            className="flex flex-col"
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? undefined : { duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-4 font-bold"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                color: '#22c55e',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                minHeight: 'clamp(1.5rem, 2vw, 2rem)',
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              PAGES
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {pages.map((page) => (
                <li key={page.label} className="m-0 p-0">
                  <Link
                    href={page.href}
                    className="block py-1 transition-all duration-200 hover:translate-x-2 focus:outline-none"
                    style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: 'clamp(0.65rem, 1vw, 0.85rem)',
                      color: '#e5e7eb',
                      letterSpacing: '0.05em'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#06b6d4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#e5e7eb';
                    }}
                  >
                    → {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div 
          className="pt-6 border-t-2 mt-8"
          style={{
            borderColor: '#06b6d4',
            borderStyle: 'outset'
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <span 
                className="text-xs whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  color: '#6b7280',
                  letterSpacing: '0.1em'
                }}
              >
                CONNECT:
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-end w-full sm:w-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  style={{
                    width: 'clamp(36px, 5vw, 48px)',
                    height: 'clamp(36px, 5vw, 48px)',
                    background: social.color,
                    border: '3px solid #000000',
                    boxShadow: '3px 3px 0 #000000',
                    imageRendering: 'pixelated',
                    WebkitFontSmoothing: 'none'
                  }}
                  whileHover={prefersReduced ? undefined : { 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: '4px 4px 0 #000000'
                  }}
                  whileTap={prefersReduced ? undefined : { scale: 0.95 }}
                  transition={prefersReduced ? undefined : { 
                    duration: 0.15, 
                    delay: index * 0.05 
                  }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div style={{ color: '#ffffff', width: '20px', height: '20px' }}>
                  {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
