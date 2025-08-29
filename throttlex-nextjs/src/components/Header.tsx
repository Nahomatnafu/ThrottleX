import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Deals Header */}
      <div className="deals-header">
        <p>🔥 Summer Special: 20% off all rentals Monday-Thursday! Book now!</p>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <div className="logo-water"></div>
            <div className="logo-text">
              <span className="logo-throttle">THROTTLE</span>
              <span className="logo-x"> X</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="main-nav">
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Book Now Button */}
          <div className="book-now-container">
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
      </header>
    </>
  );
}
