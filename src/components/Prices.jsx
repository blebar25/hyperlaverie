import { Droplets, Wind } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

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
    <section id="prices" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nos tarifs</h2>
            <p className="mt-4 text-xl text-gray-600">Des prix transparents pour tous vos besoins</p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prices.map((price, index) => (
            <ScrollAnimation key={index} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <price.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{price.title}</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">{price.capacity}</p>
                <p className="text-4xl font-bold text-primary">{price.price}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation animation="fade-up">
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              * Paiement par CB, espèces ou application mobile. Réductions avec la carte Carrefour.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Prices;
