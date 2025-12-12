'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users } from 'lucide-react';

export default function CommunityCTA() {
  return (
    <section id="community-cta" className="relative py-20 overflow-hidden">
      {/* Pixelated Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: '8px 8px',
        imageRendering: 'pixelated'
      }} />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
            style={{
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: '400',
              color: '#FFFFFF',
              letterSpacing: '0.1em',
              textShadow: '4px 4px 0px #000000, 0 0 20px rgba(34, 197, 94, 0.5)',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none',
              fontSmooth: 'never',
              textRendering: 'optimizeSpeed',
              lineHeight: '1.4'
            }}
          >
            READY TO BUILD THE
            <br />
            <span style={{ 
              color: '#22c55e',
              textShadow: '4px 4px 0px #000000, 0 0 30px rgba(34, 197, 94, 0.8)'
            }}>
              FUTURE?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
            style={{
              fontFamily: '"Inter", "Montserrat", sans-serif',
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              color: '#FFFFFF',
              lineHeight: '1.7',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}
          >
            Join our community of Web3 builders, developers, and innovators.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/community"
              className="inline-block"
              style={{
                textDecoration: 'none'
              }}
            >
              <div
                className="relative inline-flex items-center gap-3 px-8 py-4"
                style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  border: '4px solid #000000',
                  borderRadius: '0px',
                  boxShadow: '6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.2), 0 0 20px rgba(34, 197, 94, 0.5)',
                  cursor: 'pointer',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                  fontSmooth: 'never',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '8px 8px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.3), 0 0 30px rgba(34, 197, 94, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '6px 6px 0px rgba(0,0,0,0.8), inset 2px 2px 0px rgba(255,255,255,0.2), 0 0 20px rgba(34, 197, 94, 0.5)';
                }}
              >
                {/* Scanline overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
                  imageRendering: 'pixelated'
                }} />
                
                <Users 
                  size={24} 
                  style={{ 
                    color: '#000000',
                    filter: 'drop-shadow(2px 2px 0px rgba(255,255,255,0.3))',
                    imageRendering: 'pixelated'
                  }} 
                />
                <span
                  style={{
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
                    fontWeight: '400',
                    color: '#000000',
                    letterSpacing: '0.1em',
                    textShadow: '2px 2px 0px rgba(255,255,255,0.3)',
                    imageRendering: 'pixelated',
                    WebkitFontSmoothing: 'none',
                    fontSmooth: 'never',
                    textRendering: 'optimizeSpeed',
                    position: 'relative',
                    zIndex: 10
                  }}
                >
                  JOIN OUR COMMUNITY
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

