import "./index.css";
import Home from "./pages/Home";


function App() {
  // const [lightMode, setLightMode] = useState(false);

  // const scrollToSection = function(sectionId) {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <main >
      <Home />
      {/* <Nav scrollToSection={scrollToSection} lightMode={lightMode} setLightMode={setLightMode} />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="services" className="section">
        <Services />
      </div>

      <div id="about" className="section">
        <About lightMode={lightMode} />
      </div>
      <Redes /> */}
    </main>
  );
}

export default App;
