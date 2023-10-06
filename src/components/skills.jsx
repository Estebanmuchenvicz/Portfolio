import javascriptSVG from '../assets/img/javascript-1.svg';
import reactSVG from '../assets/img/react-2.svg';
import htmlSVG from '../assets/img/html-1.svg';
import css3SVG from "../assets/img/css-3.svg";
import postgreSVG from '../assets/img/postgresql.svg';
import mongoDBsvg from '../assets/img/mongodb-icon-1.svg';
import nodeJSsvg from '../assets/img/nodejs-icon.svg';
import nextJSsvg from '../assets/img/next-js.svg';
import wordpressSVG from '../assets/img/wordpress-icon.svg';
import bootstrapSVG from '../assets/img/bootstrap-icon.svg';
import tailwindSVG from '../assets/img/tailwind-css-2.svg';

function Skills() {
  return (
    <div>      <div className="flex flex-col items-center justify-center">
    <div >
      <h3 className="text-2xl mt-8 ">Mi Skills</h3>
    </div>
    <div className='bg-white shadow-lg p-6 rounded-xl card'>

    <div className="flex flex-wrap space-x-4 mt-4">
      <div className="flex flex-wrap">
        <div className="max-w-20 mx-2">
          <img src={javascriptSVG} alt="JavaScript" className="w-14 h-14" />
        </div>
        <div className="max-w-20 mx-2">
          <img src={reactSVG} alt="React" className="w-14 h-14" />
        </div>
        <div className="max-w-20 mx-2">
          <img src={nodeJSsvg} alt="Nodejs" className="w-14 h-14"/>
        </div>
        <div className="max-w-20 mx-2">
          <img src={mongoDBsvg} alt="MongoDB" className="w-14 h-14" />
        </div>
        <div className="max-w-20 mx-2">
          <img src={postgreSVG} alt="PostgreSQL" className="w-14 h-14"/>
        </div>
        <div className="max-w-20 mx-2">
          <img src={htmlSVG} alt="Html5" className="w-14 h-14" />
        </div>
        <div className="max-w-20 mx-2">
          <img src={css3SVG} alt="CSS3" className="w-14 h-14" />
        </div>
        <div className="max-w-20 mx-2">
          <img src={nextJSsvg} alt="Nextjs" className="w-14 h-14" />
        </div>
        <div className="max-w-20 mx-2">
          <img src={tailwindSVG} alt="TailwindCSS" className="w-14 h-14" />
        </div>
        <div className="max-w-20 mx-2">
          <img src={bootstrapSVG} alt="Bootstrap" className="w-14 h-14" />
        </div>
        <div className="max-w-14 mx-2">
          <img src={wordpressSVG} alt="Wordpress" className="w-14 h-14" />
        </div>
      </div>
    </div>
    </div>
  </div></div>
  )
}

export default Skills