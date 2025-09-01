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
          <Link href="/" className="logo">
            <div className="logo-water"></div>
            <div className="logo-text">
              <span className="logo-throttle">THROTTLE</span>
              <span className="logo-x"> X</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="main-nav">
            <ul>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#why-choose-us">Why Choose Us</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Book Now Button */}
          <div className="book-now-container">
            <Link href="/#contact" className="book-now-btn">Book Now</Link>
          </div>
        </div>
      </header>
    </>
  );
}
