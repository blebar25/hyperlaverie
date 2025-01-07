import { Loader2, Clock, CreditCard, UserRound } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const services = [
  {
    icon: Loader2,
    title: 'Équipement Premium',
    description: 'Plus de 40 machines professionnelles de dernière génération pour un lavage parfait.',
    animate: true,
    delay: 0,
  },
  {
    icon: Clock,
    title: '24h/24 - 7j/7',
    description: 'Accessibles à tout moment, nos laveries sont ouvertes sans interruption.',
    delay: 1,
  },
  {
    icon: CreditCard,
    title: 'Paiement Facile',
    description: 'Acceptons CB, espèces et paiement mobile. Profitez des avantages Carrefour.',
    delay: 2,
  },
  {
    icon: UserRound,
    title: 'Service Drop',
    description: 'Déposez votre linge et récupérez-le propre et plié. Service premium sur mesure.',
    badge: 'Disponible à Amiens',
    delay: 3,
  },
];

const Services = () => {
  return (
    <section id="nos-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            Nos Services Premium
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Une expérience de lavage exceptionnelle
          </p>
        </ScrollAnimation>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={index} 
              animation="fade-up"
              style={{ transitionDelay: `${service.delay * 200}ms` }}
            >
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <service.icon
                  className={`h-8 w-8 text-primary ${service.animate ? 'animate-spin' : ''}`}
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{service.description}</p>
                {service.badge && (
                  <span className="mt-2 px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
