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
      linkProy: "https://pf-teesa-front.vercel.app/",
      linkGit: "",
      logo:"https://i.ibb.co/dMsByG7/Dise-o-Base-de-logo-Custom-Craft-blue.png"
    },
    {
      title: "Videogames",
      description: "Aplicación Web para los amantes de las recetas, el usuario puede navegar, filtrar, y crear datos acerca de recetas.",
      imgUrl: project2,
      skills: (<div className="flex"><FaReact /></div>),
      linkProy: "https://github.com/Oscarcito122/proyectoindivualfood/tree/master",
      linkGit: "",
      logo:project2
    },
    {
      title: "Rick and Morty",
      description: "Portafolio en línea responsive para destacar mis proyectos como desarrollador web frontend. ¡Tú estás aquí! Gracias por entrar.",
      imgUrl: project3,
      skills: (<div className="flex"><FaReact /></div>),
      linkProy: "https://portfolio-pi-eight-25.vercel.app/",
      linkGit: "",
      logo:"https://i.ibb.co/CtfF7vR/img-login.webp"
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



