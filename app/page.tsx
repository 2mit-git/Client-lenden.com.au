import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SpecializedShops from '@/components/SpecializedShops';
import QualityAssurance from '@/components/QualityAssurance';
import FeaturedProducts from '@/components/FeaturedProducts';
import TraditionOfExcellence from '@/components/TraditionOfExcellence';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import ContactUs from '@/components/ContactUs';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="products"><SpecializedShops /></section>
        <section id="quality"><QualityAssurance /></section>
        <section id="featured"><FeaturedProducts /></section>
        <section id="tradition"><TraditionOfExcellence /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="locations"><Locations /></section>
        <section id="contact"><ContactUs /></section>
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
