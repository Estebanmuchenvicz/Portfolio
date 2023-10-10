
import coding from '../assets/img/Hand coding-bro.svg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Intro() {
  return (
    <section id="home">
      <div className="bg-white shadow-lg p-6 rounded-xl card">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 intro-top">
          <div className="relative intro-title">
            <h1 className="text-5xl text-black gradient-text font-custom4 leading-tight">
              Full Stack Web Developer
            </h1>
            <p className="intro-p text-2xl">
              Hola soy <span className="font-bold text-violet-600">Esteban Muchenvicz</span>.<br />Un apasionado Desarrollador Web Full-Stack de Argentina.
            </p>
            <ul className="intro-ul flex space-x-4 mt-4">
              <li>
                <i><AiFillLinkedin size={40} /></i>
                <a
                  href="https://www.linkedin.com/in/esteban-muchenvicz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bx-md bxl-linkedin-square"></i>
                </a>
              </li>
              <li>
                <i><AiFillGithub size={40} /></i>
                <a
                  href="https://github.com/Estebanmuchenvicz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 sm:mt-0">
            <div className="rounded-full overflow-hidden intro-img sm:w-80 sm:h-80 mx-auto">
              <img src={coding} alt="Perfil" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
