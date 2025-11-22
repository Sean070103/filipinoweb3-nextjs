'use client';

import Image from 'next/image';

export default function RetroGamingHero() {
  return (
        <div 
      id="hero"
      className="relative min-h-screen w-full"
          style={{
        background: '#66B2FF',
      }}
    >
      {/* Dirt Layer - combined from left to right */}
      <div
        className="absolute left-0 right-0 z-10 dirt-layer"
          style={{
          bottom: 0,
          height: 'clamp(60px, 8vw, 120px)',
          backgroundImage: "url('/images/dirt.png'), url('/images/dirt.png')",
          backgroundRepeat: 'repeat-x, repeat-x',
          backgroundSize: 'auto clamp(60px, 8vw, 120px), auto clamp(60px, 8vw, 120px)',
          backgroundPosition: 'left bottom, right bottom',
          imageRendering: 'pixelated',
        }}
      />

      {/* Tindahan Store on top of dirt */}
      <div className="absolute left-1/4 z-20 tindahan-store hidden sm:block" style={{ bottom: '-10px' }}>
        <Image
          src="/images/tindahan2.png"
          alt="Sari-Sari Store"
          width={200}
          height={150}
          priority
          className="w-auto h-auto"
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(100px, 15vw, 200px)',
            height: 'auto'
          }}
        />
      </div>

      {/* Animated Clouds */}
      <div 
        className="absolute top-10 left-10 z-20 pixel-cloud hidden sm:block"
        style={{
          animation: 'floatCloud 8s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/cloud.png"
          alt="Pixel Cloud"
          width={80}
          height={40}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(30px, 5vw, 80px)',
            height: 'auto'
          }}
        />
      </div>

      <div 
        className="absolute top-20 right-20 z-20 pixel-cloud hidden md:block"
        style={{
          animation: 'floatCloud 10s ease-in-out infinite reverse',
        }}
      >
        <Image
          src="/images/cloud.png"
          alt="Pixel Cloud"
          width={60}
          height={30}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(25px, 4vw, 60px)',
            height: 'auto'
          }}
        />
      </div>

      <div 
        className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20 pixel-cloud"
        style={{
          animation: 'floatCloud 12s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/cloud.png"
          alt="Pixel Cloud"
          width={70}
          height={35}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(28px, 4.5vw, 70px)',
            height: 'auto'
          }}
        />
      </div>

      <div 
        className="absolute top-12 left-1/4 z-20 pixel-cloud hidden lg:block"
        style={{
          animation: 'floatCloud 9s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/cloud.png"
          alt="Pixel Cloud"
          width={50}
          height={25}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(20px, 3vw, 50px)',
            height: 'auto'
          }}
        />
      </div>

      <div 
        className="absolute top-24 right-1/4 z-20 pixel-cloud hidden md:block"
        style={{
          animation: 'floatCloud 11s ease-in-out infinite reverse',
        }}
      >
        <Image
          src="/images/cloud.png"
          alt="Pixel Cloud"
          width={65}
          height={32}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(26px, 4vw, 65px)',
            height: 'auto'
          }}
        />
      </div>

      <div 
        className="absolute top-8 left-3/4 z-20 pixel-cloud hidden lg:block"
        style={{
          animation: 'floatCloud 7s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/cloud.png"
          alt="Pixel Cloud"
          width={45}
          height={22}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(18px, 3vw, 45px)',
            height: 'auto'
          }}
        />
      </div>

      <div 
        className="absolute top-28 left-1/6 z-20 pixel-cloud hidden xl:block"
        style={{
          animation: 'floatCloud 13s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/cloud.png"
          alt="Pixel Cloud"
          width={55}
          height={28}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(22px, 3.5vw, 55px)',
            height: 'auto'
          }}
        />
      </div>

      <div 
        className="absolute top-14 right-1/6 z-20 pixel-cloud hidden xl:block"
        style={{
          animation: 'floatCloud 6s ease-in-out infinite reverse',
        }}
      >
        <Image
          src="/images/cloud.png"
          alt="Pixel Cloud"
          width={40}
          height={20}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(16px, 2.5vw, 40px)',
            height: 'auto'
          }}
        />
      </div>

      {/* Animated Sun */}
      <div 
        className="absolute top-8 right-1/3 z-20 hidden sm:block"
        style={{
          animation: 'pulseSun 4s ease-in-out infinite',
        }}
      >
        <div 
          className="bg-yellow-400"
          style={{ 
            imageRendering: 'pixelated',
            borderRadius: '50%',
            width: 'clamp(40px, 5vw, 64px)',
            height: 'clamp(40px, 5vw, 64px)',
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.6), 0 0 40px rgba(255, 255, 0, 0.4)',
            animation: 'rotateSun 20s linear infinite',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-10">
        <div className="text-center max-w-5xl">
          {/* Main Title */}
          <h1
            className="font-black"
            style={{
              fontFamily: '"Orbitron", "Arial Black", sans-serif',
              fontSize: 'clamp(2rem, 8vw, 5rem)',
              letterSpacing: '0.1em',
              textShadow: '6px 6px 0px rgba(0,0,0,0.8), 12px 12px 0px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.3)',
              fontWeight: '900',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none',
              fontSmooth: 'never',
              textRendering: 'optimizeSpeed',
              background: 'linear-gradient(45deg, #ff0080, #00ff80, #8000ff, #ff8000, #0080ff, #80ff00, #ff0080)',
              backgroundSize: '600% 600%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))',
            }}
          >
            FWEB 3
          </h1>
        </div>
      </div>

      {/* Moving Jeepney 1 - Left to Right */}
      <div 
        className="absolute bottom-8 z-20"
        style={{
          animation: 'moveJeepneyLeftToRight 25s linear infinite',
        }}
      >
        <Image
          src="/images/jeep.png"
          alt="Pixel Jeepney"
          width={120}
          height={60}
          priority
          style={{ 
            imageRendering: 'pixelated',
            width: 'clamp(60px, 8vw, 120px)',
            height: 'auto'
          }}
        />
      </div>

      {/* Moving Jeepney 2 - Right to Left */}
      <div 
        className="absolute bottom-8 z-20"
        style={{
          animation: 'moveJeepneyRightToLeft 25s linear infinite',
          animationDelay: '12.5s'
        }}
      >
        <Image
          src="/images/jeep.png"
          alt="Pixel Jeepney"
          width={120}
          height={60}
          priority
          style={{ 
            imageRendering: 'pixelated', 
            transform: 'scaleX(-1)',
            width: 'clamp(60px, 8vw, 120px)',
            height: 'auto'
          }}
        />
      </div>

      {/* Destination Carousel under dirt */}
      <div 
        className="absolute left-0 right-0 z-5 jeepney-carousel-container"
        style={{
          bottom: 'clamp(-60px, -8vw, -80px)',
          height: 'clamp(50px, 7vw, 80px)',
          background: '#000000',
          borderTop: 'clamp(2px, 0.3vw, 4px) solid #00FF00',
          borderBottom: 'clamp(2px, 0.3vw, 4px) solid #FF6B00',
          overflow: 'hidden',
          imageRendering: 'pixelated',
          boxShadow: 'inset 0 0 30px rgba(0, 255, 0, 0.3), inset 0 0 30px rgba(255, 107, 0, 0.3)'
        }}
      >
        {/* Decorative top border pattern */}
        <div 
          className="absolute top-0 left-0 right-0"
          style={{
            height: '4px',
            background: 'repeating-linear-gradient(90deg, #00FF00 0px, #00FF00 8px, #000000 8px, #000000 16px)',
            imageRendering: 'pixelated'
          }}
        />
        {/* Decorative bottom border pattern */}
        <div 
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '4px',
            background: 'repeating-linear-gradient(90deg, #FF6B00 0px, #FF6B00 8px, #000000 8px, #000000 16px)',
            imageRendering: 'pixelated'
          }}
        />
        {/* Scrolling text with multi-color neon style */}
        <div 
          className="jeepney-carousel relative z-10"
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'scrollCarousel 10s linear infinite',
            fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
            fontSize: 'clamp(0.5rem, 2vw, 1.6rem)',
            fontWeight: '400',
            lineHeight: 'clamp(50px, 7vw, 80px)',
            padding: '0 clamp(15px, 2vw, 30px)',
            imageRendering: 'pixelated',
            WebkitFontSmoothing: 'none',
            fontSmooth: 'never',
            textRendering: 'optimizeSpeed',
            letterSpacing: '0.1em'
          }}
        >
          <span style={{ paddingRight: 'clamp(75px, 10vw, 150px)' }}>
            <span style={{ 
              color: '#39FF14', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #39FF14, 0 0 30px #39FF14, 0 0 45px #39FF14',
              filter: 'drop-shadow(0 0 5px #39FF14)'
            }}>FW3</span> <span style={{ 
              color: '#FF6B00', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #FF6B00, 0 0 30px #FF6B00, 0 0 45px #FF6B00',
              filter: 'drop-shadow(0 0 5px #FF6B00)'
            }}>TO FUTURE</span>
          </span>
          <span style={{ paddingRight: 'clamp(75px, 10vw, 150px)' }}>
            <span style={{ 
              color: '#FFD700', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #FFD700, 0 0 30px #FFD700, 0 0 45px #FFD700',
              filter: 'drop-shadow(0 0 5px #FFD700)'
            }}>FW3</span> <span style={{ 
              color: '#FF00FF', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #FF00FF, 0 0 30px #FF00FF, 0 0 45px #FF00FF',
              filter: 'drop-shadow(0 0 5px #FF00FF)'
            }}>TO FUTURE</span>
          </span>
          <span style={{ paddingRight: 'clamp(75px, 10vw, 150px)' }}>
            <span style={{ 
              color: '#00FFFF', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #00FFFF, 0 0 30px #00FFFF, 0 0 45px #00FFFF',
              filter: 'drop-shadow(0 0 5px #00FFFF)'
            }}>FW3</span> <span style={{ 
              color: '#FFFF00', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #FFFF00, 0 0 30px #FFFF00, 0 0 45px #FFFF00',
              filter: 'drop-shadow(0 0 5px #FFFF00)'
            }}>TO FUTURE</span>
          </span>
          <span style={{ paddingRight: 'clamp(75px, 10vw, 150px)' }}>
            <span style={{ 
              color: '#FF6B9D', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #FF6B9D, 0 0 30px #FF6B9D, 0 0 45px #FF6B9D',
              filter: 'drop-shadow(0 0 5px #FF6B9D)'
            }}>FW3</span> <span style={{ 
              color: '#4ECDC4', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #4ECDC4, 0 0 30px #4ECDC4, 0 0 45px #4ECDC4',
              filter: 'drop-shadow(0 0 5px #4ECDC4)'
            }}>TO FUTURE</span>
          </span>
          <span style={{ paddingRight: 'clamp(75px, 10vw, 150px)' }}>
            <span style={{ 
              color: '#39FF14', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #39FF14, 0 0 30px #39FF14, 0 0 45px #39FF14',
              filter: 'drop-shadow(0 0 5px #39FF14)'
            }}>FW3</span> <span style={{ 
              color: '#FF6B00', 
              textShadow: '3px 3px 0px #000000, 0 0 15px #FF6B00, 0 0 30px #FF6B00, 0 0 45px #FF6B00',
              filter: 'drop-shadow(0 0 5px #FF6B00)'
            }}>TO FUTURE</span>
          </span>
        </div>
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='8' fill='none'/%3E%3Crect x='0' y='0' width='1' height='8' fill='%2300FF00'/%3E%3Crect x='0' y='0' width='8' height='1' fill='%23FF6B00'/%3E%3C/svg%3E")`,
            backgroundSize: '8px 8px',
            imageRendering: 'pixelated'
          }}
        />
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes moveJeepneyLeftToRight {
          0% {
            left: -200px;
            opacity: 0;
          }
          2% {
            left: -200px;
            opacity: 1;
          }
          98% {
            left: calc(100vw + 200px);
            opacity: 1;
          }
          100% {
            left: calc(100vw + 200px);
            opacity: 0;
          }
        }
        
        @keyframes moveJeepneyRightToLeft {
          0% {
            left: calc(100vw + 200px);
            opacity: 0;
          }
          2% {
            left: calc(100vw + 200px);
            opacity: 1;
          }
          98% {
            left: -200px;
            opacity: 1;
          }
          100% {
            left: -200px;
            opacity: 0;
          }
        }
        
        @keyframes scrollCarousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes floatCloud {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-3px);
          }
          75% {
            transform: translateY(-15px) translateX(8px);
          }
        }
        
        @keyframes pulseSun {
          0%, 100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.1);
            filter: brightness(1.2);
          }
        }
        
        @keyframes rotateSun {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>


      {/* Right Edge Blue Strip */}
      <div className="absolute top-0 right-0 w-2 h-full bg-blue-500 z-10"></div>
      
      {/* Bottom Right White Square */}
      <div className="absolute bottom-4 right-4 w-4 h-4 bg-white z-20"></div>
    </div>
  );
}