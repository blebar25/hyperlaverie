import React from 'react';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const handleEmailClick = (type) => {
    const email = 'contact@laveriexpert.com';
    const subject = type === 'discuss' 
      ? 'Discussion de projet Hyperlaverie'
      : 'En savoir plus sur Hyperlaverie';
    const body = type === 'discuss'
      ? 'Bonjour,\n\nJe souhaite discuter d\'un projet d\'ouverture de laverie.\n\nCordialement,'
      : 'Bonjour,\n\nJe souhaite obtenir plus d\'informations sur l\'ouverture d\'une laverie.\n\nCordialement,';

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary to-[#003D7D]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80')] 
          opacity-5 bg-cover bg-center"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 sm:mb-8"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes glow {
            0% { text-shadow: 0 0 10px rgba(0,61,125,0.1), 0 0 20px rgba(0,61,125,0.1); }
            50% { text-shadow: 0 0 20px rgba(0,61,125,0.2), 0 0 30px rgba(0,61,125,0.2); }
            100% { text-shadow: 0 0 10px rgba(0,61,125,0.1), 0 0 20px rgba(0,61,125,0.1); }
          }
          @keyframes pulse-scale {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .floating-card {
            animation: float 6s ease-in-out infinite;
          }
          .floating-card:nth-child(2) {
            animation-delay: -2s;
          }
          .floating-card:nth-child(3) {
            animation-delay: -4s;
          }
          .glowing-text {
            animation: glow 3s ease-in-out infinite, pulse-scale 4s ease-in-out infinite;
            display: inline-block;
          }
        `}</style>
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-primary mb-4 sm:mb-6 text-center"
          >
            <span className="glowing-text">
              Ouvrez votre propre laverie
            </span>
          </h2>
          <p 
            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto text-center leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Investissez dans un secteur en pleine croissance avec un accompagnement personnalisé à chaque étape de votre projet.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            <div 
              className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 floating-card"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -top-4 -left-4 bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-800">Étude personnalisée</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Analyse approfondie de l'emplacement et étude de marché détaillée pour maximiser votre réussite.</p>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 floating-card"
              data-aos="flip-left"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -top-4 -left-4 bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-800">Formation complète</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Support technique, formation à la gestion et accompagnement continu pour votre réussite.</p>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 floating-card sm:col-span-2 lg:col-span-1 sm:mx-auto sm:w-[calc(50%-1rem)] lg:mx-0 lg:w-auto"
              data-aos="flip-left"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -top-4 -left-4 bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-800">Business plan adapté</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Un modèle économique éprouvé avec un retour sur investissement attractif.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button 
              onClick={() => handleEmailClick('discuss')}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Discuter de votre projet
            </button>

            <button 
              onClick={() => handleEmailClick('info')}
              className="w-full sm:w-auto px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
