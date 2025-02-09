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
    <section id="contact" className="relative py-32 overflow-hidden bg-gradient-to-br from-primary to-[#003D7D]">
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
          className="mx-auto w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-100"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2 
            className="text-4xl font-light tracking-wide text-primary mb-6 text-center"
          >
            <span className="glowing-text">
              Ouvrez votre propre laverie
            </span>
          </h2>
          <p 
            className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto text-center leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Investissez dans un secteur en pleine croissance avec un accompagnement personnalisé à chaque étape de votre projet.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div 
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 floating-card"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 bg-primary/10 w-16 h-16 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Étude personnalisée</h3>
              <p className="text-gray-600 leading-relaxed">Analyse approfondie de l'emplacement et étude de marché détaillée pour maximiser votre réussite.</p>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 floating-card"
              data-aos="flip-left"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 bg-primary/10 w-16 h-16 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Formation complète</h3>
              <p className="text-gray-600 leading-relaxed">Support technique, formation à la gestion et accompagnement continu pour votre réussite.</p>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 floating-card"
              data-aos="flip-left"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 bg-primary/10 w-16 h-16 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Business plan adapté</h3>
              <p className="text-gray-600 leading-relaxed">Un modèle économique éprouvé avec un retour sur investissement attractif.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => handleEmailClick('discuss')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Discuter de votre projet
            </button>
            <button 
              onClick={() => handleEmailClick('info')}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              En savoir plus
            </button>
            {/* <a 
              href="https://www.linkedin.com/company/hyperlaverie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
