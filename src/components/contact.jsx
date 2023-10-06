import { AiFillLinkedin } from 'react-icons/ai';


function Contact() {
    return (
      <div>
        <h2>Contact</h2>
        <h3>
          If you are intrested in <span>hiring</span> me, <span>call</span> me,
          <span> email</span> me or <span>connect</span> and chat with me via
          LinkedIn!
        </h3>
        <div>
          <div>
            <a href="tel:+543755491171" target="_blank" rel="noreferrer">
              <i></i>
            <p>+54 3755 491171</p>
            </a>
          </div>
          <div>
            <a
              href="mailto: esteban.muchenvicz@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i></i>
            <p>esteban.muchenvicz@gmail.com</p>
            </a>
          </div>
          <div className='flex'>
            <a
              href="https://www.linkedin.com/in/esteban-muchenvicz"
              target="_blank"
              rel="noreferrer"
            >
              <i><AiFillLinkedin size={50} /></i>
            
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;