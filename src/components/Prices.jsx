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
    <section id="nos-tarifs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">Nos tarifs</h2>
          <p className="mt-4 text-xl text-gray-600">Profitez de machines à laver et séchoirs Electrolux, adaptés à vos besoins et à des prix compétitifs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prices.map((price, index) => {
            const Icon = price.icon;
            return (
              <div key={`${price.title}-${price.capacity}`} className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center justify-center mb-4">
                  <Icon className="w-12 h-12 text-[#004E9F]" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{price.title}</h3>
                    <p className="text-gray-600 mb-4 text-center">{price.capacity}</p>
                  </div>
                  <div className="text-4xl font-bold text-[#004E9F] text-center mt-auto">{price.price}</div>
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
