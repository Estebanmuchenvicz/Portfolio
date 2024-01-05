import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className={`bg-gray-100 p-4 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 shadow-md z-50' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.webp" alt="Logo" className="w-10 h-10" />
        </div>
        <div className="flex space-x-4">
          {/* <a href="#home"             className={`text-black hover:border-b-2 border-violet-500 ${
              activeLink === 'home' ? 'border-b-2 border-violet-500' : ''
            }`}
            onClick={() => handleLinkClick('home')}
>
            Home
          </a> */}
          <a href="#about" className={`text-black hover:border-b-2 border-violet-500 ${
              activeLink === 'about' ? 'border-b-2 border-violet-500' : ''
            }`}
            onClick={() => handleLinkClick('about')}>
            About
          </a>
          <a href="#projects" className={`text-black hover:border-b-2 border-violet-500 ${
              activeLink === 'projects' ? 'border-b-2 border-violet-500' : ''
            }`}
            onClick={() => handleLinkClick('projects')}>
            Proyectos
          </a>
          <a href="#contact" className={`text-black hover:border-b-2 border-violet-500 ${
              activeLink === 'contact' ? 'border-b-2 border-violet-500' : ''
            }`}
            onClick={() => handleLinkClick('contact')}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;