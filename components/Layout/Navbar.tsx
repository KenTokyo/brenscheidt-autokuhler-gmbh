import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Unternehmen', href: '#unternehmen' },
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Produkte', href: '#produkte' },
    { name: 'Partner', href: '#partner' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          isScrolled 
            ? 'py-3' 
            : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className={`
              relative flex justify-between items-center rounded-sm transition-all duration-500
              ${isScrolled 
                ? 'bg-industrial-950/80 backdrop-blur-md border border-white/10 shadow-2xl px-6 py-3' 
                : 'bg-transparent border-transparent px-0 py-2'
              }
            `}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group relative z-10">
               <div className="relative">
                 <div className="absolute inset-0 bg-secondary/20 blur-lg rounded-full group-hover:bg-secondary/40 transition-colors opacity-0 group-hover:opacity-100"></div>
                 <div className="bg-white text-industrial-950 p-2 rounded-sm relative z-10 border border-white/20 group-hover:border-secondary transition-colors duration-300">
                    <span className="font-display font-black text-2xl tracking-tighter leading-none block">BAG</span>
                 </div>
               </div>
               <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl leading-none tracking-wide text-white">
                    BRENSCHEIDT
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium tracking-[0.2em] uppercase group-hover:text-secondary transition-colors">Autokühler GmbH</span>
               </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1">
              <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'mr-4' : 'mr-8 bg-black/20 backdrop-blur-sm rounded-sm border border-white/5 p-1'}`}>
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white relative group overflow-hidden"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                 <a href="tel:+49000000000" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-white/5 group-hover:bg-secondary transition-colors text-white">
                      <Phone size={14} />
                    </div>
                    <span className="text-sm font-display font-bold hidden xl:inline group-hover:text-white">+49 000 000000</span>
                 </a>
                 
                 <a 
                  href="https://www.brenscheidt.de" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative overflow-hidden bg-secondary text-white px-5 py-2.5 rounded-sm text-sm font-bold flex items-center gap-2 transition-all hover:bg-white hover:text-industrial-950"
                 >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                    <ShoppingCart size={16} />
                    <span>Shop</span>
                 </a>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors border border-white/10"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-industrial-950/98 z-40 transition-all duration-500 lg:hidden flex flex-col ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 space-y-8">
           {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:to-secondary transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
        </div>

        <div className="p-8 border-t border-white/10 bg-black/20">
             <a href="https://www.brenscheidt.de" className="w-full bg-secondary text-white py-4 rounded-sm flex justify-center items-center gap-2 font-bold mb-4 shadow-lg shadow-secondary/20">
                <ShoppingCart size={20} /> Online Shop
             </a>
             <div className="grid grid-cols-2 gap-4">
                <a href="tel:+49000000000" className="bg-white/5 border border-white/10 p-4 rounded-sm text-center active:bg-white/10">
                   <Phone className="mx-auto text-gray-400 mb-2" />
                   <span className="text-white text-sm font-bold">Anrufen</span>
                </a>
                <a href="mailto:info@example.com" className="bg-white/5 border border-white/10 p-4 rounded-sm text-center active:bg-white/10">
                   <div className="mx-auto text-gray-400 mb-2 w-6 h-6 flex items-center justify-center font-serif italic">@</div>
                   <span className="text-white text-sm font-bold">E-Mail</span>
                </a>
             </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;