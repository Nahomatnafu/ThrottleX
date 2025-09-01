import Image from 'next/image';

export default function PricingSection() {
  const pricingCards = [
    {
      id: 1,
      title: 'Jet Ski Rentals',
      price: '$99',
      period: '/hour',
      symbol: '/design-files/jet_ski_rentals_symbol.png',
      features: [
        'Latest model jet skis',
        'Safety equipment included',
        'Brief training session',
        'Fuel included'
      ]
    },
    {
      id: 2,
      title: 'Boat Rentals',
      price: '$199',
      period: '/hour',
      symbol: '/design-files/boat_rentals_symbol.png',
      features: [
        'Premium speedboats',
        'Up to 8 passengers',
        'Safety equipment included',
        'Fuel included'
      ]
    },
    {
      id: 3,
      title: 'Tubing',
      price: '$149',
      period: '/hour',
      symbol: '/design-files/tubing_rentals_symbol.png',
      features: [
        'Boat + tubing equipment',
        'Professional driver',
        'Up to 4 tubers at once',
        'Safety equipment included'
      ]
    },
    {
      id: 4,
      title: 'Camera Packages',
      price: '$79',
      period: '/session',
      symbol: '/design-files/camera_rentals_symbol.png',
      features: [
        'GoPro rental',
        'Drone footage (15 min)',
        'Digital delivery',
        'Basic editing included'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            <span className="pricing-title-black">ADVENTURE</span><br />
            <span className="pricing-title-blue">PACKAGES</span>
          </h2>
          <p className="pricing-description">
            Choose the perfect package for<br />
            your water adventure
          </p>
        </div>

        <div className="pricing-cards">
          {pricingCards.map((card) => (
            <div key={card.id} className="pricing-card">
              <div className="pricing-card-header">
                <Image 
                  src={card.symbol} 
                  alt={card.title}
                  className="pricing-symbol"
                  width={45}
                  height={45}
                />
              </div>
              <div className="pricing-card-content">
                <h3 className="pricing-card-title">{card.title}</h3>
                <div className="pricing-price">
                  <span className="price-amount">{card.price}</span>
                  <span className="price-period">{card.period}</span>
                </div>
                <ul className="pricing-features">
                  {card.features.map((feature, index) => (
                    <li key={index}>
                      <Image 
                        src="/design-files/tick_symbol.png" 
                        alt="✓"
                        width={16}
                        height={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="pricing-book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
