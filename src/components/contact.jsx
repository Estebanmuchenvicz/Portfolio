import { AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send('service_xcfpjg9', 'template_nafoehr', templateParams, '_O6TRrXpNk2akiVBM')
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
        showAlert('Correo enviado con éxito');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        showAlert('Error al enviar el correo');
      });
  };

  const showAlert = (message, type) => {
    Swal.fire({
      icon: type, // 'success' o 'error'
      title: message,
      showConfirmButton: false,
      timer: 3000, // Ocultar el mensaje después de 3 segundos (puedes ajustar este valor)
    });
  };
  return (
    <div id="contact" className="p-4 space-y-4 bg-white shadow-lg rounded-xl card items-center">
      <h2>Contact</h2>
      <h3>
        If you are interested in <span>hiring</span> me, <span>call</span> me, <span>email</span> me, or <span>connect</span> and chat with me via LinkedIn!
      </h3>
      
      <div className="md:grid md:grid-cols-2 md:gap-4 justify-center text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <a href="tel:+543755491171" target="_blank" rel="noreferrer" className="flex items-center">
            <i><AiOutlineWhatsApp/></i>
            <p>+54 3755 491171</p>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="mailto:esteban.muchenvicz@gmail.com" target="_blank" rel="noreferrer" className="flex items-center">
            <i><AiOutlineMail/></i>
            <p>esteban.muchenvicz@gmail.com</p>
          </a>
        </div>
        <div className="flex flex-col items-center">
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
              <li>
                <i><FaFileDownload size={40} /></i>
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
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-4">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message:</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={5}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Enviar
        </button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Contact;


