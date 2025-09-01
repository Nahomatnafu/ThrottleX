import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Gallery() {
  // Generate 12 gallery items with colorful backgrounds (4x3 grid)
  const galleryItems = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <>
      <Header />

      <section className="gallery-page-section">
        <div className="gallery-page-container">
          <div className="gallery-page-header">
            <h1 className="gallery-page-title">
              <span className="gallery-page-title-black">ADVENTURE</span><br />
              <span className="gallery-page-title-blue">GALLERY</span>
            </h1>
            <p className="gallery-page-description">
              Explore our collection of thrilling water adventures<br />
              and see what awaits you on the water
            </p>
          </div>

          <div className="gallery-page-grid">
            {galleryItems.map((item) => (
              <div key={item} className="gallery-page-item">
                {/* Colorful background placeholders - styled with CSS */}
              </div>
            ))}
          </div>

          <div className="gallery-page-back-container">
            <Link href="/" className="gallery-back-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
