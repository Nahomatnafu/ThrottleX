import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      image: '/design-files/Card_1.png',
      icon: '/design-files/jet_ski_rentals_symbol.png',
      title: 'Jet Ski Rentals',
      description: 'Experience the thrill of riding our premium jet skis across Miami\'s crystal-clear waters.'
    },
    {
      id: 2,
      image: '/design-files/Card_2.png',
      icon: '/design-files/boat_rentals_symbol.png',
      title: 'Boat Rentals',
      description: 'Cruise in style with our luxury boat rentals, perfect for groups and special occasions.'
    },
    {
      id: 3,
      image: '/design-files/Card_3.png',
      icon: '/design-files/tubing_rentals_symbol.png',
      title: 'Tubing Adventures',
      description: 'Hold on tight for an exhilarating tubing experience behind our powerful boats.'
    },
    {
      id: 4,
      image: '/design-files/Card_4.png',
      icon: '/design-files/camera_rentals_symbol.png',
      title: 'Camera Packages',
      description: 'Capture every moment of your adventure with our professional camera rental packages.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            <span className="services-title-black">OUR THRILLING</span><br />
            <span className="services-title-blue">SERVICES</span>
          </h2>
          <p className="services-description">
            Choose from our exciting range of water activities<br />
            and create unforgettable memories on the water
          </p>
        </div>

        <div className="services-cards">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  width={296}
                  height={256}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <Image 
                    src={service.icon} 
                    alt={`${service.title} icon`}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <button className="card-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
