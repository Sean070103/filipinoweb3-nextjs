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
        className="absolute left-0 right-0 z-10"
          style={{
          bottom: 0,
          height: 120,
          backgroundImage: "url('/images/dirt.png'), url('/images/dirt.png')",
          backgroundRepeat: 'repeat-x, repeat-x',
          backgroundSize: 'auto 120px, auto 120px',
          backgroundPosition: 'left bottom, right bottom',
          imageRendering: 'pixelated',
        }}
      />

      {/* Tindahan Store on top of dirt */}
      <div className="absolute left-1/4 z-20" style={{ bottom: '-10px' }}>
        <Image
          src="/images/tindahan2.png"
          alt="Sari-Sari Store"
          width={200}
          height={150}
          priority
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Animated Clouds */}
      <div 
        className="absolute top-10 left-10 z-20"
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
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div 
        className="absolute top-20 right-20 z-20"
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
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div 
        className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20"
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
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div 
        className="absolute top-12 left-1/4 z-20"
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
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div 
        className="absolute top-24 right-1/4 z-20"
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
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div 
        className="absolute top-8 left-3/4 z-20"
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
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div 
        className="absolute top-28 left-1/6 z-20"
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
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div 
        className="absolute top-14 right-1/6 z-20"
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
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Animated Sun */}
      <div 
        className="absolute top-8 right-1/3 z-20"
        style={{
          animation: 'pulseSun 4s ease-in-out infinite',
        }}
      >
        <div 
          className="w-16 h-16 bg-yellow-400"
          style={{ 
            imageRendering: 'pixelated',
            borderRadius: '50%',
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
              fontSize: '5rem',
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

      {/* Moving Jeepney */}
      <div 
        className="absolute bottom-8 z-20"
        style={{
          animation: 'moveJeepney 15s linear infinite',
          left: '-200px',
        }}
      >
        <Image
          src="/images/jeep.png"
          alt="Pixel Jeepney"
          width={120}
          height={60}
          priority
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes moveJeepney {
          0% {
            left: -200px;
          }
          100% {
            left: calc(100vw + 200px);
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