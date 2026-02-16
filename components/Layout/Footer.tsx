import React from 'react';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenImpressum, onOpenDatenschutz }) => {
  return (
    <footer className="bg-black text-gray-500 py-12 border-t border-gray-800 text-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
             <span className="text-white font-display font-bold text-2xl tracking-tight block mb-4">Brenscheidt Autokühler GmbH</span>
             <p className="max-w-sm mb-4">
               Ihr Experte für Fahrzeugkühlung und Klimatisierung in Dortmund. 
               Qualität, Transparenz und technische Kompetenz seit über 50 Jahren.
             </p>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-4">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#unternehmen" className="hover:text-primary transition-colors">Unternehmen</a></li>
              <li><a href="#leistungen" className="hover:text-primary transition-colors">Leistungen</a></li>
              <li><a href="#produkte" className="hover:text-primary transition-colors">Produkte</a></li>
              <li><a href="#partner" className="hover:text-primary transition-colors">Partner</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-4">Rechtliches</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenImpressum} className="hover:text-primary transition-colors text-left">
                  Impressum
                </button>
              </li>
              <li>
                <button onClick={onOpenDatenschutz} className="hover:text-primary transition-colors text-left">
                  Datenschutz
                </button>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Brenscheidt Autokühler GmbH. Alle Rechte vorbehalten.</p>
          <p className="text-xs text-gray-600">
            Designed for Performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;