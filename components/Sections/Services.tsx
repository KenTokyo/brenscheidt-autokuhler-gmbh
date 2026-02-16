import React from 'react';
import { Truck, PenTool, Wind, ShieldCheck, ArrowUpRight, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const Services: React.FC = () => {
  return (
    <section id="leistungen" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        <ScrollReveal className="mb-16 max-w-3xl" animation="blur-in">
          <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-secondary"></span>
            Leistungsspektrum
          </h2>
          <h3 className="text-4xl lg:text-6xl font-display font-bold text-industrial-900 leading-[0.9]">
            ENGINEERED <br/>FOR PERFORMANCE.
          </h3>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          
          {/* Main Card - Large */}
          <ScrollReveal className="md:col-span-2 row-span-1 md:row-span-2 group relative overflow-hidden rounded-sm bg-industrial-900 text-white p-8 lg:p-12 flex flex-col justify-between shadow-2xl" animation="blur-in" delay={0}>
             <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <div className="bg-secondary p-3 rounded-full">
                   <ArrowUpRight size={24} className="text-white" />
                </div>
             </div>
             
             {/* Image Layer - Logistics/Warehouse */}
             <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop" 
                 alt="Modern Warehouse Logistics" 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-900/60 to-transparent"></div>
             </div>
             
             <div className="relative z-20 mt-auto">
               <div className="w-16 h-1 bg-secondary mb-6"></div>
               <div className="flex items-center gap-3 mb-4 text-secondary font-mono text-sm tracking-widest uppercase">
                  <Truck size={16} />
                  <span>Logistik & Handel</span>
               </div>
               <h4 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Schnelle Teileversorgung</h4>
               <p className="text-gray-300 max-w-md text-lg leading-relaxed">
                 Unser optimiertes Lager und Versandnetzwerk garantieren, dass Kühlerkomponenten Werkstätten und Kunden just-in-time erreichen.
               </p>
             </div>
          </ScrollReveal>

          {/* Secondary Card - Dark Accent - AC Service */}
          <ScrollReveal className="bg-industrial-800 text-white group hover:bg-industrial-900 transition-colors duration-500 p-8 rounded-sm flex flex-col justify-between relative overflow-hidden shadow-lg" animation="blur-in" delay={100}>
            <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12">
               <Wind size={200} />
            </div>
            
            <div className="relative z-10">
               <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-sm mb-6 backdrop-blur-sm">
                 <Wind size={24} className="text-blue-300" />
               </div>
               <h4 className="text-2xl font-display font-bold mb-3">Klima-Service</h4>
               <p className="text-sm text-gray-400 leading-relaxed">
                 Zertifizierter Service für R1234yf. Umweltgerecht, präzise und strikt nach Herstellervorgaben.
               </p>
            </div>
            
            <div className="relative z-10 pt-6 mt-auto border-t border-white/10">
               <span className="text-xs font-mono text-blue-300">ISO CERTIFIED</span>
            </div>
          </ScrollReveal>

           {/* Third Card - Workshop - Tools Image */}
           <ScrollReveal className="bg-white border border-gray-200 hover:border-secondary/50 group p-0 rounded-sm relative overflow-hidden shadow-lg" animation="blur-in" delay={200}>
             <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop" alt="Tools" className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-10 transition-opacity" />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
             </div>
             
             <div className="relative z-10 p-8 h-full flex flex-col">
               <div className="bg-secondary/10 w-12 h-12 flex items-center justify-center rounded-sm mb-6">
                 <PenTool size={24} className="text-secondary" />
               </div>
               <h4 className="text-2xl font-display font-bold text-industrial-900 mb-3">Fachwerkstatt</h4>
               <p className="text-sm text-gray-600 leading-relaxed mb-4">
                 Diagnose, Reparatur und Austausch. Wir lösen thermische Probleme an der Wurzel.
               </p>
               <a href="#kontakt" className="mt-auto text-sm font-bold text-industrial-900 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Termin vereinbaren <ArrowRight size={16} className="text-secondary" />
               </a>
             </div>
          </ScrollReveal>

          {/* Fourth Card - Quality - Wide */}
          <ScrollReveal className="md:col-span-2 bg-industrial-50 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border border-gray-100 shadow-sm" animation="blur-in" delay={300}>
             <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
             
             <div className="relative z-10 flex-shrink-0">
                <div className="bg-white p-6 rounded-sm shadow-md border border-gray-100">
                   <ShieldCheck size={48} className="text-industrial-900" />
                </div>
             </div>
             
             <div className="relative z-10 text-center md:text-left">
                <h4 className="text-2xl font-display font-bold text-industrial-900 mb-2">OEM Qualitätsstandard</h4>
                <p className="text-gray-600 max-w-lg">
                  Keine Kompromisse bei der Kühlung. Wir führen ausschließlich Markenprodukte von Erstausrüstern wie Behr, Hella und Valeo. 
                  Jedes Teil ist geprüft.
                </p>
             </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Services;