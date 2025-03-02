import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl my-8 relative">
        <div className="max-h-[80vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Fermer"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#004E9F] mb-4 sm:mb-6 pr-8">Mentions Légales</h1>
            
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#004E9F] mb-3 sm:mb-4">1. Informations légales</h2>
              <div className="prose max-w-none text-gray-600 text-sm sm:text-base space-y-2">
              <p><strong>Raison sociale :</strong> HYPERLAVERIE HOLDING</p>
                <p><strong>Forme juridique :</strong> SAS, société par actions simplifiée</p>
                <p><strong>Siège social :</strong> 7 RUE BENJAMIN FRANKLIN, 75016 PARIS</p>
                <p><strong>SIRET :</strong> 91335719000028</p>
                <p><strong>Capital social :</strong> 10 000,00 €</p>
                <p><strong>Directeur de la publication :</strong> Jacques Gabison</p>
                <p><strong>Contact :</strong> lelavoir26@gmail.com</p>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#004E9F] mb-3 sm:mb-4">2. Hébergement</h2>
              <div className="prose max-w-none text-gray-600 text-sm sm:text-base space-y-2">
              Ce site est hébergé par Hostinger International Ltd
                    Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre
                    Site web : https://www.hostinger.fr
                    Téléphone : +33 1 76 54 41 25
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#004E9F] mb-3 sm:mb-4">3. Propriété intellectuelle</h2>
              <div className="prose max-w-none text-gray-600 text-sm sm:text-base">
              <p>L'ensemble du contenu du site Hyperlaverie (logo, textes, graphiques, images, photos, etc.) est la propriété exclusive de HYPERLAVERIE HOLDING ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'HYPERLAVERIE HOLDING.</p>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#004E9F] mb-3 sm:mb-4">4. Responsabilité</h2>
              <div className="prose max-w-none text-gray-600 text-sm sm:text-base">
              <p>HYPERLAVERIE HOLDING s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Hyperlaverie ne peut toutefois garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
