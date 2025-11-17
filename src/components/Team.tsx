'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Facebook } from 'lucide-react';

const coreTeam = [
  {
    name: "Sift",
    role: "Community Lead",
    expertise: "Blockchain Development, Community Building",
    image: "/images/Sift.jpg",
    socials: {
      facebook: "https://www.facebook.com/sift.croix",
      twitter: "https://twitter.com/siftcroix",
      linkedin: "https://www.linkedin.com/in/joseph-corpuz-14891b145/"
    }
  },
  {
    name: "Lupin_XIV",
    role: "Technical Lead",
    expertise: "Smart Contracts, DeFi Protocols",
    image: "/images/lupz_u.jpg",
    socials: {
      facebook: "https://www.facebook.com/ljmags14/",
      twitter: "https://twitter.com/Lupin_XIV",
      linkedin: "https://www.linkedin.com/in/ljmagboo/"
    }
  },
  {
    name: "Zirk",
    role: "Developer Relations",
    expertise: "Developer Tools, API Integration",
    image: "/images/coretoshi_zirk.png",
    socials: {
      facebook: "https://www.facebook.com/GGzirk/",
      twitter: "https://twitter.com/ggzirky",
      linkedin: "https://www.linkedin.com/in/ggzirk/"
    }
  },
  {
    name: "Clivv",
    role: "NFT & Gaming Lead",
    expertise: "NFT Development, GameFi, Metaverse",
    image: "/images/clivv_azuki1.jpg",
    socials: {
      facebook: "https://www.facebook.com/clivvx27/",
      twitter: "https://twitter.com/clivvnft",
      linkedin: "www.linkedin.com/in/clivv"
    }
  },
  {
    name: "Aerva",
    role: "Marketing & Growth",
    expertise: "Digital Marketing, Community Growth",
    image: "/images/Aerva.jpg",
    socials: {
      facebook: "https://web.facebook.com/profile.php?id=100095422653463",
      twitter: "https://twitter.com/AervaWeb3",
      linkedin: "https://www.linkedin.com/in/rhowelle-calamba-6092752a3/"
    }
  },
  {
    name: "Kata",
    role: "Content Creator",
    expertise: "Technical Writing, Educational Content",
    image: "/images/Katrina.jpg",
    socials: {
      facebook: "https://web.facebook.com/kyukaii",
      twitter: "https://twitter.com/kyyukai_",
      linkedin: "https://www.linkedin.com/in/katrinapasadilla/"
    }
  },
  {
    name: "Waterlemon",
    role: "Frontend Developer",
    expertise: "React, Next.js, UI/UX Design",
    image: "/images/Waterlemon.jpg",
    socials: {
      facebook: "https://www.facebook.com/chervin.cruz.7/",
      twitter: "https://twitter.com/mywaterlemon",
      linkedin: "https://www.linkedin.com/in/cjpatrycruz/"
    }
  },
  {
    name: "Speedy",
    role: "Operations Manager",
    expertise: "Project Management, Event Coordination",
    image: "/images/Speedy.jpg",
    socials: {
      facebook: "https://www.facebook.com/rowena.marbida",
      twitter: "https://twitter.com/Speedy_RM1999",
      linkedin: "https://www.linkedin.com/in/rowena-marbida-2632ba251"
    }
  },
  {
    name: "Mychel_T",
    role: "Backend Developer",
    expertise: "Node.js, Database Design, API Development",
    image: "/images/Mychel_T.jpg",
    socials: {
      facebook: "https://www.facebook.com/mychelan.tautoan.7/",
      twitter: "https://twitter.com/MychelT1",
      linkedin: "https://www.linkedin.com/in/mychel-an-tauto-an/"
    }
  }
];

const foundingMembers = [
  {
    name: "Ritche",
    image: "/images/che_u.jpg",
    socials: {
      facebook: "https://web.facebook.com/usefrj.joseph",
      twitter: "https://twitter.com/usef_nft",
      linkedin: "https://www.linkedin.com/in/ritche-joseph-lelis-074b6a245/"
    }
  },
  {
    name: "Jeam",
    image: "/images/jeam_u.jpeg",
    socials: {
      facebook: "https://web.facebook.com/jeam.balitaan",
      twitter: "https://twitter.com/jmnrdbltn",
      linkedin: "https://www.linkedin.com/in/jeamnardbalitaan/"
    }
  },
  {
    name: "Ed",
    image: "/images/ed_d.jpg",
    socials: {
      facebook: "https://www.facebook.com/edmund.catungal",
      twitter: "https://twitter.com/RICKPICKLE_",
      linkedin: "https://www.linkedin.com/in/edmund-catungal-107550232/"
    }
  },
  {
    name: "Ninong Julz",
    image: "/images/julz_u.jpg",
    socials: {
      facebook: "https://www.facebook.com/julian.barcega",
      twitter: "https://twitter.com/ninongjulz",
      linkedin: "https://www.linkedin.com/in/julian-sonel-barcega-209595116"
    }
  },
  {
    name: "Balbz",
    image: "/images/balbz_u.jpg",
    socials: {
      facebook: "https://www.facebook.com/janaaaann/",
      twitter: "https://twitter.com/0xb4Lb1N",
      linkedin: "https://www.linkedin.com/in/jabalbin/"
    }
  },
  {
    name: "Trespares",
    image: "/images/tres_u.jpg",
    socials: {
      facebook: "https://www.facebook.com/jc.lacsamana",
      twitter: "https://twitter.com/0xCrypt0NFT",
      linkedin: "https://www.linkedin.com/in/josephlacsamana"
    }
  }
];

type TeamMemberType = {
  name: string;
  image: string;
  socials: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  role?: string;
  expertise?: string;
};

function TeamMember({ member, isCore = false, index }: { member: TeamMemberType, isCore?: boolean, index: number }) {
  const cardNumber = String(index + 1).padStart(3, '0');
  const rarity = isCore ? 'UR' : 'SSR'; // SSR for boss cards
  
  // Boss card colors for founding members (One Piece style)
  const bossColors = [
    { primary: '#FFD700', secondary: '#FF8C00', glow: '#FFD700' }, // Gold
    { primary: '#DC143C', secondary: '#8B0000', glow: '#FF0000' }, // Crimson
    { primary: '#4169E1', secondary: '#00008B', glow: '#00BFFF' }, // Royal Blue
    { primary: '#9370DB', secondary: '#4B0082', glow: '#BA55D3' }, // Purple
    { primary: '#FF4500', secondary: '#8B0000', glow: '#FF6347' }, // Orange Red
    { primary: '#00CED1', secondary: '#008B8B', glow: '#00FFFF' }  // Dark Turquoise
  ];
  const bossColor = bossColors[index % bossColors.length];
  
  // Regular card colors for core team
  const borderColors = ['#00AA00', '#0066FF', '#FF0000', '#FFD700', '#8B5CF6', '#FF6B9D', '#4ECDC4', '#FF8C00'];
  const borderColor = borderColors[index % borderColors.length];
  const bgColors = [
    ['#4ECDC4', '#1fbad1'], // Green/Blue
    ['#FF6B9D', '#FF8C00'], // Red/Orange
    ['#FFD700', '#FF6B9D'], // Yellow/Pink
    ['#8B5CF6', '#4ECDC4'], // Purple/Cyan
    ['#1fbad1', '#00AA00'], // Cyan/Green
    ['#FF8C00', '#FF0000'], // Orange/Red
    ['#FF6B9D', '#8B5CF6'], // Pink/Purple
    ['#4ECDC4', '#FFD700']  // Cyan/Yellow
  ];
  const bgColorPair = bgColors[index % bgColors.length];
  
  // Render One Piece Boss Card for Founding Members
  if (!isCore) {
    return (
      <motion.article 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        whileHover={{ y: -12, scale: 1.05, rotateY: 5 }}
        className="group relative one-piece-boss-card"
        style={{ perspective: '1000px' }}
      >
        {/* Boss Card Container - One Piece Style */}
        <div 
          className="relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${bossColor.primary}15 0%, ${bossColor.secondary}25 50%, ${bossColor.primary}15 100%)`,
            border: `6px solid ${bossColor.primary}`,
            borderRadius: '16px',
            boxShadow: `
              0 0 30px ${bossColor.glow}80,
              0 0 60px ${bossColor.glow}40,
              0 10px 40px rgba(0,0,0,0.6),
              inset 0 0 20px ${bossColor.primary}20
            `,
            position: 'relative',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Glowing Border Effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: '12px',
              border: `2px solid ${bossColor.glow}`,
              boxShadow: `0 0 20px ${bossColor.glow}, inset 0 0 20px ${bossColor.glow}40`,
              animation: 'bossGlow 3s ease-in-out infinite',
              opacity: 0.8
            }}
          />
          
          {/* Corner Decorations - One Piece Style */}
          <div 
            className="absolute top-0 left-0 w-12 h-12"
            style={{
              background: `linear-gradient(135deg, ${bossColor.primary} 0%, transparent 70%)`,
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              borderTopLeftRadius: '10px'
            }}
          />
          <div 
            className="absolute top-0 right-0 w-12 h-12"
            style={{
              background: `linear-gradient(225deg, ${bossColor.primary} 0%, transparent 70%)`,
              clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
              borderTopRightRadius: '10px'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-12 h-12"
            style={{
              background: `linear-gradient(45deg, ${bossColor.primary} 0%, transparent 70%)`,
              clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
              borderBottomLeftRadius: '10px'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-12 h-12"
            style={{
              background: `linear-gradient(315deg, ${bossColor.primary} 0%, transparent 70%)`,
              clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
              borderBottomRightRadius: '10px'
            }}
          />
          
          {/* Epic Background Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse at 20% 20%, ${bossColor.primary}30 0%, transparent 50%),
                radial-gradient(ellipse at 80% 80%, ${bossColor.secondary}30 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, ${bossColor.glow}20 0%, transparent 60%),
                linear-gradient(135deg, ${bossColor.primary}10 0%, ${bossColor.secondary}15 100%)
              `,
              mixBlendMode: 'overlay',
              opacity: 0.9
            }}
          />
          
          {/* Scrolling Train Sign Header - Boss Style */}
          <div 
            className="w-full py-3 relative z-10 overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${bossColor.secondary} 0%, #000000 100%)`,
              borderBottom: `4px solid ${bossColor.primary}`,
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: `0 4px 20px ${bossColor.glow}60`
            }}
          >
            <div 
              className="train-sign-scroll"
              style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                animation: 'scrollTrain 12s linear infinite',
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.7rem, 1.4vw, 1rem)',
                color: bossColor.primary,
                fontWeight: '400',
                letterSpacing: '0.15em',
                textShadow: `0 0 10px ${bossColor.glow}, 0 0 20px ${bossColor.glow}, 0 0 30px ${bossColor.glow}`,
                textTransform: 'uppercase'
              }}
            >
              <span style={{ paddingRight: '80px' }}>
                ⚡ BOSS ⚡ {member.name.toUpperCase()} ⚡ FOUNDING MEMBER ⚡ LEGENDARY ⚡
              </span>
              <span style={{ paddingRight: '80px' }}>
                ⚡ BOSS ⚡ {member.name.toUpperCase()} ⚡ FOUNDING MEMBER ⚡ LEGENDARY ⚡
              </span>
            </div>
          </div>
          
          {/* Character Portrait Area - Boss Style */}
          <div 
            className="relative mx-4 mb-4 mt-4"
            style={{
              minHeight: '350px',
              background: 'transparent',
              position: 'relative'
            }}
          >
            {/* Portrait Glow Effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, ${bossColor.glow}30 0%, transparent 70%)`,
                borderRadius: '8px',
                filter: 'blur(20px)',
                zIndex: 1
              }}
            />
            
            <div 
              className="relative overflow-hidden z-10"
              style={{
                height: '320px',
                borderRadius: '8px',
                background: `linear-gradient(135deg, ${bossColor.primary}20 0%, ${bossColor.secondary}20 100%)`,
                border: `3px solid ${bossColor.primary}60`,
                boxShadow: `0 0 30px ${bossColor.glow}40, inset 0 0 30px ${bossColor.primary}20`
              }}
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                width={400}
                height={400}
                className="w-full h-full object-cover"
                style={{ 
                  filter: 'contrast(1.2) saturate(1.3) brightness(1.1)',
                  objectPosition: 'center top',
                  mixBlendMode: 'overlay'
                }}
              />
              {/* Epic Overlay Effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 30% 40%, ${bossColor.primary}30 0%, transparent 50%),
                    radial-gradient(circle at 70% 60%, ${bossColor.secondary}30 0%, transparent 50%),
                    linear-gradient(180deg, transparent 0%, ${bossColor.glow}20 100%)
                  `,
                  mixBlendMode: 'color-dodge'
                }}
              />
            </div>
          </div>
          
          {/* Boss Name Tag - Epic Style */}
          <div 
            className="px-4 pb-4 relative z-10"
          >
            <div 
              className="py-3 px-4 relative"
              style={{
                background: `linear-gradient(135deg, ${bossColor.primary} 0%, ${bossColor.secondary} 100%)`,
                borderRadius: '8px',
                boxShadow: `
                  0 4px 20px ${bossColor.glow}80,
                  0 0 40px ${bossColor.glow}40,
                  inset 0 2px 10px rgba(255,255,255,0.3)
                `,
                border: `2px solid ${bossColor.glow}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Shimmer Effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  animation: 'shimmer 3s infinite',
                  transform: 'translateX(-100%)'
                }}
              />
              
              <h4 
                className="text-center relative z-10" 
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
                  color: '#FFFFFF',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textShadow: `
                    2px 2px 0px rgba(0,0,0,0.8),
                    0 0 10px ${bossColor.glow},
                    0 0 20px ${bossColor.glow},
                    0 0 30px ${bossColor.glow}
                  `,
                  lineHeight: '1.4',
                  textTransform: 'uppercase'
                }}
              >
                {member.name.toUpperCase()}
              </h4>
              <p 
                className="text-center relative z-10 mt-1"
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.5rem, 0.9vw, 0.7rem)',
                  color: bossColor.glow,
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textShadow: '0 0 10px rgba(0,0,0,0.8)',
                  opacity: 0.9
                }}
              >
                FOUNDING MEMBER
              </p>
            </div>
            
            {/* Social Media Links - Boss Style */}
            <div className="flex gap-4 justify-center mt-5 mb-3 relative z-20">
              <motion.a 
                href={member.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center relative"
                style={{
                  width: '64px',
                  height: '64px',
                  background: `linear-gradient(135deg, #1877F2 0%, #0d5fcc 100%)`,
                  border: `4px solid ${bossColor.primary}`,
                  borderRadius: '12px',
                  boxShadow: `
                    0 0 20px ${bossColor.glow}60,
                    4px 4px 0px rgba(0,0,0,0.6),
                    inset 0 0 0 2px rgba(255,255,255,0.3)
                  `,
                  zIndex: 20
                }}
              >
                <Facebook className="w-10 h-10 text-white" fill="white" style={{ strokeWidth: 0 }} />
              </motion.a>
              <motion.a 
                href={member.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center relative"
                style={{
                  width: '64px',
                  height: '64px',
                  background: `linear-gradient(135deg, #000000 0%, #1a1a1a 100%)`,
                  border: `4px solid ${bossColor.primary}`,
                  borderRadius: '12px',
                  boxShadow: `
                    0 0 20px ${bossColor.glow}60,
                    4px 4px 0px rgba(0,0,0,0.6),
                    inset 0 0 0 2px rgba(255,255,255,0.3)
                  `,
                  zIndex: 20
                }}
              >
                <svg className="w-10 h-10 text-white" fill="white" viewBox="0 0 24 24" style={{ strokeWidth: 0 }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              <motion.a 
                href={member.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center relative"
                style={{
                  width: '64px',
                  height: '64px',
                  background: `linear-gradient(135deg, #0077B5 0%, #005885 100%)`,
                  border: `4px solid ${bossColor.primary}`,
                  borderRadius: '12px',
                  boxShadow: `
                    0 0 20px ${bossColor.glow}60,
                    4px 4px 0px rgba(0,0,0,0.6),
                    inset 0 0 0 2px rgba(255,255,255,0.3)
                  `,
                  zIndex: 20
                }}
              >
                <Linkedin className="w-10 h-10 text-white" fill="white" style={{ strokeWidth: 0 }} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }
  
  // Regular card for core team members
  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Card Container - Watercolor Speed Painting Style */}
      <div 
        className="relative overflow-hidden bg-white"
        style={{ 
          border: `4px solid ${borderColor}`,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        {/* Watercolor Background - Splattered paint effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 20% 30%, ${bgColorPair[0]}40 0%, transparent 50%),
                         radial-gradient(ellipse at 80% 70%, ${bgColorPair[1]}40 0%, transparent 50%),
                         radial-gradient(ellipse at 50% 50%, ${bgColorPair[0]}30 0%, transparent 60%),
                         radial-gradient(ellipse at 10% 80%, ${bgColorPair[1]}35 0%, transparent 55%)`,
            backgroundSize: '100% 100%',
            mixBlendMode: 'multiply',
            opacity: 0.8
          }}
        />
        
        {/* Scrolling Train Sign Header */}
        <div 
          className="w-full py-2 relative z-10 overflow-hidden"
          style={{
            background: '#000000',
            borderBottom: `3px solid ${borderColor}`,
            height: '32px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div 
            className="train-sign-scroll"
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              animation: 'scrollTrain 15s linear infinite',
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
              color: '#FFD700',
              fontWeight: '400',
              letterSpacing: '0.1em',
              textShadow: '0 0 8px #FFD700, 0 0 12px #FFD700, 0 0 16px #FFD700',
              textTransform: 'uppercase'
            }}
          >
            <span style={{ paddingRight: '60px' }}>
              ⚡ FILIPINOWEB3 ⚡ SPEED PAINTINGS ⚡ {member.name.toUpperCase()} ⚡
            </span>
            <span style={{ paddingRight: '60px' }}>
              ⚡ FILIPINOWEB3 ⚡ SPEED PAINTINGS ⚡ {member.name.toUpperCase()} ⚡
            </span>
          </div>
        </div>
        
        {/* Character Portrait Area */}
        <div 
          className="relative mx-3 mb-3"
          style={{
            minHeight: '300px',
            background: 'transparent'
          }}
        >
          <div 
            className="relative overflow-hidden"
            style={{
              height: '280px',
              borderRadius: '4px',
              background: 'transparent'
            }}
          >
            <Image 
              src={member.image} 
              alt={member.name} 
              width={400}
              height={400}
              className="w-full h-full object-cover"
              style={{ 
                filter: 'contrast(1.1) saturate(1.2)',
                objectPosition: 'center top',
                mixBlendMode: 'multiply'
              }}
            />
            {/* Watercolor overlay effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 30% 40%, ${bgColorPair[0]}20 0%, transparent 40%),
                             radial-gradient(circle at 70% 60%, ${bgColorPair[1]}20 0%, transparent 40%)`,
                mixBlendMode: 'overlay'
              }}
            />
          </div>
        </div>
        
        {/* Name Tag at Bottom - Colored border matching */}
        <div 
          className="px-3 pb-3 relative z-10"
        >
          <div 
            className="py-2 px-3"
            style={{
              background: borderColor,
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            <h4 
              className="text-center" 
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
                color: borderColor === '#00AA00' ? '#FFFF00' : 
                       borderColor === '#0066FF' ? '#FFD700' :
                       borderColor === '#FF0000' ? '#FFFFFF' :
                       borderColor === '#FFD700' ? '#000000' :
                       borderColor === '#8B5CF6' ? '#FFD700' :
                       borderColor === '#FF6B9D' ? '#FFFF00' :
                       borderColor === '#4ECDC4' ? '#FF0000' :
                       '#000000',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textShadow: borderColor === '#FFD700' ? '1px 1px 0px rgba(255,255,255,0.5)' : '2px 2px 0px rgba(0,0,0,0.5)',
                lineHeight: '1.3'
              }}
            >
              {member.name.toUpperCase()}
            </h4>
          </div>
          
          {/* Social Media Links */}
          <div className="flex gap-3 justify-center mt-4 mb-2 relative z-20">
            <motion.a 
              href={member.socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center relative"
              style={{
                width: '56px',
                height: '56px',
                background: '#1877F2',
                border: '4px solid #000000',
                borderRadius: '8px',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(255,255,255,0.2)',
                zIndex: 20
              }}
            >
              <Facebook className="w-8 h-8 text-white" fill="white" style={{ strokeWidth: 0 }} />
            </motion.a>
            <motion.a 
              href={member.socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center relative"
              style={{
                width: '56px',
                height: '56px',
                background: '#000000',
                border: '4px solid #FFFFFF',
                borderRadius: '8px',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(255,255,255,0.2)',
                zIndex: 20
              }}
            >
              <svg className="w-8 h-8 text-white" fill="white" viewBox="0 0 24 24" style={{ strokeWidth: 0 }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </motion.a>
            <motion.a 
              href={member.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center relative"
              style={{
                width: '56px',
                height: '56px',
                background: '#0077B5',
                border: '4px solid #000000',
                borderRadius: '8px',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(255,255,255,0.2)',
                zIndex: 20
              }}
            >
              <Linkedin className="w-8 h-8 text-white" fill="white" style={{ strokeWidth: 0 }} />
            </motion.a>
          </div>
        </div>
        
      </div>
    </motion.article>
  );
}

export default function Team() {
  return (
    <section id="team" className="team relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Pixelated Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%23ffffff'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: '8px 8px',
        imageRendering: 'pixelated'
      }} />
      
      <div className="container relative z-10 py-20 ph-banig-border-top">
        {/* Core Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl lg:text-6xl font-black text-white mb-6 pixelated"
            style={{ 
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.05em',
              textShadow: '4px 4px 0px #000000',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none'
            }}
          >
            CORE TEAM
          </h2>
          <div className="flex justify-center mt-6">
            <div className="ph-divider" />
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mb-20">
          {coreTeam.map((member, index) => (
            <TeamMember key={index} member={member} isCore={true} index={index} />
          ))}
        </div>
        
        {/* Founding Members Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl lg:text-6xl font-black text-white mb-6 pixelated"
            style={{ 
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.05em',
              textShadow: '4px 4px 0px #000000',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none'
            }}
          >
            FOUNDING MEMBERS
          </h2>
          <div className="flex justify-center mt-6">
            <div className="ph-divider" />
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
          {foundingMembers.map((member, index) => (
            <TeamMember key={index} member={member} isCore={false} index={index + coreTeam.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
