import Image from 'next/image'
import { ICalloutRecord } from '../interfaces'

type Props = {
  details: ICalloutRecord
}

export default function CalloutRecord({ details }: Props) {
  return (
    <div className="px-10 py-20 mx-auto overflow-x-hidden font-bold bg-gray-800 md:justify-evenly md:items-center md:flex">
      <div className="flex flex-col md:max-w-sm lg:max-w-md">
        <h2 className="text-3xl text-gray-200 sm:text-4xl">
          {details.smallTitle}
          <span className="block text-5xl sm:text-6xl text-amber-300">
            {details.bigTitle}
          </span>
        </h2>
        <div className="py-10">
          <p className="inline py-1 text-lg text-gray-800 sm:text-xl bg-amber-300">
            {details.description}
          </p>
        </div>
      </div>
      <div className="relative mt-4 md:mt-0 md:ml-8">
        {details.images.map((image) => (
          <div key={image.title} className={image.title + ' drop-shadow-lg'}>
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={
                details.smallTitle + ' ' + details.bigTitle + ' ' + image.title
              }
              className="rounded-2xl"
            />
          </div>
        ))}
        <style jsx>{`
          .leftSide {
            position: absolute;
            bottom: -30px;
            left: -25px;
            width: 50%;
          }
          .rightSide {
            position: absolute;
            top: -30px;
            right: -25px;
            width: 40%;
          }
        `}</style>
      </div>
    </div>
  )
}
