import { Link } from 'react-router-dom';

const Hero = () => {
  const handleScrollToTarifs = () => {
    const element = document.getElementById('nos-tarifs');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-20" style={{ opacity: 0 }} />
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80"
            alt="Laverie moderne"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              La laverie premium en partenariat avec Carrefour
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Les plus grandes laveries automatiques de France.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button
                type="button"
                onClick={handleScrollToTarifs}
                className="cursor-pointer bg-secondary text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Voir nos tarifs
              </button>
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
