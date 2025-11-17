'use client';

import { motion } from 'framer-motion';

const projects = [
  { name: 'BayanDAO', description: 'Community governance for local Web3 chapters', tag: 'DAO' },
  { name: 'Sari-Sari Pay', description: 'Micropayments for sari-sari stores using stablecoins', tag: 'Payments' },
  { name: 'Jeepney Pass', description: 'NFT-based commuter rewards and identity', tag: 'Identity' },
  { name: 'TerraRice', description: 'Supply chain provenance for rice farming', tag: 'Supply Chain' },
  { name: 'SalinKaalaman', description: 'Open education credentials on-chain', tag: 'Education' },
  { name: 'Kapitbahayan', description: 'Neighborhood mutual aid coordination', tag: 'Social' },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20">
      {/* Pixelated Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: '8px 8px',
        imageRendering: 'pixelated'
      }} />

      <div className="container relative z-10 ph-banig-border-top">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 
            className="text-5xl lg:text-6xl font-black text-white pixelated"
            style={{ 
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.05em',
              textShadow: '4px 4px 0px #000000',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none'
            }}
          >
            PROJECTS
          </h2>
          <div className="flex justify-center mt-6">
            <div className="ph-divider" />
          </div>
          <p 
            className="text-white mt-4 max-w-3xl mx-auto pixelated"
            style={{ 
              fontFamily: '"Courier New", monospace',
              fontWeight: 'bold',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
              color: '#ffffff'
            }}
          >
            Filipino-led pilots blending local insight with Web3 primitives.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-6 pixelated"
              style={{
                background: '#1a1a1a',
                border: '4px solid #ffffff',
                borderStyle: 'outset',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.5), inset -2px -2px 0px rgba(0,0,0,0.3)',
                imageRendering: 'pixelated'
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 
                  className="text-xl font-bold text-white pixelated"
                  style={{ 
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                    letterSpacing: '0.05em',
                    textShadow: '2px 2px 0px #000000',
                    imageRendering: 'pixelated',
                    WebkitFontSmoothing: 'none'
                  }}
                >
                  {p.name.toUpperCase()}
                </h3>
                <span 
                  className="px-2 py-1 text-xs pixelated"
                  style={{
                    background: '#1a1a1a',
                    border: '2px solid #ffffff',
                    borderStyle: 'outset',
                    color: '#fbbf24',
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)',
                    imageRendering: 'pixelated',
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.5)'
                  }}
                >
                  {p.tag.toUpperCase()}
                </span>
              </div>
              <p 
                className="text-white text-sm leading-relaxed pixelated"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)'
                }}
              >
                {p.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


