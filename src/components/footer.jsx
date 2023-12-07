import { AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
// import { FaFileDownload } from 'react-icons/fa';
function Footer() {
  return (
    <div className="mt-8 mb-8">
          <div className="flex flex-col justify-center items-center">
        <h2>Esteban Muchenvicz</h2>
        <div className="flex flex-col items-center">
        <ul className="intro-ul flex space-x-4 mt-4">
        <li >
        <a
                href="https://wa.me/543755491171"
                target="_blank"
                rel="noreferrer"
              >
                <span ><AiOutlineWhatsApp size={40} className='hover:text-violet-900 hover:scale-105'/></span>
              </a>
              </li>
              <li>
              <a
                href="mailto:esteban.muchenvicz@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span><AiOutlineMail size={40} className='hover:text-violet-900 hover:scale-105'/></span>
              </a>
              </li>
              <li>
              <a
                href="https://www.linkedin.com/in/esteban-muchenvicz/"
                target="_blank"
                rel="noreferrer"
              >
                <span><AiFillLinkedin size={40} className='hover:text-violet-900 hover:scale-105'/></span>
              </a>
              </li>
              <li>
              <a
                href="https://github.com/Estebanmuchenvicz"
                target="_blank"
                rel="noreferrer"
              >
                <span><AiFillGithub size={40} className='hover:text-violet-900 hover:scale-105'/></span>
              </a>
              </li>
              {/* <li>
                <i><FaFileDownload size={40} /></i>
                <a
                  href="https://github.com/Estebanmuchenvicz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </li> */}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;