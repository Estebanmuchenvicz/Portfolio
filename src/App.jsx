import { useState, useEffect } from "react";
import "./index.css";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Persistencia con localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1E1E2E] text-black dark:text-white transition-colors">
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;

