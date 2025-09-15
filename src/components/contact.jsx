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
        showAlert('Correo enviado con éxito', 'success');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        showAlert('Error al enviar el correo', 'error');
      });
  };

  const showAlert = (message, type) => {
    Swal.fire({
      icon: type,
      title: message,
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center p-4 space-y-4 h-screen mb-16"
    >
      {/* Card que cambia con el modo */}
      <div className="bg-white dark:bg-[#1E1E2E] text-black dark:text-white rounded-xl card max-w-md p-6 transition-colors">
        <h1 className="text-3xl font-bold mb-4 text-center">
          ¡Trabajemos Juntos!
        </h1>
        <p className="mb-4 text-center">
          Sería muy interesante hablar sobre cómo podríamos desarrollar un próximo proyecto juntos.
          Puedes contactarme por este medio, WhatsApp, Email o LinkedIn.
        </p>
        <p className="mb-4 text-center">¡Te responderé lo antes posible!</p>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Nombre
            </label>
            <input
              type="text"
              className="w-full p-2 border border-violet-600 rounded bg-white dark:bg-[#2A2A3E] text-black dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-violet-600 rounded bg-white dark:bg-[#2A2A3E] text-black dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Mensaje
            </label>
            <textarea
              className="w-full p-2 border border-violet-600 rounded bg-white dark:bg-[#2A2A3E] text-black dark:text-white"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className="bg-violet-500 text-white p-2 rounded mt-4 hover:bg-violet-900 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;



