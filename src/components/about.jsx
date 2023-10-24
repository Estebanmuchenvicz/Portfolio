// import Perfil from '../assets/img/imgPerfil.png';

function About() {
  return (
    <section id="about">
      <div className="m-4"> {/* Agregar margen uniforme */}
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
              <div className="flex items-center">
                <button className="bg-transparent text-blue-500 px-4 py-2 rounded-lg flex items-center relative">
                  <span className="border-b-2 border-blue-500 mr-2" data-key="curriculumBtn">Mi Curriculum</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
