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
      title: "Holistic",
      image: "/images/holistic.png",
      description: "We believe in the interconnectedness of all Web3 roles. Every builder, developer, and community member plays a vital part in our ecosystem's success.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Connected", 
      image: "/images/connected.png",
      description: "Building authentic relationships is at the heart of Web3. We foster genuine connections that benefit our entire community.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Innovative",
      image: "/images/innovative.png", 
      description: "Web3 moves fast, and so do we. We embrace change, encourage experimentation, and stay ahead of the curve.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="values relative">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      <div className="container relative z-10">
        {/* Clean Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-mono font-bold mb-6 text-white">
            Our Values
          </h2>
        </motion.div>

        {/* Clean Values Grid */}
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
              className="group relative"
            >
              {/* Clean Card */}
              <div className="bg-black border-2 border-cyan-400 p-8 hover:border-purple-400 transition-all duration-300">
                {/* Clean Image */}
                <div className="relative mb-6 overflow-hidden group/image">
                  <Image 
                    src={value.image} 
                    alt={value.title} 
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover/image:scale-110 group-hover/image:brightness-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-cyan-400 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Clean Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-mono font-bold text-cyan-400 mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 font-mono text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-black border-2 border-cyan-400 p-12 max-w-4xl mx-auto text-center hover:border-purple-400 transition-all duration-300">
            <h3 className="text-3xl font-mono font-bold text-white mb-6">
              Ready to Build the Future?
            </h3>
            <p className="text-lg text-gray-300 font-mono mb-8 max-w-2xl mx-auto">
              Join our community of Web3 builders, developers, and innovators.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-8 py-4 border-2 border-white font-mono font-bold text-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
            >
              JOIN OUR COMMUNITY
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
