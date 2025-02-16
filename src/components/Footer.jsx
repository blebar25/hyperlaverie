import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import LegalModal from './LegalModal';


const Footer = () => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  const navigation = [
    { name: 'Nos services', href: '#nos-services' },
    { name: 'Nos tarifs', href: '#nos-tarifs' },
    { name: 'Où nous trouver ?', href: '#ou-nous-trouver' },
    { name: 'Ouvrir une laverie', href: '#ouvrir-une-laverie' },
    { 
      name: 'Mentions Légales', 
      href: "#",
      onClick: (e) => {
        e.preventDefault();
        setIsLegalModalOpen(true);
      }
    },
    ];

  return (
    <footer className="text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo et Description */}
          <div className="space-y-4">
            <a href="#" className="block">
              <img src="/hyperlaverie/logo.png" alt="Hyperlaverie" className="h-12 sm:h-16 mb-4" />
            </a>
            <p className="text-gray-600 text-sm sm:text-base">
              Ici, on lave son linge sale en public.
            </p>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="text-lg font-semibold text-[#004E9F] mb-3 sm:mb-4">Navigation</h3>
            <ul className="mt-2 sm:mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className="text-gray-600 hover:text-secondary transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#004E9F] mb-3 sm:mb-4">Contact</h3>
            <ul className="mt-2 sm:mt-4 space-y-2 text-gray-600">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                <a href="tel:+33749245848" className="text-gray-600 hover:text-secondary transition-colors duration-200 text-sm sm:text-base">
                  07 49 24 58 48
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                <a href="mailto:lelavoir26@gmail.com" className="text-gray-600 hover:text-secondary transition-colors duration-200 text-sm sm:text-base">
                  lelavoir26@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold text-[#004E9F] mb-3 sm:mb-4">Horaires</h3>
            <ul className="mt-2 sm:mt-4 space-y-2 text-gray-600">
              <li className="text-sm sm:text-base">7h-22h - 7j/7</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p className="text-xs sm:text-sm mb-2">{new Date().getFullYear()} Hyperlaverie. Tous droits réservés.</p>
        </div>
      </div>
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
    </footer>
  );
};

export default Footer;
