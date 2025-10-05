'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Values() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const values = [
    {
      title: "Bayanihan",
      image: "/images/holistic.png",
      description: "The Filipino spirit of community cooperation drives our Web3 ecosystem. Every builder, developer, and community member works together for collective success.",
      color: "from-red-500 to-yellow-500"
    },
    {
      title: "Malasakit", 
      image: "/images/connected.png",
      description: "Deep concern for others' welfare guides our Web3 relationships. We build authentic connections that uplift our entire Filipino community.",
      color: "from-blue-500 to-red-500"
    },
    {
      title: "Diskarte",
      image: "/images/innovative.png", 
      description: "Filipino resourcefulness meets Web3 innovation. We embrace change with creative problem-solving and stay ahead of the curve.",
      color: "from-yellow-500 to-blue-500"
    }
  ];

  return (
    <section id="about" className="values relative">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      <div className="container relative z-10 ph-sun-rays">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 flex justify-center"
        >
          <div className="relative inline-block mb-12">
            {/* No background bar */}
            <div className="px-0 py-0 bg-transparent">
              <h2 className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] font-bold pixelated" style={{ 
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', 
                letterSpacing: '0.08em', 
                lineHeight: '1.0', 
                fontSize: 'clamp(2.5rem, 6vw, 8rem)'
              }}>
                <span style={{ 
                  color: '#000000',
                  textShadow: '2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
                  WebkitFontSmoothing: 'none' 
                }}>OUR </span>
                <span style={{ 
                  color: '#00ff00',
                  textShadow: '0 0 3px #00ff00, 0 0 6px #00ff00, 0 0 9px #00ff00, 2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
                  WebkitFontSmoothing: 'none'
                }}>VALUES</span>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Values Grid - updated styling */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 max-w-6xl mx-auto mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative ph-banig-border-top"
            >
              {/* Card */}
              <div className="bg-black/60 border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                {/* Clean Image */}
                <div className="relative mb-6 overflow-hidden group/image">
                  <Image 
                    src={value.image} 
                    alt={value.title} 
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover/image:scale-110 group-hover/image:brightness-110"
                  />
                  {/* Hover Overlay removed for cleaner look */}
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-jersey)', letterSpacing: '0.03em' }}>
                    {value.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-300 font-mono text-base leading-relaxed">
                    {value.description}
                  </p>
                  <div className="flex justify-center pt-2">
                    <div className="ph-divider" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-black/60 border border-white/10 p-12 max-w-4xl mx-auto text-center ph-banig-border-top ph-capiz-chip">
            <h3 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-jersey)', letterSpacing: '0.03em' }}>
              READY TO BUILD THE FUTURE?
            </h3>
            <p className="text-lg text-gray-300 font-mono mb-8 max-w-2xl mx-auto">
              Join our community of Web3 builders, developers, and innovators.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 border border-white/10 font-mono font-bold text-lg transition-all duration-300 hover:bg-gray-100"
            >
              JOIN OUR COMMUNITY
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
