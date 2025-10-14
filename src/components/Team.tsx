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
  return (
    <motion.article 
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
      className="group relative"
    >
      <div className="bg-white/5 backdrop-blur-md border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-500 group relative overflow-hidden"
           style={{ 
             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
             transformStyle: 'preserve-3d',
             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
           }}>
        
        {/* Glass Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Glass Edge Highlights */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        
        {/* Corner Glass Reflections */}
        <div className="absolute top-2 right-2 w-6 h-6 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        
         <div className="relative z-10">
           {/* Full-Width Portrait Image */}
           <div className="relative overflow-hidden rounded-lg border border-white/10">
             <Image 
               src={member.image} 
               alt={member.name} 
               width={400}
               height={400}
               className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-colors duration-300" />
             {/* Glass reflection on image */}
             <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           </div>
           
           {/* Name and Role */}
           <div className="text-center p-4">
             <h4 className="text-xl font-mono font-bold text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
               {member.name}
             </h4>
             {member.role && (
               <p className="text-sm text-[var(--ph-yellow)] font-mono mt-1">
                 {member.role}
               </p>
             )}
             {member.expertise && (
               <p className="text-xs text-gray-400 font-mono mt-2 leading-relaxed">
                 {member.expertise}
               </p>
             )}
             {isCore && (
               <span className="text-sm text-gray-400 font-mono">Core Team</span>
             )}
           </div>
           
           {/* Social Links (More visible, slide in on hover) */}
           <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-30 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-out">
             <motion.a 
               href={member.socials.facebook} 
               target="_blank" 
               rel="noopener noreferrer"
               initial={{ scale: 0.8, opacity: 0.7 }}
               whileHover={{ 
                 scale: 1.3, 
                 y: -8,
                 rotate: 5,
                 boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.3)'
               }}
               whileTap={{ scale: 0.9 }}
               transition={{ 
                 type: "spring", 
                 stiffness: 400, 
                 damping: 10 
               }}
               className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
               style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
             >
               <Facebook className="w-6 h-6 text-white" />
             </motion.a>
             <motion.a 
               href={member.socials.twitter} 
               target="_blank" 
               rel="noopener noreferrer"
               initial={{ scale: 0.8, opacity: 0.7 }}
               whileHover={{ 
                 scale: 1.3, 
                 y: -8,
                 rotate: -5,
                 boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.3)'
               }}
               whileTap={{ scale: 0.9 }}
               transition={{ 
                 type: "spring", 
                 stiffness: 400, 
                 damping: 10 
               }}
               className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
               style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
             >
               <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
               </svg>
             </motion.a>
             <motion.a 
               href={member.socials.linkedin} 
               target="_blank" 
               rel="noopener noreferrer"
               initial={{ scale: 0.8, opacity: 0.7 }}
               whileHover={{ 
                 scale: 1.3, 
                 y: -8,
                 rotate: 5,
                 boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.3)'
               }}
               whileTap={{ scale: 0.9 }}
               transition={{ 
                 type: "spring", 
                 stiffness: 400, 
                 damping: 10 
               }}
               className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
               style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
             >
               <Linkedin className="w-6 h-6 text-white" />
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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse" 
             style={{ animation: 'float 6s ease-in-out infinite, pulse 3s ease-in-out infinite' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-pulse delay-1000" 
             style={{ animation: 'float 8s ease-in-out infinite reverse, pulse 4s ease-in-out infinite' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-2000" 
             style={{ animation: 'float 10s ease-in-out infinite, pulse 5s ease-in-out infinite' }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500" 
             style={{ animation: 'float 7s ease-in-out infinite, pulse 3.5s ease-in-out infinite' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='20'/%3E%3Crect x='20' y='20' width='20' height='20'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
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
          <h2 className="text-5xl lg:text-6xl font-mono font-black text-white mb-6"
              style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)' }}>
            Core Team
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
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
          <h2 className="text-5xl lg:text-6xl font-mono font-black text-white mb-6"
              style={{ textShadow: '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)' }}>
            Founding Members
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
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
