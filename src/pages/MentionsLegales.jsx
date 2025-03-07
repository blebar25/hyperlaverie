import React from 'react';
import Header2 from '../components/Header2';
import Footer2 from '../components/Footer2';

const MentionsLegales = () => {
  return (
    <>
      <Header2 />
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-light text-[#004E9F] mb-12 text-center" style={{ marginTop: '50px' }}>Mentions Légales</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-[#004E9F] mb-4">1. Informations légales</h2>
              <div className="prose max-w-none text-gray-600">
                <p><strong>Raison sociale :</strong> HYPERLAVERIE HOLDING</p>
                <p><strong>Forme juridique :</strong> SAS, société par actions simplifiée</p>
                <p><strong>Siège social :</strong> 7 RUE BENJAMIN FRANKLIN, 75016 PARIS</p>
                <p><strong>SIRET :</strong> 91335719000028</p>
                <p><strong>Capital social :</strong> 10 000,00 €</p>
                <p><strong>Directeur de la publication :</strong> Jacques Gabison</p>
                <p><strong>Contact :</strong> lelavoir26@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#004E9F] mb-4">2. Hébergement</h2>
              <div className="prose max-w-none text-gray-600">
              Ce site est hébergé par Hostinger International Ltd
                    Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre
                    Site web : https://www.hostinger.fr
                    Téléphone : +33 1 76 54 41 25
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#004E9F] mb-4">3. Propriété intellectuelle</h2>
              <div className="prose max-w-none text-gray-600">
                <p>L'ensemble du contenu du site Hyperlaverie (logo, textes, graphiques, images, photos, etc.) est la propriété exclusive de HYPERLAVERIE HOLDING ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'HYPERLAVERIE HOLDING.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#004E9F] mb-4">4. Responsabilité</h2>
              <div className="prose max-w-none text-gray-600">
                <p>HYPERLAVERIE HOLDING s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Hyperlaverie ne peut toutefois garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default MentionsLegales;
