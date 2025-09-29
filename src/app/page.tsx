import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import Values from '@/components/Values';
import Team from '@/components/Team';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Categories />
      <Values />
      <Team />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}
