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
    price: '12,90 €',
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
          {prices.map((price, index) => (
            <div
              key={`${price.title}-${price.capacity}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  {React.createElement(price.icon, {
                    className: "h-8 w-8 text-[#004E9F]"
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{price.title}</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">{price.capacity}</p>
                <p className="text-4xl font-bold text-[#004E9F]">{price.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-sm text-gray-600">
            * Paiement par CB, espèces ou application mobile. Réductions avec la carte Carrefour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;
