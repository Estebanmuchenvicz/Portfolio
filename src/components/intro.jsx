// import Perfil from '../assets/img/imgPerfil.png'
// import cv from '../assets/img/adobe-pdf-icon.svg'
import coding from '../assets/img/Hand coding-bro.svg';
import { AiOutlineMail} from 'react-icons/ai';


function Intro() {
  return (
    <section id="home" >
      <div className="bg-white shadow-lg p-6 rounded-xl card mt-16 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 intro-top">
          <div className="relative intro-title">
            <h1 className="text-3xl text-black gradient-text font-custom4 leading-tight">
            <span className="font-bold text-violet-600">Esteban Muchenvicz</span>
            </h1>
            <p className="intro-p text-2xl">
              Desarrollador Web Full-Stack
            </p>
            <p className="intro-p text-1xl">
            Soluciones digitales que impulsan la innovación y ofrecen la mejor experiencia para el usuario.
            </p>
            <div className="mt-6 flex">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <a href="#contact" className="flex items-center">Contáctame<span className="ml-1"></span><AiOutlineMail className=""/></a>
  </button>
</div>


          </div>
          <div className="flex flex-col items-center justify-center mt-4 sm:mt-0">
            <div className="rounded-full overflow-hidden intro-img sm:w-180 sm:h-180 mx-auto">
               <img src={coding} alt="Perfil" className="w-full h-auto object-cover" /> 
              {/* <img src={Perfil} alt="Perfil" className="w-full h-auto object-cover" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
