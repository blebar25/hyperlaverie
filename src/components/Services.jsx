import { Loader2, Clock, CreditCard, UserRound } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import React from 'react';

const services = [
  {
    icon: Loader2,
    title: 'Équipement Premium',
    description: 'Plus de 40 machines professionnelles de dernière génération pour un lavage parfait.',
    animate: true,
    delay: 0,
    name: 'Équipement Premium',
  },
  {
    icon: Clock,
    title: '24h/24 - 7j/7',
    description: 'Accessibles à tout moment, nos laveries sont ouvertes sans interruption.',
    delay: 1,
    name: '24h/24 - 7j/7',
  },
  {
    icon: CreditCard,
    title: 'Paiement Facile',
    description: 'Acceptons CB, espèces et paiement mobile. Profitez des avantages Carrefour.',
    delay: 2,
    name: 'Paiement Facile',
  },
  {
    icon: UserRound,
    title: 'Service Drop',
    description: 'Déposez votre linge et récupérez-le propre et plié. Service premium sur mesure.',
    badge: 'Disponible à Amiens',
    delay: 3,
    name: 'Service Drop',
  },
];

const Services = () => {
  return (
    <section id="nos-services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des services de qualité pour votre confort
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Premier service */}
          <div 
            className="relative p-6 bg-white rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {React.createElement(services[0].icon, {
              className: `h-8 w-8 text-primary ${services[0].animate ? 'animate-spin' : ''}`
            })}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{services[0].title}</h3>
            <p className="mt-2 text-gray-600">{services[0].description}</p>
          </div>

          {/* Deuxième service */}
          <div 
            className="relative p-6 bg-white rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {React.createElement(services[1].icon, {
              className: `h-8 w-8 text-primary ${services[1].animate ? 'animate-spin' : ''}`
            })}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{services[1].title}</h3>
            <p className="mt-2 text-gray-600">{services[1].description}</p>
          </div>

          {/* Troisième service */}
          <div 
            className="relative p-6 bg-white rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {React.createElement(services[2].icon, {
              className: `h-8 w-8 text-primary ${services[2].animate ? 'animate-spin' : ''}`
            })}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{services[2].title}</h3>
            <p className="mt-2 text-gray-600">{services[2].description}</p>
          </div>

          {/* Quatrième service - placé sous le deuxième */}
          <div 
            className="relative p-6 bg-white rounded-lg shadow-lg md:col-start-2 md:col-span-1 lg:col-start-2"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            {React.createElement(services[3].icon, {
              className: `h-8 w-8 text-primary ${services[3].animate ? 'animate-spin' : ''}`
            })}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{services[3].title}</h3>
            <p className="mt-2 text-gray-600">{services[3].description}</p>
            {services[3].badge && (
              <span className="mt-2 px-3 py-1 bg-primary text-white text-sm rounded-full">
                {services[3].badge}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
