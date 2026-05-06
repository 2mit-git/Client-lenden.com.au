import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PoultryHero from '@/components/PoultryHero';
import PoultryProducts from '@/components/PoultryProducts';
import PoultryCTA from '@/components/PoultryCTA';
import PoultryQuality from '@/components/PoultryQuality';
import PoultryBottomCTA from '@/components/PoultryBottomCTA';

export default function PoultryPage() {
  return (
    <>
      <Header />
      <main>
        <PoultryHero />
        <PoultryProducts />
        <PoultryCTA />
        <PoultryQuality />
        <PoultryBottomCTA />
      </main>
      <Footer />
    </>
  );
}
