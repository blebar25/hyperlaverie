import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-10" style={{ opacity: 0 }} />
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80"
            alt="Laverie moderne"
          />
        </div>
        <div style={{ height: '600px' }} className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 z-20">
          <div style={{ marginTop: '50px' }} className="text-center">
            <h1 
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              data-aos="fade-down"
            >
              La laverie premium en partenariat avec Carrefour
            </h1>
            <p 
              className="mt-6 text-xl max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Les plus grandes laveries automatiques de France.
            </p>
            <div 
              className="mt-10 flex justify-center gap-4 relative z-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#nos-tarifs"
                className="cursor-pointer bg-secondary text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Voir nos tarifs
              </a>
              <a
                href="tel:0123456789"
                className="cursor-pointer bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Besoin d'aide ?
              </a>
            </div>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-white/10 rounded-full">
              <img src="/carrefour-logo.svg" alt="Carrefour" className="h-6 mr-2" />
              <span>Partenaire officiel Carrefour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
