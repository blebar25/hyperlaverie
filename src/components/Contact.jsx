import { Building2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="entrepreneur" className="relative py-32 overflow-hidden bg-gradient-to-br from-primary to-[#003D7D]">
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
        <div className="mx-auto w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8">
          <Building2 className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Vous souhaitez ouvrir votre propre laverie ?
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Nous vous accompagnons durant les différentes étapes de votre projet entrepreneurial.
          Découvrez nos services et rejoignez un réseau de laveries en pleine expansion.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          En savoir plus
          <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
