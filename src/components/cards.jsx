import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";

function Cards({ title, description, imgUrl,linkProy, skills }) {
  return (
<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{description}</p>
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
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>

  )
}

export default Cards