import { ICourseHeader } from '../interfaces'
import CourseHeaderBackground from './CourseHeaderBackground'

type Props = {
  details: ICourseHeader
}

export default function CourseHeaderRecord({ details }: Props) {
  const sentences = details.description.trim().split('.')
  return (
    <div className="w-full px-6 overflow-hidden bg-gray-200">
      <div className="pt-12 mx-auto text-center sm:pt-24 max-w-7xl">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-600 sm:text-3xl">
            {details.smallTitle}
            <span className="block text-5xl font-bold text-gray-800 mb-7 sm:text-7xl xl:text-8xl">
              {details.bigTitle}
            </span>
          </h1>
          <div>
            {sentences.map((sentence, i) => (
              <p className="max-w-lg text-gray-600 sm:text-xl" key={i}>
                {sentence && sentence + '.'}
              </p>
            ))}
          </div>
          <a
            className="px-4 py-3 mt-6 text-xl font-medium text-gray-800 bg-yellow-300 rounded-md hover:bg-yellow-400"
            href="#Pricing"
          >
            {details.buttonText}
          </a>
        </div>
        <CourseHeaderBackground />
      </div>
    </div>
  )
}
