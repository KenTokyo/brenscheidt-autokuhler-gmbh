import React from 'react';
import { Circle, Box, Fan, Battery, ChevronRight, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const Products: React.FC = () => {
  const categories = [
    {
      id: "cooling",
      title: "Fahrzeugkühlung",
      items: ["Wasserkühler", "Ölkühler", "Ladeluftkühler", "Ausgleichsbehälter"],
      icon: <Box />,
      image: "https://images.unsplash.com/photo-1635336049281-2292fa1f7752?q=80&w=800&auto=format&fit=crop" // Abstract radiator/fins
    },
    {
      id: "ac",
      title: "Klimatisierung",
      items: ["Kondensatoren", "Verdampfer", "Kompressoren", "Trocknerflaschen"],
      icon: <Fan />,
      image: "https://images.unsplash.com/photo-1542129037-c8172c730419?q=80&w=800&auto=format&fit=crop" // Abstract fan/vent
    },
    {
      id: "parts",
      title: "Komponenten",
      items: ["Thermostate", "Innenraumfilter", "Gebläselüfter", "Antriebsriemen"],
      icon: <Circle />,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop" // Engine detail
    },
    {
      id: "batteries",
      title: "Energie",
      items: ["EXIDE Batterien", "Hochleistungs-Akkus", "Start-Stop Systeme", "Zubehör"],
      icon: <Battery />,
      image: "https://images.unsplash.com/photo-1628522617702-86bb320db917?q=80&w=800&auto=format&fit=crop" // Battery/Electricity
    }
  ];

  return (
    <section id="produkte" className="py-24 bg-industrial-950 text-white relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute inset-0 bg-grid-dark opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <ScrollReveal animation="blur-in">
              <span className="text-secondary font-mono text-xs tracking-widest uppercase mb-2 block">Premium Catalog</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold">PRODUKTSORTIMENT</h2>
           </ScrollReveal>
           <ScrollReveal delay={200} animation="fade-in">
              <a href="https://www.brenscheidt.de" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-sm border border-white/10 transition-colors">
                 Zum Online Shop <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
           </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <ScrollReveal key={index} delay={index * 100} animation="blur-in" className="group relative bg-industrial-900 border border-white/5 hover:border-secondary/50 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              
              {/* Image Overlay */}
              <div className="h-56 w-full relative overflow-hidden">
                 <div className="absolute inset-0 bg-industrial-900/40 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/50 to-transparent z-20"></div>
                 
                 <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0" />
                 
                 <div className="absolute top-4 left-4 bg-industrial-950/80 backdrop-blur-md p-3 rounded-sm border border-white/10 z-30 text-white group-hover:text-secondary transition-colors shadow-lg">
                    {React.cloneElement(cat.icon as React.ReactElement, { size: 24 })}
                 </div>
              </div>

              <div className="p-6 relative z-20 -mt-12 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-secondary transition-colors drop-shadow-md">{cat.title}</h3>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      <div className="w-1 h-1 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                   <span>View Details</span>
                   <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;