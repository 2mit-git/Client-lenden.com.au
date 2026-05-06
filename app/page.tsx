import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SpecializedShops from '@/components/SpecializedShops';
import QualityAssurance from '@/components/QualityAssurance';
import FeaturedProducts from '@/components/FeaturedProducts';
import TraditionOfExcellence from '@/components/TraditionOfExcellence';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SpecializedShops />
        <QualityAssurance />
        <FeaturedProducts />
        <TraditionOfExcellence />
        <Testimonials />
        <Locations />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
