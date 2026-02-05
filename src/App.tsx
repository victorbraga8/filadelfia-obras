import { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import Services from './components/services';
import Institucional from './components/institucional';
import Contato from './components/contato';
import Footer from './components/footer';
import Cta from './components/cta';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <NavBar isScrolled={isScrolled} scrollToSection={scrollToSection} setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
      <Hero scrollToSection={scrollToSection} />
      <Cta />
      <Services />
      <Institucional />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;