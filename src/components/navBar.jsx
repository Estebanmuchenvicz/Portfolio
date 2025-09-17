import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // Detecta el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Activa/desactiva el modo oscuro en el html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className={`bg-gray-400 dark:bg-[#1E1E2E] p-4 transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 right-0 shadow-md z-50 opacity-75" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="#home" onClick={() => handleLinkClick("home")}>
            <h2 className="text-2xl font-bold text-black dark:text-white">EM</h2>
          </a>
        </div>

        {/* Links */}
        <div className="flex space-x-6 items-center">
          <a
            href="#about"
            className={`text-black dark:text-white hover:border-b-2 border-violet-500 ${
              activeLink === "about" ? "border-b-2 border-violet-500" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
          <a
            href="#projects"
            className={`text-black dark:text-white hover:border-b-2 border-violet-500 ${
              activeLink === "projects" ? "border-b-2 border-violet-500" : ""
            }`}
            onClick={() => handleLinkClick("projects")}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className={`text-black dark:text-white hover:border-b-2 border-violet-500 ${
              activeLink === "contact" ? "border-b-2 border-violet-500" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contacto
          </a>

          {/* Botón Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-violet-500 text-white hover:bg-violet-600 transition-colors"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
