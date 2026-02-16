import React from 'react';
import { Users, CheckCircle, Package } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="unternehmen" className="py-24 lg:py-32 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Composition */}
          <ScrollReveal className="w-full lg:w-1/2 relative z-10" animation="slide-right">
            <div className="relative rounded-sm overflow-hidden shadow-2xl group">
              {/* Main Architectural/Industrial Image */}
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop" 
                alt="Industrial Workshop Precision" 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              
              {/* Overlay Badge - Floating */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-8 shadow-2xl max-w-[240px] border-l-4 border-secondary z-20">
                 <p className="font-display font-bold text-5xl text-industrial-900 leading-none mb-1">50+</p>
                 <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Jahre Erfahrung</p>
              </div>
            </div>
            
            {/* Geometric Decoration */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-gray-200 -z-10"></div>
          </ScrollReveal>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal delay={200} animation="blur-in">
              <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">Über Uns</h2>
              <h3 className="text-3xl lg:text-5xl font-display font-bold text-industrial-900 mb-6 leading-[1.1]">
                TRADITION TRIFFT <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">MODERNE TECHNIK.</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Brenscheidt Autokühler GmbH (BAG) steht für Ehrlichkeit, Qualität und technische Exzellenz. 
                Als familiengeführtes Unternehmen verbinden wir persönliche Beratung mit der Leistungsfähigkeit eines modernen Logistikzentrums.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                { icon: <Package size={24} />, title: "Logistik Power", text: "Großes Lager für schnelle Verfügbarkeit in ganz Deutschland." },
                { icon: <Users size={24} />, title: "Familienunternehmen", text: "Inhabergeführt, nah am Kunden und immer verlässlich." },
                { icon: <CheckCircle size={24} />, title: "Qualitätsgarantie", text: "Wir verkaufen nur Teile, von denen wir technisch überzeugt sind." }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={300 + (idx * 100)} className="flex gap-6 group hover:bg-white hover:shadow-sm p-4 rounded-sm transition-all" animation="fade-up">
                  <div className="w-14 h-14 bg-industrial-50 border border-gray-100 flex items-center justify-center rounded-sm shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                     {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-industrial-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;