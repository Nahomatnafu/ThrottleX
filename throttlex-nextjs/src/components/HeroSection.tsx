import Image from 'next/image';
import Link from 'next/link';

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
          <span className="hero-title-white">RIDE THE WAVES</span><br />
          <span className="hero-title-blue">OWN THE ADVENTURE</span>
        </h1>
        <p className="hero-description">
          Experience the ultimate thrill on Miami&apos;s crystal-clear waters<br />
          with our premium jet ski and boat rentals
        </p>
        <div className="hero-buttons">
          <Link href="#contact" className="hero-btn hero-btn-primary">Book Your Adventure</Link>
          <Link href="#services" className="hero-btn hero-btn-secondary">Explore Services</Link>
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
