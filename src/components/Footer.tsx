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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      shape: 'circle'
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      shape: 'circle'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/filipinoweb3',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      shape: 'square'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/filipino-web3-community-builders/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      shape: 'square'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Filipinocryptomanagers',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5"/>
        </svg>
      ),
      shape: 'circle'
    }
  ];

  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #030711 0%, #051129 50%, #020713 100%)'
      }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-8 bottom-0 h-px bg-white/5 blur-sm" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-nowrap">
          {/* Left Side - Logo & Copyright */}
          <motion.div
            className="flex items-center gap-3 flex-shrink-0"
            initial={prefersReduced ? undefined : { opacity: 0, x: -20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            transition={prefersReduced ? undefined : { duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-3 focus:outline-none group flex-shrink-0">
              <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full border border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.08)] flex-shrink-0">
                <span className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}>
                  FW
                </span>
              </div>
            </Link>
            <p className="text-white text-sm whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              FWEB3 2025. All rights reserved.
            </p>
          </motion.div>

          {/* Right Side - Social Icons */}
          <motion.div
            className="flex items-center gap-3 flex-shrink-0"
            initial={prefersReduced ? undefined : { opacity: 0, x: 20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            transition={prefersReduced ? undefined : { duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="hidden sm:block w-px h-6 bg-white/15" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-white hover:text-cyan-200 transition-colors duration-300 focus:outline-none"
                  whileHover={prefersReduced ? undefined : { scale: 1.1 }}
                  whileTap={prefersReduced ? undefined : { scale: 0.95 }}
                  transition={prefersReduced ? undefined : { duration: 0.2, delay: index * 0.05 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
