import React from 'react';

const brands = [
  "AKG", "AVA", "BEHR", "BHS", "Denso", "EXIDE", "Four Seasons", "FUCHS", 
  "Mahle", "HELLA", "Magneti Marelli", "MANN-FILTER", "Modine", 
  "Nissens", "NRF", "Hella-Gutmann", "Valeo"
];

const Brands: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-12 overflow-hidden relative" id="partner">
      {/* Side fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex relative overflow-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {brands.concat(brands).map((brand, index) => (
            <span 
              key={`${brand}-${index}`} 
              className="text-3xl font-display font-bold text-gray-200 uppercase select-none hover:text-industrial-900 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
          {brands.concat(brands).map((brand, index) => (
            <span 
              key={`${brand}-2-${index}`} 
              className="text-3xl font-display font-bold text-gray-200 uppercase select-none hover:text-industrial-900 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee, .animate-marquee2 {
            animation: none;
            transform: translateX(0);
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;