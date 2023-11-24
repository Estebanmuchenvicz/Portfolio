import Perfil from '../assets/img/Developer-activity-bro.png';
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row m-4">
      <div className="mb-4 md:mr-4 md:mb-0" style={{ width: '400px', height: '400px' }}>
        {/* Añadir estilos al elemento img para cambiar su tamaño */}
        <img src={Perfil} alt="" className="w-full md:w-180 h-auto" />
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
            <button className="bg-transparent text-blue-500 px-4 py-2 rounded-lg flex items-center relative">
              <span className="border-b-2 border-blue-500 mr-1 flex items-center" data-key="curriculumBtn">Mi Curriculum <span className="mr-2"></span><FaArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
