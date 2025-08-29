import Image from 'next/image';

export default function WhyChooseUsSection() {
  const features = [
    {
      id: 1,
      icon: '/design-files/Premium_Equipment_Symbol.png',
      title: 'Premium Equipment',
      description: 'Top-of-the-line jet skis and boats maintained to the highest standards for your safety and enjoyment.'
    },
    {
      id: 2,
      icon: '/design-files/Expert_Guidance_Symbol.png',
      title: 'Expert Guidance',
      description: 'Our experienced team provides comprehensive training and support for riders of all skill levels.'
    },
    {
      id: 3,
      icon: '/design-files/Safety_First_Symbol.png',
      title: 'Safety First',
      description: 'All safety equipment included with thorough briefings to ensure your adventure is both thrilling and secure.'
    },
    {
      id: 4,
      icon: '/design-files/Stunning_Locations_Symbol.png',
      title: 'Stunning Locations',
      description: 'Explore Miami\'s most beautiful waterways and discover hidden gems along the coastline.'
    },
    {
      id: 5,
      icon: '/design-files/Flexible_Packages_Symbol.png',
      title: 'Flexible Packages',
      description: 'Choose from hourly rentals to full-day adventures, with packages tailored to your schedule and budget.'
    },
    {
      id: 6,
      icon: '/design-files/Memorable_Experiences_Symbol.png',
      title: 'Memorable Experiences',
      description: 'Create lasting memories with friends and family through our unforgettable water adventures.'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <h2 className="why-choose-us-title">
            <span className="why-choose-us-title-black">Why Choose</span><br />
            <span className="why-choose-us-title-blue">ThrottleX</span>
          </h2>
          <p className="why-choose-us-description">
            Experience the difference with our premium service<br />
            and commitment to your adventure
          </p>
        </div>

        <div className="why-choose-us-cards">
          {features.map((feature) => (
            <div key={feature.id} className="why-choose-us-card">
              <div className="card-icon-circle">
                <Image 
                  src={feature.icon} 
                  alt={`${feature.title} icon`}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
