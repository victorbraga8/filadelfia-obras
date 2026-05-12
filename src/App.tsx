import { useCallback } from 'react';

import NavBar from './components/nav-bar';
import Hero from './components/hero';
import Services from './components/services';
import Institucional from './components/institucional';
import Contato from './components/contato';
import Footer from './components/footer';
import Cta from './components/cta';
import Fleet from './components/product-focus';
import ClientsSection from './components/clients';
import Gallery from './components/gallery';

function App() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-800">
      <NavBar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Cta />
      <Services />
      <Institucional />
      <Fleet />
      <ClientsSection />
      <Gallery />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
