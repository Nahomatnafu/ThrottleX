import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <Image
          src="/design-files/Hero_Ski.png"
          alt="Jet Ski Adventure"
          className="hero-image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-white">Experience the</span><br />
          <span className="hero-title-blue">Ultimate Thrill</span>
        </h1>
        <p className="hero-description">
          Rent premium jet skis and explore Miami&apos;s stunning waters.<br />
          Adventure awaits on every wave!
        </p>
        <div className="hero-buttons">
          <button className="hero-btn hero-btn-primary">Book Your Adventure</button>
          <button className="hero-btn hero-btn-secondary">View Our Fleet</button>
        </div>
      </div>
      <div className="hero-decoration">
        <Image
          src="/design-files/Squiggly.png"
          alt="Wave decoration"
          className="squiggly-decoration"
          width={200}
          height={60}
        />
      </div>
    </section>
  );
}
