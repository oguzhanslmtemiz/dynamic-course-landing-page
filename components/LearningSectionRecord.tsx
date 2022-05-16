import Image from 'next/image'
import { ILearningSectionRecord } from '../interfaces'

type Props = { details: ILearningSectionRecord }

export default function LearningSectionRecord({ details }: Props) {
  return (
    <div className="px-8 py-20 mx-auto font-medium max-w-7xl selection:bg-amber-300">
      <div className="relative ">
        <div className="absolute -z-10 -rotate-6 -top-11 sm:-top-9 xl:-left-16 -left-6">
          <Image src="/undraw_handcrafts_browser.svg" width={90} height={90} />
        </div>
        <h2 className="text-3xl font-extrabold sm:text-4xl sm:ml-8">
          {details.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-3 sm:grid-cols-2">
        {details.learningPoints.map((point) => (
          <div key={point.id} className="border-2 border-gray-800 rounded-md">
            <div className="flex gap-1 p-2 border-b-2 border-gray-800">
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full" />
              <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="inline-block w-3 h-3 bg-green-600 rounded-full" />
            </div>
            <div className="p-8 text-center">{point.title}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-10 mt-10 sm:gap-20 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center font-extrabold text-7xl">
            {details.numberOfLessons}
            <span className="text-2xl  text-[#5865f2]">+</span>
          </div>
          <span>lessons</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center font-extrabold text-7xl">
            {details.hoursOfContent}
            <span className="text-2xl  text-[#5865f2]">+</span>
          </div>
          <span>hours of content</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="relative w-[72px] h-[72px] -top-1">
            <Image src="/discord.svg" layout="fill" />
          </div>
          <span>support on Discord</span>
        </div>
      </div>
    </div>
  )
}
