import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et Description */}
          <div className="space-y-4">
            <img src="/hyperlaverie-logo.png" alt="Hyperlaverie" className="h-16 w-auto" />
            <p className="text-gray-600 text-lg">
              Ici, on lave son linge sale en public.
            </p>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Navigations</h3>
            <ul className="space-y-3">
              {['Nos services', 'Nos tarifs', 'Où nous trouver ?', 'Entrepreneur'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/[?]/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-gray-600 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-gray-600">01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:contact@hyperlaverie.fr" className="text-gray-600 hover:text-secondary transition-colors">
                  contact@hyperlaverie.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Horaires</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">Laverie : 24h/24 - 7j/7</li>
              <li className="text-gray-600">Service client :</li>
              <li className="text-gray-600">Lun-Ven : 9h-18h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
          ©  {new Date().getFullYear()} Hyperlaverie - En partenariat avec Carrefour. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
