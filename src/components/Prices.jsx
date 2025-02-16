import { Droplets, Wind } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import React from 'react';

const prices = [
  {
    icon: Droplets,
    title: 'Machine à laver',
    capacity: '7 kg',
    price: '5,00 €',
  },
  {
    icon: Droplets,
    title: 'Machine à laver',
    capacity: '11 kg',
    price: '7,80 €',
  },
  {
    icon: Droplets,
    title: 'Machine à laver',
    capacity: '18 kg',
    price: '11,90 €',
  },
  {
    icon: Wind,
    title: 'Séchoir',
    capacity: '9 minutes',
    price: '1,50 €',
  },
];

const Prices = () => {
  return (
    <section id="nos-tarifs" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Nos tarifs</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Profitez de machines à laver et séchoirs Electrolux, adaptés à vos besoins et à des prix compétitifs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {prices.map((price, index) => {
            const Icon = price.icon;
            return (
              <div 
                key={`${price.title}-${price.capacity}`} 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#004E9F]" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 text-center">{price.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center">{price.capacity}</p>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004E9F] text-center mt-auto">{price.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prices;
