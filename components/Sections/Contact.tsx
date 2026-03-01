import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="kontakt" className="bg-industrial-950 text-white py-24 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-dark/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16" animation="blur-in">
           <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">Kontakt</h2>
           <h3 className="text-4xl lg:text-5xl font-display font-bold">STARTEN SIE IHRE ANFRAGE</h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Phone Card */}
            <ScrollReveal delay={0} className="bg-gradient-to-br from-industrial-900 to-industrial-950 border border-white/10 p-8 rounded-sm hover:border-secondary/50 transition-colors group relative overflow-hidden" animation="slide-right">
               <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
               <div className="flex items-start gap-4">
                 <div className="bg-secondary/10 p-3 rounded-sm border border-secondary/20">
                    <Phone className="text-secondary" size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold font-display text-white mb-1">Rufen Sie uns an</h4>
                    <p className="text-gray-400 text-sm mb-4">Persönliche Beratung & Terminvereinbarung</p>
                    <a href="tel:+49000000000" className="text-2xl font-display font-bold text-white hover:text-secondary transition-colors block">
                      +49 000 000000
                    </a>
                 </div>
               </div>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal delay={100} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors group" animation="slide-right">
               <div className="flex items-start gap-4">
                 <div className="bg-white/5 p-3 rounded-sm border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Mail className="text-gray-300" size={24} />
                 </div>
                 <div className="w-full">
                    <h4 className="text-lg font-bold font-display text-white mb-1">Schreiben Sie uns</h4>
                    <p className="text-gray-400 text-sm mb-4">Schnelle Antwort auf Ihre Anfrage</p>
                    <a href="mailto:info@example.com" className="text-lg font-bold text-white hover:text-secondary transition-colors block break-all">
                       info@example.com
                    </a>
                 </div>
               </div>
            </ScrollReveal>

            {/* Opening Hours */}
            <ScrollReveal delay={200} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors" animation="slide-right">
               <div className="flex items-start gap-4">
                 <div className="bg-white/5 p-3 rounded-sm border border-white/10">
                    <Clock className="text-gray-300" size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold font-display text-white mb-3">Öffnungszeiten</h4>
                    <div className="space-y-2 text-sm text-gray-300 font-mono">
                      <div className="flex justify-between gap-8 border-b border-white/5 pb-1">
                        <span>Mo - Fr</span>
                        <span className="text-white">8:00 - 16:45 Uhr</span>
                      </div>
                      <div className="flex justify-between gap-8 pb-1">
                        <span>Samstag</span>
                        <span className="text-white">8:00 - 12:00 Uhr</span>
                      </div>
                    </div>
                 </div>
               </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Map Integration */}
          <ScrollReveal delay={300} className="lg:col-span-7 h-[500px] lg:h-auto bg-industrial-900 border border-white/10 rounded-sm relative overflow-hidden group" animation="blur-in">
             <div className="absolute top-4 left-4 z-20 bg-industrial-950/90 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10 shadow-xl">
                <div className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider mb-1">
                   <MapPin size={14} /> Standort
                </div>
                <div className="text-white font-display font-bold">Dortmund, Musterstrasse 1, 44135 Dortmund</div>
             </div>

             {/* Functional Google Maps Iframe with Grayscale Filter */}
             <iframe 
               src="https://www.google.com/maps/search/?api=1&query=Musterstrasse+1+44135+Dortmund"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full map-filter relative z-10 opacity-80 hover:opacity-100 transition-opacity duration-500"
               title="Standort Brenscheidt Autokühler GmbH"
             ></iframe>
             
             {/* Interaction Hint Overlay (fades out on hover) */}
             <div className="absolute inset-0 bg-industrial-950/20 pointer-events-none group-hover:bg-transparent transition-colors z-20 flex items-center justify-center group-hover:opacity-0 duration-500">
             </div>
          </ScrollReveal>

        </div>
        
        {/* Bottom CTA */}
        <ScrollReveal delay={400} className="flex justify-center" animation="fade-up">
           <a href="https://www.google.com/maps/search/?api=1&query=Musterstrasse+1+44135+Dortmund" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider border-b border-white/10 hover:border-secondary pb-1">
              Route in Google Maps planen <ArrowRight size={14} />
           </a>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Contact;