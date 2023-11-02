import Intro from "../components/intro";
import Contact from "../components/contact";
import About from "../components/about";
import Footer from "../components/footer";
import Skills from "../components/skills";
import NavBar from "../components/navBar";
import Projects from "../components/projects";

const Home = () => {
  
  return (
    <section >
      <NavBar/>
      <Intro/>
      <Skills/>
      <About />
      <Projects/>
      <Contact id="contact"/>
      <Footer />
    </section>
  );
};

export default Home;
