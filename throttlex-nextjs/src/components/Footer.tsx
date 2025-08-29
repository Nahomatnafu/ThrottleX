import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Column 1: Brand */}
        <div className="footer__col">
          <div className="footer__brand">
            <Image src="/design-files/ThrottleX Logo.png" alt="Throttle X" className="footer__logo" width={32} height={32} />
            <h3 className="footer__brand-title">
              <span className="footer__brand-throttle">THROTTLE</span>
              <span className="footer__brand-x">X</span>
            </h3>
          </div>

          <p className="footer__tagline">
            Experience the ultimate water <br />
            adventure with our premium <br />
            equipment and expert guidance.
          </p>

          <div className="footer__social">
            <a href="#" className="social-link social-link-facebook">
              <Image src="/design-files/facebook_vector.png" alt="Facebook" width={23} height={23} />
            </a>
            <a href="#" className="social-link social-link-instagram">
              <Image src="/design-files/instagram_symbol.png" alt="Instagram" width={23} height={23} />
            </a>
            <a href="#" className="social-link social-link-tiktok">
              <Image src="/design-files/tiktok_symbol.png" alt="TikTok" width={23} height={23} />
            </a>
            <a href="#" className="social-link social-link-youtube">
              <Image src="/design-files/youtube_vector.png" alt="YouTube" width={23} height={23} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#services">Services</a></li>
            <li><a href="#why-choose-us">Why Choose Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Book Now</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact Us</h4>
          <ul className="footer__contact">
            <li>
              <Image src="/design-files/location_symbol.png" alt="" width={20} height={20} />
              <span>123 Marina Way, Lake City, FL 32055</span>
            </li>
            <li>
              <Image src="/design-files/phone_symbol.png" alt="" width={20} height={20} />
              <span>(555) 123-4567</span>
            </li>
            <li>
              <Image src="/design-files/mail_symbol.png" alt="" width={20} height={20} />
              <span>info@throttlex.com</span>
            </li>
            <li>
              <Image src="/design-files/clock_symbol.png" alt="" width={20} height={20} />
              <span>Open daily: 8AM - 6PM</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Location / CTA */}
        <div className="footer__col">
          <h4 className="footer__heading">Location</h4>
          <button className="footer__cta" type="button">Get Directions</button>
        </div>
      </div>

      <hr className="footer__rule" />

      <div className="footer__bottom">
        © 2023 Throttle X. All rights reserved. | Privacy Policy | Terms of Service
      </div>
    </footer>
  );
}
