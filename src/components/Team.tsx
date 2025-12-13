'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Facebook } from 'lucide-react';
import { memo, useMemo } from 'react';

const formerMembers = ["Waterlemon", "Speedy", "Mychel_T"];

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

const otherMembers = [
  {
    name: "Aerva",
    image: "/images/Aerva.jpg",
    socials: {
      facebook: "https://www.facebook.com/aerva.eth",
      twitter: "https://twitter.com/aerva_eth",
      linkedin: "https://www.linkedin.com/in/aerva-eth/"
    }
  },
  {
    name: "Arkin",
    image: "/images/Arkin.png",
    socials: {
      facebook: "https://www.facebook.com/mndzsma/",
      twitter: "https://x.com/Arkinnightshade",
      linkedin: "https://www.linkedin.com/in/sean-michael-andrew-mendoza-213223324/?skipRedirect=true"
    }
  },
  {
    name: "Clivv",
    image: "/images/Clivv(1).png",
    socials: {
      facebook: "https://www.facebook.com/clivv.azuki",
      twitter: "https://twitter.com/clivv_azuki",
      linkedin: "https://www.linkedin.com/in/clivv-azuki/"
    }
  },
  {
    name: "CORDYX",
    image: "/images/Cordy.jfif",
    socials: {
      facebook: "https://www.facebook.com/cordystackx",
      twitter: "https://twitter.com/cordystackx",
      linkedin: "https://www.linkedin.com/in/cordystackx/"
    }
  },
  {
    name: "Kata",
    image: "/images/Katrina.jpg",
    socials: {
      facebook: "https://www.facebook.com/katrina.web3",
      twitter: "https://twitter.com/katrina_web3",
      linkedin: "https://www.linkedin.com/in/katrina-web3/"
    }
  },
  {
    name: "Lupin",
    image: "/images/Lupin_XIV.jpg",
    socials: {
      facebook: "https://www.facebook.com/lesterjun.magboo",
      twitter: "https://twitter.com/Lupin_XIV",
      linkedin: "https://www.linkedin.com/in/lester-jun-l-magbo-o-213223324/"
    }
  },
  {
    name: "Sift",
    image: "/images/Sift.jpg",
    socials: {
      facebook: "https://www.facebook.com/sift.croix",
      twitter: "https://twitter.com/siftcroix",
      linkedin: "https://www.linkedin.com/in/joseph-corpuz-14891b145/"
    }
  },
  {
    name: "Zirk",
    image: "/images/coretoshi_zirk.png",
    socials: {
      facebook: "https://www.facebook.com/coretoshi",
      twitter: "https://twitter.com/coretoshi",
      linkedin: "https://www.linkedin.com/in/coretoshi/"
    }
  }
];

type SocialLinks = {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
};

type TeamMemberType = {
  name: string;
  image: string;
  socials?: SocialLinks | null;
  role?: string;
  expertise?: string;
  status?: 'active' | 'former';
};

// Memoize boss colors to avoid recalculation
// Philippine flag-inspired palette for core member cards
const bossColors = [
  { primary: '#CE1126', secondary: '#8B0000', glow: '#FF5A5F' }, // Red
  { primary: '#0038A8', secondary: '#001F5C', glow: '#3B82F6' }, // Blue
  { primary: '#FCD116', secondary: '#C8A000', glow: '#FFE066' }  // Yellow
] as const;

const TeamMember = memo(function TeamMember({ member, index }: { member: TeamMemberType, index: number }) {
  if (!member.socials) {
    return null;
  }

  // Memoize boss color calculation
  const bossColor = useMemo(() => bossColors[index % bossColors.length], [index]);
  const isCordyx = member.name.trim().toLowerCase() === 'cordyx';

    return (
      <motion.article 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative one-piece-boss-card w-full"
        style={{ 
          maxWidth: '100%',
          willChange: 'transform',
          transform: 'translateZ(0)' // Force GPU acceleration
        }}
      >
        {/* Boss Card Container - One Piece Style */}
        <div 
          className="relative overflow-hidden w-full"
          style={{ 
            background: `linear-gradient(135deg, ${bossColor.primary}15 0%, ${bossColor.secondary}25 50%, ${bossColor.primary}15 100%)`,
            border: `clamp(2px, 0.6vw, 6px) solid ${bossColor.primary}`,
            borderRadius: 'clamp(6px, 1.5vw, 16px)',
            boxShadow: `
              0 0 clamp(8px, 2vw, 20px) ${bossColor.glow}60,
              0 clamp(2px, 0.8vw, 6px) clamp(10px, 2.5vw, 25px) rgba(0,0,0,0.5)
            `,
            position: 'relative',
            transformStyle: 'preserve-3d',
            maxWidth: '100%'
          }}
        >
          {/* Glowing Border Effect - Simplified */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 'clamp(6px, 1.5vw, 12px)',
              border: `clamp(1px, 0.3vw, 2px) solid ${bossColor.glow}`,
              boxShadow: `0 0 clamp(8px, 2vw, 16px) ${bossColor.glow}50`,
              opacity: 0.7,
              willChange: 'opacity'
            }}
          />
          
          {/* Corner Decorations - One Piece Style */}
          <div 
            className="absolute top-0 left-0"
            style={{
              width: 'clamp(16px, 4vw, 48px)',
              height: 'clamp(16px, 4vw, 48px)',
              background: `linear-gradient(135deg, ${bossColor.primary} 0%, transparent 70%)`,
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              borderTopLeftRadius: 'clamp(4px, 1vw, 10px)'
            }}
          />
          <div 
            className="absolute top-0 right-0"
            style={{
              width: 'clamp(16px, 4vw, 48px)',
              height: 'clamp(16px, 4vw, 48px)',
              background: `linear-gradient(225deg, ${bossColor.primary} 0%, transparent 70%)`,
              clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
              borderTopRightRadius: 'clamp(4px, 1vw, 10px)'
            }}
          />
          <div 
            className="absolute bottom-0 left-0"
            style={{
              width: 'clamp(16px, 4vw, 48px)',
              height: 'clamp(16px, 4vw, 48px)',
              background: `linear-gradient(45deg, ${bossColor.primary} 0%, transparent 70%)`,
              clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
              borderBottomLeftRadius: 'clamp(4px, 1vw, 10px)'
            }}
          />
          <div 
            className="absolute bottom-0 right-0"
            style={{
              width: 'clamp(16px, 4vw, 48px)',
              height: 'clamp(16px, 4vw, 48px)',
              background: `linear-gradient(315deg, ${bossColor.primary} 0%, transparent 70%)`,
              clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
              borderBottomRightRadius: 'clamp(4px, 1vw, 10px)'
            }}
          />
          
          {/* Simplified Background Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${bossColor.primary}15 0%, ${bossColor.secondary}20 100%)`,
              opacity: 0.8
            }}
          />
          
          {/* Scrolling Train Sign Header - Boss Style */}
          <div 
            className="w-full relative z-10 overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${bossColor.secondary} 0%, #000000 100%)`,
              borderBottom: `clamp(1px, 0.4vw, 4px) solid ${bossColor.primary}`,
              height: 'clamp(24px, 4vw, 40px)',
              display: 'flex',
              alignItems: 'center',
              padding: 'clamp(0.25rem, 0.8vw, 0.75rem) 0',
              boxShadow: `0 clamp(1px, 0.4vw, 4px) clamp(8px, 2vw, 20px) ${bossColor.glow}60`
            }}
          >
            <div 
              className="train-sign-scroll"
              style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                animation: 'scrollTrain 15s linear infinite',
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.45rem, 1.5vw, 1rem)',
                color: bossColor.primary,
                fontWeight: '400',
                letterSpacing: 'clamp(0.03em, 0.15vw, 0.15em)',
                textShadow: `0 0 clamp(4px, 1.2vw, 8px) ${bossColor.glow}`,
                textTransform: 'uppercase',
                willChange: 'transform'
              }}
            >
              <span style={{ paddingRight: 'clamp(40px, 8vw, 80px)' }}>
                ⚡ BOSS ⚡ {member.name.toUpperCase()} ⚡ LEGENDARY ⚡
              </span>
              <span style={{ paddingRight: 'clamp(40px, 8vw, 80px)' }}>
                ⚡ BOSS ⚡ {member.name.toUpperCase()} ⚡ LEGENDARY ⚡
              </span>
            </div>
          </div>
          
          {/* Character Portrait Area - Boss Style */}
          <div 
            className="relative mb-3 sm:mb-4 mt-3 sm:mt-4"
            style={{
              minHeight: 'clamp(200px, 50vw, 350px)',
              background: 'transparent',
              position: 'relative',
              marginLeft: 'clamp(0.5rem, 1.5vw, 1rem)',
              marginRight: 'clamp(0.5rem, 1.5vw, 1rem)'
            }}
          >
            {/* Simplified Portrait Glow Effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, ${bossColor.glow}25 0%, transparent 60%)`,
                borderRadius: 'clamp(3px, 0.8vw, 8px)',
                filter: 'blur(clamp(6px, 1.5vw, 12px))',
                zIndex: 1,
                willChange: 'opacity'
              }}
            />
            
            <div 
              className="relative overflow-visible z-10 flex items-center justify-center"
              style={{
                minHeight: 'clamp(200px, 50vw, 350px)',
                height: 'clamp(200px, 50vw, 350px)',
                borderRadius: 'clamp(3px, 0.8vw, 8px)',
                background: `linear-gradient(135deg, ${bossColor.primary}20 0%, ${bossColor.secondary}20 100%)`,
                border: `clamp(1px, 0.3vw, 3px) solid ${bossColor.primary}60`,
                boxShadow: `0 0 clamp(8px, 2vw, 20px) ${bossColor.glow}30`,
                padding: 'clamp(0.5rem, 1vw, 1rem)'
              }}
            >
              <div 
                className="relative w-full h-full"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                width={400}
                height={400}
                  className="w-full h-full object-contain"
                style={{ 
                    filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
                    objectPosition: 'center center',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    display: 'block',
                    willChange: 'transform'
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 4}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  quality={85}
                  unoptimized={member.image.endsWith('.jfif')}
                />
              </div>
              {/* Simplified Overlay Effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${bossColor.glow}10 100%)`,
                  opacity: 0.5
                }}
              />
            </div>
          </div>
          
          {/* Boss Name Tag - Epic Style */}
          <div 
            className="relative z-10"
            style={{
              paddingLeft: 'clamp(0.5rem, 1.5vw, 1rem)',
              paddingRight: 'clamp(0.5rem, 1.5vw, 1rem)',
              paddingBottom: 'clamp(0.5rem, 1.5vw, 1rem)'
            }}
          >
            <div 
              className="relative"
              style={{
                padding: 'clamp(0.5rem, 1.2vw, 0.75rem) clamp(0.5rem, 1.5vw, 1rem)',
                background: `linear-gradient(135deg, ${bossColor.primary} 0%, ${bossColor.secondary} 100%)`,
                borderRadius: 'clamp(3px, 0.8vw, 8px)',
                boxShadow: `
                  0 clamp(1px, 0.4vw, 4px) clamp(6px, 1.5vw, 15px) ${bossColor.glow}60,
                  inset 0 clamp(1px, 0.25vw, 2px) clamp(3px, 1vw, 8px) ${bossColor.glow}30
                `,
                border: `clamp(1px, 0.25vw, 2px) solid ${bossColor.glow}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Simplified Shimmer Effect - Removed for performance */}
              
              <h4 
                className="text-center relative z-10" 
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: isCordyx ? 'clamp(0.52rem, 1.6vw, 0.95rem)' : 'clamp(0.6rem, 1.8vw, 1.2rem)',
                  color: bossColor.glow,
                  fontWeight: '400',
                  letterSpacing: isCordyx ? 'clamp(0.02em, 0.1vw, 0.08em)' : 'clamp(0.03em, 0.12vw, 0.1em)',
                  textShadow: `
                    clamp(1px, 0.25vw, 2px) clamp(1px, 0.25vw, 2px) 0px rgba(0,0,0,0.8),
                    0 0 clamp(4px, 1.2vw, 8px) ${bossColor.glow}
                  `,
                  lineHeight: '1.3',
                  textTransform: 'uppercase',
                  padding: '0 clamp(0.2rem, 0.4vw, 0.5rem)',
                  wordBreak: 'break-word'
                }}
              >
                {member.name.toUpperCase()}
              </h4>
            </div>
            
            {/* Social Media Links - Boss Style */}
            <div className="flex justify-center relative z-20" style={{ gap: 'clamp(0.5rem, 1.2vw, 1rem)', marginTop: 'clamp(0.75rem, 2vw, 1.25rem)', marginBottom: 'clamp(0.5rem, 1.2vw, 0.75rem)' }}>
              <motion.a 
                href={member.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center relative"
                style={{
                  width: 'clamp(36px, 7vw, 64px)',
                  height: 'clamp(36px, 7vw, 64px)',
                  background: `linear-gradient(135deg, #1877F2 0%, #0d5fcc 100%)`,
                  border: `clamp(1px, 0.4vw, 4px) solid ${bossColor.primary}`,
                  borderRadius: 'clamp(4px, 1.2vw, 12px)',
                  boxShadow: `
                    0 0 clamp(6px, 1.5vw, 15px) ${bossColor.glow}40,
                    clamp(1px, 0.4vw, 4px) clamp(1px, 0.4vw, 4px) 0px rgba(0,0,0,0.5)
                  `,
                  zIndex: 20
                }}
              >
                <Facebook className="text-white" fill="white" style={{ strokeWidth: 0, width: 'clamp(20px, 4vw, 40px)', height: 'clamp(20px, 4vw, 40px)' }} />
              </motion.a>
              <motion.a 
                href={member.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center relative"
                style={{
                  width: 'clamp(36px, 7vw, 64px)',
                  height: 'clamp(36px, 7vw, 64px)',
                  background: `linear-gradient(135deg, #000000 0%, #1a1a1a 100%)`,
                  border: `clamp(1px, 0.4vw, 4px) solid ${bossColor.primary}`,
                  borderRadius: 'clamp(4px, 1.2vw, 12px)',
                  boxShadow: `
                    0 0 clamp(6px, 1.5vw, 15px) ${bossColor.glow}40,
                    clamp(1px, 0.4vw, 4px) clamp(1px, 0.4vw, 4px) 0px rgba(0,0,0,0.5)
                  `,
                  zIndex: 20
                }}
              >
                <svg className="text-white" fill="white" viewBox="0 0 24 24" style={{ strokeWidth: 0, width: 'clamp(20px, 4vw, 40px)', height: 'clamp(20px, 4vw, 40px)' }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              <motion.a 
                href={member.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center relative"
                style={{
                  width: 'clamp(36px, 7vw, 64px)',
                  height: 'clamp(36px, 7vw, 64px)',
                  background: `linear-gradient(135deg, #0077B5 0%, #005885 100%)`,
                  border: `clamp(1px, 0.4vw, 4px) solid ${bossColor.primary}`,
                  borderRadius: 'clamp(4px, 1.2vw, 12px)',
                  boxShadow: `
                    0 0 clamp(6px, 1.5vw, 15px) ${bossColor.glow}40,
                    clamp(1px, 0.4vw, 4px) clamp(1px, 0.4vw, 4px) 0px rgba(0,0,0,0.5)
                  `,
                  zIndex: 20
                }}
              >
                <Linkedin className="text-white" fill="white" style={{ strokeWidth: 0, width: 'clamp(20px, 4vw, 40px)', height: 'clamp(20px, 4vw, 40px)' }} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.article>
    );
});

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
      
      <div className="container relative z-10 px-4 sm:px-6 md:px-8" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        {/* Core Members Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: 'clamp(2rem, 4vw, 4rem)' }}
        >
          <h2 
            className="font-black text-white pixelated"
            style={{ 
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
              letterSpacing: '0.05em',
              textShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px #000000',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
            }}
          >
            CORE MEMBERS
          </h2>
          <div className="flex justify-center" style={{ marginTop: 'clamp(1rem, 2vw, 1.5rem)' }}>
            <div className="ph-divider" />
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {otherMembers.map((member, index) => (
            <TeamMember key={`${member.name}-${index}`} member={member} index={index} />
          ))}
        </div>

        {/* Former Members Callout */}
        <div 
          className="flex justify-center"
          style={{ marginTop: 'clamp(3rem, 6vw, 5rem)', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <div
            className="relative text-center px-6 py-4 mx-auto"
            style={{
              border: '3px dashed rgba(255,255,255,0.4)',
              borderRadius: '12px',
              background: 'rgba(0,0,0,0.6)',
              boxShadow: '0 0 20px rgba(0,0,0,0.5)',
              maxWidth: '980px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <p
              className="pixelated mb-2"
              style={{
                fontSize: 'clamp(0.7rem, 1vw, 1rem)',
                letterSpacing: '0.1em',
                color: '#facc15',
                textAlign: 'center'
              }}
            >
              FORMER MEMBERS
            </p>
            <p
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.55rem, 0.9vw, 0.85rem)',
                lineHeight: 1.8,
                letterSpacing: '0.05em',
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >
              {[...foundingMembers.map((m) => m.name), ...formerMembers].join(' • ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
