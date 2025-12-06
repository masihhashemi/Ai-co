import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <UseCases />
        <Benefits />
        <Pricing />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;