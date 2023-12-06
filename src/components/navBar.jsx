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

  return (
    <nav
      className={`bg-gray-100 p-4 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 shadow-md z-50' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="src/assets/img/logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="text-black">
            Home
          </a>
          <a href="#about" className="text-black">
            About
          </a>
          <a href="#projects" className="text-black">
            Proyectos
          </a>
          <a href="#contact" className="text-black">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <img src="ruta/al/logo.png" alt="Logo" className="w-10 h-10" />
//           {/* <span className="text-white">Mi Sitio</span> */}
//         </div>
//         <div className="flex space-x-4">
//           <a href="#home" className="text-white">Home</a>
//           <a href="#about" className="text-white">About</a>
//           <a href="#projects" className="text-white">Proyectos</a>
//           <a href="#contact" className="text-white">Contacto</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Navbar;