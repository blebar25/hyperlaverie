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
    <section id="nos-tarifs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nos tarifs</h2>
            <p className="mt-4 text-xl text-gray-600">Des prix transparents pour tous vos besoins</p>
          </div>
        </ScrollAnimation>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div><div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"><div class="bg-blue-50 p-4 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets h-8 w-8 text-[#004E9F]"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg></div><h3 class="text-xl font-bold text-gray-900 mb-2">Machine à laver</h3><p class="text-lg font-medium text-gray-600 mb-4">7 kg</p><p class="text-4xl font-bold text-[#004E9F]">5,00 €</p></div></div><div><div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"><div class="bg-blue-50 p-4 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets h-8 w-8 text-[#004E9F]"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg></div><h3 class="text-xl font-bold text-gray-900 mb-2">Machine à laver</h3><p class="text-lg font-medium text-gray-600 mb-4">11 kg</p><p class="text-4xl font-bold text-[#004E9F]">7,80 €</p></div></div><div><div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"><div class="bg-blue-50 p-4 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets h-8 w-8 text-[#004E9F]"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg></div><h3 class="text-xl font-bold text-gray-900 mb-2">Machine à laver</h3><p class="text-lg font-medium text-gray-600 mb-4">18 kg</p><p class="text-4xl font-bold text-[#004E9F]">12,90 €</p></div></div><div><div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"><div class="bg-blue-50 p-4 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind h-8 w-8 text-[#004E9F]"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg></div><h3 class="text-xl font-bold text-gray-900 mb-2">Séchoir</h3><p class="text-lg font-medium text-gray-600 mb-4">9 minutes</p><p class="text-4xl font-bold text-[#004E9F]">1,50 €</p></div></div></div>
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
