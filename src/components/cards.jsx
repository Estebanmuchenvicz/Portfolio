import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';

function Cards({ title, description, imgUrl,linkProy, skills,logo }) {
  return (
<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold"></p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={imgUrl}
      />
      <CardFooter className="absolute bg-black/90 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src={logo}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/100">{title}</p>
            <div className="text-tiny text-white/80 p-1 flex gap-1">{skills}</div>
          </div>
        </div>
        <div className="flex space-x-1">
        <Button className="text-white text-lg p-2 hover:scale-110" onClick={() => window.open(linkProy, "_blank")}><FaExternalLinkAlt className="w-5 h-5"/></Button>
        <Button className="text-white text-lg p-2 hover:scale-110"><AiFillGithub className="w-6 h-6"/></Button>
        </div>

      </CardFooter>
    </Card>

  )
}

export default Cards