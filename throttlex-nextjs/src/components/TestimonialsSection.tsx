import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Adventure Enthusiast',
      avatar: '/design-files/testimonial_1.png',
      text: 'Amazing experience! The jet ski was in perfect condition and the staff was incredibly helpful. Will definitely be back for more adventures!',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'Weekend Warrior',
      avatar: '/design-files/testimonial_2.png',
      text: 'ThrottleX made our group outing unforgettable. The boat rental was seamless and the tubing experience was absolutely thrilling!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Chen',
      title: 'Water Sports Lover',
      avatar: '/design-files/testimonial_3.png',
      text: 'Professional service, top-quality equipment, and stunning locations. ThrottleX exceeded all our expectations for our Miami vacation!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Adventurers Say</h2>
          <p className="testimonials-description">
            Real experiences from our satisfied customers
          </p>
        </div>

        <div className="testimonials-cards">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-profile">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                  width={50}
                  height={50}
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-title">{testimonial.title}</p>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Image 
                    key={index}
                    src="/design-files/star_symbol.png" 
                    alt="Star"
                    width={18}
                    height={24}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
