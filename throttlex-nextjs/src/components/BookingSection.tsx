import Image from 'next/image';

export default function BookingSection() {
  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-card">
          {/* Left Side - Booking Form */}
          <div className="booking-form-side">
            <div className="booking-header">
              <h2 className="booking-title">
                <span className="booking-title-black">Book Your</span>
                <span className="booking-title-blue">Adventure</span>
              </h2>
              <p className="booking-description">
                Ready to experience the thrill? Reserve your adventure now and<br />
                prepare for an unforgettable experience on the water!
              </p>
            </div>

            <form className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" id="fullName" name="fullName" className="form-input" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="Your email" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input type="date" id="date" name="date" className="form-input" placeholder="mm/dd/yyyy" />
                </div>
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service</label>
                  <select id="service" name="service" className="form-select">
                    <option value="">Select a service</option>
                    <option value="jet-ski">Jet Ski Rental</option>
                    <option value="boat">Boat Rental</option>
                    <option value="tubing">Tubing Rental</option>
                    <option value="drone">Drone</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="requests" className="form-label">Special Requests</label>
                <textarea id="requests" name="requests" className="form-textarea" placeholder="Any special requests or questions?"></textarea>
              </div>

              <button type="submit" className="booking-submit-btn">Book Now</button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="booking-contact-side">
            <div className="contact-overlay">
              <h3 className="contact-title">Contact Us</h3>
              
              <div className="contact-info">
                <div className="contact-item">
                  <Image src="/design-files/location_symbol.png" alt="Location" className="contact-icon" width={20} height={20} />
                  <span className="contact-text">123 Ocean Drive, Miami Beach, FL</span>
                </div>
                <div className="contact-item">
                  <Image src="/design-files/phone_symbol.png" alt="Phone" className="contact-icon" width={20} height={20} />
                  <span className="contact-text">(555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <Image src="/design-files/mail_symbol.png" alt="Email" className="contact-icon" width={20} height={20} />
                  <span className="contact-text">info@throttlex.com</span>
                </div>
                <div className="contact-item">
                  <Image src="/design-files/clock_symbol.png" alt="Hours" className="contact-icon" width={20} height={20} />
                  <span className="contact-text">Open Daily: 8AM - 6PM</span>
                </div>
              </div>

              <div className="social-media">
                <a href="#" className="social-link">
                  <Image src="/design-files/facebook_vector.png" alt="Facebook" width={23} height={23} />
                </a>
                <a href="#" className="social-link">
                  <Image src="/design-files/instagram_symbol.png" alt="Instagram" width={23} height={23} />
                </a>
                <a href="#" className="social-link">
                  <Image src="/design-files/tiktok_symbol.png" alt="TikTok" width={23} height={23} />
                </a>
                <a href="#" className="social-link">
                  <Image src="/design-files/youtube_vector.png" alt="YouTube" width={23} height={23} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
