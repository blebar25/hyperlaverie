import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Nos services', href: '#nos-services' },
    { name: 'Nos tarifs', href: '#nos-tarifs' },
    { name: 'Où nous trouver ?', href: '#ou-nous-trouver' },
    { name: 'Ouvrir une laverie', href: '#ouvrir-une-laverie' }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <Link
              to="/hyperlaverie"
              className="flex items-center"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                handleNavClick();
              }}
            >
              <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
                
                .logo-text {
                  font-family: 'Lilita One', cursive;
                }
                .text-stroke {
                  -webkit-text-stroke: 1px white;
                  text-stroke: 2px white;
                  text-shadow: 
                    2px 2px 0 white,
                    -2px -2px 0 white,
                    2px -2px 0 white,
                    -2px 2px 0 white,
                    0 2px 0 white,
                    2px 0 0 white,
                    0 -2px 0 white,
                    -2px 0 0 white;
                }
              `}</style>
              <h1 className={`text-xl sm:text-2xl md:text-3xl transition-all duration-300 logo-text ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                <span className="text-red-600 text-stroke">HYPER</span>
                <span className="text-primary text-stroke">LAVERIE</span>
              </h1>
            </Link>
          </div>

          {/* Menu burger pour mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`${
                  item.name === 'Ouvrir une laverie'
                    ? 'bg-white text-primary px-4 py-2 rounded-full text-sm border border-primary hover:bg-secondary hover:text-white transition-colors flex items-center'
                    : `text-${isScrolled ? 'primary' : 'white'} hover:text-secondary relative group flex items-center text-sm lg:text-base`
                }`}
              >
                {item.name}
                {item.name !== 'Ouvrir une laverie' && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`${
                    item.name === 'Ouvrir une laverie'
                      ? 'bg-white text-primary px-4 py-2 rounded-full text-sm border border-primary hover:bg-secondary hover:text-white transition-colors text-center'
                      : 'text-primary hover:text-secondary py-2 text-center text-sm'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
