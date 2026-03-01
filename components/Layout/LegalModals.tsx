import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'impressum' | 'datenschutz';
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, title, type }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-industrial-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Content */}
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-sm shadow-2xl flex flex-col overflow-hidden animate-[scale-up_0.3s_ease-out_forwards]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
          <h2 className="text-2xl font-display font-bold text-industrial-900">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-sm transition-colors text-gray-500 hover:text-industrial-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto text-gray-600 leading-relaxed text-sm md:text-base space-y-6">
          
          {type === 'impressum' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-industrial-900 mb-2">Angaben gemäß § 5 DDG</h3>
                  <p>
                    Brenscheidt Autokühler GmbH<br />
                    Musterstrasse 1, 44135 Dortmund<br />
                    44135 Dortmund
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-industrial-900 mb-2">Kontakt</h3>
                  <p>
                    Telefon: +49 000 000000<br />
                    E-Mail: info@example.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-industrial-900 mb-2">Vertretung</h3>
                <p>Vertreten durch die Geschäftsführung.</p>
              </div>

              <div>
                <h3 className="font-bold text-industrial-900 mb-2">Registereintrag</h3>
                <p>
                  Eintragung im Handelsregister.<br />
                  Registergericht: Amtsgericht Dortmund<br />
                  Registernummer: HRB (Bitte ergänzen)<br />
                  USt-IdNr.: (Bitte ergänzen)
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 text-xs text-gray-400">
                <p>Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
              </div>
            </>
          )}

          {type === 'datenschutz' && (
            <>
              <p>
                Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
              </p>
              
              <h3 className="font-bold text-industrial-900 text-lg">1. Zugriffsdaten und Hosting</h3>
              <p>
                Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert.
              </p>

              <h3 className="font-bold text-industrial-900 text-lg">2. Datenerhebung und -verwendung</h3>
              <p>
                Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Kontaktaufnahme (z.B. per Kontaktformular oder E-Mail) freiwillig mitteilen. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfragen.
              </p>

              <h3 className="font-bold text-industrial-900 text-lg">3. Cookies</h3>
              <p>
                Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden.
              </p>

              <div className="pt-4 border-t border-gray-100 text-xs text-gray-400">
                <p>Stand: {new Date().getFullYear()}</p>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default LegalModals;