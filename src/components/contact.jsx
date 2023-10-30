import { AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

function Contact() {
  return (
    <div className="p-4 space-y-4 bg-white shadow-lg rounded-xl card items-center">
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
          <a href="https://www.linkedin.com/in/esteban-muchenvicz" target="_blank" rel="noreferrer" className="flex items-center">
            <i><AiFillLinkedin/></i>
            <p>Esteban Muchenvicz</p>
          </a>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-4">
        <form className="w-full">
          <div className="mb-4">
            <label className="block mb-2">Name:</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Name"/>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Mail"/>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message:</label>
            <textarea className="w-full p-2 border rounded" rows={5} placeholder="Message"/>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Contact;


