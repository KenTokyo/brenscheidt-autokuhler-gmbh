import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Products from './components/Sections/Products';
import About from './components/Sections/About';
import Brands from './components/Sections/Brands';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import LegalModals from './components/Layout/LegalModals';

/**
 * Design-DNA: "Precision Engineering"
 * 1) Navbar: Dual-layer industrial header (Utility + Nav) with technical borders.
 * 2) Hero: Asymmetrical "Split-Screen" with diagonal clipping path representing airflow/dynamics.
 * 3) Typography: 'Rajdhani' (Square/Tech) for headers vs 'Inter' for readability.
 * 4) Spacing: High density information blocks (catalog style) mixed with open breathable hero sections.
 * 5) Card Shape: Rectangular with technical corner accents (not fully rounded pills).
 * 6) Colors: Clinical Blue (#0055AA) & Slate Gray - Automotive workshop aesthetic.
 */

const App: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'impressum' | 'datenschutz';
    title: string;
  }>({
    isOpen: false,
    type: 'impressum',
    title: ''
  });

  const openModal = (type: 'impressum' | 'datenschutz') => {
    setModalState({
      isOpen: true,
      type,
      title: type === 'impressum' ? 'Impressum' : 'Datenschutz'
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer 
        onOpenImpressum={() => openModal('impressum')}
        onOpenDatenschutz={() => openModal('datenschutz')}
      />
      
      <LegalModals 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
      />
    </div>
  );
};

export default App;