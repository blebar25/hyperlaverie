import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src="/hyperlaverie/logo.png" 
                alt="Hyperlaverie" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-16'
                } w-auto`} 
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Nos services', href: '#nos-services' },
              { name: 'Nos tarifs', href: '#nos-tarifs' },
              { name: 'Où nous trouver ?', href: '#ou-nous-trouver' },
              { name: 'Ouvrir une laverie', href: '#ouvrir-une-laverie' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 ${
                  isScrolled ? 'text-primary' : 'text-white'
                } hover:text-secondary relative group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
