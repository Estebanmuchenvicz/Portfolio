import Intro from "../components/intro";
import Contact from "../components/contact";
import About from "../components/about";
import Footer from "../components/footer";
import Skills from "../components/skills";

const Home = () => {
  
  return (
    <section >
      <Intro/>
      <About />
      <Skills/>
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
