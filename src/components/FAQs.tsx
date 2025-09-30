'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is a Web3 Builder?",
    answer: "A Web3 builder is a person or group of people who work to develop a particular decentralized application (DApp) or contribute to a blockchain-based project. This can involve but not limited to project founders, devs, marketers, community managers, moderators, beta-testers, content creators, educators, and other web3 professionals. The role of a web3 builder is important because solid project with good value proposition can help drive the adoption and usage of a DApp or blockchain-based project, as well as provide valuable feedback and support for its development and evolution. Web3 builders play a crucial role in shaping a project's direction and culture and promoting its values and mission to the broader community."
  },
  {
    question: "What is web3?",
    answer: "Web3 refers to the third generation of the World Wide Web, which is focused on leveraging decentralized technologies such as blockchain and distributed ledger technologies (DLT) to create a more open, transparent, and secure internet. Web3 technologies are designed to enable decentralized applications (DApps) and other online platforms and services that are not controlled by a single entity or organization, but rather rely on a distributed network of nodes and users to function. This decentralized architecture allows for greater transparency, security, and autonomy, and has the potential to disrupt and transform various industries and sectors. Web3 technologies are often associated with the blockchain and cryptocurrency space, but they have the potential to be used in a wide range of applications and industries, including supply chain management, online identity, and reputation systems, peer-to-peer marketplaces, and much more."
  },
  {
    question: "Is FW3 exclusively for Filipinos?",
    answer: "A Filipino, in general, is a person who is a citizen of the Philippines, a Southeast Asian country located in the western Pacific Ocean. The Philippines is a diverse and multicultural country, with a population made up of many different ethnic groups and cultures. FW3 is open to partner or work with individuals, different projects and communities outside of the Philippines who share our ideals and vision of growing a better Web3 ecosystem. And foreigners who may or not reside in the country, and who have the heart to help out Filipinos in Web3 are most welcome to be part of the community."
  },
  {
    question: "Is FW3 an agency?",
    answer: "By definition, an agency is a business or organization that provides a specific service or fulfills a particular purpose on behalf of another company, individual, or group. Agencies can be found in many different sectors and industries and can take many different forms, such as advertising agencies, public relations agencies, staffing agencies, travel agencies, and more. In general, an agency is hired by a client to perform a specific task or set of tasks and is usually compensated for its services either through a fee or commission. The client may be a business, government agency, or individual, and the agency's services may be focused on a particular area of expertise or industry. Hence, Filipino Web3 is not an agency nor a business entity. Our main focus is to empower Filipinos who are willing to learn about Web3-related opportunities, either technical or non-technical, that are operating in building Web3 projects."
  },
  {
    question: "We want to help. How can we be part of FW3?",
    answer: "We appreciate the help that we can get to keep this organization in full operation. To set expectations, Filipino Web3 is a non-profit organization and all core members are doing their tasks voluntarily and without expectation of any monetary compensation or incentives. However, if you are willing to be an active member of the organization, reach out to the core members to be acknowledged."
  },
  {
    question: "Can a student or a dropout be a community builder?",
    answer: "In general, being a college student or a dropout does not necessarily mean that you will be at a disadvantage when it comes to working in the web3 industry. While a college education can certainly provide valuable knowledge and skills that can be helpful in this field, it is not a requirement for success. Many successful professionals in the web3 industry have come from a variety of educational and professional backgrounds, and have acquired the necessary knowledge and skills through other means, such as self-study, online courses, internships, and work experience. That being said, the web3 industry is a rapidly evolving field that requires a strong foundation in computer science, mathematics, and other technical disciplines. As such, having a strong educational background in these areas can be helpful in pursuing a career in this field. It is also important to stay up-to-date on the latest developments and trends in the industry, which can be achieved through ongoing learning and professional development."
  }
];

function FAQItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.article 
      className={`faq ${isOpen ? 'open' : ''}`} 
      onClick={toggleFAQ}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 15px 35px rgba(34, 211, 238, 0.2)"
      }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="faq__icon"
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <i className={`uil ${isOpen ? 'uil-minus' : 'uil-plus'}`}></i>
      </motion.div>
      <div className="question__answer">
        <motion.h4
          animate={{ color: isOpen ? "#22d3ee" : "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          {faq.question}
        </motion.h4>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function FAQs() {
  return (
    <section id="faqs" className="faqs relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-5xl lg:text-6xl font-mono font-black text-white"
                style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)' }}>
            Frequently Asked Questions
          </span>
        </motion.h2>
        
        <motion.div 
          className="faqs__container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

