import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";
import { TbWorldWww } from "react-icons/tb";
import { AiFillGithub } from 'react-icons/ai';

function Cards({ title, description, imgUrl,linkProy, skills }) {
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
      <CardFooter className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src={imgUrl}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{title}</p>
            <p className="text-tiny text-white/60">{skills}</p>
          </div>
        </div>
        <div >
        <Button radius="full" size="sm" onClick={() => window.open(linkProy, "_blank")}><TbWorldWww className="text-white"/></Button>
        <Button radius="full" size="sm"><AiFillGithub className="text-white"/></Button>
        </div>

      </CardFooter>
    </Card>

  )
}

export default Cards