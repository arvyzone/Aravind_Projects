import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import Values from './components/Values';
import Framework from './components/Framework';
import Pillars from './components/Pillars';
import Toolkit from './components/Toolkit';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Purpose />
      <Values />
      <Framework />
      <Pillars />
      <Toolkit />
      <WhyUs />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;