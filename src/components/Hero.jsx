import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-10" style={{ opacity: 0 }} />
      <div className="relative bg-primary/90 text-white">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="/hyperlaverie/images/laverie.jpg"
            alt="Hyperlaverie"
          />
        </div>
        <div style={{ height: '910px' }} className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 z-20">
          <div style={{ marginTop: '200px' }} className="text-center">
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-[0.15em] leading-tight max-w-5xl mx-auto"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Les plus grandes laveries
              <br className="hidden sm:block" />
              automatiques de France.
            </h1>
            <p 
              className="mt-6 text-2xl sm:text-3xl font-light max-w-3xl mx-auto tracking-wide"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              En partenariat avec Carrefour.
            </p>
            <div 
              className="mt-10 flex justify-center gap-4 relative z-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#nos-tarifs"
                className="cursor-pointer bg-secondary text-white px-8 py-3 rounded-md font-light hover:bg-red-700 transition-colors"
              >
                Voir nos tarifs
              </a>
              <a
                href="tel:+33749245848"
                className="cursor-pointer bg-white text-primary px-8 py-3 rounded-md font-light hover:bg-gray-100 transition-colors"
              >
                Besoin d'aide ?
              </a>
            </div>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <img src="/carrefour-logo.svg" alt="Carrefour" className="h-6 mr-2" />
              <span className="font-light tracking-wide">Partenaire officiel Carrefour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
