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

type FAQ = {
  question: string;
  answer: string;
};

// Pixelated icon component for FAQ apps
function FAQIcon({ index }: { index: number }) {
  const icons = [
    // Web3 Builder icon - person with tool
    <svg key={0} width="48" height="48" viewBox="0 0 48 48" style={{ imageRendering: 'pixelated' }} xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="8" width="20" height="22" fill="#000000"/>
      <rect x="18" y="12" width="12" height="3" fill="#ffffff"/>
      <rect x="18" y="18" width="12" height="3" fill="#ffffff"/>
      <rect x="18" y="24" width="9" height="3" fill="#ffffff"/>
      <rect x="20" y="30" width="6" height="9" fill="#000000"/>
      <rect x="14" y="39" width="6" height="6" fill="#000000"/>
      <rect x="28" y="39" width="6" height="6" fill="#000000"/>
      <rect x="8" y="12" width="4" height="4" fill="#000000"/>
      <rect x="36" y="12" width="4" height="4" fill="#000000"/>
    </svg>,
    // Web3 icon - chain links
    <svg key={1} width="48" height="48" viewBox="0 0 48 48" style={{ imageRendering: 'pixelated' }} xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="6" height="6" fill="#000000"/>
      <rect x="21" y="20" width="6" height="6" fill="#000000"/>
      <rect x="32" y="20" width="6" height="6" fill="#000000"/>
      <rect x="14" y="14" width="3" height="3" fill="#000000"/>
      <rect x="24" y="14" width="3" height="3" fill="#000000"/>
      <rect x="34" y="14" width="3" height="3" fill="#000000"/>
      <rect x="14" y="30" width="3" height="3" fill="#000000"/>
      <rect x="24" y="30" width="3" height="3" fill="#000000"/>
      <rect x="34" y="30" width="3" height="3" fill="#000000"/>
    </svg>,
    // Globe icon
    <svg key={2} width="48" height="48" viewBox="0 0 48 48" style={{ imageRendering: 'pixelated' }} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="12" fill="none" stroke="#000000" strokeWidth="2"/>
      <rect x="10" y="20" width="28" height="2" fill="#000000"/>
      <rect x="12" y="26" width="24" height="2" fill="#000000"/>
      <rect x="8" y="14" width="3" height="3" fill="#000000"/>
      <rect x="37" y="14" width="3" height="3" fill="#000000"/>
      <rect x="8" y="32" width="3" height="3" fill="#000000"/>
      <rect x="37" y="32" width="3" height="3" fill="#000000"/>
    </svg>,
    // Building icon
    <svg key={3} width="48" height="48" viewBox="0 0 48 48" style={{ imageRendering: 'pixelated' }} xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="10" width="18" height="30" fill="#000000"/>
      <rect x="18" y="14" width="3" height="3" fill="#ffffff"/>
      <rect x="27" y="14" width="3" height="3" fill="#ffffff"/>
      <rect x="18" y="20" width="3" height="3" fill="#ffffff"/>
      <rect x="27" y="20" width="3" height="3" fill="#ffffff"/>
      <rect x="18" y="26" width="3" height="3" fill="#ffffff"/>
      <rect x="27" y="26" width="3" height="3" fill="#ffffff"/>
      <rect x="21" y="36" width="6" height="6" fill="#ffffff"/>
      <rect x="8" y="18" width="6" height="22" fill="#000000"/>
      <rect x="34" y="20" width="6" height="20" fill="#000000"/>
    </svg>,
    // Handshake icon
    <svg key={4} width="48" height="48" viewBox="0 0 48 48" style={{ imageRendering: 'pixelated' }} xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="6" height="15" fill="#000000"/>
      <rect x="14" y="10" width="6" height="18" fill="#000000"/>
      <rect x="20" y="20" width="6" height="9" fill="#000000"/>
      <rect x="26" y="20" width="6" height="9" fill="#000000"/>
      <rect x="32" y="10" width="6" height="18" fill="#000000"/>
      <rect x="18" y="30" width="12" height="3" fill="#000000"/>
      <rect x="16" y="33" width="18" height="3" fill="#000000"/>
    </svg>,
    // Student/Graduation icon
    <svg key={5} width="48" height="48" viewBox="0 0 48 48" style={{ imageRendering: 'pixelated' }} xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="8" width="12" height="6" fill="#000000"/>
      <rect x="14" y="14" width="20" height="15" fill="#000000"/>
      <rect x="18" y="18" width="12" height="3" fill="#ffffff"/>
      <rect x="18" y="24" width="12" height="3" fill="#ffffff"/>
      <rect x="20" y="29" width="6" height="12" fill="#000000"/>
      <rect x="14" y="41" width="6" height="3" fill="#000000"/>
      <rect x="28" y="41" width="6" height="3" fill="#000000"/>
      <rect x="20" y="4" width="6" height="3" fill="#000000"/>
      <rect x="18" y="4" width="12" height="2" fill="#000000"/>
    </svg>
  ];
  
  return icons[index] || icons[0];
}


function FAQItem({ faq, index }: { faq: FAQ, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Start typing animation after a short delay
      setTimeout(() => setShowAnswer(true), 300);
    } else {
      setShowAnswer(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={handleToggle}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        style={{
          fontFamily: '"Courier New", monospace',
          imageRendering: 'pixelated',
          WebkitFontSmoothing: 'none',
          fontSmooth: 'never',
        }}
      >
        <div 
          className="flex items-start gap-3 p-4 transition-all duration-300 pixelated"
          style={{
            background: '#1a1a1a',
            border: '4px solid #22c55e',
            borderStyle: 'outset',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.5)',
            imageRendering: 'pixelated'
          }}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-1 text-green-400 text-xl font-bold"
            style={{
              fontFamily: '"Courier New", monospace',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none',
              fontSmooth: 'never',
              textShadow: '0 0 5px rgba(34,197,94,0.8)',
            }}
          >
            {isOpen ? '−' : '+'}
          </motion.span>
          <div className="flex-1">
            <h3 
              className="text-white text-lg font-bold mb-2 pixelated"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never',
                textShadow: '3px 3px 0px #000000',
                letterSpacing: '0.05em',
                color: '#ffffff'
              }}
            >
              {faq.question.toUpperCase()}
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && showAnswer && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="p-4 pixelated"
                  style={{
                    background: '#000000',
                    border: '3px solid #22c55e',
                    borderStyle: 'outset',
                    boxShadow: '3px 3px 0px rgba(0,0,0,0.5)',
                    imageRendering: 'pixelated',
                    borderRadius: '0'
                  }}
                >
                  <p 
                    className="text-white text-sm leading-relaxed pixelated"
                    style={{
                      fontFamily: '"Courier New", monospace',
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      fontSmooth: 'never',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      fontSize: 'clamp(0.8rem, 1.5vw, 1rem)'
                    }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export default function FAQs() {
  const [showArcadeMenu, setShowArcadeMenu] = useState(true);
  const [selectedCategory] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const [isMaximized, setIsMaximized] = useState(true);
  const [swipeStart, setSwipeStart] = useState<{ x: number; y: number } | null>(null);

  const filteredFaqs = selectedCategory 
    ? faqs.filter(faq => {
        if (selectedCategory === 'general') return faq.question.includes('What is') || faq.question.includes('Is FW3');
        if (selectedCategory === 'web3') return faq.question.includes('web3') || faq.question.includes('Web3');
        if (selectedCategory === 'community') return faq.question.includes('community') || faq.question.includes('student');
        if (selectedCategory === 'participation') return faq.question.includes('help') || faq.question.includes('part');
        return true;
      })
    : faqs;

  return (
    <section id="faqs" className="relative py-20 overflow-hidden">
      {/* Pixelated Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: '8px 8px',
        imageRendering: 'pixelated'
      }} />
      
      <div className="container relative z-10">
        {/* TV frame containing FAQ apps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto py-8"
        >
          <div className="w-full flex justify-center">
            <div
              className="relative w-full max-w-[640px]"
            >
              <motion.div
                key="tv-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative bg-[#0b1a16] border-2 border-black shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08)] overflow-hidden flex flex-col rounded-lg"
                style={{ imageRendering: 'pixelated', minHeight: '500px' }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                  background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, rgba(0,0,0,0) 2px)'
                }} />
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)'
                }} />
                <div className="relative z-10 flex-1">
                  <AnimatePresence mode="wait">
                    {showArcadeMenu ? (
                      <motion.div
                        key="apps"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative flex h-full flex-col"
                        style={{ background: '#1fbad1', border: '4px solid #000000', imageRendering: 'pixelated' }}
                      >
                        {/* Top status bar */}
                        <div className="flex items-center justify-between px-6 pt-4">
                          <div className="flex items-center gap-4 text-white" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated' }}>
                            <span style={{ letterSpacing: '0.15em' }}>▂ ▃ ▅</span>
                            <span style={{ fontSize: '0.8rem' }}>▮</span>
                            <span>✉</span>
                          </div>
                          <div className="flex items-center gap-4 text-white" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated' }}>
                            <span>09:11</span>
                            <span style={{ letterSpacing: '0.15em' }}>▮▮▮▯</span>
                          </div>
                        </div>
                        {/* Phone Home Screen with FAQ Apps */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 md:py-8">
                          {selectedApp === null ? (
                            <div className="max-w-3xl mx-auto">
                              <h3 className="text-center mb-8" style={{
                                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                color: '#ffffff',
                                fontSize: 'clamp(1rem, 2.2vw, 1.6rem)',
                                letterSpacing: '0.06em',
                                imageRendering: 'pixelated',
                                WebkitFontSmoothing: 'none',
                                margin: '0 auto 1.75rem auto'
                              }}>APPS</h3>
                              <div className="grid grid-cols-3 gap-5 md:gap-6">
                                {faqs.map((faq, i) => (
                                  <button
                                    key={i}
                                    onClick={() => {
                                      setSelectedApp(i);
                                      setIsMaximized(true);
                                    }}
                                    className="flex flex-col items-center gap-2 focus:outline-none"
                                    style={{ imageRendering: 'pixelated' }}
                                  >
                                    <div
                                      className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
                                      style={{
                                        background: '#1fbad1',
                                        border: '4px solid #000000',
                                        boxShadow: '4px 4px 0 rgba(0,0,0,0.5)',
                                        imageRendering: 'pixelated'
                                      }}
                                    >
                                      <FAQIcon index={i} />
                                    </div>
                                    <span style={{
                                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                      color: '#ffffff',
                                      fontSize: 'clamp(0.52rem, 1.1vw, 0.78rem)',
                                      textAlign: 'center',
                                      lineHeight: 1.15
                                    }}>
                                      {faq.question.toUpperCase()}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="max-w-3xl mx-auto">
                              {/* App window */}
                              <motion.div 
                                className="mb-6"
                                style={{
                                  border: '4px solid #000000',
                                  boxShadow: '6px 6px 0 rgba(0,0,0,0.5)',
                                  imageRendering: 'pixelated',
                                  margin: '0 auto'
                                }}
                                animate={{ 
                                  width: isMaximized ? '100%' : '80%'
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* Title bar with swipe gesture */}
                                <div 
                                  className="flex items-center justify-between px-3 py-2"
                                  style={{
                                    background: '#0ea5b5',
                                    borderBottom: '4px solid #000000'
                                  }}
                                  onTouchStart={(e) => {
                                    setSwipeStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
                                  }}
                                  onTouchMove={(e) => {
                                    if (!swipeStart) return;
                                    const deltaX = e.touches[0].clientX - swipeStart.x;
                                    const deltaY = e.touches[0].clientY - swipeStart.y;
                                    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 100) {
                                      setSelectedApp(null);
                                      setSwipeStart(null);
                                    }
                                  }}
                                  onTouchEnd={() => setSwipeStart(null)}
                                >
                                  <span style={{
                                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                    color: '#000000',
                                    fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)',
                                    letterSpacing: '0.05em'
                                  }}>
                                    {faqs[selectedApp].question.toUpperCase()}
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => setIsMaximized(!isMaximized)}
                                      aria-label={isMaximized ? "Minimize" : "Maximize"}
                                      className="px-2 py-1"
                                      style={{
                                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                        color: '#000000',
                                        background: '#1fbad1',
                                        border: '3px solid #000000',
                                        boxShadow: '3px 3px 0 rgba(0,0,0,0.4)',
                                        imageRendering: 'pixelated'
                                      }}
                                    >
                                      {isMaximized ? '−' : '+'}
                                    </button>
                                    <button
                                      onClick={() => setIsMaximized(!isMaximized)}
                                      aria-label={isMaximized ? "Restore" : "Maximize"}
                                      className="px-2 py-1"
                                      style={{
                                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                        color: '#000000',
                                        background: '#1fbad1',
                                        border: '3px solid #000000',
                                        boxShadow: '3px 3px 0 rgba(0,0,0,0.4)',
                                        imageRendering: 'pixelated'
                                      }}
                                    >
                                      □
                                    </button>
                                    <button
                                      onClick={() => setSelectedApp(null)}
                                      aria-label="Close"
                                      className="px-3 py-1"
                                      style={{
                                        fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                                        color: '#000000',
                                        background: '#1fbad1',
                                        border: '3px solid #000000',
                                        boxShadow: '3px 3px 0 rgba(0,0,0,0.4)',
                                        imageRendering: 'pixelated'
                                      }}
                                    >
                                      X
                                    </button>
                                  </div>
                                </div>
                                {/* Content with minimize/maximize */}
                                <motion.div 
                                  className="overflow-hidden"
                                  style={{ 
                                    background: '#1fbad1', 
                                    padding: '1.25rem 1.75rem'
                                  }}
                                  animate={{ 
                                    maxHeight: isMaximized ? 900 : 140,
                                    opacity: isMaximized ? 1 : 0.7
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {/* Answer text */}
                                  <div style={{
                                    fontFamily: '"Courier New", monospace',
                                    color: '#000000',
                                    fontSize: 'clamp(0.82rem, 1.5vw, 1.08rem)',
                                    lineHeight: 1.35,
                                    fontWeight: 'bold',
                                    letterSpacing: '0.01em',
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-word',
                                    textAlign: 'left',
                                    margin: '0'
                                  }}>
                                    {faqs[selectedApp].answer.split('. ').map((sentence, idx, arr) => {
                                      const trimmed = sentence.trim();
                                      if (!trimmed) return '';
                                      if (idx === arr.length - 1) return trimmed;
                                      return trimmed + '.';
                                    }).filter(Boolean).join(' ')}
                                  </div>
                                </motion.div>
                              </motion.div>
                            </div>
                          )}
                        </div>
                        {/* Bottom soft keys */}
                        <div className="flex items-center justify-between px-6 pb-4">
                          <button onClick={() => setSelectedApp(null)} className="text-white" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated', background: 'transparent', border: 'none', cursor: 'pointer' }}>Menu</button>
                          <span className="text-white" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated' }}>ASIKASO</span>
                          <button onClick={() => { setShowArcadeMenu(false); setSelectedApp(null); }} className="text-white" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated', background: 'transparent', border: 'none', cursor: 'pointer' }}>Clear</button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative flex h-full flex-col"
                        style={{ background: '#05100c', border: '4px solid #0f3c2a', imageRendering: 'pixelated' }}
                      >
                        <div className="flex items-center justify-between px-5 py-4 border-b-4 border-[#0f3c2a]">
                          <button
                            onClick={() => setShowArcadeMenu(true)}
                            className="text-green-200"
                            style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', imageRendering: 'pixelated', background: 'transparent', border: 'none', cursor: 'pointer' }}
                          >
                            ← APPS
                          </button>
                          <span
                            style={{
                              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                              color: '#34d399',
                              fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)',
                              letterSpacing: '0.08em',
                              imageRendering: 'pixelated',
                              WebkitFontSmoothing: 'none',
                              fontSmooth: 'never'
                            }}
                          >
                            FAQ TERMINAL
                          </span>
                          <div className="flex items-center gap-2 text-green-200" style={{ fontFamily: '"Courier New", monospace', imageRendering: 'pixelated' }}>
                            <span>READY</span>
                          </div>
                        </div>
                        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
                          {filteredFaqs.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

