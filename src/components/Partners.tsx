'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    {
      name: "Coins.ph",
      description: "Leading cryptocurrency exchange and digital wallet in the Philippines",
      category: "Exchange",
      logo: "/images/coins-logo.png", // You'll need to add this image
      website: "https://coins.ph",
      founded: "2014"
    },
    {
      name: "GCash",
      description: "Mobile wallet and financial services platform with Web3 integration",
      category: "Fintech",
      logo: "/images/gcash-logo.png", // You'll need to add this image
      website: "https://gcash.com",
      founded: "2017"
    },
    {
      name: "UnionBank",
      description: "Pioneer in blockchain banking and digital asset services",
      category: "Banking",
      logo: "/images/unionbank-logo.png", // You'll need to add this image
      website: "https://unionbankph.com",
      founded: "1980"
    },
    {
      name: "PayMongo",
      description: "Payment infrastructure for Web3 and traditional commerce",
      category: "Payments",
      logo: "/images/paymongo-logo.png", // You'll need to add this image
      website: "https://paymongo.com",
      founded: "2019"
    },
    {
      name: "Bitskwela",
      description: "Blockchain education and community building platform",
      category: "Education",
      logo: "/images/bitskwela-logo.png", // You'll need to add this image
      website: "https://bitskwela.com",
      founded: "2021"
    },
    {
      name: "Yield Guild Games",
      description: "Gaming guild and NFT marketplace for Filipino gamers",
      category: "Gaming",
      logo: "/images/ygg-logo.png", // You'll need to add this image
      website: "https://yieldguild.io",
      founded: "2020"
    }
  ];

  const categories = ["All", "Exchange", "Fintech", "Banking", "Payments", "Education", "Gaming"];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6" style={{ 
            fontFamily: 'var(--font-jersey), monospace',
            background: 'linear-gradient(135deg, #CE1126, #0038A8, #FCD116)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            FILIPINO WEB3 ECOSYSTEM
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Discover the leading Filipino companies and organizations building the future of Web3.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
<<<<<<< HEAD
              className="group relative ph-banig-border-top"
=======
              className="group relative"
>>>>>>> a3f52a0 (feat: Add Partners component showcasing Filipino Web3 companies and their details)
            >
              {/* Partner Card */}
              <div className="bg-black/60 border border-white/10 p-6 rounded-xl hover:border-[var(--ph-yellow)]/50 transition-all duration-300 h-full">
                {/* Logo Placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--ph-red)] to-[var(--ph-blue)] rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-jersey)' }}>
                      {partner.name}
                    </h3>
                    <span className="px-2 py-1 bg-[var(--ph-blue)]/20 text-[var(--ph-yellow)] rounded text-xs font-mono">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Founded: {partner.founded}</span>
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--ph-yellow)] hover:text-white transition-colors"
                    >
                      Visit Website →
                    </a>
                  </div>
<<<<<<< HEAD
                  <div className="flex justify-center pt-3">
                    <div className="ph-divider" />
                  </div>
=======
>>>>>>> a3f52a0 (feat: Add Partners component showcasing Filipino Web3 companies and their details)
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
<<<<<<< HEAD
          <div className="bg-black/60 border border-white/10 p-8 max-w-4xl mx-auto rounded-xl ph-banig-border-top ph-capiz-chip">
=======
          <div className="bg-black/60 border border-white/10 p-8 max-w-4xl mx-auto rounded-xl">
>>>>>>> a3f52a0 (feat: Add Partners component showcasing Filipino Web3 companies and their details)
            <h3 className="text-3xl font-bold text-white mb-4" style={{ 
              fontFamily: 'var(--font-jersey), monospace',
              color: '#FCD116'
            }}>
              PARTNER WITH US
            </h3>
            <p className="text-lg text-gray-300 font-mono mb-6">
              Are you a Filipino Web3 company? Join our ecosystem and connect with the community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[var(--ph-red)] to-[var(--ph-blue)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--ph-yellow)]/20"
            >
              BECOME A PARTNER
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
