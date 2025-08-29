import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AdventureGallerySection from '@/components/AdventureGallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AdventureGallerySection />
      <TestimonialsSection />
      <PricingSection />
      <BookingSection />
      <Footer />
    </>
  );
}
