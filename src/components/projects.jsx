import Cards from "./cards"
import project1 from "../assets/img/hit-zone-fm.png";
import project2 from "../assets/img/pi-videogames.png";
import project3 from "../assets/img/rick-and-morty-pi.png";
import project4 from "../assets/img/proyecto-final-custom.craft.png"; 
import 'animate.css';
import {BsWordpress} from 'react-icons/bs'

function Projects (){

  const projects = [
    {
      title: "Hit Zone FM",
      description: "Aplicación Web E-commerce responsive creada para el negocio Teesa S.A.S., empresa dedicada a la comercialización de equipos alimenticios.",
      imgUrl: project1,
      skills: <BsWordpress/>,
      linkProy: "https://pf-teesa-front.vercel.app/"
    },
    {
      title: "Hit Zone FM",
      description: "Aplicación Web E-commerce responsive creada para el negocio Teesa S.A.S., empresa dedicada a la comercialización de equipos alimenticios.",
      imgUrl: project4,
      skills: <BsWordpress/>,
      linkProy: "https://pf-teesa-front.vercel.app/"
    },
    {
      title: "Recipe Ship",
      description: "Aplicación Web para los amantes de las recetas, el usuario puede navegar, filtrar, y crear datos acerca de recetas.",
      imgUrl: project2,
      linkProy: "https://github.com/Oscarcito122/proyectoindivualfood/tree/master"

    },
    {
      title: "Portfolio",
      description: "Portafolio en línea responsive para destacar mis proyectos como desarrollador web frontend. ¡Tú estás aquí! Gracias por entrar.",
      imgUrl: project3,
      linkProy: "https://portfolio-pi-eight-25.vercel.app/"

    },
  ];

  return (
    <section className="project" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl mt-8 font-bold">Proyectos</h2>
        <div className="flex flex-wrap -mx-2">
          {projects.map((project, index) => {
            return (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <Cards {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
 }
export default Projects;



