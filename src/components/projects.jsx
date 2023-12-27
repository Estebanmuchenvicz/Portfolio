import Cards from "./cards"
import project1 from "../assets/img/hit-zone-fm.png";
import project2 from "../assets/img/pi-videogames.png";
import project3 from "../assets/img/rick-and-morty-pi.png";
import project4 from "../assets/img/proyecto-final-custom.craft.png"; 
import 'animate.css';
import {BsWordpress} from 'react-icons/bs'
import { FaReact, FaPhp } from "react-icons/fa";

function Projects (){

  const projects = [
    {
      title: "Hit Zone FM",
      description: "Aplicación Web E-commerce responsive creada para el negocio Teesa S.A.S., empresa dedicada a la comercialización de equipos alimenticios.",
      imgUrl: project1,
      skills: (<div className="flex"><BsWordpress/> <FaReact /> <FaPhp /></div>),
      linkProy: "https://hitzonefm.com.ar/",
      linkGit: "",
      logo:"https://i.ibb.co/SQCXJpH/Logo-redondo-hit-zone-2023.png"
    },
    {
      title: "Custom Craft",
      description: "Aplicación Web E-commerce responsive creada para el negocio Teesa S.A.S., empresa dedicada a la comercialización de equipos alimenticios.",
      imgUrl: project4,
      skills: (<div className="flex"><FaReact /></div>),
      linkProy: "https://proyecto-final-eight-beige.vercel.app/",
      linkGit: "https://github.com/fedeMaidana/Proyecto_Final",
      logo:"https://i.ibb.co/dMsByG7/Dise-o-Base-de-logo-Custom-Craft-blue.png"
    },
    {
      title: "Videogames",
      description: "Aplicación Web para los amantes de las recetas, el usuario puede navegar, filtrar, y crear datos acerca de recetas.",
      imgUrl: project2,
      skills: (<div className="flex"><FaReact /></div>),
      linkProy: "https://pi-videogames-ecru.vercel.app/",
      linkGit: "https://github.com/Estebanmuchenvicz/PI-Videogames",
      logo:project2
    },
    {
      title: "Rick and Morty",
      description: "Portafolio en línea responsive para destacar mis proyectos como desarrollador web frontend. ¡Tú estás aquí! Gracias por entrar.",
      imgUrl: project3,
      skills: (<div className="flex"><FaReact /></div>),
      linkProy: "https://rick-and-morty-pi-ten.vercel.app/",
      linkGit: "https://github.com/Estebanmuchenvicz/Rick_and_Morty",
      logo:"https://i.ibb.co/CtfF7vR/img-login.webp"
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container mx-auto px-4 ">
        <h2 className="text-center text-3xl mt-8 font-bold mb-8">Proyectos</h2>
        <div className="flex flex-wrap -mx-2">
          {projects.map((project, index) => {
            return (
              <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-2 mb-4">
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



