
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
    <div id="contact" className="flex flex-col items-center justify-center p-4 space-y-4 h-screen">
      <div className="bg-white shadow-lg rounded-xl card max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4">Trabajemos Juntos!</h1>
        <p className="mb-4">
          Sería muy interesante hablar sobre cómo podríamos desarrollar un próximo proyecto juntos.
          Puedes contactarme por este medio, WhatsApp, Email o LinkedIn.
        </p>
        <p className="mb-4">Te responderé lo antes posible!</p>
  
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-500">Nombre</label>
            <input
              type="text"
              className="w-full p-2 border border-violet-600 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-500">Correo electrónico</label>
            <input
              type="text"
              className="w-full p-2 border border-violet-600 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-500">Mensaje</label>
            <textarea
              className="w-full p-2 border border-violet-600 rounded"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-violet-500 text-white p-2 rounded mt-4 hover:bg-violet-900"
          >
            Enviar
          </button>
        </form>
      </div>
      
    </div>
  );
  
}

export default Contact;


