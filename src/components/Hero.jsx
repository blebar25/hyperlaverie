import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-10" style={{ opacity: 0 }} />
      <div className="relative bg-primary/90 text-white">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="/hyperlaverie/images/laverie.jpg"
            alt="Hyperlaverie - Laveries automatiques modernes à Sartrouville et Amiens - Machines Electrolux professionnelles"
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 z-20 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[910px]">
          <div className="text-center mt-16 sm:mt-20 md:mt-32 lg:mt-40 xl:mt-52">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light tracking-[0.12em] sm:tracking-[0.15em] leading-tight max-w-5xl mx-auto px-2 sm:px-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Les plus grandes laveries
              <br className="hidden sm:block" />
              automatiques de France
            </h1>
            <div 
              className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-40 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 relative z-30 px-2 sm:px-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#nos-tarifs"
                className="cursor-pointer bg-secondary text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-md font-light hover:bg-red-700 transition-colors text-sm sm:text-base"
              >
                Voir nos tarifs
              </a>
              <a
                href="tel:+33749245848"
                className="cursor-pointer bg-white text-primary px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-md font-light hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Besoin d'aide ?
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
