import Image from 'next/image';

export default function Header() {
  return (
    <header>
      {/* Ambient Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '240px', height: '240px', background: 'rgba(34,211,238,0.12)', filter: 'blur(60px)', borderRadius: '50%', animation: 'orbDrift 28s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '8%', right: '12%', width: '280px', height: '280px', background: 'rgba(168,85,247,0.12)', filter: 'blur(70px)', borderRadius: '50%', animation: 'orbDrift2 32s ease-in-out infinite' }}></div>
      </div>
      <div className="container header__container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="header__left">
          <h1>Filipino Web3</h1>
          <p>
            is an organization with the aim of helping our fellow Filipinos hone
            their skills and maximize their potential to grow in the Web3 space.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#about" className="btn btn-primary btn-cta">Get Started</a>
            <a href="#team" className="btn btn-secondary">Meet the Team</a>
          </div>
          <div className="hero__stats">
            <span><strong>2K+</strong> members</span>
            <span className="dot" />
            <span><strong>30+</strong> partners</span>
            <span className="dot" />
            <span><strong>100+</strong> events</span>
          </div>
        </div>
        <div className="header__right">
          <div className="header__right-image">
            <Image 
              src="/images/fw3-logo-bg1.png" 
              alt="Filipino Web3 Logo" 
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
