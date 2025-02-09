import { Mail, Phone } from 'lucide-react';

const Footer2 = () => {
  const navigation = [
    { name: 'Nos services', href: '#nos-services' },
    { name: 'Nos tarifs', href: '#nos-tarifs' },
    { name: 'Où nous trouver ?', href: '#ou-nous-trouver' },
    { name: 'Ouvrir une laverie', href: '#ouvrir-une-laverie' },
    { name: 'Mentions Légales', href: "/hyperlaverie/mentions-legales" },
  ];

  return (
    <footer className=" text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et Description */}
          <div className="space-y-4">
            <a href="#" className="block">
              <img src="/hyperlaverie/logo.png" alt="Hyperlaverie" className="h-16 mb-4" />
            </a>
            <p className="text-gray-600 text-sm">
              Ici, on lave son linge sale en public.
            </p>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="text-lg font-semibold text-[#004E9F]">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-secondary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#004E9F]">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+33749245848" className="text-gray-600 hover:text-secondary transition-colors duration-200">
                07 49 24 58 48
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:lelavoir26@gmail.com" className="text-gray-600 hover:text-secondary transition-colors duration-200">
                lelavoir26@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold text-[#004E9F]">Horaires</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>7h-22h - 7j/7</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
          <p className="mb-2"> © {new Date().getFullYear()} Hyperlaverie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
