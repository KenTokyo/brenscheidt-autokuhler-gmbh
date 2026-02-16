import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Activity, Settings, Thermometer } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full bg-industrial-950 overflow-hidden flex flex-col justify-center">
      
      {/* 1. Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <img 
           src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2500&auto=format&fit=crop" 
           alt="Industrial Precision Engineering" 
           className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear ${loaded ? 'scale-110' : 'scale-100'}`}
         />
         {/* Heavy Gradient for Text Legibility */}
         <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-950/90 to-industrial-900/30"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* 2. Grid Lines - Drawing Animation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className={`absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transition-all duration-[1.5s] ease-out-expo delay-500 ${loaded ? 'h-full opacity-100' : 'h-0 opacity-0'}`}></div>
        <div className={`absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-[1.5s] ease-out-expo delay-700 ${loaded ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
        
        {/* Technical HUD Elements */}
        <div className={`absolute bottom-20 right-20 w-32 h-32 border-r border-b border-white/20 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}></div>
        <div className={`absolute top-40 right-10 text-[10px] text-white/40 font-mono writing-vertical transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>SYS.THERMAL.V2.4</div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 bg-white/5 rounded-sm backdrop-blur-sm transition-all duration-1000 ease-out-expo ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-gray-300 text-xs font-mono tracking-widest uppercase">Since 1970 · Fahrzeugtechnik</span>
            </div>

            {/* Title - Staggered Lines */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight">
              <div className="overflow-hidden">
                <span className={`block transition-transform duration-1000 ease-out-expo delay-100 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                  THERMAL
                </span>
              </div>
              <div className="overflow-hidden">
                <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 transition-transform duration-1000 ease-out-expo delay-200 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                  MASTERY.
                </span>
              </div>
            </h1>

            {/* Description */}
            <p className={`text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Die Experten für Fahrzeugkühlung & Klimatisierung. <br/>
              Präzision, Logistik und Know-how für Werkstätten und Handel.
            </p>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="#kontakt" className="group relative px-8 py-4 bg-secondary text-white font-bold rounded-sm overflow-hidden transition-transform hover:-translate-y-1">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                <span className="relative flex items-center gap-2">
                  Termin buchen <ArrowRight size={18} />
                </span>
              </a>
              <a href="#produkte" className="px-8 py-4 border border-white/20 text-white font-bold rounded-sm hover:bg-white hover:text-industrial-950 transition-all flex items-center gap-2 group">
                 Zum Sortiment <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Side - Floating Tech Card */}
          <div className={`lg:col-span-4 hidden lg:block transition-all duration-1000 ease-out-expo delay-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="bg-industrial-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-sm relative group hover:border-secondary/50 transition-colors duration-500 shadow-2xl">
               {/* Corner Accents */}
               <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-secondary"></div>
               <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-secondary"></div>
               
               <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                       <div className="text-xs text-secondary font-mono mb-1 tracking-wider">SYSTEM STATUS</div>
                       <div className="text-white font-bold text-2xl font-display">OPERATIONAL</div>
                    </div>
                    <Activity className="text-green-500 animate-pulse" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-black/40 p-4 rounded-sm border border-white/5 hover:border-white/20 transition-colors">
                        <Thermometer size={20} className="text-secondary mb-3" />
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Service</div>
                        <div className="text-white font-bold">R1234yf</div>
                     </div>
                     <div className="bg-black/40 p-4 rounded-sm border border-white/5 hover:border-white/20 transition-colors">
                        <Settings size={20} className="text-blue-400 mb-3" />
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Parts</div>
                        <div className="text-white font-bold">OEM Spec</div>
                     </div>
                  </div>

                  <div className="text-xs text-gray-500 font-mono pt-2 border-t border-white/5">
                    &gt; Initializing diagnostic sequence...<br/>
                    &gt; Ready for input.
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-50' : 'opacity-0'}`}>
        <span className="text-[10px] text-white uppercase tracking-widest">Explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent"></div>
      </div>

    </section>
  );
};

export default Hero;