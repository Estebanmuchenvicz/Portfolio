import Cards from "./cards"
import 'animate.css';
import {projectsSercices} from "../utilidades/Projects"

function Projects (){

  

  return (
    <section className="projects mb-16 px-4 " id="projects" >
      <div className="container mx-auto px-4 ">
        <h2 className="text-center text-4xl mt-8 font-bold mb-8">Explora Algunos De Mis Proyectos</h2>
        <div className="flex flex-wrap -mx-2">
          {projectsSercices.map((project, index) => {
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



