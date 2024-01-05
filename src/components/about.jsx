import Perfil from '../assets/img/Developer-activity-bro.svg';
import { FaArrowRight } from "react-icons/fa";

function About() {
  const linkToRedirect = "https://drive.google.com/file/d/12WlHTcFxY2PZtXKwd3BBg4dWp4mqNf-C/view?usp=sharing";

  const handleButtonClick = () => {
    window.open(linkToRedirect, '_blank');
  };
  return (
    <section id="about" className="flex flex-col md:flex-row m-4 mt-8 mb-8">
      <div className="mb-4 md:mr-4 md:mb-0" style={{ width: '100%', height: '400px' }}>
        {/* Añadir estilos al elemento img para cambiar su tamaño */}
        <img src={Perfil} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <div>
          <div>
            <h3 className="text-4xl font-bold mb-4 underline">Sobre Mí</h3>
            <p className="mb-4 text-lg">
              Dentro del campo del desarrollo front-end, me especializo en la creación de interfaces atractivas que cautivan a los usuarios.
            </p>
            <p className="mb-4 text-lg">
              En el ámbito del desarrollo back-end, construyo bases sólidas para respaldar eficazmente mis proyectos.
            </p>
            <p className="mb-4 text-lg">
              Mantenerme al tanto de las últimas tendencias y herramientas de desarrollo es una prioridad para mí, ya que considero que la innovación constante es esencial para ofrecer soluciones tecnológicas efectivas y de vanguardia.
            </p>
            <button className="bg-transparent text-violet-500 px-4 py-2 rounded-lg flex items-center relative hover:scale-105" onClick={handleButtonClick}>
              <span className="border-b-2 border-violet-600 mr-1 flex items-center" data-key="curriculumBtn">Mi Curriculum <span className="mr-2"></span><FaArrowRight className="bg-transparent text-violet-600"/></span><a href="https://drive.google.com/file/d/12WlHTcFxY2PZtXKwd3BBg4dWp4mqNf-C/view?usp=drive_link"></a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
