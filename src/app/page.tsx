import Navigation from '@/components/Navigation';
import CosmicHero from '@/components/CosmicHero';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import Values from '@/components/Values';
import FilipinoVisualAccents from '@/components/FilipinoVisualAccents';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <CosmicHero />
      <Header />
      <Categories />
      <Values />
      <FilipinoVisualAccents />
      <Team />
      <Partners />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}
