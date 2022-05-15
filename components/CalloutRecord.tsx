import Image from 'next/image'
import { ICalloutRecord } from '../interfaces'

type Props = {
  details: ICalloutRecord
}

export default function CalloutRecord({ details }: Props) {
  return (
    <div className="px-10 py-20 mx-auto font-bold bg-gray-800 md:justify-evenly md:items-center md:flex">
      <div className="flex flex-col max-w-md">
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
      <div>
        <Image
          src={details.image.url}
          width={details.image.width}
          height={details.image.height}
          alt={details.smallTitle + ' ' + details.bigTitle}
        />
      </div>
    </div>
  )
}
