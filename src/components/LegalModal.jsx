import React from 'react';

const LegalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Fermer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#004E9F] mb-6">Mentions Légales</h1>
          
          <section>
            <h2 className="text-2xl font-semibold text-[#004E9F] mb-4">1. Informations légales</h2>
            <div className="prose max-w-none text-gray-600">
              <p><strong>Raison sociale :</strong> Hyperlaverie</p>
              <p><strong>Forme juridique :</strong> SAS</p>
              <p><strong>Siège social :</strong> [Adresse à compléter]</p>
              <p><strong>SIRET :</strong> [Numéro SIRET à compléter]</p>
              <p><strong>Capital social :</strong> [Montant à compléter]</p>
              <p><strong>Directeur de la publication :</strong> [Nom à compléter]</p>
              <p><strong>Contact :</strong> lelavoir26@gmail.com</p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-[#004E9F] mb-4">2. Hébergement</h2>
            <div className="prose max-w-none text-gray-600">
              <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
              <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-[#004E9F] mb-4">3. Propriété intellectuelle</h2>
            <div className="prose max-w-none text-gray-600">
              <p>L'ensemble du contenu du site Hyperlaverie (logo, textes, graphiques, images, photos, etc.) est la propriété exclusive de Hyperlaverie ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'Hyperlaverie.</p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-[#004E9F] mb-4">4. Responsabilité</h2>
            <div className="prose max-w-none text-gray-600">
              <p>Hyperlaverie s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Hyperlaverie ne peut toutefois garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
