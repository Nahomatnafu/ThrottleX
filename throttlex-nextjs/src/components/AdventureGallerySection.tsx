import Image from 'next/image';
import Link from 'next/link';

export default function AdventureGallerySection() {
  const galleryImages = [
    '/design-files/adventure_1.jpg',
    '/design-files/adventure_2.jpg',
    '/design-files/adventure_3.jpg',
    '/design-files/adventure_4.jpg',
    '/design-files/adventure_5.jpg',
    '/design-files/adventure_6.png',
    '/design-files/adventure_7.png',
    '/design-files/adventure_8.png',
    '/design-files/adventure_9.png'
  ];

  return (
    <section className="adventure-gallery-section">
      <div className="adventure-gallery-container">
        <div className="adventure-gallery-header">
          <h2 className="adventure-gallery-title">
            <span className="adventure-gallery-title-black">Adventure</span><br />
            <span className="adventure-gallery-title-blue">Gallery</span>
          </h2>
          <p className="adventure-gallery-description">
            See the excitement and joy our customers experience<br />
            during their thrilling water adventures
          </p>
        </div>

        <div className="adventure-gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <Image 
                src={image} 
                alt={`Adventure ${index + 1}`}
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <div className="gallery-button-container">
          <Link href="/gallery" className="gallery-btn">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
