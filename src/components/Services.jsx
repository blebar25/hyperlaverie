import { WashingMachine, Clock, CreditCard, UserRound } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import React from 'react';

const services = [
  {
    icon: WashingMachine,
    title: 'Équipement Premium',
    description: 'Plus de 40 machines professionnelles de dernière génération pour un lavage parfait.',
    delay: 0,
    name: 'Équipement Premium',
  },
  {
    icon: UserRound,
    title: 'Service Drop',
    description: 'Déposez votre linge et récupérez-le propre et plié. Service premium sur mesure.',
    badge: 'Disponible à Amiens',
    delay: 3,
    name: 'Service Drop',
  },
  {
    icon: CreditCard,
    title: 'Paiement facile',
    description: 'Acceptons CB, espèces et paiement mobile.',
    delay: 2,
    name: 'Paiement facile',
  },
];

const Services = () => {
  return (
    <section id="nos-services" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Nos services
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Profitez d'un service de qualité, rapide, abordable et sécurisé, idéal pour les particuliers et professionnels
          </p>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Premier service */}
          <div 
            className="relative p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {React.createElement(services[0].icon, {
              className: `h-6 w-6 sm:h-8 sm:w-8 text-primary ${services[0].animate ? 'animate-spin' : ''}`
            })}
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">{services[0].title}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">{services[0].description}</p>
          </div>

          {/* Deuxième service */}
          <div 
            className="relative p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {React.createElement(services[1].icon, {
              className: `h-6 w-6 sm:h-8 sm:w-8 text-primary ${services[1].animate ? 'animate-spin' : ''}`
            })}
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">{services[1].title}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">{services[1].description}</p>
            {services[1].badge && (
              <span className="inline-block mt-3 px-3 py-1 bg-primary text-white text-xs sm:text-sm rounded-full">
                {services[1].badge}
              </span>
            )}
          </div>

          {/* Troisième service */}
          <div 
            className="relative p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {React.createElement(services[2].icon, {
              className: `h-6 w-6 sm:h-8 sm:w-8 text-primary ${services[2].animate ? 'animate-spin' : ''}`
            })}
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">{services[2].title}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">{services[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
