
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigateTo = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-mono font-bold text-cyber-neon-green">
            <span className="mr-1 text-cyber-neon-blue">&gt;</span>
            Hack<span className="text-cyber-neon-blue">Ethics</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item)}
                className="font-mono text-cyber-text hover:text-cyber-neon-green transition-colors duration-300 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-cyber-text focus:outline-none">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-cyber-neon-green" />
              ) : (
                <Menu className="h-6 w-6 text-cyber-neon-green" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-darker border-t border-cyber-neon-green/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item)}
                  className="font-mono text-cyber-text hover:text-cyber-neon-green transition-colors duration-300 py-2 capitalize"
                >
                  &gt; {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
