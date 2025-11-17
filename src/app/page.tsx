import Navigation from '@/components/Navigation';
import RetroGamingHero from '@/components/RetroGamingHero';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import Values from '@/components/Values';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <RetroGamingHero />
      <Header />
      <Categories />
      <Values />
      <Team />
      <Partners />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}
